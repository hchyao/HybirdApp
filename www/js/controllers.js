angular.module('app.controllers', [])

.controller('hometopCtrl', ['$scope', '$stateParams', // TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('investInfoCtrl', ['$scope', '$stateParams', // TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('loginCtrl', ['$scope', '$stateParams', '$http', '$state',// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $http, $state) {
	$scope.loginData = {};

	$scope.login = function(event){
		var serviceCommon = {};
		serviceCommon.ipAdrs = "192.177.11.49";
		serviceCommon.chKbn = "RCH";
		serviceCommon.loginTuskShuknKishCd = "9989";
		serviceCommon.ryushKbn = "ITNRI991";
		serviceCommon.loginTuskGyumRank = "00,50,00,00,00,00,00,00,00,00"
		var aplData = {};
		aplData.loginTuskLoginId = "E40610062";
		aplData.gnziLoginPswd = "a1111111";
		aplData.uriKbn = "01";
		var data = {};
		data.serviceCommon = serviceCommon;
		data.aplData = aplData;
	    $http.post('https://w00sec-trading.uat.starmf.jp/ws/mfCmnCauSysLgiAction_ws.do', data)
	    .success(function(response){
	    	alert(JSON.stringify(response));
         if (response.serviceCommon.resultCd === '201' || response.serviceCommon.resultCd === '200' ) {
            $state.go("tabsController.hometop", {}, {reload: true});
            event.preventDefault();
         }
        });
	  }
}])
