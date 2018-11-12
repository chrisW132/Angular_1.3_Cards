// Here's the initial data. Again: don't worry about persistence :)

angular.module("ceLebApp", [])

.controller('mainCtrl', function($scope) {

  $scope.nameCards = [
    { name: "Cyborg", photo_url: "img/avatars/Cyborg.jpg", job:"half human half tank",linked:"https://www.linkedin.com/", email:"testEmail@gmail.com" },
	  { name: "Aquaman", photo_url: "img/avatars/aquaman.jpg", job:"King of Atlantis",linked:"https://www.linkedin.com/", email:"testEmail@gmail.com" },
	  { name: "Wounder Women", photo_url: "img/avatars/WounderWomen.jpg", job:" Amazonian Badass", linked:"https://www.linkedin.com/", email:"testEmail@gmail.com" },
	  { name: "Batman", photo_url: "img/avatars/batMan@.jpg", job:"Detective", linked:"https://www.linkedin.com/", email:"testEmail@gmail.com" },
    { name: "Green Lantern", photo_url: "img/avatars/green-lantern.jpg", job:"soldier", linked:"https://www.linkedin.com/", email:"testEmail@gmail.com" },
	  { name: "SuperMan", photo_url: "img/avatars/Superman.jpg", job:"Son of Krypton", linked:"https://www.linkedin.com/", email:"testEmail@gmail.com"}
  ];

  $scope.newNameCard = function(){

  		$scope.nameCards.push({name:$scope.ceLebname,  photo_url:$scope.ceLebphoto,job:$scope.ceLebjob,linked:$scope.ceLeblinked,email:$scope.ceLebemail});

  			$scope.ceLebname = '';
  			$scope.ceLebphoto = '';
        $scope.ceLebjob = '';
        $scope.ceLeblinked = '';
        $scope.ceLebemail = '';
  };

  	$scope.remove=function(item){
  		var index=$scope.nameCards.indexOf(item)
  		$scope.nameCards.splice(index,1);
  	}
});
