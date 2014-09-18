wof.aspects = {};

wof.aspects.random = {};
/*
type 1
 Significant personality traits or beliefs (Sucker for a Pretty Face, Never Leave a Man Behind, The Only Good Tsyntavian Is a Dead Tsyntavian).
 */
/*
 type 2
 The character’s background or profession (Educated at the Academy of Blades, Born a Spacer, Cybernetic Street Thief).
 */
/*
 type 3
 An important possession or noticeable feature (My Father’s Bloodstained Sword, Dressed to the Nines, Sharp Eyed Veteran).
 */
/*
 type 4
 Relationships to people and organizations (In League with the Twisting Hand, The King’s Favor, Proud Member of the Company of Lords).
 */
/*
 type 5
 Problems, goals, or issues the character is dealing with (A Price on My Head, The King Must Die, Fear of Heights).
 */
/*
 type 6
 Titles, reputations, or obligations the character may have (Self-Important Merchant Guildmaster, Silver-Tongued Scoundrel, Honor-Bound to Avenge My Brother).
 */

/*
   class 1
 "I am an [adjective] [noun] who [verbs]"
 */
wof.aspects.random.class1 = function() {
    return "I am a/an " + jsrpg.random.adjective() + " " + jsrpg.random.noun() + " who " + jsrpg.random.verb() + "s";
};