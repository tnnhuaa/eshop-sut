/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
var showControllersOnly = false;
var seriesFilter = "";
var filtersOnlySampleSeries = true;

/*
 * Add header in statistics table to group metrics by category
 * format
 *
 */
function summaryTableHeader(header) {
    var newRow = header.insertRow(-1);
    newRow.className = "tablesorter-no-sort";
    var cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 1;
    cell.innerHTML = "Requests";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 3;
    cell.innerHTML = "Executions";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 7;
    cell.innerHTML = "Response Times (ms)";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 1;
    cell.innerHTML = "Throughput";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 2;
    cell.innerHTML = "Network (KB/sec)";
    newRow.appendChild(cell);
}

/*
 * Populates the table identified by id parameter with the specified data and
 * format
 *
 */
function createTable(table, info, formatter, defaultSorts, seriesIndex, headerCreator) {
    var tableRef = table[0];

    // Create header and populate it with data.titles array
    var header = tableRef.createTHead();

    // Call callback is available
    if(headerCreator) {
        headerCreator(header);
    }

    var newRow = header.insertRow(-1);
    for (var index = 0; index < info.titles.length; index++) {
        var cell = document.createElement('th');
        cell.innerHTML = info.titles[index];
        newRow.appendChild(cell);
    }

    var tBody;

    // Create overall body if defined
    if(info.overall){
        tBody = document.createElement('tbody');
        tBody.className = "tablesorter-no-sort";
        tableRef.appendChild(tBody);
        var newRow = tBody.insertRow(-1);
        var data = info.overall.data;
        for(var index=0;index < data.length; index++){
            var cell = newRow.insertCell(-1);
            cell.innerHTML = formatter ? formatter(index, data[index]): data[index];
        }
    }

    // Create regular body
    tBody = document.createElement('tbody');
    tableRef.appendChild(tBody);

    var regexp;
    if(seriesFilter) {
        regexp = new RegExp(seriesFilter, 'i');
    }
    // Populate body with data.items array
    for(var index=0; index < info.items.length; index++){
        var item = info.items[index];
        if((!regexp || filtersOnlySampleSeries && !info.supportsControllersDiscrimination || regexp.test(item.data[seriesIndex]))
                &&
                (!showControllersOnly || !info.supportsControllersDiscrimination || item.isController)){
            if(item.data.length > 0) {
                var newRow = tBody.insertRow(-1);
                for(var col=0; col < item.data.length; col++){
                    var cell = newRow.insertCell(-1);
                    cell.innerHTML = formatter ? formatter(col, item.data[col]) : item.data[col];
                }
            }
        }
    }

    // Add support of columns sort
    table.tablesorter({sortList : defaultSorts});
}

