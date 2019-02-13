app.service('serviceLogin', function ($http, $location) {

    // this.registerUser = function (data, $scope) {
    //     $http({
    //         method: 'POST',
    //         url: 'http://localhost:3000/register',
    //         data: data

    //     }).then(
    //         function successCallback(response) {
    //             console.log("register successfull ");
    //             console.log(response);
    //             $scope.message = "register successfull";
    //             $location.path('/login');

    //         },
    //         function errorCallback(response) {

    //             console.log("register Unsuccessfull ");
    //          $scope.message =response.data.message.message;


    //         }
    //     );
    // }

    this.login = function (data, $scope) {
        $http({
            method: 'POST',
            url: 'http://localhost:3000/login',
            data: data,
        }).then(
            function successCallback(response) {
                console.log("Login successfull ");
                var userid = response.data.message[0]._id;
                var name = response.data.message[0].firstname;
                var token = response.data.token;
                localStorage.setItem("userid", userid);
                localStorage.setItem("name", name);
                localStorage.setItem("token",token);
                $location.path('dashboard');
                $scope.loginMessage = "login successfull";
            },
            function errorCallback(response) {

                console.log("register Unsuccessfull ");
                console.log(response);
                $scope.loginMessage = 'EmailId or Password Incorrect ';


            }
        );
    }

});
