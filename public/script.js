var quotations = [
    { quotation: "\"If they can get you asking the wrong questions, they don't have to worry about answers.\"", author: "Thomas Pynchon"},
    { quotation: "\"We judge others by their actions and ourselves by our intentions.\"", author: "Henry Wadsworth Longfellow"},
    { quotation: "\"Life is a tragedy when seen in close-up, but a comedy in a long-shot.\"", author: "Charlie Chaplin"},
    { quotation: "\"Sometimes you never realize the value of a moment until it becomes a memory.\"", author: "Dr. Seuss"},
    { quotation: "\"If you do it now, you'll never run out of time.\"", author: ""},
    { quotation: "\"A ship in harbor is safe, but that's not why ships are built.\"", author: ""},
    { quotation: "\"Another flaw in the human character is that everyone wants to build and nobody wants to do maintenance.\"", author: "Kurt Vonnegut"},
    { quotation: "\"If you find yourself in a fair fight, you should reexamine your tactics.\"", author: ""},
    { quotation: "\"When you do things right, people won't be sure you've done anything at all.\"", author: ""},
    { quotation: "\"Right and wrong are just words. What matters is what you do.\"", author: ""},
    { quotation: "\"What do they call the person who graduated last in his class in med school? Doctor.\"", author: ""},
    { quotation: "\"A dream is not that which you see while sleeping, it is something that does not let you sleep.\"", author: "APJ Abdul Kalam"},
    { quotation: "\"There are 1,000 lessons in defeat, but only one in victory.\"", author: "Confucius"},
    { quotation: "\"Life isn't about finding yourself. Life is about creating yourself.\"", author: "George Bernard Shaw"},
    { quotation: "\"Silence is part of the music and our love was an orchestra.\"", author: ""},
    { quotation: "\"Worry is a misuse of imagination.\"", author: ""},
    { quotation: "\"The bigger the mountain, the better the view.\"", author: ""},
    { quotation: "\"No one can make you feel inferior without your consent.\"", author: "Eleanor Roosevelt"},
    { quotation: "\"We all make choices, but in the end, our choices make us.\"", author: "Andrew Ryan"},
    { quotation: "\"If you are depressed, you live in the past. If you are anxious, you live in the future. If you are at peace, you live in the present.\"", author: "Lao Tzu"},
    { quotation: "\"Time you enjoy wasting, was not wasted.\"", author: "John Lennon"},
    { quotation: "\"If you are looking for a sign to not chase the darkness, this is it.\"", author: ""},
    { quotation: "\"In the end, we will remember not the words of our enemies, but the silence of our friends.\"", author: "Martin Luther King Jr."},
    { quotation: "\"Tact is the knack of making a point without making an enemy.\"", author: "Isaac Newton"},
    { quotation: "\"Never give up on a dream just because of the time it will take to accomplish it. The time will pass anyway.\"", author: "Earl Nightingale"},
    { quotation: "\"People don't love you the way they should, or the way you want them to, but the way they can.\"", author: ""},
    { quotation: "\"If you always do what you've always done, you'll always get what you always got.\"", author: ""},
    { quotation: "\"Good judgement comes from experience and experience comes from bad judgement.\"", author: ""},
    { quotation: "\"Never believe that a few caring people cannot change the world. For, indeed, that's all who ever have.\"", author: "Margaret Mead"},
    { quotation: "\"It's okay to grieve for the future you stole from yourself.\"", author: ""},
    { quotation: "\"Intelligence without ambition is a bird without wings.\"", author: "Salvador Dali"},
    { quotation: "\"If you hear a voice within you say 'You cannot paint,' then by all means paint, and that voice will be silenced.\"", author: "Vincent Van Gogh"},
    { quotation: "\"Truth is not diminished by the inadequacies of those who speak it.\"", author: ""},
    { quotation: "\"People can only treat you as poorly as you let them.\"", author: ""},
    { quotation: "\"There is no progress without struggle.\"", author: "Frederick Douglass"},
    { quotation: "\"In three words, I can sum up everything I've learned about life: it goes on.\"", author: "Robert Frost"},
    { quotation: "\"There are two ways of being happy: We must either diminish our wants or augment our means - either may do - the result is the same and it is for each man to decide for himself and to do that which happens to be easier.\"", author: "Benjamin Franklin"},
    { quotation: "\"Everything you like today, you've tried before.\"", author: ""},
    { quotation: "\"What a wonderful thought it is that some of the best days of our lives haven't happened yet.\"", author: ""},
    { quotation: "\"Life doesn't have to be what everyone else tells you it is.\"", author: ""},
    { quotation: "\"If you want something you've never had, you will have to do something you've never done.\"", author: ""},
    { quotation: "\"A goal is a dream with a deadline.\"", author: ""},
    { quotation: "\"You did then what you knew how to do, and when you knew better you did better.\"", author: ""},
    { quotation: "\"Don't tell people your plans. Show them your results.\"", author: ""},
    { quotation: "\"A goal is a dream with a deadline.\"", author: ""},
    { quotation: "\"Courage is resistance to fear, mastery of fear, not absence of fear.\"", author: "Mark Twain"},
    { quotation: "\"You are a child of the universe. No less than the trees and the stars – you have a right to be here.\"", author: ""},
    { quotation: "\"What you do makes a difference, and you have to decide what kind of difference you want to make.\"", author: "Jane Goodall"},
    { quotation: "\"Learn from the mistakes of others. You can’t live long enough to make them all yourself.\"", author: "Eleanor Roosevelt"},
    { quotation: "\"A surplus of effort could overcome a deficit of confidence.\"", author: "Sonia Sotomayor"},
    { quotation: "\"The way you tell your story to yourself matters.\"", author: "Amy Cuddy"},
    { quotation: "\"Courage starts with showing up and letting ourselves be seen.\"", author: "Brené Brown"},
    { quotation: "\"Remember, no effort that we make to attain something beautiful is ever lost.\"", author: "Helen Keller"},
    { quotation: "\"The most difficult thing is the decision to act, the rest is merely tenacity.\"", author: "Amelia Earhart"},
    { quotation: "\"Good character, like soup, is usually homemade.\"", author: ""},
    { quotation: "\"If your life can change once, your life can change again.\"", author: "Sanae Furukawa"},
    { quotation: "\"Good character, like soup, is usually homemade.\"", author: ""}]


function getLocalStorageDate() {
    var item = localStorage.getItem("date");
    if (item == null || item.length == 0){
        var date = new Date();
        date.setDate(date.getDate() - 1);
        date.setHours(0,0,0,0);
        return date;
    } else {
        var date = localStorage.getItem("date");
        return date;
    }
};

async function getStoredDate() {
    const result = await fetch('/date').then(res => res.json()).catch(error => console.log('ERROR'));
    let timestamp = result[0]["timestamp"];
    return timestamp;
}

var storageDate = getLocalStorageDate();
const stored_date = getStoredDate();
console.log(stored_date);
// const date = new Date(previous_date * 1000);

var currentDate = new Date();
currentDate.setHours(0,0,0,0);

// console.log("The stored date is: "+date+". The current date is: "+currentDate+".");

let date_valid = stored_date < currentDate;
// console.log("The stored date is less than the current date: "+date_valid);

var randomQuotation = "";

if (storageDate < currentDate) {
    randomQuotation = quotations[Math.floor(Math.random()*quotations.length)]["quotation"].trim();
    localStorage.setItem("randomQuotation",randomQuotation);
    localStorage.setItem("date", new Date());
} else {
    randomQuotation = localStorage.getItem("randomQuotation");
}

document.getElementById("quotation").innerHTML = randomQuotation;



