console.log("Javascript is on")

const app = {

    init : function(){
        // INITIALISATION DES VARIABLES
        console.log("INIT");
        app.value_first = 0;
        app.value_second = 0;
        app.value_result = 0;
        app.operator = ""

        // app.keybord = [
        //     "zero" = "0",
        //     "one" = "1",
        //     "two" = "2",
        //     "three" = "3",
        //     "four" = "4",
        //     "five" = "5",
        //     "six" = "6",
        //     "seven" = "7",
        //     "eight" = "8",
        //     "nine" = "9",
        //     "dot" = ".",
        //     "more" = "+",
        //     "less" = "-",
        //     "multiply" = "*",
        //     "divide" = "/"
        // ];
        // ON RECUPERE LES TOUCHES DU CLAVIERS
        //
        // app.virtual_keyboard = [
        //     app.zero = document.getElementById("zero"),
        //     app.one = document.getElementById("one"),
        //     app.two = document.getElementById("two"),
        //     app.three = document.getElementById("three"),
        //     app.four = document.getElementById("four"),
        //     app.five = document.getElementById("five"),
        //     app.six = document.getElementById("six"),
        //     app.seven = document.getElementById("seven"),
        //     app.eight = document.getElementById("eight"),
        //     app.nine = document.getElementById("nine"),
        //     app.dot = document.getElementById("dot"),
        //     app.more = document.getElementById("more"),
        //     app.less = document.getElementById("less"),
        //     app.multiply = document.getElementById("multiply"),
        //     app.divide = document.getElementById("divide"),
        //     app.equal = document.getElementById("equal"),
        //     app.back = document.getElementById("back"),
        //     app.clear = document.getElementById("clear")
        // ];
        // console.log(app.virtual_keyboard);


        // ON RECUPERE LES TOUCHES DU CLAVIERS
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

        // ON RECUPERE L'INPUT
        app.screen = document.getElementById("screen");
        //console.log("app.screen");
        //console.log(app.screen);

        // ON LIT LE CLAVIER REEL
        app.listen_real_keyboard();
        
        // ON LIT LE CLAVIER VIRTUEL
        app.listen_virtual_keyboard();
    },

    click : function(){
        console.log("click active");
        let try_to_read_input_value = document.getElementById("screen");
        console.log(try_to_read_input_value.value);
    },

    // ECOUTEURS DE LA SAISIE CLAVIER REEL
    listen_real_keyboard : function(){
        //console.log('RUN => listen_real_keyboard');
        app.screen.onkeypress = (e) => {
            // console.log("Event");
            console.log(e);
            // console.log("KEYYYYYY");
            console.log(e.key);
            // console.log(typeof(e.key))
            let keypress = e.key;
            // console.log("keypress : ")
            // console.log(keypress)
            if("0123456789.+-*/=".indexOf(keypress) < 0 ){
                return false
            }
            //app.read_and_update(keypress);
            //app.update_value_on_the_screen(keypress);
        }
        //app.screen.addEventListener("input", app.read_and_update);
    },

    // ECOUTEURS DE LA SAISIE CLAVIER NUMERIQUE
    // listen_virtual_keyboard : function(){
    //     console.log('RUN => listen_virtual_keyboard');
    //     app.virtual_keyboard.map( x => x.addEventListener("click", app.click_on_virtual_keyboard()))
    //     // app.virtual_keyboard.map( x => console.log(x))
    // },


    // ECOUTEURS DE LA SAISIE CLAVIER NUMERIQUE
    listen_virtual_keyboard : function(){
        //console.log('RUN => listen_virtual_keyboard');
        //
        app.zero.addEventListener("click", (e)=>{ app.click_on_virtual_keyboard(e)} );
        app.one.addEventListener("click", (e)=>{ app.click_on_virtual_keyboard(e)} );
        app.two.addEventListener("click", (e)=>{ app.click_on_virtual_keyboard(e)} );
        app.three.addEventListener("click", (e)=>{ app.click_on_virtual_keyboard(e)} );
        app.four.addEventListener("click", (e)=>{ app.click_on_virtual_keyboard(e)} );
        app.five.addEventListener("click", (e)=>{ app.click_on_virtual_keyboard(e)} );
        app.six.addEventListener("click", (e)=>{ app.click_on_virtual_keyboard(e)} );
        app.seven.addEventListener("click", (e)=>{ app.click_on_virtual_keyboard(e)} );
        app.eight.addEventListener("click", (e)=>{ app.click_on_virtual_keyboard(e)} );
        app.nine.addEventListener("click", (e)=>{ app.click_on_virtual_keyboard(e)} );
        app.dot.addEventListener("click", (e)=>{ app.click_on_virtual_keyboard(e)} );
        app.more.addEventListener("click", (e)=>{ app.click_on_virtual_keyboard(e)} );
        app.less.addEventListener("click", (e)=>{ app.click_on_virtual_keyboard(e)} );
        app.multiply.addEventListener("click", (e)=>{ app.click_on_virtual_keyboard(e)} );
        app.divide.addEventListener("click", (e)=>{ app.click_on_virtual_keyboard(e)} );
        app.equal.addEventListener("click", (e)=>{ app.click_on_virtual_keyboard(e)} );
        app.back.addEventListener("click", (e)=>{ app.click_on_virtual_keyboard(e)} );
        app.clear.addEventListener("click", (e)=>{ app.click_on_virtual_keyboard(e)} );
    },

    // DEFINITION DU CLICK SUR LE CLAVIER VIRTUEL
    click_on_virtual_keyboard : function(e){
        console.log(e);
        console.log("ON A COMPRIS QU'IL Y A UN CLICK SUR : ",e.target.innerText);
        let virtual_key_target = e.target.innerText;
        console.log("E.TARGEEEEEEEEEEEEEEET");
        console.log(e.target);
        if(e.target.localName == "h2"){
            console.log("t'as cliqué sur le caractère");
            app.keypress_effect(e.target.parentNode);
        } else {
            app.keypress_effect(e.target);
            
        }
        app.click_here(virtual_key_target);
    },

    // EFFET KEYPRESS... LE BOUTON S'ENFONCE QUAND ON CLIQUE DESSUS
    keypress_effect : function(x){
        x.animate([
            { transform: 'translateZ(0.5rem)'},
            { transform: 'translateZ(0.125rem)', easing: "ease-in-out"},
            { transform: 'translateZ(0.5rem)'}
            ], {
            duration: 300,
            iterations: 1
            })
    },

    // SEQUENCE DE CLICK SUR LE CLAVIER VIRTUEL
    click_here : function(x){
        //console.log(x);
        //console.log(typeof(x));
        app.update_value_on_the_screen(x);
    },

    update_value_on_the_screen : function(x){
        if(app.screen.value){
            console.log("APP.SCREEN.VALUE before => ",  app.screen.value);
            if(x == "Clear"){
                console.log("Clear")
                //local_value = "";
                // console.log("LOCAL VALUE ==============> ");
                // console.log(local_value);
                // console.log("=======================")
                app.screen.setAttribute("value", "");
                app.screen.value = "";
                console.log("APP.SCREEN.VALUE after => ",  app.screen.value);
                return;
            }
            if(x == "Back"){
                console.log("BACK")
                let new_value = app.screen.value.substring(0, app.screen.value.length-1);
                // console.log("LOCAL VALUE ==============> ");
                // console.log(local_value);
                // console.log("=======================")
                app.screen.setAttribute("value", new_value);
                app.screen.value = new_value;
                console.log("APP.SCREEN.VALUE after => ",  app.screen.value);
                return;
            }
            if(x == "+"){ 
                console.log("MOOOOOOOOOOOORE");
                app.click();
                console.log("THENNN");
            }
            let tempo_value = app.screen.value + x;
            app.screen.setAttribute("value", tempo_value);
            app.screen.value = tempo_value;
            console.log("APP.SCREEN.VALUE after => ",  app.screen.value);
        } else {
            if(x == "Clear"){
                return;
            }
            if(x == "Back"){
                return;
            }
            console.log("APP.SCREEN => ", app.screen);
            console.log("APP.SCREEN.VALUE before => ",  app.screen.value);
            app.screen.setAttribute("value", x);
            app.screen.value=x;
            console.log("APP.SCREEN.VALUE after => ",  app.screen.value);
            // let new_attribute = document.createAttribute("value");
            // new_attribute.value = x;
            // app.screen.setAttributeNode(new_attribute.value);
        }
        // console.log('on peut deja lire la value car elle existe deja');
        // console.log(app.screen.value);
        // let new_attribute = document.createAttribute("value");
        // new_attribute.value = x;
        // app.screen.setAttributeNode(new_attribute.value);
    },

    // MAJ DE LA VALEUR DE L'INPUT
    read_and_update : function(x){
        console.log('RUN => read_screen');
        if(app.screen.value){
            console.log("App.screen.value = ", app.screen.value);
            return
        } else {
            console.log("App.screen.value NO EXIST");
            let first_input_updated = document.createAttribute("value");
            first_input_updated.value = x;
            app.screen.setAttribute("value", x);
            console.log("App.screen.value = ", app.screen.value);
            return
        }
        let input_updated = document.createAttribute("value");
        input_updated.value = app.screen.value;
        app.screen.setAttributeNode(input_updated);
        console.log("INPUT_UPDATES");
        console.log(input_updated);
        console.log(typeof(input_updated));
        //app.value=value_first
        console.log("VALUE UPDATED => ");
        console.log(app.screen);
        console.log(app.screen.value);
        console.log('MAAAAAAAAAAAAACHIN');
        let machin  = document.getElementById("screen").value;
        console.log(machin);
        console.log(typeof(machin));
    },

    

    // document.getElementById("foo").onkeypress = function(e) {
    //     var chr = String.fromCharCode(e.key);
    //     if ("0123456789.+-*/=".indexOf(chr) < 0)
    //         return false;
    // };


    // ECOUTEURS DU CLAVIER

    // ECOUTEURS DE LA SOURIS (CLIC SUR LES TOUCHES VIRTUELS)








}
document.addEventListener("DOMContentLoaded", app.init)