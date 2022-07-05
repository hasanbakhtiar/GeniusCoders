"use strict";
// var info = 5;
// info = 10;
//  let info = 15;
// console.log(info);

// 1.Dəyişkən adları mənalı və anlaşıqlı olmalıdır.
// 2.Dəyişkən adlarını yazarkən İngilis əlifbasından başqa əlifadan istifadə etmək qadağandır.
// 3.Dəyişkən adları _ (alt xətt) ilə başlaya bilər.
// 4.Dəyişkən adları $(dollar) işarəsi ilə başlaya bilər.
// 5.Dəyişkən adları heç bir zaman rəqəm ilə başlaya bilməz.Amma ilk hərfdə sonra istifadə edə bilərik.
// 6.Dəyişkən adları böyük kiçik hərflərə həssasdır.
// 7.Eyni dəyişkənə iki fərqli məlumat tanımlanan zaman sonuncu tanımlanan məlumatı göstərir.
// 8.JavaScript tərəfindən hazırlanmış rezerv kəlimələri dəyişkən adlarına vermək qadağandır.
// 9.Eyni dəyişkən adını dəişkən ifadələrində istifadə etmək qadağandır.

// abstract 	    arguments	    await*	            boolean
// break	        byte	        case	            catch
// char	            class*	        const	            continue
// debugger	        default	        delete	            do
// double	        else	        enum*	            eval
// export*	        extends*	    false	            final
// finally	        float	        for	                function
// goto	            if	            implements	        import*
// in	            instanceof	    int	                interface
// let*	            long	        native	            new
// null	            package	        private	            protected
// public	        return	        short	            static
// super*	        switch	        synchronized	    this
// throw	        throws	        transient	        true
// try	            typeof	        var	                void
// volatile	        while	        with	            yield

// ECMAScript5 (ES5)
// var (variable)

// ECMAScript6 (ES6)
// const (constant)
//  let

// var (variable)    -  global
// const (constant)  -  local
//  let              -  local

// var info = 5;
// var info = 10;
// console.log(info);

// const info = 5;
// console.log(info);

// //global
// if (true) {
//     // local global
//     if (true) {
//         // local global
//         if (true) {
//             let elmin = 10;
//             console.log(elmin);
//             // local
//         }
//     }
//     let elmin = 20;

//     console.log(elmin);
// }

// console.log(elmin);

// ==================================================
// Condition
// ==================================================
// if       => eger
// else     => deyilse
// else if  => deyilse eger

// let a = 5;
// let b = 10;

// if (a<b) {
//     console.log("Bu emeliyyat duzdur kardes");
// }else if(a == 5){
//     console.log("Bu da bir varinatdir kardes");
// }else{
//     console.log("Kodunu duz yaz kardes");
// }

const myTime = 15;

if (myTime >= 5 && myTime < 12) {
  console.log("Good Morning");
  if (myTime == "7") {
    console.log("Get up");
  } else if (myTime == "10") {
    console.log("Have breakfast");;
  }
} else if (myTime >= 12 && myTime < 17) {
  console.log("Good afternoon");
} else if (myTime >= 17 && myTime < 21) {
  console.log("Good evening");
} else if (myTime >= 21 && myTime < 23) {
  console.log("Good night");
} else if (myTime < 4) {
  console.log("Go to Sleep");
} else {
  console.log("wrong time");
}
