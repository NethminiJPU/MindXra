function login(){
    $.confirm({
        theme: 'modern',
        bgOpacity:100,
        icon: 'fas fa-user-circle',
        title: 'Please Enter Password?',
        content: '<input type="password" placeholder="MindXtra password" class="del-pass form-control is-valid" required style="text-align:center;">' ,
        draggable: true,
        animationBounce: 2.5,
        type: 'blue',
        typeAnimated: true,
        buttons: {
            Delete: {
            text: 'Login',
            btnClass: 'btn-blue',
            action : function () {
                var del_password = this.$content.find('.del-pass').val().trim();
                if(del_password== '' || del_password !='mindXtra@uomleos'){
                    $.confirm({
                        theme: 'modern',
                        bgOpacity:100,
                        icon: 'fas fa-exclamation-circle',
                        title: 'Password Incorrect',
                        content: 'Please enter correct login password & try again' ,
                        draggable: true,
                        animationBounce: 2.5,
                        type: 'red',
                        typeAnimated: true,
                        buttons: {
                            Delete: {
                            text: 'Try Again',
                            btnClass: 'btn-red',
                            action : function () {
                                login();
                            }
                        },
                            
                        }
                    });
                }else{
                    sessionStorage.setItem("mindxtralogin", true);
                    
                }
            }
        },
            
        }
    });    
}

if(!sessionStorage.getItem("mindxtralogin")){
    login();
}