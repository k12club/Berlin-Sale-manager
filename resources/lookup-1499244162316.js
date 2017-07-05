(function(window, undefined) {
  var dictionary = {
    "b8e2c867-c49a-4554-a12c-7bc416e4fe48": "W-Report-page-01",
    "b061b78e-4651-45f8-aaf0-2cf3907b0c23": "W-Reject_and_Cancel_details",
    "bcc1eddc-c6fe-47b5-96a9-b934e0578f88": "W-OrderListWithSaleOrderID-page-01_closed_page",
    "d1659409-02c0-452e-b630-761a40d5185e": "W-Dashboard-page-01",
    "94a04249-ed59-41a2-a99c-b862291cac85": "W-OrderListForNoSaleOrderID-page-01_Patial_page",
    "5c2e7981-ff44-4466-afcc-b9f702bf8f37": "W-OrderListForNoSaleOrderID-page-01_Credit_hold_page",
    "8f28f997-9c8f-4695-9f5b-daf1052a92e1": "W-Partial-Details-page-01",
    "0ceccb6a-a921-4795-977e-9aeb8d60def1": "W-Reject_and_Cancel_manage_page",
    "5432bdd2-d2f0-4a95-b77b-7fc7e6b647f6": "W-UserProfile-page-01",
    "b2527973-9d8f-4561-b899-105ee283ec16": "W-OrderList-page-01",
    "c597e556-d23f-4018-8a6a-9a05bf877988": "W-OrderListCancel-page-01",
    "c1101993-bf8a-4ac5-a768-dd6dd929670e": "Dashboard_page_sort_saleman",
    "45117394-80b4-4f59-a8cd-d186138b5605": "W-Customer_info_page",
    "4e300cef-a2d5-4150-a0a8-c98e1db275ed": "W-OrderListWithSaleOrderID-page-01_completed_page",
    "eb968331-16ee-432c-9432-3ed1b0ff3f75": "W-OrderListWithSaleOrderID-page-01_Error_page",
    "9b2aa435-94df-4bc6-baf4-2ff306dd2f40": "W-OrderDetail-page-00",
    "5b3be874-8776-4ef1-91e1-e32a12d1633f": "W-OrderListForNoSaleOrderID-page-01_Rejected_page",
    "5a110298-7b6a-4eb9-9b84-04528b1533c4": "Dashboard_page_sort_name",
    "8346ab93-6f48-436e-acf1-3467f7cc7b16": "W-OrderListForNoSaleOrderID-page-01_Approved_page",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Berlin",
    "87db3cf7-6bd4-40c3-b29c-45680fb11462": "960 grid - 16 columns",
    "e5f958a4-53ae-426e-8c05-2f7d8e00b762": "960 grid - 12 columns",
    "6450bb98-8fc2-4661-b1f8-dd3fbf1bbecb": "menu_berlin",
    "931959dc-1327-4e88-872f-4fcef6253717": "table",
    "d00a4a3b-ff02-43bc-8e9b-acf9d9b415db": "verify_loading",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);