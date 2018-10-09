(function(window, undefined) {
  var dictionary = {
    "d9c622a9-72ec-4885-b2ad-c24813fae976": "make payment",
    "f320f463-ba4f-4e5e-87a2-02497b8a7f2b": "Buyereditprofile",
    "ab560f64-7cc4-4f57-8d90-99cdac897d82": "seller profile show to buyer",
    "0e890023-31cc-458d-8bed-6dded65a8048": "Seller Availability",
    "1544eee1-2df4-4169-8c29-7e317a57b8ed": "Login buyer",
    "08e8b4cb-d1df-4587-9f68-ab2adfb61c4f": "seller registration",
    "ddc8bda7-eeab-42f7-ad5a-04ff1972afac": "make payment seller",
    "92476f4a-af51-4fc5-ad89-9f1c0aceabc5": "SelectCategoryofUserSignUp",
    "79415bca-5aa7-4871-a192-8ee833b523ad": "seller Notification",
    "9d2fccfd-9097-49eb-9700-0826f7dad010": "SelectCategoryofUserLogin",
    "f8f9ff76-fa9c-4b3b-a83f-d2e820643bac": "BuyerHome",
    "4644e2aa-4b2e-4119-a5e8-3fdad0e26424": "AdditionMenuItems edit",
    "218c258b-8d2c-40df-a878-d7834af637db": "make payment with ava. seller",
    "1763e702-fc41-43d3-a9c9-28848b6b1ba4": "Selectcusine with seller",
    "5eecf189-0421-4d77-8912-841a3e22f9f6": "Avaliableseller",
    "666c8e03-bea9-4e67-9d04-0fb27b92ffdb": "BusinessDetail",
    "6d78ecf8-f88e-402c-ae4a-72197da3a884": "InitialHome",
    "75455d57-5ed3-4fa0-8b30-2cc9806984d4": "FEEDBACK FORM",
    "d2a51ab6-812c-4444-b40d-56872a4b02a0": "forgot password",
    "0645531b-8514-4e91-9153-4c3e8c0083bd": "Acknowledgement",
    "b3c922f9-9bfb-456c-aa63-aad26e6140f9": "About us",
    "1f76d92f-8a53-450a-bed7-ab769fc41674": "Serving Food",
    "0bd3b1d3-0227-4f93-a31c-4e5ceb06de6c": "BuyerSignup",
    "96047e78-791f-473f-bf51-c71a40bf05d3": "Selectcusine",
    "ab8d75f9-6cec-49bf-888b-5812d813b4c8": "FEEDBACK FORM buyer",
    "8c89f708-2089-45d4-a3d7-85e5b79532bf": "Select Order",
    "0b9dc992-8635-4bfe-b769-dae00d5274fb": "Seller edit Availability",
    "1bc8117a-ebf1-4f6b-915c-f06c15c8a5a9": "SellerHome",
    "e8451084-7677-4908-ac3a-830fb91170e7": "seller edit profile",
    "028bc071-cfc9-494d-8274-7708c68ec544": "Login seller",
    "172780d1-13ae-47ce-87a4-7a914b8b3576": "OrderDetail",
    "1dc824a5-b061-4289-9e02-d547f4987f10": "Select Order with seller",
    "7b314787-ce9d-4dd4-aa5c-284e1c842a25": "AdditionMenuItems",
    "61d9c4f8-611f-44cd-b19a-c424ed02c519": "selectSeller",
    "7dda4468-7d32-4c20-8e41-cfd5e36e73ec": "Serving edit Food",
    "93ffb838-ec4b-4512-94cb-fc3fd2793e89": "forgot password seller",
    "59f82bf0-54fe-46a1-9132-2623f0946756": "Template 1 imported",
    "697f9f64-c4fa-4fb7-993f-854daf974915": "Template 1 imported_2",
    "30fc10b7-4c3a-4684-9c6c-c3568717da9a": "Template 1 imported_1",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default",
    "6a2c94bf-e64e-4f04-ac19-c7655bf9d834": "default imported_1",
    "22ca94f5-a2d6-4f52-85b7-cbac4f054630": "default imported_2",
    "e3f482df-7e9e-44bd-9b2e-8416b606f26d": "default imported"
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