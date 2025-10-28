let quotes = [ // Objekt

    { quote: 'Technology is anything that wasn\'t around when you were born.', author: 'Alan Kay', profession: 'Computer Scientist', image:' src/images/alanKay.webp' },
    { quote: 'Any sufficiently advanced technology is equivalent to magic.', author: 'Arthur C. Clarke', profession: 'Author', image:'src/images/arthurCClarke.webp' },
    { quote: 'All of the biggest technological inventions created by man - the airplane, the automobile, the computer - says little about his intelligence, but speaks volumes about his laziness.', author: 'Mark Kennedy', profession: 'Author', image:'src/images/markKennedy.webp '  },
    { quote: 'Just because something doesn\'t do what you planned it to do doesn\'t mean it\'s useless.', author: 'Thomas Edison', profession: 'Inventor', image:'src/images/thomasEdison.webp'  },
    { quote: 'It has become appallingly obvious that our technology has exceeded our humanity.', author: 'Albert Einstein', profession: 'Scientist', image:'src/images/albertEinstein.webp'  },
    { quote: 'One machine can do the work of fifty ordinary men. No machine can do the work of one extraordinary man.', author: 'Elbert Hubbard', profession: 'Author', image:'src/images/elbertHubbard.webp'  },
    { quote: 'Technology is a word that describes something that doesn\'t work yet.', author: 'Douglas Adams', profession: 'Author', image:' src/images/alanKay.webp'  },
    { quote: 'Humanity is acquiring all the right technology for all the wrong reasons.', author: 'R. Buckminster Fuller', profession: 'Inventor and Author', image:' src/images/alanKay.webp'  },
    { quote: 'I think that novels that leave out technology misrepresent life as badly as Victorians misrepresented life by leaving out sex.', author: 'Kurt Vonnegut', profession: 'Author', image:' src/images/alanKay.webp' },
    { quote: 'We are stuck with technology when what we really want is just stuff that works.', author: 'Douglas Adams', profession: 'Author', image:' src/images/alanKay.webp' },
    { quote: 'The human spirit must prevail over technology.', author: 'Albert Einstein', profession: 'Scientist', image:' src/images/alanKay.webp' },
    { quote: 'The great myth of our times is that technology is communication.', author: 'Libby Larsen', profession: 'Composer', image:' src/images/alanKay.webp' },
    { quote: 'You cannot endow even the best machine with initiative; the jolliest steamroller will not plant flowers.', author: 'Walter Lippmann', profession: 'Author', image:' src/images/alanKay.webp' },
    { quote: 'If we continue to develop our technology without wisdom or prudence, our servant may prove to be our executioner.', author: 'Omar Bradley', profession: 'General, US Army', image:' src/images/alanKay.webp' },
    { quote: 'Technology made large populations possible; large populations now make technology indispensable.', author: 'Joseph Krutch', profession: 'Writer', image:' src/images/alanKay.webp' },
    { quote: 'This is the whole point of technology. It creates an appetite for immortality on the one hand. It threatens universal extinction on the other. Technology is lust removed from nature.', author: 'Don DeLillo', profession: 'Author', image:' src/images/alanKay.webp' },
    { quote: 'The art challenges the technology, and the technology inspires the art.', author: 'John Lasseter', profession: 'Director', image:' src/images/alanKay.webp' },
    { quote: 'The real danger is not that computers will begin to think like men, but that men will begin to think like computers.', author: 'Sydney Harris', profession: 'Journalist', image:' src/images/alanKay.webp' },
    { quote: 'Science and technology revolutionize our lives, but memory, tradition and myth frame our response.', author: 'Arthur Schlesinger', profession: 'Historian', image:' src/images/alanKay.webp' },
    { quote: 'AI will not replace humans, but those who use AI will replace those who don\'t.', author: 'Ginni Rometty', profession: 'Former CEO of IBM', image:' src/images/alanKay.webp' },
    { quote: 'The Analytical Engine has no pretensions whatever to originate anything. It can do whatever we know how to order it to perform.', author: 'Ada Lovelace', profession: 'Mathematician and First Programmer', image:' src/images/alanKay.webp' },
    { quote: 'That brain of mine is something more than merely mortal; as time will show.', author: 'Ada Lovelace', profession: 'Mathematician and First Programmer', image:' src/images/alanKay.webp' },
    { quote: 'Mathematical science shows what is. It is the language of unseen relations between things.', author: 'Ada Lovelace', profession: 'Mathematician and First Programmer', image:' src/images/alanKay.webp' },
    { quote: 'I never am really satisfied that I understand anything; because, understand it well as I may, my comprehension can only be an infinitesimal fraction of all I want to understand.', author: 'Ada Lovelace', profession: 'Mathematician and First Programmer', image:' src/images/alanKay.webp' },
    { quote: 'The science of operations, as derived from mathematics more especially, is a science of itself, and has its own abstract truth and value.', author: 'Ada Lovelace', profession: 'Mathematician and First Programmer', image:' src/images/alanKay.webp'  },
    { quote: 'We may say most aptly that the Analytical Engine weaves algebraical patterns just as the Jacquard loom weaves flowers and leaves.', author: 'Ada Lovelace', profession: 'Mathematician and First Programmer', image:' src/images/alanKay.webp'  },
    { quote: 'The most dangerous phrase in the language is, "We\'ve always done it this way."', author: 'Grace Hopper', profession: 'Computer Scientist and Naval Officer', image:' src/images/alanKay.webp'  },
    { quote: 'A ship in port is safe, but that\'s not what ships are built for.', author: 'Grace Hopper', profession: 'Computer Scientist and Naval Officer', image:' src/images/alanKay.webp'  },
    { quote: 'If it\'s a good idea, go ahead and do it. It\'s much easier to apologize than it is to get permission.', author: 'Grace Hopper', profession: 'Computer Scientist and Naval Officer', image:' src/images/alanKay.webp'  },
    { quote: 'Humans are allergic to change. They love to say, "We\'ve always done it this way." I try to fight that.', author: 'Grace Hopper', profession: 'Computer Scientist and Naval Officer', image:' src/images/alanKay.webp'  },
    { quote: 'The only phrase I\'ve ever disliked is, "Why, we\'ve always done it that way." I always tell young people, "Go ahead and do it. You can always apologize later."', author: 'Grace Hopper', profession: 'Computer Scientist and Naval Officer', image:' src/images/alanKay.webp'  },
    { quote: 'To me programming is more than an important practical art. It is also a gigantic undertaking in the foundations of knowledge.', author: 'Grace Hopper', profession: 'Computer Scientist and Naval Officer', image:' src/images/alanKay.webp'  },
    { quote: 'Looking back, we were the luckiest people in the world. There was no choice but to be pioneers.', author: 'Margaret Hamilton', profession: 'Computer Scientist and Systems Engineer', image:' src/images/alanKay.webp'  },
    { quote: 'Software during the early days of this project was treated like a stepchild and not taken as seriously as other engineering disciplines.', author: 'Margaret Hamilton', profession: 'Computer Scientist and Systems Engineer', image:' src/images/alanKay.webp'  },
    { quote: 'It quickly became clear that software was not just another thing, but a whole new engineering discipline.', author: 'Margaret Hamilton', profession: 'Computer Scientist and Systems Engineer', image:' src/images/alanKay.webp'  },
    { quote: 'There was no choice but to be pioneers; no time to be beginners.', author: 'Margaret Hamilton', profession: 'Computer Scientist and Systems Engineer', image:' src/images/alanKay.webp'  }
]

function getRandomQuote() {
const randomIndex = Math.floor(Math.random() * quotes.length)
const randomQuote = quotes[randomIndex]
return randomQuote
}

const button = document.getElementById('quotebtn')

button.onclick = function() {
    const randomQuote = getRandomQuote()
}

// Vänta tills DOM:en är laddad
window.onload = function() {
    const button = document.getElementById('quotebtn')

    button.onclick = function() {
        const randomQuote = getRandomQuote()
        
        document.getElementById('quote-text').textContent = randomQuote.quote
        document.getElementById('author-name').textContent = randomQuote.author
        document.getElementById('author-profession').textContent = randomQuote.profession
        document.getElementById('author-image').src = randomQuote.image
        document.getElementById('author-image').alt = randomQuote.author
    }
}