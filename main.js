function month_string(month_number) {
  switch (month_number) {
    case 1:
      return "Janvier";
      break;
    case 2:
      return "Février";
      break;
    case 3:
      return "Mars";
      break;
    case 4:
      return "Avril";
      break;
    case 5:
      return "Mai";
      break;
    case 6:
      return "Juin";
      break;
    case 7:
      return "Juillet";
      break;
    case 8:
      return "Août";
      break;
    case 9:
      return "Septembre";
      break;
    case 10:
      return "Octobre";
      break;
    case 11:
      return "Novembre";
      break;
    case 12:
      return "Décembre";
      break;
    default:
      return "Veuillez utilser un nombre entre 1 et 12";
  }
}
function today_string() {
  let this_date = today.getDate(),
    this_month = month_string(today.getMonth() + 1),
    this_year = today.getFullYear();
  switch (today.getDay()) {
    case 0:
      return "Dimanche" + " " + this_date + " " + this_month + " " + this_year;
      break;
    case 1:
      return "Lundi" + " " + this_date + " " + this_month + " " + this_year;
      break;
    case 2:
      return "Mardi" + " " + this_date + " " + this_month + " " + this_year;
      break;
    case 3:
      return "Mercredi" + " " + this_date + " " + this_month + " " + this_year;
      break;
    case 4:
      return "Jeudi" + " " + this_date + " " + this_month + " " + this_year;
      break;
    case 5:
      return "Vendredi" + " " + this_date + " " + this_month + " " + this_year;
      break;
    case 6:
      return "Samedi" + " " + this_date + " " + this_month + " " + this_year;
      break;
    default:
      return "Error";
  }
}
let today = new Date();
let month_number_asked = parseInt(prompt("Quel mois voulez vous connaitre ?"));
console.log(month_string(month_number_asked));
console.log(today_string());
