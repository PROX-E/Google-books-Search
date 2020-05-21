const mongoose = require("mongoose");
const db = require("../models");

// Empties the Books collection and inserts the books below

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/googlebooks"
);

const bookSeed = {
    authors: ["Jeff Hirsch"],
    description: "In the aftermath of a war, America’s landscape has been ravaged and two-thirds of the population left dead from a vicious strain of influenza. Fifteen-year-old Stephen Quinn and his family were among the few that survived and became salvagers, roaming the country in search of material to trade. But when Stephen’s grandfather dies and his father falls into a coma after an accident, Stephen finds his way to Settler’s Landing, a community that seems too good to be true. Then Stephen meets strong, defiant, mischievous Jenny, who refuses to accept things as they are. And when they play a prank that goes horribly wrong, chaos erupts, and they find themselves in the midst of a battle that will change Settler’s Landing--and their lives--forever",
    image: "http://books.google.com/books/content?id=sazytgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    link: "http://books.google.com/books?id=sazytgAACAAJ&dq=title:The+Eleventh+Plague&hl=&source=gbs_api",
    title: "The Eleventh Plague",
}
