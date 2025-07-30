import { useState } from "react";

const ShootGame = () => {
  const [bullets, setBullets] = useState(20);

  const shoot = () => {
    if (bullets >=  1) {
      setBullets(bullets - 1);
    } else {
      alert("No more bullets please reload");
    }
  };

  const reload = () => {
     if(bullets == 0){
        setBullets(20)
        alert("Bullets reloaded")
    }else{
        alert("reload failed, you still have some bullets! ")
    }
  };
   
  return (
    <div>
      <p>Bullets:{bullets} </p>
      <button onClick={shoot}>Shoots</button>
      <button onClick={reload}>Reload</button>
    </div>
  );
};

export default ShootGame;
