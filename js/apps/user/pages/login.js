/**
 * Created with JetBrains WebStorm.
 * User: ravi.hamsa
 * Date: 10/08/13
 * Time: 12:35 AM
 * To change this template use File | Settings | File Templates.
 */

define(['base', 'widgets/form', 'text!../templates/login.html'], function (Base, Form, loginTemplate) {

    var baseUtil = Base.util;

    var PageView = Base.View.extend({
        template: loginTemplate,
        postRender: function () {


            var elementList = [
                {
                    name: 'userName',
                    validationRules: [
                        {
                            expr: 'req'
                        }
                    ]
                },
                {
                    name: 'password',
                    type: 'password',
                    validationRules: [
                        {
                            expr: 'req'
                        }
                    ]
                },
                {
                    name: 'loginButton',
                    type: 'submit',
                    group: 'buttons'
                }
            ]


            var coll = new Form.ElementCollection(elementList);


            var formModel = new Form.Model({
                title: 'Login',
                actionId: 'login',
                elements: coll
            })

            var loginForm = baseUtil.createView({
                View: Form.View,
                model: formModel,
                parentEl: this.$('.login-form'),
                parentView: this
            })

            loginForm.on('formSubmit', function (dataObj) {
                if (dataObj.errors) {
                    console.log('errors', dataObj.errors);
                } else {
                    console.log('ready for submit');
                }
            })

        }
    })

    var PageModel = Base.Model.extend({

    });

    return {
        Model: PageModel,
        View: PageView
    }

})