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
    createTable($("#apdexTable"), {"supportsControllersDiscrimination": true, "overall": {"data": [0.9915866964637834, 500, 1500, "Total"], "isController": false}, "titles": ["Apdex", "T (Toleration threshold)", "F (Frustration threshold)", "Label"], "items": [{"data": [1.0, 500, 1500, "05 GET /api/cart"], "isController": false}, {"data": [1.0, 500, 1500, "06 POST /api/apply-coupon"], "isController": false}, {"data": [1.0, 500, 1500, "04 POST /api/cart"], "isController": false}, {"data": [1.0, 500, 1500, "07 POST /api/checkout using final_amount"], "isController": false}, {"data": [0.9198998748435544, 500, 1500, "Scenario B - Coupon Purchase E2E"], "isController": true}, {"data": [1.0, 500, 1500, "03 GET /api/products/{product_id}"], "isController": false}, {"data": [1.0, 500, 1500, "01 POST /api/login"], "isController": false}, {"data": [1.0, 500, 1500, "09 GET /api/orders/my-orders"], "isController": false}, {"data": [1.0, 500, 1500, "08 POST /api/coupon-usage"], "isController": false}, {"data": [1.0, 500, 1500, "02 GET /api/products search"], "isController": false}]}, function(index, item){
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
    createTable($("#statisticsTable"), {"supportsControllersDiscrimination": true, "overall": {"data": ["Total", 6883, 0, 0.0, 45.48990265872448, 0, 8821, 2.0, 9.0, 11.0, 31.639999999999418, 14.372340292249419, 11.201710578380727, 6.428147727581195], "isController": false}, "titles": ["Label", "#Samples", "FAIL", "Error %", "Average", "Min", "Max", "Median", "90th pct", "95th pct", "99th pct", "Transactions/s", "Received", "Sent"], "items": [{"data": ["05 GET /api/cart", 756, 0, 0.0, 1.9973544973544985, 1, 10, 2.0, 3.0, 4.0, 5.42999999999995, 1.593454191353614, 1.782858834133222, 0.6216896898139074], "isController": false}, {"data": ["06 POST /api/apply-coupon", 744, 0, 0.0, 2.5524193548387104, 1, 35, 2.0, 4.0, 6.0, 15.549999999999955, 1.5707403169348606, 0.6151043623934367, 0.7443747466547876], "isController": false}, {"data": ["04 POST /api/cart", 764, 0, 0.0, 2.212041884816752, 1, 8, 2.0, 3.0, 4.0, 6.0, 1.6073821761514135, 0.46149449198097225, 0.7621143413625299], "isController": false}, {"data": ["07 POST /api/checkout using final_amount", 737, 0, 0.0, 9.510176390773404, 5, 29, 9.0, 12.0, 15.0, 19.0, 1.5595573142603212, 0.4780045813318662, 0.7587582924222867], "isController": false}, {"data": ["Scenario B - Coupon Purchase E2E", 799, 0, 0.0, 390.7897371714647, 0, 8821, 35.0, 64.0, 3639.0, 7428.0, 1.664982235327214, 10.737962855032977, 6.151886894125676], "isController": true}, {"data": ["03 GET /api/products/{product_id}", 774, 0, 0.0, 1.8100775193798446, 0, 15, 1.0, 3.0, 4.0, 8.0, 1.6225564697866988, 0.714622038939259, 0.6425526374403857], "isController": false}, {"data": ["01 POST /api/login", 791, 0, 0.0, 3.8938053097345033, 2, 29, 3.0, 6.0, 8.0, 13.080000000000041, 1.6516811232266875, 1.096797065212171, 0.7508425616143878], "isController": false}, {"data": ["09 GET /api/orders/my-orders", 724, 0, 0.0, 2.7720994475138148, 1, 21, 2.0, 5.0, 5.0, 9.75, 1.5418065969730332, 3.2883864622619408, 0.6195875720592275], "isController": false}, {"data": ["08 POST /api/coupon-usage", 733, 0, 0.0, 9.495225102319251, 6, 31, 9.0, 12.0, 14.0, 21.0, 1.5541415859028969, 0.44772633578257287, 0.6731206786700958], "isController": false}, {"data": ["02 GET /api/products search", 785, 0, 0.0, 1.8267515923566882, 0, 19, 1.0, 3.0, 4.0, 8.0, 1.6431119074331453, 1.9864966224631189, 0.6474945094421374], "isController": false}]}, function(index, item){
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
    createTable($("#top5ErrorsBySamplerTable"), {"supportsControllersDiscrimination": false, "overall": {"data": ["Total", 6883, 0, "", "", "", "", "", "", "", "", "", ""], "isController": false}, "titles": ["Sample", "#Samples", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors"], "items": [{"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}]}, function(index, item){
        return item;
    }, [[0, 0]], 0);

});
