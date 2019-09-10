class Wallet {
 constructor(money) {
  let _money = money;
  //Downloading current wallet content
  this.getWalletValue = () => _money;

  //Checking if the user has sufficient funds

  this.checkCanPlay = value => {
   if (_money >= value) return true;
   return false;
  }

  this.changeWallet = (value, type = "+") => {
   if (typeof value === "number" && !isNaN(value)) {
    if (type === "+") {
     return _money += value;
    } else if (type === "-") {
     return _money -= value;
    } else {
     throw new Error("nieprawidłowy typ działania")
    }

   } else {
    console.log(typeof value);
    throw new Error("nieprawdidłowa liczba")
   }
  }

 }

}

// const wallet = new Wallet(200)