$(document).ready(function() {

    // Customize table sorter default options
    $.extend( $.tablesorter.defaults, {
        theme: 'blue',
        cssInfoBlock: "tablesorter-no-sort",
        widthFixed: true,
        widgets: ['zebra']
    });

    var data = {"OkPercent": 100.0, "KoPercent": 0.0};
    var dataset = [
        {
            "label" : "FAIL",
            "data" : data.KoPercent,
            "color" : "#FF6347"
        },
        {
            "label" : "PASS",
            "data" : data.OkPercent,
            "color" : "#9ACD32"
        }];
    $.plot($("#flot-requests-summary"), dataset, {
        series : {
            pie : {
                show : true,
                radius : 1,
                label : {
                    show : true,
                    radius : 3 / 4,
                    formatter : function(label, series) {
                        return '<div style="font-size:8pt;text-align:center;padding:2px;color:white;">'
                            + label
                            + '<br/>'
                            + Math.round10(series.percent, -2)
                            + '%</div>';
                    },
                    background : {
                        opacity : 0.5,
                        color : '#000'
                    }
                }
            }
        },
        legend : {
            show : true
        }
    });

    // Creates APDEX table
    createTable($("#apdexTable"), {"supportsControllersDiscrimination": true, "overall": {"data": [1.0, 500, 1500, "Total"], "isController": false}, "titles": ["Apdex", "T (Toleration threshold)", "F (Frustration threshold)", "Label"], "items": [{"data": [1.0, 500, 1500, "05 GET /api/cart"], "isController": false}, {"data": [1.0, 500, 1500, "06 POST /api/apply-coupon"], "isController": false}, {"data": [1.0, 500, 1500, "04 POST /api/cart"], "isController": false}, {"data": [1.0, 500, 1500, "07 POST /api/checkout using final_amount"], "isController": false}, {"data": [1.0, 500, 1500, "Scenario B - Coupon Purchase E2E"], "isController": true}, {"data": [1.0, 500, 1500, "03 GET /api/products/{product_id}"], "isController": false}, {"data": [1.0, 500, 1500, "01 POST /api/login"], "isController": false}, {"data": [1.0, 500, 1500, "09 GET /api/orders/my-orders"], "isController": false}, {"data": [1.0, 500, 1500, "08 POST /api/coupon-usage"], "isController": false}, {"data": [1.0, 500, 1500, "02 GET /api/products search"], "isController": false}]}, function(index, item){
        switch(index){
            case 0:
                item = item.toFixed(3);
                break;
            case 1:
            case 2:
                item = formatDuration(item);
                break;
        }
        return item;
    }, [[0, 0]], 3);

    // Create statistics table
    createTable($("#statisticsTable"), {"supportsControllersDiscrimination": true, "overall": {"data": ["Total", 32939, 0, 0.0, 8.164485867816301, 0, 102, 4.0, 13.0, 18.0, 29.0, 126.95555649770866, 332.81631511776703, 55.087959391970806], "isController": false}, "titles": ["Label", "#Samples", "FAIL", "Error %", "Average", "Min", "Max", "Median", "90th pct", "95th pct", "99th pct", "Transactions/s", "Received", "Sent"], "items": [{"data": ["05 GET /api/cart", 3660, 0, 0.0, 3.04945355191257, 0, 38, 2.0, 6.0, 9.0, 17.0, 14.115196976416822, 87.49036977067625, 5.490322918876183], "isController": false}, {"data": ["06 POST /api/apply-coupon", 3660, 0, 0.0, 9.672131147541018, 0, 102, 4.0, 27.0, 36.0, 62.38999999999987, 14.116503581194966, 5.528044859432794, 6.671575663109256], "isController": false}, {"data": ["04 POST /api/cart", 3660, 0, 0.0, 3.5333333333333243, 0, 37, 2.0, 8.0, 11.0, 18.0, 14.11497923246908, 4.052542865572177, 6.675675932996271], "isController": false}, {"data": ["07 POST /api/checkout using final_amount", 3660, 0, 0.0, 13.468579234972669, 5, 81, 10.0, 25.0, 31.0, 45.0, 14.118191637093043, 4.338839612906959, 6.850229577322172], "isController": false}, {"data": ["Scenario B - Coupon Purchase E2E", 3660, 0, 0.0, 73.47322404371565, 16, 444, 55.0, 151.0, 197.94999999999982, 295.7299999999991, 14.099210675336781, 332.5874891113934, 55.04724084273602], "isController": true}, {"data": ["03 GET /api/products/{product_id}", 3660, 0, 0.0, 6.560655737704901, 0, 78, 3.0, 17.0, 24.0, 40.38999999999987, 14.112257999838056, 6.215457380788051, 5.571868770459883], "isController": false}, {"data": ["01 POST /api/login", 3660, 0, 0.0, 9.246448087431684, 1, 90, 6.0, 22.0, 28.0, 47.38999999999987, 14.107797449032692, 9.361585727515216, 6.552538596486157], "isController": false}, {"data": ["09 GET /api/orders/my-orders", 3659, 0, 0.0, 8.026783274118593, 1, 81, 5.0, 18.0, 23.0, 37.0, 14.116566807742315, 194.91474892963512, 5.65628161783996], "isController": false}, {"data": ["08 POST /api/coupon-usage", 3659, 0, 0.0, 12.842579939874286, 5, 74, 10.0, 24.0, 30.0, 42.0, 14.11591329071683, 4.066596114024867, 6.097142054397768], "isController": false}, {"data": ["02 GET /api/products search", 3660, 0, 0.0, 7.077595628415305, 0, 75, 4.0, 17.0, 24.0, 41.0, 14.112094759246121, 17.06130206244795, 5.544241633956939], "isController": false}]}, function(index, item){
        switch(index){
            // Errors pct
            case 3:
                item = item.toFixed(2) + '%';
                break;
            // Mean
            case 4:
            // Mean
            case 7:
            // Median
            case 8:
            // Percentile 1
            case 9:
            // Percentile 2
            case 10:
            // Percentile 3
            case 11:
            // Throughput
            case 12:
            // Kbytes/s
            case 13:
            // Sent Kbytes/s
                item = item.toFixed(2);
                break;
        }
        return item;
    }, [[0, 0]], 0, summaryTableHeader);

    // Create error table
    createTable($("#errorsTable"), {"supportsControllersDiscrimination": false, "titles": ["Type of error", "Number of errors", "% in errors", "% in all samples"], "items": []}, function(index, item){
        switch(index){
            case 2:
            case 3:
                item = item.toFixed(2) + '%';
                break;
        }
        return item;
    }, [[1, 1]]);

        // Create top5 errors by sampler
    createTable($("#top5ErrorsBySamplerTable"), {"supportsControllersDiscrimination": false, "overall": {"data": ["Total", 32939, 0, "", "", "", "", "", "", "", "", "", ""], "isController": false}, "titles": ["Sample", "#Samples", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors"], "items": [{"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}]}, function(index, item){
        return item;
    }, [[0, 0]], 0);

});
