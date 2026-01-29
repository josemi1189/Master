/** 5. Slot Machine **/
console.log(
  "\n--------------------------------\nEjercicio 5. Slot Machine\n--------------------------------",
);

/**
 * El objetivo de este ejercicio es crear una máquina tragaperras utilizando clases donde cada vez que juguemos insertemos una moneda.
 * Cada máquina tragaperras (instancia) tendrá un contador de monedas que automáticamente se irá incrementando conforme vayamos jugando.
 * Cuando se llame al método play el número de monedas se debe incrementar de forma automática y debe generar tres booleanos aleatorios
 * que representarán el estado de las 3 ruletas. El usuario habrá ganado en caso de que los tres booleanos sean true, y por tanto
 * deberá mostrarse por consola el mensaje:
 *    "Congratulations!!!. You won <número de monedas> coins!!";
 * y reiniciar las monedas almacenadas, ya que las hemos conseguido y han salido de la máquina.
 * En caso contrario deberá mostrar otro mensaje:
 *    "Good luck next time!!".
 *
 **/

class SlotMachine {
  credit = 0;

  getRandom() {
    return Math.round(Math.random() * 1);
  }

  play() {
    this.credit++;
    const roulettes = [this.getRandom(), this.getRandom(), this.getRandom()];
    const result = roulettes.every((roulette) => roulette === 1);
    if (result) {
      console.log(
        roulettes,
        ` - Congratulations!!!. You won ${this.credit} coins!!`,
      );
      this.credit = 0;
    } else {
      console.log(roulettes, " - Good luck next time!!");
    }
  }
}

const machine1 = new SlotMachine();
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Congratulations!!!. You won 3 coins!!"
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Congratulations!!!. You won 2 coins!!"
