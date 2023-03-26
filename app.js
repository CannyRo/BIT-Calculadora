console.log("Javascript is on")

const app = {

    init : function(){
        console.log("INIT")
        //INITIALISATION DES VARIABLES
        app.value_first = 0;
        app.value_second = 0;
        app.value_result = 0;
        app.operator = ""

        // ON RECUPERE LES TOUCHES DU CLAVIER VIRTUEL
        app.zero = document.getElementById("zero");
        app.one = document.getElementById("one");
        app.two = document.getElementById("two");
        app.three = document.getElementById("three");
        app.four = document.getElementById("four");
        app.five = document.getElementById("five");
        app.six = document.getElementById("six");
        app.seven = document.getElementById("seven");
        app.eight = document.getElementById("eight");
        app.nine = document.getElementById("nine");
        app.dot = document.getElementById("dot");
        app.more = document.getElementById("more");
        app.less = document.getElementById("less");
        app.multiply = document.getElementById("multiply");
        app.divide = document.getElementById("divide");
        app.equal = document.getElementById("equal");
        app.back = document.getElementById("back");
        app.clear = document.getElementById("clear");

        // ON RECUPERE L'INPUT = L'ECRAN
        app.screen = document.getElementById("screen");

        // ON ECOUTE LE CLAVIER REEL ET ON AGIT
        app.real_keyboard();

        // ON ECOUTE LE CLAVIER VIRTUEL ET ON AGIT
        app.virtual_keyboard();
    },

    // CONSOLE.LOG DES VARIABLES ===> 
    //UTILE SIMPLEMENT POUR LE CONTRÔLE LORS DU DEVELOPEMENT
    print_values : function(){
        console.log(" ===///   PRINT   ///===");
        console.log("app.value_first => ", app.value_first);
        console.log(typeof(app.value_first));
        console.log("app.value_second => ", app.value_second);
        console.log(typeof(app.value_second));
        console.log("app.value_result => ", app.value_result);
        console.log(typeof(app.value_result));
        console.log("app.operator => ", app.operator);
        console.log(typeof(app.operator));
        let input_current_value = app.get_value();
        console.log("Input value =  ", input_current_value);
        console.log(typeof(input_current_value));
        console.log("===============");
    },

    // ON RECUPERE LA VALEUR DE L'INPUT
    get_value : function(){
        let current_value = document.getElementById("screen").value;
        console.log("current_value = ");
        console.log(current_value);
        return current_value;
    },

    // ON APPUIE SUR UNE TOUCHE (VISUAL EFFECT)
    press_effect : function(x){
        x.animate([
            { transform: "translateZ(0.5rem)"},
            { transform: "translateZ(0.125rem)", easing: "ease-in-out"},
            { transform: "translateZ(0.5rem)"}
            ], {
            duration: 300,
            iterations: 1
            })
    },

    // ECOUTEUR DU CLAVIER REEL ET SEQUENCES
    real_keyboard : function(){
        console.log("Real Keyboard Listener activated");
        // Contrôle et restriction des touches
        app.screen.onkeypress = (e) => {
            //console.log(e);
            console.log(e.key);
            let key_pressed = e.key;
            
            if("0123456789.+-*/=".indexOf(key_pressed) < 0 ){
                return false;
            }
            if(key_pressed == "."){
                console.log("POINT");

                let tempo_value = app.get_value();
                console.log("tempo_value ==>  ", tempo_value);
                
                if(tempo_value.indexOf(key_pressed) >= 0){
                    console.log("Il y a déja un POINT");
                    return false;
                }
                return;
            }
            if("+-*/".indexOf(key_pressed) >= 0){
                console.log("OPERATEURS");
                app.manage_operator(key_pressed);
                return false;
            }
            if(key_pressed == "="){
                console.log("EGAL... Lancer la séquence de calcul et donner le résultat");
                app.value_second = app.get_value()*1;
                app.calculate(app.operator);
                return false;
            }
            
        }
    },
    // ECOUTEUR DU CLAVIER VIRTUEL ET SEQUENCES
    virtual_keyboard : function(){
        console.log("Virtual Keyboard Listener activated");
    },
    // ON GERE LA SAISIE D'UN OPERATEUR
    manage_operator : function(x){
        console.log("Manage Operator ON");
        if(app.operator !== ""){
            console.log("On a déjà un opérateur enregistré")
            app.value_second = app.get_value()*1;
            app.calculate(app.operator);
        }
        app.value_first = app.get_value()*1;
        console.log("app.value_first ==>  ", app.value_first);
        console.log(typeof(app.value_first));
        switch(x){
            case "+" : 
                console.log("C'est un +");
                app.operator = "+";
                console.log("app.operator == >  ", app.operator);
                app.screen.value = "";
                break;
            case "-" : 
                console.log("C'est un -");
                app.operator = "-";
                console.log("app.operator == >  ", app.operator);
                app.screen.value = "";
                break;
            case "*" : 
                console.log("C'est un *");
                app.operator = "*";
                console.log("app.operator == >  ", app.operator);
                app.screen.value = "";
                break;
            case "/" : 
                console.log("C'est un /");
                app.operator = "/";
                console.log("app.operator == >  ", app.operator);
                app.screen.value = "";
                break;
            default : 
                console.log("NOT AN OPERATOR");
                break;
        }
    },
    // ON CALCULE LE RESULTAT (x = app.operator)
    calculate : function(x){
        console.log("Calculate");
        switch(x){
            case "+" : 
                console.log("On additionne : ");
                app.value_second = app.get_value()*1;
                app.value_result = app.value_first + app.value_second;
                app.screen.value = app.value_result;
                break;
            case "-" : 
                console.log("On soustrait : ");
                app.value_second = app.get_value()*1;
                app.value_result = app.value_first - app.value_second;
                app.screen.value = app.value_result;
                break;
            case "*" : 
                console.log("On multiplie : ");
                app.value_second = app.get_value()*1;
                app.value_result = app.value_first * app.value_second;
                app.screen.value = app.value_result;
                break;
            case "/" : 
                console.log("On divise : ");
                app.value_second = app.get_value()*1;
                app.value_result = app.value_first / app.value_second;
                app.screen.value = app.value_result;
                break;
            default : 
                console.log("NOT AN OPERATOR");
                app.value_result = app.get_value()*1;
                app.screen.value = app.value_result;
                break;
        }
        app.operator = "";
    }
    
}
document.addEventListener("DOMContentLoaded", app.init)