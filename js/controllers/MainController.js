app.controller('MainController', ['$scope', '$rootScope', '$http', '$state', '$stateParams', '$filter',
    function MainController($scope, $rootScope, $http, $state, $stateParams, $filter) { 
        
    $scope.moederbordenheadline = "Moederborden:";
    $scope.moederborden = [
      {naam: "Gigabyte GA-01", socket: "775", type: "DDR2"},
      {naam: "Gigabyte GA-02", socket: "1155", type: "DDR3"},
	  {naam: "Gigabyte GA-03", socket: "1150", type: "DDR3"},
	  {naam: "Gigabyte Sniper G1", socket: "1150", type: "DDR3"},
	  {naam: "Asus Gaming", socket: "1155", type: "DDR3"},
      {naam: "Asus BA-01", socket: "1150", type: "DDR3"},
      {naam: "AsRock extreme 3", socket: "1150", type: "DDR3"},
	  {naam: "AsRock extreme 2", socket: "775", type: "DDR2"},
	  {naam: "MSI Gaming", socket: "AM3", type: "DDR3"},
	  {naam: "Gigabyte CA-01", socket: "AM3", type: "DDR3"}
    ]
	
	$scope.processorenheadline = "Processoren:";
    $scope.processoren = [
      {naam: "Intel i5 2500k", socket: "1155"},
      {naam: "Intel i7 2600k", socket: "1155"},
      {naam: "Intel Q8400", socket: "775"},
	  {naam: "Intel Q6600", socket: "775"},
	  {naam: "Intel E8400", socket: "775"},
	  {naam: "Intel E6200", socket: "775"},
      {naam: "Intel i5 4460", socket: "1150"},
	  {naam: "Intel i7 4790", socket: "1150"},
	  {naam: "Intel i7 4790k", socket: "1150"},
	  {naam: "AMD FX 6300", socket: "AM3"},
	  {naam: "AMD FX 9590", socket: "AM3"},
	  {naam: "AMD FX 8530", socket: "AM3"}
    ]
	
	$scope.geheugenheadline = "RAM Geheugen:";
    $scope.geheugenkits = [
     {naam: "8GB G.Skill Ripjaws 1800Mhz", type: "DDR3"},
     {naam: "4GB G.Skill Ripjaws 800Mhz", type: "DDR2"},
	 {naam: "8GB HyperX 1800Mhz", type: "DDR3"},
	 {naam: "4GB HyperX 800Mhz", type: "DDR2"},
	 {naam: "2GB HyperX 666Mhz", type: "DDR2"},
	 {naam: "8GB Crucial 1666Mhz", type: "DDR3"},
	 {naam: "16GB Crucial 1666Mhz", type: "DDR3"},
	 {naam: "1GB Kingston 666Mhz", type: "DDR2"}
    ]

	$scope.sidemenu = false;

    $scope.toggle_sidemenu = function () {
    	$scope.sidemenu =! $scope.sidemenu;
    }
	
	$rootScope.$on('$stateChangeStart', 
	function(event, toState, toParams, fromState, fromParams){ 
	      if($scope.sidemenu == true) {
	      $scope.sidemenu = false;
	    }
	})
	
    }
]);

