import React from "react";
import { UilBan, UilBasketball, UilTvRetro, UilBackpack } from '@iconscout/react-unicons'; //UilCheck
import 'console.image'; 

function Decision({ title, items }) {

    console.log(items);
    return (
    <div>
      <div className="flex items-center justify-start mt-6">
        <p className="text-white font-medium uppercase">{title}</p>
      </div>
      <hr className="my-2" />

      <div className="flex flex-row items-center justify-between text-white">
        {items.map((item, index) => (
          <div key={index} className="flex flex-col items-center justify-center">
            <p className="font-light text-sm mx-1">{item.title}</p>

              { (item.temp.toFixed() > 20 && item.icon === '01d') ? <UilBackpack/> : <UilBan/> /*balade*/} 
              { (item.temp.toFixed() > 15 && (item.icon === '02d' || item.icon === '03d' || item.icon === '04d' || item.icon === '01d') ) ? <UilBasketball/> : <UilBan/> /*sport*/}
              { (item.icon === '09d' || item.icon === '10d' || item.icon === '13d') ? <UilTvRetro/> : <UilBan/> /*reste*/}
          </div>  
        ))}
      </div>
    </div>
  );
}

export default Decision;
