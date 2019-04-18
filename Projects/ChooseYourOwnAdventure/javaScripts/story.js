	var pages =
		{
			//This is how everything should be formatted. All fields are optiomal, it doesn't matter how much you put into each fields, they'll
			//all be handled easily.
			0: //Page number.
				{
					title: "", //The title to be displayed over everything.
					story: //The story. To add space breaks between texts, simply do "Blah blah", "Blah blahy",
						[
						],
					choices: //What will be displayed in the select bar. If this is left blank, "STORY OVER" will be displayed instead of choices.
						[
						],
					goTo: //What pages the selection takes you to. IE; if clicking on choices[1], you're taken to page[1].
						[
						],
					image: "" //This can be gifs, pngs, whatever. Displays under everything.
				},
				
			1: 	{
				title: "HOW TO PLAY",
				story: 
					[
						'In Murder at Colefax Manor, you play a detective, whose job is to explore the titular manor and solve the mystery of who killed Mister Ludwick.', 
						'This book is divided up into sections that you\'ll be taken to when you make your choices. At the end of each section, you are given some choices on what to do next. When you have decided what to do, select your choice from the select drop-down menus. If you change your mind, you can scroll up and change your choices. (This makes it less fun, through!)',
						'As part of your investigations, you need to keep track of any clues you find. For this purpose, use the Detective\'s Notebook, which can be pulled out by clicking the button in the upper-left corner of the browser window, and click any boxes or information when instructed to. You can also type down any suspicions or thoughts you have on potential suspects in the Detective\'s Notebook, which might help you decide if you want to make an arrest.',
						'What you save in the detective notebook will be saved on your device via cookies/localStorage, so when you come back, your notes won\'t be lost.'
					],
					
				choices: 
					[
						"Start the adventure!", 
					], 
					goTo: 
					[
						1
					],
					image: "./media/MurderAtColefaxManor.png"
				},
				
				2:
				{
					title: "MURDER AT COLEFAX MANOR",
					story:
						[
							'It is a dark and morose night in the midst of October when you receive a report of a murder at Colefax Manor. You were about to leave Dunstow Police Station and retire to your meagre lodgings for the eve, but duty takes precedence, and so you soon find yourself in a hansom cab, heading along the winding coastal road towards the outlaying manor.',
							'Though distinctly visible atop a jutting promontory from far along the coast, the elegant grandeur of Colefax Manor can only be properly appreciated as the cab trundles off the dirt road and onto the gravel path that leads up to the entrance. Even by the poor light of the waning moon, the stately home\'s immaculate grounds and impressive limestone facade stand out proudly amidst the rest of the countryside',
							'At the bottom of the stairs leading up to the towering front doors is a bespectacled man in his seventies – a high-ranking servant, by his garb and posture – who waits patiently as your transport comes to a complete halt. The moment you have descended from the cab, the driver cracks his whip and the horse jumps into motion once more, swiftly drawing the cab off, down the road leading out from the estate. The servant, who may as well have been a statue for his stiff pose, steps forward and inclines his head politely to you.',
							'"Detective Barns. It is good of you to come at such a late hour. I am Mister Blackwood, butler to Lord Colefax."'
						],
					choices:
						[
							'Ask to be taken to the body',
							'Ask to see Lord Colefax',
							'Dismiss the butler'
						],
					goTo:
						[
							314,
							126,
							232
						],
					image: "./media/butler.jpg"
				},
				
				3:
				{
					title: "", 
					story:
						[
							'The wound that no doubt killed Mister Ludwick is most unpleasant. It would appear that the victim was stabbed several times, before the murderer gutted him with a serrated blade, going by a closer examination of the lacerated flesh, starting at his navel and proceeding up to his sternum. The sight and stench of his ruptured vital organs are repulsive enough to dissuade you from further investigation, though there it is more than likely that there is little more to learn from the wounds themselves.',
							'Add Clue 11 \'Wounds\' to the detective\'s notebook.'
						],
					choices:
						[
							'Continue'
						],
					goTo:
						[
							18
						],
					image: "./media/censored.png"
				},
				
				4:
				{
					title: "", 
					story:
						[
							'You kneel down and peer through the keyhole. You spy what looks oddly like a medieval church of sorts, with wooden pews, hewn stone walls, and a distant altar.'
						],
					choices:
						[
							'Step back from the keyhole'
						],
					goTo:
						[
							153
						],
					image: "./media/doorhole.jpg"
				},
				
				5:
				{
					title: "", 
					story:
						[
							'"Mister McFadyen?" you ask, speaking loud and clear enough to jolt the gamekeeper from his somnolent reverie. "My name is Detective Barns, with the Cornwall County Constabulary. I\'d like to you ask you a few questions."',
							'"Ask away, officer, ask away," McFadyen replies, nodding good-naturedly from his seat.'
						],
					choices:
						[
							'You\'ve already met McFadyen.',
							'Enquire about clues',
							'Enquire about the case',
							'Return to your investigations'
						],
					goTo:
						[
							333,
							179,
							167,
							304
						],
					image: ""
				},
				
				6:
				{
					title: "", 
					story:
						[
							'You write out a proposal that McFadyen is guilty, due to his previous experience with using morphine, the syringe in Lord Colefax\'s study showing signs of recent use, a corresponding puncture wound found upon the victim, and his disgruntled letter to Lord Colefax, which you then combine to form the theory that McFadyen drugged Ludwick, before murdering him, as an act of revenge against Lord Colefax.'
						],
					choices:
						[
							'Choose again',
							'Commit'
						],
					goTo:
						[
							152,
							146
						],
					image: ""
				},
				
				7:
				{
					title: "", 
					story:
						[
							'Once the prow of the rowboat finally embeds itself into the sandy shoreline, you step out of the boat and breathe a sigh of relief.'
						],
					choices:
						[
							'Box 5 is ticked.',
							'Continue'
						],
					goTo:
						[
							293,
							274
						],
					image: ""
				},
				
				8:
				{
					title: "", 
					story:
						[
							'Three ledgers are stacked up on the scratched desk, each one dealing with a different matter of the manor: deliveries, expenses, and stock. An examination of each ledger fails to bring with it any curious or interesting finds, instead appearing to just be typical of such an estate; food deliveries, staff wages, stock counts, and so forth.'
						],
					choices:
						[
							'Set the ledgers down'
						],
					goTo:
						[
							284
						],
					image: "./media/ledger.jpg"
				},
				
				9:
				{
					title: "", 
					story:
						[
							'The coal cellar is pretty much exactly what it says on the tin. A long, low room containing what must be several tons of black coal. The possibility of anything of interest being hidden amidst the coal is beyond slim-tonone and searching for clues would no doubt result in you looking like you are about to audition for a part in a minstrel show.'
						],
					choices:
						[
							'Enter the service passage'
						],
					goTo:
						[
							50
						],
					image: ""
				},
				
				10:
				{
					title: "", 
					story:
						[
							'"Actually, I need to go over my notes some more before I can make that decision."',
							'"Very good, detective. Let me know as soon as you have settled on a suspect."',
							'The line goes dead and you put the receiver back onto the hook.'
						],
					choices:
						[
							'Step back from the phone '
						],
					goTo:
						[
							191
						],
					image: ""
				},
				
				11:
				{
					title: "", 
					story:
						[
							'It\'s hard to see very far at all in the low passageway, due to the complete lack of lighting. In fact, you can barely see in front of your nose. It is probably not wise to explore without a light source at hand.'
						],
					choices:
						[
							'Box 1 is ticked.',
							'Leave the service passage',
							'Venture forth regardless'
						],
					goTo:
						[
							50,
							276,
							74
						],
					image: ""
				},
				
				12:
				{
					title: "", 
					story:
						[
							'The length of rope attached to the rowboat is thick and the knot that keeps it from being tugged away by the tide is thicker still. There\'s no way you can hope to untie the knot.'
						],
					choices:
						[
							'Box 4 is ticked.',
							'Continue'
						],
					goTo:
						[
							34,
							87
						],
					image: ""
				},
				
				13:
				{
					title: "", 
					story:
						[
							'"I think he and Colefax were supposed to go way back. \'Old Cambridge fellows\' and all that," he says, briefly imitating an upper class accent. "He comes over once every couple of years and they party it up; that\'s why I\'ve got so many dishes to do."'
						],
					choices:
						[
							'Continue'
						],
					goTo:
						[
							242
						],
					image: ""
				},
				
				14:
				{
					title: "", 
					story:
						[
							'"I don\'t know. I found.... Mister Ludwick at about... I think it was ten o\'clock. The last time I saw him before... what happened... must have been when he went up to bed and I passed him at the great staircase. I think he retired at about half eight, but I\'m afraid I can\'t be certain."'
						],
					choices:
						[
							'Continue'
						],
					goTo:
						[
							56
						],
					image: ""
				},
				
				15:
				{
					title: "", 
					story:
						[
							'You pick up the small leather book and start flicking through it. It appears to be a mixture of a journal and a ledger. At the front is a chart, listing several names you don\'t recognise, along with that of Lord Colefax, McFadyen, Skinner, and Blackwood, a corresponding list of tallies under a column labelled \'sacrifices\'. A number of notes fill the following pages, with the most recent one being Lord Colefax listing his annoyance that Prismall found Ludwick\'s body before Blackwood could remove it, and called the police before they could stop her, along with a note to bring her down to the tunnels as the next sacrifice.',
							'Towards the back of the journal is a detailed plan to plant large caches of dynamite underneath the city of Redford and then simultaneously detonate them, as an act of grand sacrifice to something called Legrys Mor.',
							'Tick Box 5 in the detective\'s notebook.'
						],
					choices:
						[
							'Set down the book'
						],
					goTo:
						[
							235
						],
					image: ""
				},
				
				16:
				{
					title: "",
					story:
						[
							'The half-finished letter, written in a scrawling script, reads:',
							'\'Dear Lord Colefax, I am afraid I must protest my recent use in transporting such volatile items as the ones involved in the recent delivery on the 2nd of October. While I am aware of the matter\'s sensitive nature, I afraid I shall have to refuse taking part such risky deliveries in future, especially as my gamekeeping duties are already\'',
							'The letter abruptly stops there. Some smudging around the final word suggests that the writer was abruptly interrupted.',
							'Add Clue 3 \'Letter\' to the detective\'s notebook.'
						],
					choices:
						[
							'Set the letter down'
						],
					goTo:
						[
							191
						],
					image: ""
				},
				
				17:
				{
					title: "",
					story:
						[
							'You write out a proposal that Prismall is guilty, due to having access to Ludwick and a lack of witnesses to attest to her alibi.'
						],
					choices:
						[
							'Choose again',
							'Commit'
						],
					goTo:
						[
							69,
							91
						],
					image: ""
				},
				
				18:
				{
					title: "",
					story:
						[
							'Blackwood looks exactly how one would expect the butler of an old manor to look: tall, thin as a rake, and possessing a funerary expression. He has receding white hair, a long nose, and blue eyes somehow colder than that of the bust he is polishing. He is dressed in a grey silk waistcoat, a long-sleeved white shirt with long cuffs, a ruffled grey ascot, a black tailcoat, matching trousers, white spats, and a pair of highly-polished black shoes. If he were not actively breathing, one could easily mistake him as an escapee from a wax museum.'
						],
					choices:
						[
							'Continue'
						],
					goTo:
						[
							289
						],
					image: ""
				},
				
				19:
				{
					title: "",
					story:
						[
							'The poor unfortunate soul that was Mister Ludwick looks to be in a terrible state. A bloody vertical tear stretches across his torso, there are signs of trauma around his neck, his skin has already began to grow pale. He is dressed in a pair of dark cotton pyjamas, the pattern of which is hard to make out due to the amount of blood, which suggests he was either actively in bed or preparing for bed at the time of the murder. Despite his violent demise, there doesn\'t appear to have been much of a struggle.'
						],
					choices:
						[
							'Examine his head',
							'Examine his limbs',
							'Examine his torso',
							'Return to your investigations'
						],
					goTo:
						[
							36,
							332,
							2,
							233
						],
					image: ""
				},
				
				20:
				{
					title: "",
					story:
						[
							'The lumber store is a neat room filled with, as the name might suggest, wood ready to be used for fireplaces. The lumber itself is stacked up against the wall and divided into sections by small brick walls, with each based upon the size of the wood present, ranging from small sticks to logs over a meter in length.'
						],
					choices:
						[
							'Enter the service passage'
						],
					goTo:
						[
							50
						],
					image: ""
				},
				
				21:
				{
					title: "",
					story:
						[
							'You find yourself in what appears to be a stone temple, with a slightly raised ceiling, row upon row of ebony pews, and a distant altar down the middle of a central aisle. The distinctly church-like style of the room is made unsettling by the lack of the usual stained glass windows and crosses. At the far end of the hall, a few meters behind the altar, is what appears to be a spiral stone staircase, much like the sort one finds in castles, leading down.'
						],
					choices:
						[
							'Descend the staircase',
							'Examine the altar',
							'Return to the junction'
						],
					goTo:
						[
							317,
							59,
							88
						],
					image: ""
				},
				
				22:
				{
					title: "",
					story:
						[
							'Try as you might, you are unable to get the hidden door to open again, and are rewarded with a broken fingernail while attempting to pull it open.'
						],
					choices:
						[
							'Continue'
						],
					goTo:
						[
							262
						],
					image: ""
				},
				
				23:
				{
					title: "",
					story:
						[
							'The titular great staircase is a stone affair that clings to the edges of an open-plan square room, the steps of which are laden with crimson carpet, leading to the upper floor of the manor. A variety of paintings adorn the green papered walls, ranging from landscapes to portraits of severe-looking figures, while the floor space is occupied by a table and four chairs, the former of which bears a couple of books and a pair of eyeglasses, and two dressers, displaying fine crockery.'
						],
					choices:
						[
							'Ascend the staircase',
							'Enter the billiard room',
							'Enter the main hall',
							'Enter the parlour',
							'Examine the books',
						],
					goTo:
						[
							324,
							217,
							257,
							225,
							123
						],
					image: ""
				},
				
				24:
				{
					title: "",
					story:
						[
							'"During my investigations, I came across a half-finished letter from your gamekeeper McFadyen, complaining that it is \'not his job\' to risk his life over handling a dangerous delivery. What is this delivery he speaks of?"',
							'"I recently decided to donate some of my chemicals to a Bymarsh Asylum," Lord Colefax explains, pausing to take a sip from a glass of wine. "Acids, ether, nitrous oxide... that sort of thing. As Blackwood is too old to be handling heavy goods, I instructed McFadyen to take them down from my study and to the coach. I can only assume he was worried they might explode or something; you know what commoners are like in regards to knowledge about chemicals."'
							
						],
					choices:
						[
							'Continue'
						],
					goTo:
						[
							213
						],
					image: ""
				},
				
				25:
				{
					title: "",
					story:
						[
							'"I found this list while exploring the manor," you say, passing the list of strange instructions to the gamekeeper. "Do they make any sense to you?"',
							'McFadyen stares down at the piece of paper for several long seconds, squinting in the dim light, before eventually shaking his head and passing the paper back to you.'
						],
					choices:
						[
							'Continue'
						],
					goTo:
						[
							179
						],
					image: ""
				},
				
				26:
				{
					title: "",
					story:
						[
							'"I would like to request police assistance to Colefax Manor, Dunstow, for the apprehension of a suspected murderer."',
							'"Very good, detective." The sound of a scribbling pencil can be heard. "Who is the suspect?"'
						],
					choices:
						[
							'Arrest Blackwood',
							'Arrest Lord Colefax',
							'Arrest McFadyen',
							'Arrest Prismall',
							'Arrest Skinner',
							'Back out'
						],
					goTo:
						[
							172,
							220,
							86,
							94,
							175,
							9
						],
					image: ""
				},
				
				27:
				{
					title: "",
					story:
						[
							'The wine cellar, contrary to its name, appears to store more than just fine vintages of grape. The iconic diamond latticework so often used to store wine en masse is present in rows along the front half of the room, stacking selections of imported whites, reds, and roses, while the back half of the room is devoted to barrels branded with the marks of local brewers of assorted ales and ciders.'
						],
					choices:
						[
							'Enter the service passage'
						],
					goTo:
						[
							50
						],
					image: ""
				},
				
				28:
				{
					title: "",
					story:
						[
							'Without your keen intellect, the mystery of who committed the murder at Colefax Manor will be forever left unsolved.',
							'If any of the Boxes 4 through 8 in the detective’s notebook are ticked, remove them.'
						],
					choices:
						[
							'Try again',
							'Give up'
						],
					goTo:
						[
							262,
							336
						],
					image: ""
				},
				
				29:
				{
					title: "",
					story:
						[
							'"Do you know why someone might have used any syringes from the study recently?"',
							'Prismall shakes her head.'
						],
					choices:
						[
							'Continue'
						],
					goTo:
						[
							98
						],
					image: ""
				},
				
				30:
				{
					title: "",
					story:
						[
							'You open the door and find yourself in a dingy stone room, filled with medieval torture devices and one very unfriendly-looking bald man who was, up until you entered, sharpening a knife. The countless tortures that you experience over the next several weeks make death a relief when it comes.'
						],
					choices:
						[
							'Continue'
						],
					goTo:
						[
							143
						],
					image: ""
				},
				
				31:
				{
					title: "",
					story:
						[
							'The chief inspector approves of your proposal and promptly starts proceedings to arrange a court case. Partway through the month of November, Blackwood\'s case comes up and the jury renders a guilty verdict within a matter of hours. According to the papers the following week, when Blackwood was led up to the gallows in Bodmin Gaol, he went quietly and declined to give any last words.'
						],
					choices:
						[
							'Continue'
						],
					goTo:
						[
							247
						],
					image: ""
				},
				
				32:
				{
					title: "",
					story:
						[
							'The chief inspector approves of your proposal and promptly starts proceedings to arrange a court case. Partway through the month of November, Skinner\'s case comes up and the jury renders a guilty verdict within a matter of hours. According to the papers the following week, when Skinner was led up to the gallows in Bodmin Gaol, he went cursing a blue streak and referred to you in most colourful language when asked for his last words'
						],
					choices:
						[
							'Continue'
						],
					goTo:
						[
							247
						],
					image: ""
				},
				
				33:
				{
					title: "",
					story:
						[
							'Use what you learned last night, including any clues you may have found, to write a proposal of Lord Colefax\'s guilt.'
						],
					choices:
						[
							'Suspicious alibi',
							'Use Clues 1, 6, and 10',
							'Use Clue 5',
							'Use Clues 5 and 11 '
						],
					goTo:
						[
							65,
							329,
							155,
							212
						],
					image: ""
				},
				
				34:
				{
					title: "",
					story:
						[
							'"Only as much as I have know any other guest to this manor," Blackwood replies stiffly. "He was polite, courteous, and took cares not to make a mess of things. For a butler, he was the epitome of the perfect guest."'
						],
					choices:
						[
							'Continue'
						],
					goTo:
						[
							270
						],
					image: ""
				},
				
				35:
				{
					title: "",
					story:
						[
							'You take the serrated dagger from your belt and start sawing away at the thick rope moors the boat to the jetty. After just over thirty seconds, the rope breaks away and you clamber into the small boat, causing it to bob and sway in the water, before then picking up the oars and starting to row.'
						],
					choices:
						[
							'Box 7 is ticked',
							'Continue'
						],
					goTo:
						[
							272,
							328
						],
					image: ""
				},
				
				36:
				{
					title: "",
					story:
						[
							'"We like to get together once a year to trade stories and look back upon our school days. Last year, I travelled to his lodgings in Cardiff, and this year, Ludwick came here to the manor."'
						],
					choices:
						[
							'Continue'
						],
					goTo:
						[
							218
						],
					image: ""
				},
				
				37:
				{
					title: "",
					story:
						[
							'Mister Ludwick was not attractive in life, by any extent or definition. He is a heavy-set man with a crooked nose, formerly ruddy cheeks, a heavy brow, and receding brown hair. Despite the ordeal he went through, there doesn\'t appear to be any obvious trauma to his face, though there are marks upon his neck and something odd about his wide, staring eyes.'
						],
					choices:
						[
							'Examine his eyes',
							'Examine his neck',
							'Stop examining the head'
						],
					goTo:
						[
							92,
							315,
							18
						],
					image: ""
				},
				
				38:
				{
					title: "",
					story:
						[
							'For some insane reason, you decide to once more approach the crate containing one stick of lit-and-soonto-explode dynamite and several hundred sticks of unlit-but-likewise-soon-to-explode dynamite.'
						],
					choices:
						[
							'Back away from the lit crate of dynamite'
						],
					goTo:
						[
							235
						],
					image: ""
				},
				
				39:
				{
					title: "",
					story:
						[
							'McFadyen appears to be fairly typical of one would expect an average gamekeeper to look like; tartan flat cap, dirty waistcoat, heavy trousers, and thick gumboots, encompassing a man in his early fifties with a protruding belly and stubble thick enough to plane a table. It is hard to get a decent approximation of a man when said man is fast asleep, but then one might have pause to wonder why he is at his post so late on such a chill night.'
						],
					choices:
						[
							'Continue'
						],
					goTo:
						[
							73
						],
					image: ""
				},
				
				40:
				{
					title: "",
					story:
						[
							'Even when just a matter of feet from the entrance, the crypt descends into utter blackness. You can\'t see your own nose, let alone the floor in front of your or anything of importance. It would most likely be a futile effort to explore without some form of light source.'
						],
					choices:
						[
							'Leave the crypt',
							'Venture forth regardless'
						],
					goTo:
						[
							264,
							64
						],
					image: ""
				},
				
				41:
				{
					title: "",
					story:
						[
							'One of the more recent books, Idylls of the King is in fairly good condition and, from a brief examination, appears to relate to Arthurian legend. Quite possibly an interesting read, though now would obviously not the best time to start.'
						],
					choices:
						[
							'Put the book back'
						],
					goTo:
						[
							137
						],
					image: ""
				},
				
				42:
				{
					title: "",
					story:
						[
							'"I found a map of Cornwall in your hidden study labelling four locations: Dunstow, Langston, Bymarsh, and Caer Shaw. What\'s that about?"',
							'"Well, to be honest, I was debating on purchasing a second property – a home-from-home, as it were – and I was considering houses in those areas. The reason for the secretive location is that I wouldn\'t want that servants stumbling upon it while cleaning my regular study, getting worried that I might be selling this place in exchange for another, and have no further use for them. Panic spreads fear among the ill-bred and their minds can do logic-defying somersaults that more civilised persons are impervious to even considering."'
						],
					choices:
						[
							'Continue'
						],
					goTo:
						[
							213
						],
					image: ""
				},
				
				43:
				{
					title: "",
					story:
						[
							'At the end of the northeast tunnel, you find yourself facing a dark wooden door marked with the word \'Tekter\'.'
						],
					choices:
						[
							'Open the door',
							'Peek through the keyhole',
							'Return to the junction'
						],
					goTo:
						[
							163,
							331,
							88
						],
					image: ""
				},
				
				44:
				{
					title: "",
					story:
						[
							'"I found some bottled chemicals in the study; do you know what they are for?"',
							'"I\'m afraid I don\'t know, detective; I do apologise," the maid says. "I\'ve not been working here for very long; only a couple of weeks or so."'
						],
					choices:
						[
							'Continue'
						],
					goTo:
						[
							98
						],
					image: ""
				},
				
				45:
				{
					title: "",
					story:
						[
							'"The victim was stabbed several times and appears to have been sliced open by a serrated weapon. Do you know of anything on the grounds that fits that description?"',
							'"Serrated, you say?" McFadyen asks, scratching his chin. "Some of the knives in the kitchen, perhaps, but that\'s about it."'
						],
					choices:
						[
							'Continue'
						],
					goTo:
						[
							179
						],
					image: ""
				},
				
				46:
				{
					title: "",
					story:
						[
							'Lord Colefax looks like the typical aristocrat: high cheekbones, receding hair that seems to have skipped the greying stage and gone straight towards white, and a nose one could use to cut cheese. He is wearing a black silk waistcoat, the tell-tale fob of a pocket watch dangling from one of the pockets, a long-sleeved white shirt with a flared collar, trousers that match his waistcoat in hue, if not in material, and a pair of immaculately-polished boots. He appears to be rather distracted, though that is only to be expected, upon discovering that a murder has taken place in one\'s house'
						],
					choices:
						[
							'Continue'
						],
					goTo:
						[
							225
						],
					image: ""
				},
				
				47:
				{
					title: "",
					story:
						[
							'The chef gestures at the small mountains of carefullystacked dishes, silver platters, cutlery, and goblets. "What do you think? Is there much more of this? I really want to get this done and shove off for the night."'
						],
					choices:
						[
							'Continue'
						],
					goTo:
						[
							242
						],
					image: ""
				},
				
				48:
				{
					title: "",
					story:
						[
							'Lord Colefax\'s copy of the Iliad appears to be wellworn and rather old. Upon flicking through it, you find that the book does bear a number of annotations in the margins, which, at the very least, shows that the aristocrat has a lack of respect for general book-keeping etiquette.'
						],
					choices:
						[
							'Put the book back'
						],
					goTo:
						[
							137
						],
					image: ""
				},
				
				49:
				{
					title: "",
					story:
						[
							'"I discovered an odd shoeprint in the study, covered in orange dust. Do you know what might have caused such a mark?"',
							'Prismall looks thoughtful for a moment. "It might have come from the crypt; the one containing to Lord Colefax\'s family. I went there a few days ago to place some flowers outside and I stepped in a puddle of orange water. I don\'t know if it was because of rust, but it\'s the only thing I can think of.'
						],
					choices:
						[
							'Continue'
						],
					goTo:
						[
							98
						],
					image: ""
				},
				
				50:
				{
					title: "",
					story:
						[
							'To the east of the mansion lies a small garden, lined with two foot-high brick walls, set with gravel pathways, and designed with absolute symmetry in mind. Beds are organised in a variety of geometric shapes to form the overall appearance of a large clock, with a small water fountain in the centre. Though most of the flowers have died back now, leaving just the low bushes and a few of the hardiest shrubs, it is clear that, come spring, this garden would be beautiful to behold. At the northern end, the walls recede a little to make way for a raised dais that overlooks the ocean, perched right at the edge of the cliff.'
						],
					choices:
						[
							'Approach the dais',
							'Head back around the manor'
						],
					goTo:
						[
							196,
							151
						],
					image: ""
				},
				
				51:
				{
					title: "",
					story:
						[
							'The service passage consists of a very long, narrow brick corridor, with a barrel vaulted ceiling, a pair of wide double doors stationed at the west end, and six heavy wooden doors spaced out along the southern wall. From the dirt and staining on the ground, it would appear that most deliveries to the manor come through here first, before being stored in the various adjacent rooms.'
						],
					choices:
						[
							'Enter the coal cellar',
							'Enter the grounds',
							'Enter the larder ',
							'Enter the lower service hall',
							'Enter the lumber room',
							'Enter the lumber room',
							'Enter the wine cellar '
						],
					goTo:
						[
							8,
							194,
							182,
							276,
							19,
							141,
							26
						],
					image: ""
				},
				
				52:
				{
					title: "",
					story:
						[
							'"To the murder? None. He seemed like a reasonable chap to me," the chef replies, giving a light shrug of his shoulders. "He complemented me on the food, via Blackwood. Not many guests bother."'
						],
					choices:
						[
							'Continue'
						],
					goTo:
						[
							242
						],
					image: ""
				},
				
				53:
				{
					title: "",
					story:
						[
							'The polished teak bookcase seems to serve not just as a place for the storage of books, but also as a general display cabinet. Along with a number of old-looking tomes and volumes are a few busts, a silver trophy, a small pair of mounted antlers, a potted fern, and over a dozen clear, liquid-filled bottles, each possessing their own hand-scrawled label.'
						],
					choices:
						[
							'Examine the books',
							'Examine the bottles',
							'Step back from the bookcase'
							
						],
					goTo:
						[
							137,
							114,
							90
						],
					image: ""
				},
				
				54:
				{
					title: "",
					story:
						[
							'You kneel down and peer through the keyhole. You spy what appears to be a rather ordinary stockroom.'
						],
					choices:
						[
							'Step back from the keyhole'
						],
					goTo:
						[
							97
						],
					image: "./media/doorhole.jpg"
				},
				
				55:
				{
					title: "",
					story:
						[
							'Using a nearby pack of matches, you strike one and carefully light one of the fuses, before quickly stepping back as it begins to crackle',
							'Tick Box 7 in the detective\'s notebook.'
						],
					choices:
						[
							'Continue'
						],
					goTo:
						[
							235
						],
					image: ""
				},
				
				56:
				{
					title: "",
					story:
						[
							'The chief inspector approves of your proposal and promptly starts proceedings to arrange a court case. Partway through the month of November, McFadyen\'s case comes up and the jury soon renders a verdict of not guilty, due to a lack of evidence that he committed the crime.'
						],
					choices:
						[
							'Continue'
						],
					goTo:
						[
							72
						],
					image: ""
				},
				
				57:
				{
					title: "",
					story:
						[
							'You consult your notebook.'
						],
					choices:
						[
							'"Can you think of any motives?"',
							'"Did you hear a commotion?"',
							'"Did you know the deceased?"',
							'"How did you find the deceased?"',
							'"What were you doing at the time?"',
							'"When did the murder occur?"',
							'"Where were the other staff at the time?"',
							'"Why was the deceased here?"',
							'Enquire about clues',
							'Return to your investigations'
							
						],
					goTo:
						[
							243,
							230,
							171,
							133,
							136,
							13,
							297,
							300,
							98,
							295
						],
					image: ""
				},
				
				58:
				{
					title: "",
					story:
						[
							'Inside the drawer is a small golden key with an intricate bow and square blunt tip, similar in style and shape to the kind that tends to accompany bureaus.',
							'You slip the key into your pocket and close the drawer.',
							'Tick Box 2 in the detective\'s notebook.'
						],
					choices:
						[
							'Box 2 is ticked.',
							'Continue'
						],
					goTo:
						[
							140,
							82
						],
					image: ""
				},
				
				59:
				{
					title: "",
					story:
						[
							'You screw the paper bearing your proposal into a ball and toss it into a nearby waste paper basket.'
						],
					choices:
						[
							'Continue'
						],
					goTo:
						[
							327
						],
					image: ""
				},
				
				60:
				{
					title: "",
					story:
						[
							'The altar is covered with red silk and festooned with a mixture of bones, feathers, grapes, and piles of gold sovereigns. Sat amidst the various offerings is a heavy tome bound in black leather and several jet black daggers possessing wavy blades.'
						],
					choices:
						[
							'Examine the book',
							'Examine the daggers',
							'Step back from the altar'
						],
					goTo:
						[
							237,
							122,
							20
						],
					image: ""
				},
				
				61:
				{
					title: "",
					story:
						[
							'The names on some of the individual plaques are hard to read and, after attempting to make out a particularly smudged one, it occurs to you that dearly departed Lord Colefax III is highly unlikely to be able to help you solve the mystery of Ludwick\'s murder, having died over two hundred years ago.'
						],
					choices:
						[
							'Box 3 is ticked.',
							'You have Clue 2.',
							'Step back from the plaques'
						],
					goTo:
						[
							147,
							85,
							296
						],
					image: ""
				},
				
				62:
				{
					title: "",
					story:
						[
							'You screw the paper containing your proposal into a ball and throw it into a nearby waste paper basket.'
						],
					choices:
						[
							'Continue'
						],
					goTo:
						[
							32
						],
					image: ""
				},
				
				63:
				{
					title: "",
					story:
						[
							'The chief inspector approves of your proposal and promptly starts proceedings to arrange a court case. Partway through the month of November, Prismall\'s case comes up and the jury renders a guilty verdict within a matter of hours, with the judge reasoning that Prismall may have been motivated by greed or loathing of the late Mister Ludwick. According to the papers the following week, when Prismall was led up to the gallows in Bodmin Gaol, she went sobbing and began screamed her innocence when the noose was being fastened.'
						],
					choices:
						[
							'Continue'
						],
					goTo:
						[
							247
						],
					image: ""
				},
				
				64:
				{
					title: "",
					story:
						[
							'Lord Colefax\'s desk, while beautifully-crafted, is located halfway between order and chaos. While writing paper and related instruments are neatly placed on one side, the other is occupied by a mess of items, including several letters, a dusty hypodermic syringe, and a plate bearing a half-finished slice of buttered toast.'
						],
					choices:
						[
							'Examine the letters',
							'Examine the syringe',
							'Step back from the table'
						],
					goTo:
						[
							184,
							245,
							90
						],
					image: ""
				},
				
				65:
				{
					title: "",
					story:
						[
							'You take a step forward and promptly fall down a long set of stone stairs that was hidden by the dark. You end up in a heap at the bottom, a great number of your bones broken and with what feels like a fractured skull. Or, at least, what you imagine having a fractured skull would feel like. Your thoughts on the matter are soon overwhelmed by an agonizingly strong desire to close your eyes, which you soon give in to.'
						],
					choices:
						[
							'Continue'
						],
					goTo:
						[
							279
						],
					image: ""
				},
				
				66:
				{
					title: "",
					story:
						[
							'You write out a proposal that Lord Colefax is guilty, due to having access to Ludwick and a lack of witnesses to attest to his alibi.'
						],
					choices:
						[
							'Choose again',
							'Commit'
						],
					goTo:
						[
							61,
							131
						],
					image: ""
				},
				
				67:
				{
					title: "",
					story:
						[
							'Early the following day, you are at your desk in the Dunstow police station, reviewing your notes from the previous night. For Maurice Skinner to be put away for the murder of Albert Ludwick, you need to submit a written proposition of why the chef is guilty to the chief inspector and then, if it meets his approval, on to the criminal courts.',
							'You may use certain combinations of clues you have found during your investigation to form your proposal.'
						],
					choices:
						[
							'Suspicious alibi',
							'Use Clue 11'
						],
					goTo:
						[
							135,
							108
						],
					image: ""
				},
				
				68:
				{
					title: "",
					story:
						[
							'"It would appear that, before he was killed, Mister Ludwick was strangled. Do you know why the killer would have done that?"',
							'"He was in bed when I found him, so he might have been surprised while asleep, and whoever... you know, didn\'t want him to make any noise."'
						],
					choices:
						[
							'Continue'
						],
					goTo:
						[
							98
						],
					image: ""
				},
				
				69:
				{
					title: "",
					story:
						[
							'"The first I heard of anything being amiss was when the maid – Prismall – screamed, which prompted me to investigate. I was in the master bedroom at the time, preparing it for his lordship."'
						],
					choices:
						[
							'Continue'
						],
					goTo:
						[
							270
						],
					image: ""
				},
				
				70:
				{
					title: "",
					story:
						[
							'You screw the paper containing your proposal into a ball and throw it into a nearby waste paper basket.'
						],
					choices:
						[
							'Continue'
						],
					goTo:
						[
							308
						],
					image: ""
				},
				
				71:
				{
					title: "",
					story:
						[
							'"I found an unusual puncture wound on the victim that doesn\'t seem to have contributed to his death. Do you have any idea what that might be from?"',
							'"Quite possibly a syringe of some description," Lord Colefax replies. "He might well have self-administered some medication; it\'s not terribly unusual, especially if he had a recurring condition."',
							'"Did he have one?"',
							'"Not that I am aware, though there are, of course, some conditions that most would rather keep private."'
						],
					choices:
						[
							'Continue'
						],
					goTo:
						[
							213
						],
					image: ""
				},
				
				72:
				{
					title: "",
					story:
						[
							'"The late Mister Ludwick and Lord Colefax are– were old school friends from Cambridge. Once a year, they would meet up, alternating between Ludwick\'s Cardiff residence and the manor here."'
						],
					choices:
						[
							'Continue'
						],
					goTo:
						[
							270
						],
					image: ""
				},
				
				73:
				{
					title: "",
					story:
						[
							'Without any solid evidence as to who committed the ghastly murder at Colefax Manor, the case will never be solved and the killer will roam free.'
						],
					choices:
						[
							'Try again',
							'Give up'
						],
					goTo:
						[
							151,
							336
						],
					image: ""
				},
				
				74:
				{
					title: "",
					story:
						[
							'The powerful smell of hay inside the stables is only matched by the distinct stench of horse droppings, no doubt indicating a lack of work on the gamekeeper\'s part. A middle-aged man with greying hair and a pot belly is sat not far from the entrance, dozing upon a stool, beside a low worktable holding a lit lantern, several spares, and the lesser remains of a sandwich.'
						],
					choices:
						[
							'Examine the stalls',
							'Leave the stables',
							'Observe the gamekeeper',
							'Take one of the lanterns',
							'Talk to the gamekeeper'
						],
					goTo:
						[
							322,
							93,
							38,
							309,
							4
						],
					image: ""
				},
				
				75:
				{
					title: "",
					story:
						[
							'You manage to take a total of seven steps before you trip over something upon the ground. Your head hits the ground with enough for your skull to crack open. The world would no doubt be rapidly growing dark as you bleed out, if it were not for the already impenetrable blackness of the passage.'
						],
					choices:
						[
							'Continue'
						],
					goTo:
						[
							279
						],
					image: ""
				},
				
				76:
				{
					title: "",
					story:
						[
							'The east hall is a narrow affair that does little to live up to its grandiose name. Consisting primarily of dark wood panelling, a polished wooden floor, and a few particularly dreary paintings, it seems to exist purely to serve as a corridor between four rooms, rather than having any redeeming features of itself. Two large windows, one at the north end and a matching one at the south, appear to serve as the primary sources of light during the day, which leaves the job at night up to a pair of somewhat inefficient gas lamps.'
						],
					choices:
						[
							'Enter the bathroom',
							'Enter the great staircase',
							'Enter the master bedroom',
							'Enter the study'
						],
					goTo:
						[
							200,
							324,
							231,
							90
						],
					image: ""
				},
				
				77:
				{
					title: "",
					story:
						[
							'You decide to leave the tunnel be for now and carefully pull the hidden door closed once more, reasoning that you could always return later to explore what lies beyond.',
							'Tick Box 3 in the detective\'s notebook.'
						],
					choices:
						[
							'Continue'
						],
					goTo:
						[
							296
						],
					image: ""
				},
				
				78:
				{
					title: "",
					story:
						[
							'"I\'ve seen enough," you announce, getting up from your seat. "Lord Colefax, you are hereby placed under arrest on suspicion of engaging in wi–" And that\'s as far as you get when a loud crack sounds out from behind you and a musket ball swiftly penetrates through the back of your skull, pulverises the majority of your brain, and then emerges out through the other side, spraying debris upon the parlour room floor, which is soon joined by your limp body.'
						],
					choices:
						[
							'Continue'
						],
					goTo:
						[
							107
						],
					image: ""
				},
				
				79:
				{
					title: "",
					story:
						[
							'You wisely reconsider your brash decision and clamber out of the water, pulling yourself up onto the jetty. It takes almost a minute for you to get your clothes dry enough to move in.'
						],
					choices:
						[
							'Continue'
						],
					goTo:
						[
							209
						],
					image: ""
				},
				
				80:
				{
					title: "",
					story:
						[
							'Early the following day, you are at your desk in the Dunstow police station, reviewing your notes from the previous night. For Gideon Blackwood to be put away for the murder of Albert Ludwick, you need to submit a written proposition of why the butler is guilty to the chief inspector and then, if it meets his approval, on to the criminal courts.',
							'You may use certain combinations of clues you have found during your investigation to form your proposal.'
						],
					choices:
						[
							'Suspicious alibi',
							'Use Clues 1,6, and 10'
						],
					goTo:
						[
							269,
							128
						],
					image: ""
				},
				
				81:
				{
					title: "",
					story:
						[
							'You approach the large painting and are able to observe its details more distinctly. Seven women in Grecian garb are sat in a dimly-lit marble chamber, watching an eighth woman, clad in dark robes, cavorting before a low metal censer. Through iron-grated windows, glimpses of low sandstone buildings can be spotted. At the bottom of the portrait\'s ebony frame is a flattened section that carries the inscription \'Consulting the Oracle, John William Waterhouse\'.'
						],
					choices:
						[
							'Step back from painting'
						],
					goTo:
						[
							321
						],
					image: ""
				},
				
				82:
				{
					title: "",
					story:
						[
							'"About as much as the next man," the gamekeeper replies. "I don\'t tend to do much interactin\' with any of the guests unless they want to go horseridin\' or huntin\'."'
						],
					choices:
						[
							'Continue'
						],
					goTo:
						[
							167
						],
					image: ""
				},
				
				83:
				{
					title: "",
					story:
						[
							'The small wooden table only bears a couple of items, though not of particular interest. A small carriage clock, a small pair of reading glasses, a folded copy of the morning\'s paper, and a book bound in yellow leather, bearing the title \'On the Genealogy of Morality\', written by Friedrich Nietzsche.'
						],
					choices:
						[
							'Open the table drawer',
							'Step back from the table'
						],
					goTo:
						[
							57,
							231
						],
					image: ""
				},
				
				84:
				{
					title: "",
					story:
						[
							'The chief inspector approves of your proposal and promptly starts proceedings to arrange a court case. Partway through the month of November, Lord Colefax\'s case comes up, and despite the fine arguments of his lawyer, the jury ends up rendering a guilty verdict. According to the papers later that week, while being transferred to Dartmoor Prison to await his execution, the carriage transporting Lord Colefax was attacked and he managed to escape.'
						],
					choices:
						[
							'Continue'
						],
					goTo:
						[
							180
						],
					image: ""
				},
				
				85:
				{
					title: "",
					story:
						[
							'You kneel down and peer through the keyhole. You spy a stone room filled with various instruments of torture, along with a muscular-looking bald man sitting by another door into the room, sharpening a knife.'
						],
					choices:
						[
							'Step back from the keyhole'
						],
					goTo:
						[
							203
						],
					image: "./media/keyhole.jpg"
				},
				
				86:
				{
					title: "",
					story:
						[
							'You pull the small slip of paper you retrieved in the secret study from your notebook and read it once more. \'Seventeen up, six right, Lord the Third.\' You lower the scrap of paper and read the name on the plaque. This must be what the instructions is referring to; the plaque is the only thing that has even come close, after your explore of the manor. But what do the instructions want you to do exactly?'
						],
					choices:
						[
							'Push the plaque',
							'Push the brick seventeen up and six right from the plaque',
							'Push the brick seventeen up and six right from the floor' 
						],
					goTo:
						[
							168,
							265,
							271
						],
					image: ""
				},
				
				87:
				{
					title: "",
					story:
						[
							'"Mister McFadyen, Lord Colefax\'s gamekeeper."',
							'"I\'ll send someone over, detective."'
						],
					choices:
						[
							'Continue'
						],
					goTo:
						[
							291
						],
					image: ""
				},
				
				88:
				{
					title: "",
					story:
						[
							'You jump into the water and immediately regret it. Within seconds, you are frozen to the skin by the cold October sea, and you find it difficult to make much headwind against the tide.'
						],
					choices:
						[
							'Give up',
							'Swim onwards'
						],
					goTo:
						[
							78,
							121
						],
					image: ""
				},
				
				89:
				{
					title: "",
					story:
						[
							'You find yourself at a junction in the tunnel, lit by flaming torches held by sconces driven into the wall. In addition to the one you entered from, to the southeast and leading back up to the crypt, there are a further six tunnels leading off from the central area, winding and stretching out of sight.'
						],
					choices:
						[
							'Head down the north tunnel',
							'Head down the northeast tunnel',
							'Head down the northwest tunnel',
							'Head down the south tunnel',
							'Head down the southeast tunnel',
							'Head down the southwest tunnel',
							'Head down the west tunnel'
						],
					goTo:
						[
							209,
							42,
							97,
							142,
							262,
							159,
							153
						],
					image: ""
				},
				
				90:
				{
					title: "",
					story:
						[
							'The long gallery lives up to its name rather well. Stretching from west to east and narrow, it is decorated by a number of paintings, a few suits of armour, and an enormous tapestry, hung between two wooden doors in the northern wall. Set into the southern wall are a number of windows, almost floor-to-ceiling in height, offering grandiose views across the Colefax estate and towards the rest of Cornwall.'
						],
					choices:
						[
							'Enter the balcony',
							'Enter the boudoir',
							'Enter the great staircase',
							'Enter the library',
							'Examine the paintings',
							'Examine the tapestry'
						],
					goTo:
						[
							99,
							149,
							324,
							289,
							301,
							148
						],
					image: ""
				},
				
				91:
				{
					title: "",
					story:
						[
							'The study is a small room that seems sequestered from the rest of the extravagant manor. It consists primarily of a bookcase that takes up the south wall, a desk, a few hung paintings of horses, and a comfortable armchair by the door. Taking up the majority of the chestnuthued wooden floor is a faded Persian rug, the corner of which appears to have been nudged aside by something.'
						],
					choices:
						[
							'Enter the east hall',
							'Examine the desk',
							'Examine the bookcase',
							'Examine the rug'
						],
					goTo:
						[
							75,
							63,
							52,
							103
						],
					image: ""
				},
				
				92:
				{
					title: "",
					story:
						[
							'The chief inspector approves of your proposal and promptly starts proceedings to arrange a court case. Partway through the month of November, Prismall\'s case comes up and the jury remains hung for several hours, during which time Prismall becomes hysterical. While the judge reasons that the evidence isn\'t enough to implicate Prismall in Ludwick\'s murder, he ends up ruling that she is suffering from hysteria and is thus quite possibly insane, with the jury supporting the ruling. Prismall is sentenced to spend the rest of her life in Bedlam Hospital, or until the doctors there deem her \'cured\'.'
						],
					choices:
						[
							'Continue'
						],
					goTo:
						[
							288
						],
					image: ""
				},
				
				93:
				{
					title: "",
					story:
						[
							'The victim stares listlessly into the distance, as if he were affixing the canopy with rapt attention. The pupils of his grey eyes are contracted, however, which poses a curious puzzle; when a murder victim is in a state of fright during their death, they possess dilated pupils, as is customary of the fight-or-flight response. The fact that his pupils are not dilated suggests that this was not the case here.',
							'Add Clue 7 \'Pupils\' to the detective\'s notebook'
						],
					choices:
						[
							'Continue'
						],
					goTo:
						[
							36
						],
					image: ""
				},
				
				94:
				{
					title: "",
					story:
						[
							'The stable block is a long one-story building made from a yellowish Cotswold stone and topped with grey slate. A set of double wooden doors are at one end of the building, which the gravel drive leads directly up to, likely indicating storage for whatever form of transport Lord Colefax happens to possess. Though little-to-no light shows through most of the hatch doors to the individual stalls, the tell-tale flicker of light from a flame can be spotted, dancing off the shadows.'
						],
					choices:
						[
							'Enter the stables',
							'Head back towards the manor'
						],
					goTo:
						[
							73,
							151
						],
					image: ""
				},
				
				95:
				{
					title: "",
					story:
						[
							'"Miss Prismall, Lord Colefax\'s maid."',
							'"I\'m not sure you really need any backup, but, I\'ll send someone over anyway. They\'ll be with you soon, detective."'
						],
					choices:
						[
							'Continue'
						],
					goTo:
						[
							120
						],
					image: ""
				},
				
				96:
				{
					title: "",
					story:
						[
							'"Off in the stables? You must be jokin\'," the gamekeeper replies with a snort of mirth. "First I heard was when Blackwood came down here and filled me in about what happened and that a police man would be about soon to ask fer a statement."'
						],
					choices:
						[
							'Continue'
						],
					goTo:
						[
							167
						],
					image: ""
				},
				
				97:
				{
					title: "",
					story:
						[
							'"I was preparing the bed warmer and attending to the fireplace in the master bedroom."'
						],
					choices:
						[
							'Continue'
						],
					goTo:
						[
							270
						],
					image: ""
				},
				
				98:
				{
					title: "",
					story:
						[
							'At the end of the northwest tunnel, you find yourself facing a pale wooden door marked with the word \'Gwithva\'.'
						],
					choices:
						[
							'Open the door',
							'Peek through the keyhole',
							'Return to the junction'
						],
					goTo:
						[
							235,
							53,
							88
						],
					image: ""
				},
				
				99:
				{
					title: "",
					story:
						[
							'You consult the \'clues\' page of your notebook.'
						],
					choices:
						[
							'Ask about Clue 1',
							'Ask about Clue 2',
							'Ask about Clue 3',
							'Ask about Clue 4',
							'Ask about Clue 5',
							'Ask about Clue 6',
							'Ask about Clue 7',
							'Ask about Clue 8',
							'Ask about Clue 9',
							'Ask about Clue 10',
							'Ask about Clue 11',
							'Enquire about the case',
							'Return to your investigations'
						],
					goTo:
						[
							43,
							174,
							145,
							273,
							239,
							294,
							190,
							48,
							67,
							28,
							100,
							56,
							295
						],
					image: ""
				},
				
				100:
				{
					title: "",
					story:
						[
							'The balcony that forms part of the impressive stone facade is narrow and features only low balustrades about its outer edge. Not much of the estate can be made out, due to the general lack of moonlight, but one can imagine that it provides a sumptuous vista during the light of day. The squeak of a rusty door hinge sounds behind you. You look around, but there doesn\'t appear to be any sign of anyone that have caused the noise.'
						],
					choices:
						[
							'Head back inside',
							'Remain outside'
						],
					goTo:
						[
							89,
							325
						],
					image: ""
				},
				
				101:
				{
					title: "",
					story:
						[
							'"Someone used a serrated blade to kill Mister Ludwick. Do you know where they might have gotten hold of one?"',
							'"... from within the house, you mean?" Prismall asks, both looking and sounding surprised at this suggestion.',
							'"Well, I... I suppose a few of the kitchen knives, perhaps, but I honestly can\'t imagine Skinner doing that to someone."'
						],
					choices:
						[
							'Continue'
						],
					goTo:
						[
							98
						],
					image: ""
				},
				
				102:
				{
					title: "",
					story:
						[
							'The drawing room is a light, airy room that does nothing to dissuade this feeling, with its powder blue wallpaper, matching furniture, and a pale yellow rug that is spread across most of the room. Several vases laden with white dahlias have been placed strategically about the room on chests of drawers, end tables, and atop mantles; while they do aid in making the room feel peaceful and relaxing, their lack of scent feels a little unnatural.'
						],
					choices:
						[
							'Enter the smoking room',
							'Enter the service hall',
							'Enter the main hall'
						],
					goTo:
						[
							283,
							183,
							257
						],
					image: ""
				},
				
				103:
				{
					title: "",
					story:
						[
							'While on patrol in Dunstow, late one night at the start of December, you hear footsteps approaching rapidly from behind you. Before you can turn around, you feel an icy stab of pain as a dagger is embedded firmly in your back. You collapse down in the street as the sound of receding footsteps reach your ears. They are the last thing you here.'
						],
					choices:
						[
							'Continue'
						],
					goTo:
						[
							107
						],
					image: ""
				},
				
				104:
				{
					title: "",
					story:
						[
							'The tasselled rug bears a faded crimson pattern of stylised flowers upon its off-yellow background. Of more note than its design is the fact that one corner has folded back onto itself, as if it had been accidentally kicked. Kneeling down, you discover a faint shoeprint upon the floor, close by the shifted corner of the rug, covered in a strange orange dust.',
							'Add Clue 8 \'Shoeprint\' to the detective\'s notebook.'
						],
					choices:
						[
							'Stand back up'
						],
					goTo:
						[
							90
						],
					image: ""
				},
				
				105:
				{
					title: "",
					story:
						[
							'"Mister Skinner?" you ask, prompting the chef to look towards you. "My name is Detective Barns, from the Cornwall County Constabulary. I have some questions I would like to ask you."',
							'The chef sets down his washing up, dries his hands upon his apron, and then folds his arms together and turns to face you.'
						],
					choices:
						[
							'You\'ve already met Skinner.',
							'Enquire about clues ',
							'Enquire about the case',
							'Return to your investigations'
						],
					goTo:
						[
							306,
							139,
							242,
							285
						],
					image: ""
				},
				
				106:
				{
					title: "",
					story:
						[
							'"In that case, I think I shall begin my investigations alone. You are not required to stay with me, but I must insist that no staff leave the grounds until I have finished my investigations."',
							'"Very good, sir. I shall inform the staff at once," the butler replies, nodding his head smartly. "There are four servants of Lord Colefax: the gamekeeper, McFadyen; the cook, Skinner; the maid, Prismall; and myself. If you have need for us, we will most likely be in the stables, kitchen, lower service hall, and the library, respectively. Lord Colefax may be found in the parlour, though I must ask that you allow him some time to compose. Oh, and the late Mister Ludwick is in the guest bedroom on the upper floor," he adds, as if just remembering the very reason for your visit.',
							'The butler then inclines his head once more, turns, and heads up the stairs leading into Colefax Manor, leaving you alone outside.'
						],
					choices:
						[
							'Continue'
						],
					goTo:
						[
							151
						],
					image: "./media/butler.jpg"
				},
				
				107:
				{
					title: "",
					story:
						[
							'"The victim\'s wounds indicate that he was stabbed several times and possibly cut open with a serrated blade. Do you know of any such instruments that already were in the house?',
							'Lord Colefax brings up a hand and rests his chin upon it, a concentrated look in his eyes. "Perhaps one of the polearms in the smoking room," he suggests, after several long moments, "But they would be too large to use for such a close-quarters assault. The next best guess would be one of the chef\'s knives in the kitchen."'
						],
					choices:
						[
							'Continue'
						],
					goTo:
						[
							213
						],
					image: ""
				},
				
				108:
				{
					title: "",
					story:
						[
							'You have been murdered! Without your keen intellect, the mystery of who committed the murder at Colefax Manor will be forever left unsolved.'
						],
					choices:
						[
							'Try again',
							'Give up'
						],
					goTo:
						[
							151,
							336
						],
					image: ""
				},
				
				109:
				{
					title: "",
					story:
						[
							'You write out a proposal that Skinner is guilty, due to the wounds the victim being made by instruments similar to those found in the kitchen of Colefax Manor, which you then combine to form the theory that Skinner used one of his knives to brutally murder Ludwick, before cleaning away the blood on the murder weapon whilst doing the washing up.'
						],
					choices:
						[
							'Choose again',
							'Commit'
						],
					goTo:
						[
							58,
							31
						],
					image: ""
				},
				
				110:
				{
					title: "",
					story:
						[
							'"When exploring one of the bookshelves in your study, I came across a secret entrance to a smaller, secondary study, filled with arcane artefacts and materials that strongly suggest that you harbour an interest in the occult and quite possibly witchcraft. Can you explain what I found?"',
							'Lord Colefax looks a little perturbed at your accusatory question and takes a few moments to compose himself in a refined manner before responding. "It is not against the law to have an interest in the occult, detective. After all, John Dee had a great interest in the occult, and served Queen Elizabeth herself."',
							'"But it is against the law to practice witchcraft."',
							'"Have you seen any legally viable evidence that I practice witchcraft?"'
						],
					choices:
						[
							'Arrest Lord Colefax',
							'Concede'
						],
					goTo:
						[
							77,
							334
						],
					image: ""
				},
				
				111:
				{
					title: "",
					story:
						[
							'The kitchen is a surprisingly long room that looks larger than it already is, thanks to a combination of white walls and tall glass windows. Along the walls are set a mixture of stoves, ovens, sinks, preparation areas, and general counters. A wide fireplace occupies most of the west wall, fitted with a spit and several hooks for soup pots, with the rest of that wall taken up by racks of herbs and shelves of cooking utensils. In the middle of the room is a relatively clean table that, if the relative lack of stains are anything to go by, looks like it is used as a area to place prepared food, prior to being taken through to the dining room. Standing before the sink is a middle-aged man in grubby chef attire, grumbling to himself as he slowly makes his way through cleaning a large pile of dirty dishes.'
						],
					choices:
						[
							'Enter the pantry',
							'Observe the chef',
							'Talk to the chef '
						],
					goTo:
						[
							284,
							222,
							104
						],
					image: ""
				},
				
				112:
				{
					title: "",
					story:
						[
							'When you attempt to pull Johnson\'s Dictionary from its shelf, you instead pull open part of the bookcase to reveal a hidden passage into what appears to be a second study.'
						],
					choices:
						[
							'Enter the secret study',
							'Close the hidden door'
						],
					goTo:
						[
							318,
							219
						],
					image: ""
				},
				
				113:
				{
					title: "",
					story:
						[
							'Skinner rolls his eyes and places his hands onto his hips. "Look, detective, I know you\'re just doing your job and asking all these questions, but I don\'t know the answers to half of \'em! I come in, I cook, I clean, rinse, repeat, go home," he explains, gesturing with each step of his explanation. "Last I saw of anyone was Pris coming in to see if my apron needed cleaning \'bout half nine. Dunno where anyone else was."'
						],
					choices:
						[
							'Continue'
						],
					goTo:
						[
							242
						],
					image: ""
				},
				
				114:
				{
					title: "",
					story:
						[
							'"The wounds on the victim suggest that he was cut open and stabbed a number of times with a serrated blade. Are there any weapons or tools in the house that match that description?"',
							'"A few of the kitchen knives, perhaps, but other than that there are only some polearms in the library, and they are secure behind glass."'
						],
					choices:
						[
							'Continue'
						],
					goTo:
						[
							117
						],
					image: ""
				},
				
				115:
				{
					title: "",
					story:
						[
							'Judging by the labels on the bottles, some of which carry terribly long names, they all contain a different chemical. Some of the names are hard to make out, due to the levels of dust on most of the bottles. A bottle containing morphine, on the other hand, bares a handprint – gloved, judging by the lack of fingerprints – in the middle of the dust, showing that it has been handled recently.',
							'Add Clue 1 \'Chemicals\' to the detective\'s notebook.'
						],
					choices:
						[
							'Continue'
						],
					goTo:
						[
							137
						],
					image: ""
				},
				
				116:
				{
					title: "",
					story:
						[
							'"I found a stock of bottled chemicals in Lord Colefax\'s study. Do you know anything about them?"',
							'"He likes to think of himself one of those \'men of science\'. He collects \'em and studies \'em, as far as I know."',
							'"Any idea why someone might have accessed his morphine supply?',
							'McFadyen shrugs. "They might\'ve wanted to experiment. See what happens. He lets me have access sometimes, if one of the horses ain\'t doin\' too well."'
						],
					choices:
						[
							'Continue'
						],
					goTo:
						[
							179
						],
					image: ""
				},
				
				117:
				{
					title: "",
					story:
						[
							'"I came across this strange list of instructions while exploring a hidden room in this manor," you declare, withdrawing the folded paper from within your notebook and presenting it to the butler. "Can you make any sense of them?"',
							'The butler peers down at the proffered paper for a few moments, then shakes his head. "It\'s not unusual for his lordship to leave notes to himself about the place. I have found a few myself, while cleaning."'
						],
					choices:
						[
							'Continue'
						],
					goTo:
						[
							117
						],
					image: ""
				},
				
				118:
				{
					title: "",
					story:
						[
							'You consult the \'clues\' page of your notebook.'
						],
					choices:
						[
							'Ask about Clue 1',
							'Ask about Clue 2',
							'Ask about Clue 3',
							'Ask about Clue 4',
							'Ask about Clue 5',
							'Ask about Clue 6',
							'Ask about Clue 7',
							'Ask about Clue 8',
							'Ask about Clue 9',
							'Ask about Clue 10',
							'Ask about Clue 11',
							'Enquire about the case',
							'Return to your investigations'
						],
					goTo:
						[
							330,
							116,
							303,
							254,
							161,
							164,
							132,
							158,
							130,
							281,
							113,
							270,
							252
						],
					image: ""
				},
				
				119:
				{
					title: "",
					story:
						[
							'The solarium is an impressive room to behold. A wide variety of expensive-looking knick-knacks and antique furniture are set out carefully upon its highly-polished parquet floor, ranging from red velvet seating, to a grand piano and a number of oriental vases. Windows two stories high provide views that would no doubt be magnificent upon a clear night across the manor gardens, the Cornish coast, and the dark, turbulent sea far below.'
						],
					choices:
						[
							'Examine the piano',
							'Examine the vases',
							'Enter the billiard room'
						],
					goTo:
						[
							185,
							228,
							217
						],
					image: ""
				},
				
				120:
				{
					title: "",
					story:
						[
							'"During my investigation of the manor, I\'ve come upon a secret passage leading to a study filled with occult objects. Do you know anything about it?"',
							'"Occult objects?" Skinner echoes, raising both eyebrows. "First I\'ve heard about it. I can tell you he ain\'t a vampire, though; he makes me add garlic to everything I cook."'
						],
					choices:
						[
							'Continue'
						],
					goTo:
						[
							139
						],
					image: ""
				},
				
				121:
				{
					title: "",
					story:
						[
							'Early the following day, you are at your desk in the Dunstow police station, reviewing your notes from the previous night. For Gladys Prismall to be put away for the murder of Albert Ludwick, you need to submit a written proposition of why the maid is guilty to the chief inspector and then, if it meets his approval, on to the criminal courts.',
							'You may use certain combinations of clues you have found during your investigation to form your proposal.'
						],
					choices:
						[
							'First on the scene',
							'Suspicious alibi'
						],
					goTo:
						[
							162,
							16
						],
					image: ""
				},
				
				122:
				{
					title: "",
					story:
						[
							'You bravely power onwards against the tide and, after what feels like an eternity, you manage to make your way out of the winding cave and find yourself at the bottom of the tall cliffs the form the promontory containing Colefax Manor. It is then, shortly before you are dashed upon the rocks, that you realise the futility of attempting to swim to the distant shore at high tide.'
						],
					choices:
						[
							'Box 7 is ticked',
							'Continue'
						],
					goTo:
						[
							279
						],
					image: ""
				},
				
				123:
				{
					title: "",
					story:
						[
							'Going by the serrated edge on the daggers, it looks like you\'ve discovered what was used to cut open Mister Ludwick. Reasoning that your need is greater than that of a deranged murderer, you pick up one of the daggers and carefully place it upon your belt.',
							'Tick Box 4 in the detective\'s notebook.'
						],
					choices:
						[
							'Box 4 is ticked',
							'Continue'
						],
					goTo:
						[
							256,
							59
						],
					image: ""
				},
				
				124:
				{
					title: "",
					story:
						[
							'The first is a green velvet book titled \'Antiquities of Cornwall\', with its author listed as William Borlase, both imprinted in gold leaf. The second is a smaller tomb in a slightly worn brown leather cover, bearing the title \'Survey of Cornwall\', written by Richard Carew. It would seem that Lord Colefax has an interest in his home county.'
						],
					choices:
						[
							'Set the books down'
						],
					goTo:
						[
							22
						],
					image: ""
				},
				
				125:
				{
					title: "",
					story:
						[
							'The left cabinet is piled high with a wide variety of fluffy towels, along with a several folded bathrobes, all pristine white in colour. The right cabinet, meanwhile, contains an array of bath salts, essential oils, and other assorted fragrances to perfume bath water.'
						],
					choices:
						[
							'Close the cabinets'
						],
					goTo:
						[
							200
						],
					image: ""
				},
				
				126:
				{
					title: "",
					story:
						[
							'"I believe I last looked at my pocket watch a few minutes before the maid screamed, when it read five to ten. The last I saw of the late Mister Ludwick was when I passed him in the long gallery, at approximately ten to nine."'
						],
					choices:
						[
							'Continue'
						],
					goTo:
						[
							270
						],
					image: ""
				},
				
				127:
				{
					title: "",
					story:
						[
							'"It is an unpleasant business, especially on such a grim night, but such things cannot wait \'til the morn," you reply, adjusting your tunic. "Could you take me to Lord Colefax?"',
							'"I\'m afraid Lord Colefax is indisposed," the butler replies apologetically. "The incident has left him somewhat shaken, and so he is currently recuperating in the parlour. He should be available shortly, however."'
						],
					choices:
						[
							'Ask to be taken to the body',
							'Dismiss the butler'
						],
					goTo:
						[
							169,
							105
						],
					image: "./media/butler.jpg"
				},
				
				128:
				{
					title: "",
					story:
						[
							'"Well, I had my supper at about seven, checked the horses all had enough food, then settled down fer a nap about quarter to eight. Next thing I knew was me bein\' woke up by Blackwood after it went ten."'
						],
					choices:
						[
							'Continue'
						],
					goTo:
						[
							167
						],
					image: ""
				},
				
				129:
				{
					title: "",
					story:
						[
							'You write out a proposal that Blackwood is guilty, due to his prior history of handling and injecting morphine, the syringe in Lord Colefax\'s study showing signs of recent use, and a corresponding puncture wound found upon the victim, which you then combine to form the theory that Blackwood drugged Ludwick, before murdering him'
						],
					choices:
						[
							'Choose again',
							'Commit'
						],
					goTo:
						[
							260,
							30
						],
					image: ""
				},
				
				130:
				{
					title: "",
					story:
						[
							'"Some small annual get-together with Lord Colefax," the gamekeeper says. "Talkin\' \'bout the old times, havin\' a good feast, and no doubt enjoyin\' some fine wine. You should see the cellar he\'s got! I swear there\'s more wine down there than France!"'
						],
					choices:
						[
							'Continue'
						],
					goTo:
						[
							167
						],
					image: ""
				},
				
				131:
				{
					title: "",
					story:
						[
							'"Can you think of any reason why the victim would have been strangled before his untimely death?"',
							'"He might have fought back against his aggressors and required subduing, before the finishing blow was delivered," Blackwood suggests. "Though that does beg the question of why his killer did not simply break his neck, rather than kill him in such a messy and visible way."'
						],
					choices:
						[
							'Continue'
						],
					goTo:
						[
							117
						],
					image: ""
				},
				
				132:
				{
					title: "",
					story:
						[
							'It doesn\'t take long for the chief inspector to throw out your proposal, citing that it would fail to hold up in even the weakest court. The suspect is soon after released and the chief inspector declares the case unsolved. Before long, the case files end up buried in the bottom of a cabinet at the police station, in a drawer labelled \'Unsolved\'.'
						],
					choices:
						[
							'Continue'
						],
					goTo:
						[
							72
						],
					image: ""
				},
				
				133:
				{
					title: "",
					story:
						[
							'"The victim\'s pupils appear contracted, which most likely means he wasn\'t panicking when he died. Any thoughts on this?"',
							'"Drugging seems to be the obvious one," Blackwood theorises, "as Lord Colefax\'s pupils tend to contract after I have medicated him. Another possibly was that he allowed himself to be killed, for some unfathomable reason."'
						],
					choices:
						[
							'Continue'
						],
					goTo:
						[
							117
						],
					image: ""
				},
				
				134:
				{
					title: "",
					story:
						[
							'Prismall takes an unsteady breath, her hands shaking a little upon her lap. "After I finished drying the laundry, I went upstairs to deliver some fresh linen to the master bedroom, and decided to stop by the guest bedroom to see if Mister Ludwick would like some. When he didn\'t respond, I opened the door to see if he was in there, and..."',
							'She trails off, shaking more heavily now and closes her eyes. After a few moments and several slow, steadying breaths, she shakes her head.'
						],
					choices:
						[
							'Continue'
						],
					goTo:
						[
							56
						],
					image: ""
				},
				
				135:
				{
					title: "",
					story:
						[
							'Early the following day, you are at your desk in the Dunstow police station, reviewing your notes from the previous night. For Lord Colefax to be put away for the murder of Albert Ludwick, you need to submit a written proposition of why the peer is guilty to the chief inspector and then, if it meets his approval, on to the criminal courts.',
							'You may use certain combinations of clues you have found during your investigation to form your proposal'
						],
					choices:
						[
							'Suspicious alibi',
							'Use Clues 1, 6, and 10',
							'Use Clue 5',
							'Use Clues 5 and 11'
						],
					goTo:
						[
							65,
							329,
							155,
							212
						],
					image: ""
				},
				
				136:
				{
					title: "",
					story:
						[
							'You write out a proposal that Skinner is guilty, due to having access to Ludwick and a lack of witnesses to attest to his alibi.'
						],
					choices:
						[
							'Choose again',
							'Commit'
						],
					goTo:
						[
							58,
							131
						],
					image: ""
				},
				
				137:
				{
					title: "",
					story:
						[
							'"I was cleaning some of Lord Colefax\'s laundry in the service hall while waiting for the bed linen to finish drying."'
						],
					choices:
						[
							'Continue'
						],
					goTo:
						[
							56
						],
					image: ""
				},
				
				138:
				{
					title: "",
					story:
						[
							'The books on the shelves all show sign of past wear and tear, but, going by dust levels, only a few have been accessed recently; a red volume entitled \'Idylls of the King\', by Lord Tennyson; a thick black tome titled \'Johnson\'s Dictionary\', by Samuel Johnson; and a brown leather tome called \'The Iliad\', by Homer.'
						],
					choices:
						[
							'Examine Idylls of the King',
							'Examine Johnson\'s Dictionary',
							'Examine the Iliad',
							'Stop examining the books'
						],
					goTo:
						[
							40,
							111,
							47,
							52
						],
					image: ""
				},
				
				139:
				{
					title: "",
					story:
						[
							'You reach forward and rapidly turn the crank on the telephone\'s base, before then picking up the receiver and putting it to your ear. A few moments later, a somewhat sleepy female voice on the other end says, "Hello. Who would you like to contact?"',
							'"St. Ives, 624."',
							'"Please Hold."',
							'Several moments later, a male voice announces, "Cornwall County Constabulary, St. Ives. Who may I ask is speaking?"',
							'"Detective Constable Barns, collar number 1211."',
							'"How can I help, detective?"'
						],
					choices:
						[
							'Make an arrest',
							'Return to your investigations'
						],
					goTo:
						[
							25,
							241
						],
					image: ""
				},
				
				140:
				{
					title: "",
					story:
						[
							'You consult the \'clues\' page of your notebook'
						],
					choices:
						[
							'Ask about Clue 1',
							'Ask about Clue 2',
							'Ask about Clue 3',
							'Ask about Clue 4',
							'Ask about Clue 5',
							'Ask about Clue 6',
							'Ask about Clue 7',
							'Ask about Clue 8',
							'Ask about Clue 9',
							'Ask about Clue 10',
							'Ask about Clue 11',
							'Enquire about the case',
							'Return to your investigations'
						],
					goTo:
						[
							319,
							211,
							150,
							267,
							119,
							310,
							195,
							216,
							290,
							238,
							306,
							242,
							285
						],
					image: ""
				},
				
				141:
				{
					title: "",
					story:
						[
							'The small drawer is completely bare, following your earlier borrowing of its lone content.'
						],
					choices:
						[
							'Continue'
						],
					goTo:
						[
							82
						],
					image: ""
				},
				
				142:
				{
					title: "",
					story:
						[
							'The undercroft is a large chamber with a vaulted brick ceiling and contains dozens of large crates, along with assorted household items and curios scattered here and there; globes, old mirrors, dressers, cabinets, suits of armour, assorted furniture... it seems to be some sort of storage room-come-dumping ground. Nothing of interest or importance immediately leaps out, and it would take days to fully inspect everything in the room.'
						],
					choices:
						[
							'Enter the service passage'
						],
					goTo:
						[
							50
						],
					image: ""
				},
				
				143:
				{
					title: "",
					story:
						[
							'At the end of the south tunnel, you find yourself facing a sturdy-looking metal door marked with the word \'Kargharans\'.'
						],
					choices:
						[
							'Open the door',
							'Peek through the keyhole',
							'Return to the junction'
						],
					goTo:
						[
							203,
							177,
							88
						],
					image: ""
				},
				
				144:
				{
					title: "",
					story:
						[
							'You have been murdered! Without your keen intellect, the mystery of who committed the murder at Colefax Manor will be forever left unsolved.',
							'If any of the Boxes 4 through 8 in the detective’s notebook are ticked, remove them.'
						],
					choices:
						[
							'Try again',
							'Give up'
						],
					goTo:
						[
							262,
							336
						],
					image: ""
				},
				
				145:
				{
					title: "",
					story:
						[
							'"Lord Colefax?" you enquire, tilting your head politely to the peer. "I am Detective Barns, from the Cornwall County Constabulary."',
							'"It is a pleasure, detective," Lord Colefax replies, motioning lightly with a long-fingered hand for you to take a seat. "It is good of you to come so promptly to deal with this dreadful affair."',
							'"Would it be all right to ask you a few questions?"',
							'"Of course."'
						],
					choices:
						[
							'You\ve already met Colefax',
							'Enquire about clues',
							'Enquire about the case',
							'Return to your investigations'
						],
					goTo:
						[
							166,
							213,
							218,
							236
						],
					image: ""
				},
				
				146:
				{
					title: "",
					story:
						[
							'"While investigating, I came across a recent letter by McFadyen, talking about a risky delivery he took part in handling. Do you know what this delivery was?"',
							'Prismall looks thoughtful for a few moments. "I\'m not sure. I remember some of the bottles in the study being taken down to a carriage, but I wouldn\'t really call that a delivery."'
						],
					choices:
						[
							'Continue'
						],
					goTo:
						[
							98
						],
					image: ""
				},
				
				147:
				{
					title: "",
					story:
						[
							'The chief inspector approves of your proposal and promptly starts proceedings to arrange a court case. Partway through the month of November, McFadyen’s case comes up and the jury renders a guilty verdict within a matter of hours. According to the papers the following week, when McFadyen was led up to the gallows in Bodmin Gaol, he went shouting his innocence and used his last words to curse your name.'
						],
					choices:
						[
							'Continue'
						],
					goTo:
						[
							247
						],
					image: ""
				},
				
				148:
				{
					title: "",
					story:
						[
							'After taking a moment to remember which brick to press, you do just that, and the hidden door swings open once more to reveal the dark stone tunnel. You have to be sure you are ready to explore it before venturing forth, as you won\'t be able to get back through if the door closes behind you.'
						],
					choices:
						[
							'Close the door',
							'Enter the tunnel'
						],
					goTo:
						[
							76,
							320
						],
					image: ""
				},
				
				149:
				{
					title: "",
					story:
						[
							'The immense tapestry shows a vast medieval banquet in the middle of a wood, while incidences of noblemen hunting boars and wine being pressed are scattered here and there across the woven work.'
						],
					choices:
						[
							'Continue'
						],
					goTo:
						[
							89
						],
					image: ""
				},
				
				150:
				{
					title: "",
					story:
						[
							'The boudoir is a room designed to appeal to the ideals typically though to be possessed by Victorian women. The wallpaper is a light blue flock pattern, while the curtains, rugs, and assorted upholstery are a uniform floral pink-and-white pattern. Copious flowers, an almost excessive amount of fainting couches, and large windows do their best to their help give the room a friendly, calming atmosphere.'
						],
					choices:
						[
							'Enter the guest bedroom',
							'Enter the service hall',
							'Enter the long gallery'
						],
					goTo:
						[
							233,
							191,
							89
						],
					image: ""
				},
				
				151:
				{
					title: "",
					story:
						[
							'"I came across this letter the gamekeeper penned; it appears to be a complaint about handling a risky delivery. Do you know what he\'s referring to?"',
							'The chef makes a somewhat thoughtful exhalation, his eyes flicking up to one side. "Can\'t say. The only deliveries I know he helps with is if we get some venison in, as it\'s too heavy for Pris or Blackwood."'
						],
					choices:
						[
							'Continue'
						],
					goTo:
						[
							139
						],
					image: ""
				},
				
				152:
				{
					title: "",
					story:
						[
							'You stand before the country house Colefax Manor, set proudly atop a protruding cliff on the northern Cornish coastline. While not as palatial as Longleat or Blenheim, the building is nevertheless impressive, with two floors of beige stone and towering windows, set below a cold grey roof dotted with dormers. The grounds themselves mainly consist of neatly-cut lawns, along with a stabling build set to the left of the house, the edge of a garden visible to the right, and what looks like a stone tomb several dozen yards in front and off to one side of the manor itself.'
						],
					choices:
						[
							'Enter Colefax Manor',
							'Head left around the house',
							'Head right around the house',
							'Head towards the crypt',
							'Head towards the stables'
						],
					goTo:
						[
							257,
							194,
							49,
							264,
							93
						],
					image: ""
				},
				
				153:
				{
					title: "",
					story:
						[
							'You screw the paper containing your proposal into a ball and throw it into a nearby waste paper basket.'
						],
					choices:
						[
							'Continue'
						],
					goTo:
						[
							259
						],
					image: ""
				},
				
				154:
				{
					title: "",
					story:
						[
							'At the end of the west tunnel, you find yourself facing an ornate ebony door marked with the words \'Eglos Teg\''
						],
					choices:
						[
							'Open the door',
							'Peek through the keyhole',
							'Return to the junction'
						],
					goTo:
						[
							20,
							3,
							88
						],
					image: ""
				},
				
				155:
				{
					title: "",
					story:
						[
							'"I was playing Mendelssohn\'s Die Hebriden in the solarium at the time."'
						],
					choices:
						[
							'Continue'
						],
					goTo:
						[
							218
						],
					image: ""
				},
				
				156:
				{
					title: "",
					story:
						[
							'You write out a proposal that Lord Colefax is guilty, due to his interest in the occult arts, which you use to form the theory that Lord Colefax murdered Ludwick for unspecified occult reasons.'
						],
					choices:
						[
							'Choose again',
							'Commit'
						],
					goTo:
						[
							61,
							311
						],
					image: ""
				},
				
				157:
				{
					title: "",
					story:
						[
							'You write out a proposal that McFadyen is guilty, due to having access to Ludwick and a lack of witnesses to attest to his alibi.'
						],
					choices:
						[
							'Choose again',
							'Commit'
						],
					goTo:
						[
							152,
							131
						],
					image: ""
				},
				
				158:
				{
					title: "",
					story:
						[
							'"It appears that the victim was strangulated before he was murdered. Can you think of any reason why that might be?"',
							'Lord Colefax spreads his hands, a nonplussed expression upon his face. "Even at Cambridge, Ludwick was a rather weak individual. I can\'t see why he would have needed to be overpowered, especially considering the sort of weapon the killer must have used to put him so ignobly to rest."'
						],
					choices:
						[
							'Continue'
						],
					goTo:
						[
							213
						],
					image: ""
				},
				
				159:
				{
					title: "",
					story:
						[
							'"I found a strange shoeprint in the study; one covered in orange dust. What might have caused a shoe to leave such a mark?"',
							'"The only thing that strikes me is that the wearer had trodden in some spiced powder; possibly cinnamon or paprika. We do keep both spices in our stores."'
						],
					choices:
						[
							'Continue'
						],
					goTo:
						[
							117
						],
					image: ""
				},
				
				160:
				{
					title: "",
					story:
						[
							'At the end of the southwest tunnel, you find yourself facing a studded metal door marked with the word \'Dolor\'.'
						],
					choices:
						[
							'Open the door',
							'Peek through the keyhole ',
							'Return to the junction'
						],
					goTo:
						[
							214,
							250,
							88
						],
					image: ""
				},
				
				161:
				{
					title: "",
					story:
						[
							'Created from slightly worn wood that has been painted a dark brown, the central bell panel features just over a dozen small iron bells, each hanging above a small plaque bearing the name of a part of the manor: Bathroom, Billiard Room, Boudoir, Dining Room, Drawing Room, East Hall, Great Staircase, Guest Bedroom, Library, Long Galley, Main Hall, Master Bedroom, Parlour, Smoking Room, Solarium, and Study.'
						],
					choices:
						[
							'Continue'
						],
					goTo:
						[
							183
						],
					image: ""
				},
				
				162:
				{
					title: "",
					story:
						[
							'"While in Lord Colefax\'s study, I stumbled upon an entrance to a small study filled with occult artefacts. Do you know anything about this?"',
							'"I\'m afraid not," Blackwood replies, looking faintly astonished at this news. "Lord Colefax has never shown any inclination to anything so untoward as the occult and witchcraft."'
						],
					choices:
						[
							'Continue'
						],
					goTo:
						[
							117
						],
					image: ""
				},
				
				163:
				{
					title: "",
					story:
						[
							'You write out a proposal that Prismall is guilty, due to being the first person to be on the scene, which you use to form the theory that Prismall murdered Ludwick and then claimed to happen upon the body.'
						],
					choices:
						[
							'Choose again',
							'Commit'
						],
					goTo:
						[
							69,
							62
						],
					image: ""
				},
				
				164:
				{
					title: "",
					story:
						[
							'You turn the handle and promptly walk into the door when it fails to open. It would appear that the room is locked or possibly even barred from the other side.'
						],
					choices:
						[
							'Continue'
						],
					goTo:
						[
							42
						],
					image: ""
				},
				
				165:
				{
					title: "",
					story:
						[
							'"There was a strange puncture wound upon the victim\'s upper arm that appears to have happened separately to his murder. Have you got any thoughts on what might have caused it?"',
							'"It sounds like he was injected with something recently," Blackwood says. "He could have visited a doctor before travelling here or may well have brought a syringe with him. I can\'t imagine him needing any medication for obvious reasons, but there are a host of more... discreet conditions, shall we say, that require injections."'
						],
					choices:
						[
							'Continue'
						],
					goTo:
						[
							117
						],
					image: ""
				},
				
				166:
				{
					title: "",
					story:
						[
							'The deceased\'s belongings consist of a pair of bloodsplattered glasses, a pocket watch that has stopped at the time one minute past three, and a brown leather wallet, containing three two pound notes, one sovereign, two crowns, one half crown, two florins, one shilling, three twopence, and six farthings. It would seem that the killer wasn\'t motivated by monetary desires.'
						],
					choices:
						[
							'Continue'
						],
					goTo:
						[
							233
						],
					image: ""
				},
				
				167:
				{
					title: "",
					story:
						[
							'"Lord Colefax?" you ask, approaching the peer\'s seat once more. "I\'m sorry to disturb you, but I\'m afraid I have some more questions."',
							'Lord Colefax nods his head politely and gestures for you to take the same seat as before.'
						],
					choices:
						[
							'Enquire about clues',
							'Enquire about the case',
							'Return to your investigations'
						],
					goTo:
						[
							213,
							218,
							236
						],
					image: ""
				},
				
				168:
				{
					title: "",
					story:
						[
							'You consult your notebook.'
						],
					choices:
						[
							'"Can you think of any motives?"',
							'"Did you hear a commotion?"',
							'"Did you know the deceased?"',
							'"What were you doing at the time?"',
							'"When did the murder occur?"',
							'"Where were the other staff at the time?"',
							'"Why was the deceased here?"',
							'Enquire about clues',
							'Return to your investigations'
						],
					goTo:
						[
							81,
							95,
							298,
							127,
							302,
							204,
							129,
							179,
							304
						],
					image: ""
				},
				
				169:
				{
					title: "",
					story:
						[
							'Despite your insistent pushing, the small plaque bearing the name of Lord Colefax III fails to give way or even budge the slightest.'
						],
					choices:
						[
							'Push the brick seventeen up and six right from the plaque',
							'Push the brick seventeen up and six right from the floor'
						],
					goTo:
						[
							265,
							271
						],
					image: ""
				},
				
				170:
				{
					title: "",
					story:
						[
							'"Very well. In that case, I\'d like to inspect the body."',
							'"Very good, sir," the butler replies, nodding his head. "If you would be so kind as to follow me, I shall take you right to it."'
						],
					choices:
						[
							'Follow the butler'
						],
					goTo:
						[
							181
						],
					image: ""
				},
				
				171:
				{
					title: "",
					story:
						[
							'"I found the letter you were writing to Lord Colefax about being made to handle a risky delivery. What was that about?"',
							'The gamekeeper looks slightly taken aback. "Oh, that! It\'s nothin\', really, no need to worry about it. Just had to shift some boxes a while back containing some dangerous things; some sort of chemicals, I think. I\'m not meanin\' to give it to him, just to sort of... write out my frustration. I\'d appreciate it if you didn\'t tell Lord Colefax about it."'
						],
					choices:
						[
							'Continue'
						],
					goTo:
						[
							179
						],
					image: ""
				},
				
				172:
				{
					title: "",
					story:
						[
							'"Not really. Lord Colefax knew him quite well, but he was pretty much a stranger to me. I think I overheard something about him running a business in Cardiff, but I don\'t know how useful that information is."'
						],
					choices:
						[
							'Continue'
						],
					goTo:
						[
							56
						],
					image: ""
				},
				
				173:
				{
					title: "",
					story:
						[
							'"Mister Blackwood, butler to Lord Colefax."',
							'"I\'ll send someone around right away, detective."'
						],
					choices:
						[
							'Continue'
						],
					goTo:
						[
							79
						],
					image: ""
				},
				
				174:
				{
					title: "",
					story:
						[
							'As you reach forward to pick up a lantern from the table, three things occur to you: firstly, that you already have a lantern; secondly, that stealing a second might be risking your luck; and thirdly, that Lord Colefax might give you some funny looks if you start swanning about his estate with several light fixtures dangling from your tunic',
							'You think better of your kleptomanical inclinations and slowly retract your arm.'
						],
					choices:
						[
							'Continue'
						],
					goTo:
						[
							73
						],
					image: ""
				},
				
				175:
				{
					title: "",
					story:
						[
							'"Do you know what this means?" you ask, retrieving the strange instructions from your notebook and holding them out to Prismall, who then takes them. "I believe they may be instructions of some kind."',
							'Prismall stares at the piece of paper, looking puzzled, and then eventually hands it back, shaking her head. "I\'m sorry."'
						],
					choices:
						[
							'Continue'
						],
					goTo:
						[
							98
						],
					image: ""
				},
				
				176:
				{
					title: "",
					story:
						[
							'"Mister Skinner, Lord Colefax\'s chef."',
							'"I\'ll send someone over, detective."'
						],
					choices:
						[
							'Continue'
						],
					goTo:
						[
							66
						],
					image: ""
				},
				
				177:
				{
					title: "",
					story:
						[
							'"Miss Prismall?" you ask, drawing nearer to the maid once more. "I\'m afraid I have some more questions I need to ask you."',
							'"That\'s okay, detective," Prismall replies, nodding her head. "Ask away."'
						],
					choices:
						[
							'Enquire about clues',
							'Enquire about the case',
							'Return to your investigations'
						],
					goTo:
						[
							98,
							56,
							295
						],
					image: ""
				},
				
				178:
				{
					title: "",
					story:
						[
							'You kneel down and peer through the keyhole. You spy what appears to be a line of cells along the far wall.'
						],
					choices:
						[
							'Step back from the keyhole'
						],
					goTo:
						[
							142
						],
					image: "./media/keyhole.jpg"
				},
				
				179:
				{
					title: "",
					story:
						[
							'"I\'m afraid not. Ludwick was a placid fellow who was neither the heart or bane of a party. He mostly liked to keep to himself and his work. He owned an architectural firm in Cardiff, though what possessed him to open shop there is beyond me; it is a cold city full of drunken cads with impenetrable accents. The only theory I can think of, wild as it may be, is that his untimely death was arranged by that of some rival firm."'
						],
					choices:
						[
							'Continue'
						],
					goTo:
						[
							218
						],
					image: ""
				},
				
				180:
				{
					title: "",
					story:
						[
							'You consult the \'clues\' page of your notebook.'
						],
					choices:
						[
							'Ask about Clue 1',
							'Ask about Clue 2',
							'Ask about Clue 3',
							'Ask about Clue 4',
							'Ask about Clue 5',
							'Ask about Clue 6',
							'Ask about Clue 7',
							'Ask about Clue 8',
							'Ask about Clue 9',
							'Ask about Clue 10',
							'Ask about Clue 11',
							'Enquire about the case',
							'Return to your investigations'
						],
					goTo:
						[
							115,
							24,
							170,
							268,
							258,
							280,
							199,
							201,
							253,
							287
						],
					image: ""
				},
				
				181:
				{
					title: "",
					story:
						[
							'A few days later, you receive a report that Lord Colefax has been spotted at the beach near his old manor. While cautiously examining the shoreline, you are set upon by several masked thugs, who render you unconscious with blunt instruments. You regain consciousness to find yourself in a small boat, far out at sea, with an anchor tied about your legs. One of the thugs picks up the hefty anchor and throws it overboard, causing you to be dragged along the deck, overboard, and down into the inky black abyss.'
						],
					choices:
						[
							'Continue'
						],
					goTo:
						[
							107
						],
					image: ""
				},
				
				182:
				{
					title: "",
					story:
						[
							'You follow the butler up a set of stone steps, through a pair of large white doors, and into the manor. He remains silent as he leads you up a large, winding staircase, down along a long corridor hung with paintings, and then eventually through a pair of doors into what appears to be a drawing room designed especially for the average Victorian lady',
							'"The deceased is through that door, detective," Blackwood informs you, gesturing to the northern door, "In the guest bedroom."',
							'"Thank you, Blackwood. I shall take things by myself from here, but I must insist that no staff leave the grounds until I have finished my investigations."',
							'"Very good, sir. I shall inform the staff at once," the butler replies, nodding his head smartly. "There are four servants of Lord Colefax: the gamekeeper, McFadyen; the cook, Skinner; the maid, Prismall; and myself. If you have need for us, we will most likely be in the stables, kitchen, lower service hall, and the library, respectively. Lord Colefax may be found in the parlour, though I must ask that you allow him some time to compose."',
							'The butler then inclines his head once more, turns, and then walks out of the boudoir, leaving you alone.'
						],
					choices:
						[
							'Continue'
						],
					goTo:
						[
							149
						],
					image: ""
				},
				
				183:
				{
					title: "",
					story:
						[
							'The larder consists of shelf upon wooden shelf, stacked with the widest variety of foods imaginable. Collections of eggs, bottles of milk, ripe cheeses, legs of meat and whole game animals hanging from hooks, bowls full of fruit, boxes of vegetables, loaves of bread, tubs of seasoning, and large barrels of exotic spices, grains, sugar, and salt. It would seem that Lord Colefax need not worry about running short on supplies for quite some time.'
						],
					choices:
						[
							'Enter the service passage'
						],
					goTo:
						[
							50
						],
					image: ""
				},
				
				184:
				{
					title: "",
					story:
						[
							'The service hall is a room that is clearly never intended to be visited by Lord Colefax or his guests, especially when one considers its relatively bare walls and a stone floor. Its main purpose would appear to be as a hub of sorts for the servants, with a plain wooden table set with four chairs and a half-eaten meal, a dresser halffilled with basic tableware, a central bell panel, and a few bench-like seats stationed against the walls. A good portion of the room is taken up by a wide stone staircase, its steps worn smooth from constant use, which descends in one direction into the basement of the manor and ascends in another up to the upper floor.'
						],
					choices:
						[
							'Ascend the staircase',
							'Descend the staircase',
							'Enter the grounds',
							'Enter the main hall ',
							'Enter the pantry',
							'Examine the bell panel'
						],
					goTo:
						[
							191,
							276,
							194,
							257,
							284,
							160
						],
					image: ""
				},
				
				185:
				{
					title: "",
					story:
						[
							'The letters are a series of correspondences between Lord Colefax and a Doctor Maynard at Bymarsh Asylum. It would seem that Lord Colefax is concerned by a degradation of his memory, to which Doctor Maynard has reassured him that it is a perfectly normal for citizens of advanced age, such as he, and recommends that he write down important information, lest he forget it.'
						],
					choices:
						[
							'Set down the letters'
						],
					goTo:
						[
							63
						],
					image: ""
				},
				
				186:
				{
					title: "",
					story:
						[
							'The grand piano has been set in a position of central importance in the room and with good reason. Crafted beautifully from polished rosewood and featuring an intricate stand laden with sheet music, the Bechstein looks like it must be worth a fortune. Judging by the slight wearing on its ebony and ivory keys, it has a great deal of affection.'
						],
					choices:
						[
							'Examine the sheet music',
							'Step back from the piano'
						],
					goTo:
						[
							205,
							118
						],
					image: ""
				},
				
				187:
				{
					title: "",
					story:
						[
							'Asides from the strange trinkets stacked upon the shelves, including a jet black mirror and wooden amulets, there are also a number of books, including works by John Dee, Cornelius Agrippa, and Paracelsus. At the very least, one thing is certain: Lord Colefax has an interest in the occult.',
							'Add Clue 5 \'Occult\' to the detective\'s notebook.'
						],
					choices:
						[
							'Step back from the bookcases'
						],
					goTo:
						[
							318
						],
					image: ""
				},
				
				188:
				{
					title: "",
					story:
						[
							'You turn and flee as fast as you can back up the winding, spiralling staircase, and don\'t stop until you are once more within the relative safety of the stone temple. You are not sure what you saw down amidst the whirlpool and you are not sure you want to know.',
							'If Box 7 is ticked, turn to 272.'
						],
					choices:
						[
							'Continue'
						],
					goTo:
						[
							20
						],
					image: ""
				},
				
				189:
				{
					title: "",
					story:
						[
							'"Mister Blackwood?" you ask, approaching the butler.',
							'"I have a few questions to ask you."',
							'"Ask away, detective," Blackwood replies, straightening a little more upright.'
						],
					choices:
						[
							'Enquire about clues',
							'Enquire about the case',
							'Return to your investigations'
						],
					goTo:
						[
							117,
							270,
							252
						],
					image: ""
				},
				
				190:
				{
					title: "",
					story:
						[
							'An ornate array of weaponry is mounted about the room; some are in glass display cases, such as an array of halberds and collection of flintlock pistols, and others are mounted straight upon the wall, such as cutlasses and broadswords. It would seem that, considering the immaculate condition of each individual weapon, Lord Colefax is immensely proud of his collection.'
						],
					choices:
						[
							'Continue'
						],
					goTo:
						[
							283
						],
					image: ""
				},
				
				191:
				{
					title: "",
					story:
						[
							'"When I inspected Mister Ludwick, his pupils were contracted, which means he probably wasn\'t panicking when it happened. Can you think of a reason why he wasn\'t panicked?"',
							'The maid thinks for a few seconds and then shakes her head.'
						],
					choices:
						[
							'Continue'
						],
					goTo:
						[
							98
						],
					image: ""
				},
				
				192:
				{
					title: "",
					story:
						[
							'The upper service hall is somewhat bare, with its worn wooden floor and white-washed walls, but at least the large windows would render the room well-lit during the day. A table is located in the middle of the room, atop which is placed a sewing machine, a loose sock with a hole in the heel, and a half-finished letter. Set against one wall is a row of poor-quality chests of drawers, with labels on each drawer detailing their contents, such as \'Darning\' and \'Furniture Wax\'. Atop the chest of drawers sits an already antiquated-looking telephone.'
						],
					choices:
						[
							'Descend the staircase',
							'Enter the boudoir',
							'Enter the servants\' quarters',
							'Examine the letter',
							'Use the telephone'
						],
					goTo:
						[
							183,
							149,
							299,
							15,
							138
						],
					image: ""
				},
				
				193:
				{
					title: "",
					story:
						[
							'"Miss Prismall?" you ask gently, carefully approaching the maid. "My name is Detective Barns. I\'m here to investigate the murder of Mister Ludwick. I know it is all a bit of a shock, but I need to ask you some questions. Would that be all right?"',
							'The maid nods her head and straightens up a little in her chair.'
						],
					choices:
						[
							'You\'ve already met Prismall',
							'Enquire about clues',
							'Enquire about the case',
							'Return to your investigations'
						],
					goTo:
						[
							176,
							98,
							56,
							295
						],
					image: ""
				},
				
				194:
				{
					title: "",
					story:
						[
							'"All right, but you have to be quiet," you explain to the man, while looking about for something to open the cell door with. You spy a key hanging on a hook upon the wall and quickly retrieve it. You unlock the cell door and reach in to help the man up, only for him to accept your arm and then throw you in the cell. Before you can get back to your feet, the old man has slipped past you, slammed the door shut, and taken the key. He pumps his arms briefly into the air, then exits the room through the door you entered from, leaving you to rot in the cell. After several agonizing days, you die from thirst in the makeshift gaol.'
						],
					choices:
						[
							'Box 8 is ticked',
							'Continue'
						],
					goTo:
						[
							323,
							282
						],
					image: ""
				},
				
				195:
				{
					title: "",
					story:
						[
							'The west side of the mansion exterior seems devoted to places useful for Lord Colefax\'s servants. A small set of stairs leads up to a distinctly plain door to the lower floor, while a gentle slope a bit further along leads down to a pair of double doors that provide access to the manor\'s cellar, no doubt used for the delivery of assorted goods and supplies. Further north still is a small herb garden outside what looks like the kitchen windows, its beds filled with a variety of common and hardy herbs that can withstand the rigours of the sea air.'
						],
					choices:
						[
							'Enter the service hall',
							'Enter the service passage',
							'Head back around the manor'
						],
					goTo:
						[
							183,
							263,
							151
						],
					image: ""
				},
				
				196:
				{
					title: "",
					story:
						[
							'"When I inspected the victim, I found that his pupils were contracted, strongly suggesting that he wasn\'t in a state of panic when he died. Do you have any idea why this might be?"',
							'"Maybe the murderer didn\'t kill him quickly and he had time to accept what was happening?" Skinner suggests, looking less than convinced. "Best I\'ve got."'
						],
					choices:
						[
							'Continue'
						],
					goTo:
						[
							139
						],
					image: ""
				},
				
				197:
				{
					title: "",
					story:
						[
							'The wind is noticeably stronger, up upon the dais, but the view is certainly worth it. Through a gap in the clouds, the moon shines down her pale radiance, illuminating the dark cliffs so iconic of Cornwall, the nearby rugged, yet beautiful landscape, and the turbulent sea far below. The sound of boots thudding quickly against gravel reach your ears and you turn around in time to see a masked figure push you over the low dais wall, sending you tumbling off the cliff, down towards the jagged rocks and crashing waves.'
						],
					choices:
						[
							'Continue'
						],
					goTo:
						[
							107
						],
					image: ""
				},
				
				198:
				{
					title: "",
					story:
						[
							'Later that month, you are out on a call to an abandoned house, where someone claims to have seen suspicious activity going on. You are shot over a dozen times from behind after taking but a few steps past the threshold, before the door is closed behind you and you are left to bleed out in the dark.'
						],
					choices:
						[
							'Continue'
						],
					goTo:
						[
							107
						],
					image: ""
				},
				
				199:
				{
					title: "",
					story:
						[
							'"Mister Skinner?" you ask, earning you an irritated look from the chef. "I have some more questions to ask you."',
							'With an irritated grunt, the chef sets down his washing and turns to face you once more, arms folded over his apron.'
						],
					choices:
						[
							'Enquire about clues',
							'Enquire about the case',
							'Return to your investigations'
						],
					goTo:
						[
						
						],
					image: ""
				},
				
				200:
				{
					title: "",
					story:
						[
							'"The pupils of the victim were contracted, when I examined them. This suggests he wasn\'t frightened when he died. Can you think of any reasons why that might be?"',
							'"Which one of us was the detective again?" the gamekeeper asks, raising a bushy eyebrow. "Heck if I know why."'
						],
					choices:
						[
							'Continue'
						],
					goTo:
						[
							179
						],
					image: ""
				},
				
				201:
				{
					title: "",
					story:
						[
							'The bathroom is a small, elegant room centred around a white bath with brass legs, shaped after the limbs of a lion, set upon a dark wood floor. While the east window is somewhat small and flanked by muslin drapes, the north window is unobstructed and overlooks the dark Atlantic Ocean. A pair of light wood cabinets are nestled against the south wall, their colour matching pleasantly to the dark green print of the wallpaper.'
						],
					choices:
						[
							'Enter the east hall',
							'Examine the cabinets'
						],
					goTo:
						[
							75,
							124
						],
					image: ""
				},
				
				202:
				{
					title: "",
					story:
						[
							'"There was a strange shoeprint coated in orange dust in the study. Do you know where that could have come from?"',
							'"Nope," McFadyen helpfully replies. "Only thing I know that does that is certain types of earth that aren\'t found round here."'
						],
					choices:
						[
							'Continue'
						],
					goTo:
						[
							179
						],
					image: ""
				},
				
				203:
				{
					title: "",
					story:
						[
							'"While exploring your hidden study, I found this list of instructions," you announce, producing the aforementioned scrap of paper. "Do you know what they mean?"',
							'Lord Colefax leans forward to receive the paper, and then pauses for a few moments as he is seized by a bout of coughing. Upon the subsidence of the fit, he takes the piece of paper and starts to read it.',
							'"I\'m afraid I don\'t know what these instructions mean," he eventually declares. An agonizing pain suddenly streaks across your body as a sharp blade pierces your back, severing your spinal cord. The blade is then withdrawn and, your legs no longer functioning, you collapse to the floor as blood starts to pool out onto the hearth.',
							'"And neither will you," Lord Colefax comments, with the sight of him leaning back in his chair being the last you see.'
						],
					choices:
						[
							'Continue'
						],
					goTo:
						[
							107
						],
					image: ""
				},
				
				204:
				{
					title: "",
					story:
						[
							'You find yourself in a makeshift gaol of sorts, with straw covering the dusty stone floor and a number of bar-lined cells occupying the far wall. One of them is occupied by a twitchy, nervous-looking elderly man that looks barely alive. Set the west wall is a door, along which is a wooden stool and a small bundle of clothing'
						],
					choices:
						[
							'Open the door',
							'Peek through the keyhole',
							'Return to the junction',
							'Talk to the man'
						],
					goTo:
						[
							29,
							84,
							88,
							248
						],
					image: ""
				},
				
				205:
				{
					title: "",
					story:
						[
							'"I don\'t know, but I can guess that Prismall – she\'s the maid – was doin\' some cleanin\', Skinner – he\'s the chef – was clearin\' the kitchen up from dinner, and that Blackwood was poncin\' about, makin\' Lord Colefax\'s room up all nice and proper. Not sure where Lord Colefax himself would\'ve been."'
						],
					choices:
						[
							'Continue'
						],
					goTo:
						[
							167
						],
					image: ""
				},
				
				206:
				{
					title: "",
					story:
						[
							'A selection of books have been laid out decoratively upon the filigree music stand. Reading from left to right, they are: Danse Macabre, by Saint-Saëns; String Quartet No. 14 in D minor, by Schubert; Prometheus, by Liszt; and, lastly, Die Hebriden, Op. 26, by Mendelssohn.'
						],
					choices:
						[
							'Continue'
						],
					goTo:
						[
							185
						],
					image: ""
				},
				
				207:
				{
					title: "",
					story:
						[
							'Using a nearby pack of matches, you strike one and carefully light the longest fuse visible in the box, before quickly stepping back as the fuse begins to hiss ominously.',
							'Tick Box 6 in the detective\'s notebook'
						],
					choices:
						[
							'Continue'
						],
					goTo:
						[
							235
						],
					image: ""
				},
				
				208:
				{
					title: "",
					story:
						[
							'"I don\'t keep a close track on my servants, but I can safely assume that McFadyen was performing his customary patrol of the grounds and that Skinner – the chef – was washing up in the kitchen. Prismall would have either been clearing up the dining room or doing some dusting and, based on the time, Blackwood would have been preparing my bed for the night."'
						],
					choices:
						[
							'Continue'
						],
					goTo:
						[
							218
						],
					image: ""
				},
				
				209:
				{
					title: "",
					story:
						[
							'Deciding that nobody would believe your story, you decide to keep your mouth shut. The authorities end up chalking the explosion up to a major gas fault beneath the mansion. But you know differently.',
							'You may not have done things by the book, and you may not be recognised for what you have done, but you live the rest of your life with the knowledge that you single-handedly managed to stop Lord Colefax and his hideous cult from continuing their perverse deeds and slaughtering of innocents.'
						],
					choices:
						[
							'Continue'
						],
					goTo:
						[
							336
						],
					image: ""
				},
				
				210:
				{
					title: "",
					story:
						[
							'At the end of the long and downwards-sloping north tunnel, you find yourself in what appears to be a hidden dock of sorts, located in a long, water-filled cave that stretches out of sight. A small wooden jetty protrudes out into the water, tied up to which is a small wooden rowboat. It\'s quite possible that the cave is connected directly to the sea outside.'
						],
					choices:
						[
							'Box 8 is ticked',
							'Return to the junction',
							'Swim out of the cave',
							'Use the rowboat to escape'
						],
					goTo:
						[
							323,
							88,
							87,
							11
						],
					image: ""
				},
				
				211:
				{
					title: "",
					story:
						[
							'"I noticed you keep an interesting stock of chemicals in your study, Lord Colefax."',
							'"I have a dabbling interest in pharmacology," Lord Colefax explains airily, not looking particularly bothered.',
							'"But the only bottle that shows any sign of recent disturbance is the one containing morphine."',
							'"I sometimes find it a little hard to drift off at night, what with the aches and pains that come with old age; I sometimes get Blackwood to administer a dose, so I can rest more thoroughly."'
						],
					choices:
						[
							'Continue'
						],
					goTo:
						[
							213
						],
					image: ""
				},
				
				212:
				{
					title: "",
					story:
						[
							'"Can you make sense of these instructions?" you ask, holding out the folded piece of paper you retrieved earlier. "I found them secreted away in Lord Colefax\'s study."',
							'Skinner leans forward and peers at the piece of paper. A few seconds later, he stands back up straight and shrugs. "No idea."'
						],
					choices:
						[
							'Continue'
						],
					goTo:
						[
							139
						],
					image: ""
				},
				
				213:
				{
					title: "",
					story:
						[
							'You write out a proposal that Lord Colefax is guilty, due to his interest in the occult arts and the ritualistic way in which Ludwick was murdered, which you then combine to form the theory that Lord Colefax used Ludwick a ritual sacrifice.'
						],
					choices:
						[
							'Choose again',
							'Commit'
						],
					goTo:
						[
							61,
							83
						],
					image: ""
				},
				
				214:
				{
					title: "",
					story:
						[
							'You consult the \'clues\' page of your notebook.'
						],
					choices:
						[
							'Ask about Clue 1',
							'Ask about Clue 2',
							'Ask about Clue 3',
							'Ask about Clue 4',
							'Ask about Clue 5',
							'Ask about Clue 6',
							'Ask about Clue 7',
							'Ask about Clue 8',
							'Ask about Clue 9',
							'Ask about Clue 10',
							'Ask about Clue 11',
							'Enquire about the case',
							'Return to your investigations '
						],
					goTo:
						[
							210,
							202,
							23,
							41,
							109,
							70,
							307,
							226,
							157,
							305,
							106,
							218,
							238
						],
					image: ""
				},
				
				215:
				{
					title: "",
					story:
						[
							'After taking but a few steps in through the door, something very hard and heavy is brought down upon your head with enough force to cause you to black out. When you awaken, you to find yourself tied to a rack in the room, your clothing discarded in the corner, and a very unfriendly-looking bald man approaching you. After several weeks of agonizing torture, you eventually manage to slip into the sweet embrace of death.'
						],
					choices:
						[
							'Continue'
						],
					goTo:
						[
							143
						],
					image: ""
				},
				
				216:
				{
					title: "",
					story:
						[
							'"Not to my knowledge, detective. The late Mister Ludwick was a retired individual that wouldn\'t have said \'boo\' to a goose."'
						],
					choices:
						[
							'Continue'
						],
					goTo:
						[
							270
						],
					image: ""
				},
				
				217:
				{
					title: "",
					story:
						[
							'"While in the study, I came across an odd shoeprint, covered in orange dust. Do you know what might be the source of the dust?"',
							'"Could be Pris," the chef replies, sounding uninterested in the question. Daft girl knocked over a bag of paprika last week. Wouldn\'t be surprised if there\'s still some of it on the larder floor'
						],
					choices:
						[
							'Continue'
						],
					goTo:
						[
							139
						],
					image: ""
				},
				
				218:
				{
					title: "",
					story:
						[
							'The billiard room is a long for a chamber of such a function, featuring carved a open-beam ceiling, two long billiard tables in its centre, and a wide array of Persian rugs carefully laid out across the stone floor. A small, elegant golden chandelier hangs down above each table, bathing the room with a satisfying, yet almost mystical level of light.'
						],
					choices:
						[
							'Enter the great staircase',
							'Enter the solarium'
						],
					goTo:
						[
							22,
							118
						],
					image: ""
				},
				
				219:
				{
					title: "",
					story:
						[
							'You consult your notebook.'
						],
					choices:
						[
							'"Can you think of any motives?"',
							'"Did you hear a commotion?"',
							'"Did you know the deceased?"',
							'"What were you doing at the time?"',
							'"When did the murder occur?"',
							'"Where were the other staff at the time?"',
							'"Why was the deceased here?"',
							'Enquire about clues',
							'Return to your investigations'
						],
					goTo:
						[
							178,
							312,
							278,
							154,
							224,
							207,
							35,
							213,
							236
						],
					image: ""
				},
				
				220:
				{
					title: "",
					story:
						[
							'You swing the secret door back into place until the passageway is safely closed. If you didn\'t know of the door\'s existence, you could swear it wasn\'t there, due to how well it blends in with the rest of the bookcase.'
						],
					choices:
						[
							'Continue'
						],
					goTo:
						[
							52
						],
					image: ""
				},
				
				221:
				{
					title: "",
					story:
						[
							'"Lord Colefax."',
							'"Lord Colefax?" the voice echoes, sounding somewhat surprised and alarmed. "Are you sure? Very well... I\'ll send someone over right now, detective."'
						],
					choices:
						[
							'Continue'
						],
					goTo:
						[
							134
						],
					image: ""
				},
				
				222:
				{
					title: "",
					story:
						[
							'You insert the small key borrowed from Lord Colefax\'s dresser, insert it into the keyhole, and then turn. The drawer unlocks and you slide it open to find naught but a single scrap of paper carrying a mysterious message: Seventeen up, six right, Lord the Third.',
							'Though unsure what it could mean, you nevertheless decide to pick up the piece of paper and tuck it into your notebook for safekeeping.',
							'Add Clue 2 \'Instructions\' to the detective\'s notebook.'
						],
					choices:
						[
							'You already have clue 2',
							'Close the drawer'
						],
					goTo:
						[
							234,
							292
						],
					image: ""
				},
				
				223:
				{
					title: "",
					story:
						[
							'Skinner is a far cry from the classy cook one would expect of such an estate. Rather, it looks like he crawled out from a gutter from some East End slum in London, and got stuck in an apron. He is a short, portly man, with balding black hair and a moustache thick enough to strain tea through. He wears a white shirt with the sleeves rolled up to the elbows, a dirty apron, a stained pair of white trousers, and a pair of black boots. He seems to be irritated by your very presence, though, given the late hour and his workload, one can hardly blame him.'
						],
					choices:
						[
							'Continue'
						],
					goTo:
						[
							110
						],
					image: ""
				},
				
				224:
				{
					title: "",
					story:
						[
							'"I don\'t often see the gamekeeper, McFadyen, past suppertime, when he retires to the stable block, but for the maid and the chef, I had last instructed the former to wash some laundry in the lower service hall, while the latter was clearing up from dinner. I believe Lord Colefax was in the solarium, which was indeed where I found him after coming across the body."'
						],
					choices:
						[
							'Continue'
						],
					goTo:
						[
							270
						],
					image: ""
				},
				
				225:
				{
					title: "",
					story:
						[
							'"Based on when Ludwick retired and when I received the news, I estimate that it must have been some time between quarter to nine and ten o\'clock."'
						],
					choices:
						[
							'Continue'
						],
					goTo:
						[
							218
						],
					image: ""
				},
				
				226:
				{
					title: "",
					story:
						[
							'The parlour is by no means a large room in regards to the rest of the manor, but it is far from being small. Wood covers most of the room, from the dark panelling on the walls and warm-hued parquet flooring, to the black vaulted timber ceiling. Opposite a row of bookcases is a large fireplace that dominates the eastern wall, above which is set a portrait of a man in Georgian clothing. Before the hearth are set several comfortable red velvet chairs, one of which is occupied by a man in black evening attire, staring listlessly into the flames.'
						],
					choices:
						[
							'Enter the dining room',
							'Enter the great staircase',
							'Examine the fireplace portrait',
							'Observe Lord Colefax',
							'Talk to Lord Colefax'
						],
					goTo:
						[
							321,
							22,
							313,
							45,
							144
						],
					image: ""
				},
				
				227:
				{
					title: "",
					story:
						[
							'"I found something unusual while examining your study: a footprint, covered in orange dust. Where would that have come from?"',
							'"Orange dust, you say?" Lord Colefax asks, looking thoughtful. "I\'m afraid I can\'t say. Certain types of earth might result in an orange dust, or perhaps passing through a damp area that has a high iron content, but I can\'t think of anywhere around here that fits that description."'
						],
					choices:
						[
							'Continue'
						],
					goTo:
						[
							213
						],
					image: ""
				},
				
				228:
				{
					title: "",
					story:
						[
							
						],
					choices:
						[
							'Continue'
						],
					goTo:
						[
							242
						],
					image: ""
				},
				
				229: 
                { 
                    title: "", 
                    story: 
                    [
						'The collection of fine porcelain in the solarium is rather varied in both colours and design. Short, lidded white pots depicting gold carp; wide, multicoloured tea caddies featuring birds; handled blue and white vases with abstract scenes; it would seem that Lord Colefax, or one of his ancestors, was quite the collector. Goodness knows how much each piece is worth.'
                    ], 
                    choices: 
                    [ 
						'Step away from the porcelain'
                    ], 
                    goTo: 
                    [ 
						118
                    ], 
                    image: ""
                }, 

            230: 
                { 
                    title: "", 
                    story: 
                    [
						'Hung in a gap between bookcases and above a small chest of drawers is a yellowing map of Cornwall, with four large crosses, obviously added after it was printed, marking out four towns in the county: Bymarsh in the northeast, Caer Shaw in the north, Dunstow in the southwest, and Langston in the southeast.',
						'Add Clue 4 \'Map\' to the detective\'s notebook.'
                    ], 
                    choices: 
                    [ 
						'Step back from the map'
                    ], 
                    goTo: 
                    [ 
						318
                    ], 
                    image: ""
                }, 

            231: 
                { 
                    title: "", 
                    story: 
                    [
						'"I didn\'t. I was washing some laundry in the lower service hall at the time and could barely hear myself over the noise of the mangle. It\'s a bit rusty, you see."'
                    ], 
                    choices: 
                    [ 
						'Continue'
                    ], 
                    goTo: 
                    [ 
						56
                    ], 
                    image: ""
                }, 

            232: 
                { 
                    title: "", 
                    story: 
                    [
						'The master bedroom is a perfect example of opulence. The walls are decorated from a mixture of green paint and golden rococo designs, with more flourishes than in a fencing tournament, and the floors highly-polished oak. Set against one wall is an antique-looking four poster bed that reaches up to the ceiling, decked with towering wine red curtains and flanked by a Persian rug on one side and a bedside table upon the other. A gold and crystal chandelier hangs down from the ornate ceiling, upon which cloudy scenes of cherubim looking down have been painted.'
                    ], 
                    choices: 
                    [ 
						'Enter the east hall',
						'Enter the great staircase',
						'Examine the bedside table'
                    ], 
                    goTo: 
                    [ 
						75,
						324,
						82
                    ], 
                    image: ""
                }, 

            233: 
                { 
                    title: "", 
                    story: 
                    [
						'"It was good of you to meet me," you inform the butler, "but there is no need to remain with me. I shall be exploring the manor and grounds at my own pace, but I must insist that no staff leave the grounds until I have finished my investigations."',
						'"Very good, sir. I shall inform the staff at once," the butler replies, nodding his head smartly. "There are four servants of Lord Colefax: the gamekeeper, McFadyen; the cook, Skinner; the maid, Prismall; and myself. If you have need for us, we will most likely be in the stables, kitchen, lower service hall, and the library, respectively. Lord Colefax may be found in the parlour, though I must ask that you allow him some time to compose. And the late Mister Ludwick is in the guest bedroom on the upper floor," he adds, as an aside.',
						'The butler then inclines his head once more, turns, and heads up the stairs leading into Colefax Manor, leaving you alone outside.'
                    ], 
                    choices: 
                    [ 
						'Continue'
                    ], 
                    goTo: 
                    [ 
						151
                    ], 
                    image: ""
                }, 

            234: 
                { 
                    title: "", 
                    story: 
                    [
						'The guest bedroom would no doubt be a beautiful chamber if it were not for the ghastly deed that was perpetrated inside it. Striped yellow wallpaper decks the walls, the windows provide fine views across the sea, a pleasantly simplistic chandelier consisting of seven arms provides light, and the large four-poster bed looks like it used to be highly comfortable. Its sheets are festooned with rapidly congealing blood, courtesy of the body set amidst them, still dressed in his pyjamas. His wallet and a few assorted belongings are set on a short night stand beside the bed.'
                    ], 
                    choices: 
                    [ 
						'Examine the victim',
						'Examine the victim\'s belongings',
						'Enter the boudoir'
                    ], 
                    goTo: 
                    [ 
						18,
						165,
						149
                    ], 
                    image: ""
                }, 

            235: 
                { 
                    title: "", 
                    story: 
                    [
						'You open the desk drawer once more, only to find nothing in there, having previous taken the only thing present from within it.'
                    ], 
                    choices: 
                    [ 
						'Close the drawer'
                    ], 
                    goTo: 
                    [ 
						292
                    ], 
                    image: ""
                }, 

            236: 
                { 
                    title: "", 
                    story: 
                    [
						'You find yourself in a clustered stockroom filled with large wooden crates, piles of folded brown robes, small crates of expensive-looking food, and a small desk, above which is hung another map of Cornwall and upon which lies a small book.'
                    ], 
                    choices: 
                    [ 
						'Examine the book',
						'Examine the crates',
						'Return to the junction'
                    ], 
                    goTo: 
                    [ 
						14,
						261,
						88
                    ], 
                    image: ""
                }, 

            237: 
                { 
                    title: "", 
                    story: 
                    [
						'"Thank you for your time, my lord."',
						'"Thank you for your thoroughness, detective," Lord Colefax replies, as you get to your feet once more.'
                    ], 
                    choices: 
                    [ 
						'Continue'
                    ], 
                    goTo: 
                    [ 
						225
                    ], 
                    image: ""
                }, 

            238: 
                { 
                    title: "", 
                    story: 
                    [
						'The heavy tome, its pages gilded in gold leaf, tells the history of a Cornish town millennia ago, along with the arrival from the depths of the sea of a being they call Legrys Mor, which spread pleasure untold amongst its followers. Skimming through the book, it describes that hedonism and pleasure are considered the things most sacred to Legrys Mor, along with the various ways followers can worship it, a great many prayers, a number of perverse rites, and specific manners in which victims are to be sacrificed, the latter of which corresponds directly with the wounds found upon Mister Ludwick.'
                    ], 
                    choices: 
                    [ 
						'Set down the book'
                    ], 
                    goTo: 
                    [ 
						59
                    ], 
                    image: ""
                }, 

            239: 
                { 
                    title: "", 
                    story: 
                    [
						'"I found a syringe in the study that appears to have been used not long ago. Do you know anything about it?"',
						'The chef shakes his head.'
                    ], 
                    choices: 
                    [ 
						'Continue'
                    ], 
                    goTo: 
                    [ 
						139
                    ], 
                    image: ""
                }, 

            240: 
                { 
                    title: "", 
                    story: 
                    [
						'"While I was investigating, I stumbled upon a secret passage in Lord Colefax\'s study, leading to a small room filled with arcane artefacts and occult objects. Do you know about it?"',
						'Prismall\'s eyes widened the second you mentioned the word \'occult\'. "I\'m did not, though I fear I shall not be working much longer for someone with an interest in such things," she replies, sounding shocked. "Believe me, detective, this is the first I have ever heard of it."'
                    ], 
                    choices: 
                    [ 
						'Continue'
                    ], 
                    goTo: 
                    [ 
						98
                    ], 
                    image: ""
                }, 

            241: 
                { 
                    title: "", 
                    story: 
                    [
						'As your boat is nearing the shore, a tremendous explosion of fire and rock lights up the night sky as the promontory under Colefax Manor begins to crumble, sending with it a shockwave powerful enough to blow your boat up along the shore and a wave crashing down on top of you',
						'Wiping the water out of your eyes, you watch Colefax Manor begin to tumble into the sea, crumbling almost in slow motion, before it collapses amongst the destroyed cliff in a massive pillar of dust. It could be a trick of your eyes, but as the waves wash over the remains of the stately home, what looks like a black, amorphous shape can be seen ever emerging from amidst the nearby waves, before disappearing into the sea.'
                    ], 
                    choices: 
                    [ 
						'Continue'
                    ], 
                    goTo: 
                    [ 
						208
                    ], 
                    image: ""
                }, 

            242: 
                { 
                    title: "", 
                    story: 
                    [
						'"My apologies; I\'m afraid I do not need your services just yet."',
						'"That is quite all right, detective. Have a good night."',
						'The line goes dead and you put the receiver back onto the hook.'
                    ], 
                    choices: 
                    [ 
						'Step back from the phone'
                    ], 
                    goTo: 
                    [ 
						191
                    ], 
                    image: ""
                }, 

            243: 
                { 
                    title: "", 
                    story: 
                    [
						'You consult your notebook.'
                    ], 
                    choices: 
                    [ 
						'"Can you think of any motives?"',
						'"Did you hear a commotion?"',
						'"Did you know the deceased?"',
						'"What were you doing at the time?"',
						'"When did the murder occur?"',
						'"Where were the other staff at the time?"',
						'"Why was the deceased here?"',
						'Enquire about clues',
						'Return to your investigations'
                    ], 
                    goTo: 
                    [ 
						51,
						249,
						227,
						46,
						251,
						112,
						12,
						139,
						285
                    ], 
                    image: ""
                }, 

            244: 
                { 
                    title: "", 
                    story: 
                    [
						'"I don\'t think so, detective. Mister Ludwick seemed like a really nice man, from the little I saw of him. I can\'t imagine he had many enemies."'
                    ], 
                    choices: 
                    [ 
						'Continue'
                    ], 
                    goTo: 
                    [ 
						56
                    ], 
                    image: ""
                }, 

            245: 
                { 
                    title: "", 
                    story: 
                    [
						'Use what you learned last night, including any clues you may have found, to write a proposal of Blackwood\'s guilt.'
                    ], 
                    choices: 
                    [ 
						'Suspicious alibi',
						'Use Clues 1, 6, and 10'
                    ], 
                    goTo: 
                    [ 
						269,
						128
                    ], 
                    image: ""
                }, 

            246: 
                { 
                    title: "", 
                    story: 
                    [
						'The somewhat dirty hypodermic syringe appears to be made from brass and has obviously seen a fair bit of use over the years. The very tip, however, has either been recently cleaned or polished, for reasons unknown.',
						'Add Clue 10 \'Syringe\' to the detective\'s notebook.'
                    ], 
                    choices: 
                    [ 
						'Set down the syringe'
                    ], 
                    goTo: 
                    [ 
						63
                    ], 
                    image: ""
                }, 

            247: 
                { 
                    title: "", 
                    story: 
                    [
						'You step back away from the cell, while putting your finger to your lips and motioning for the man to not make any more noise. He responds by putting up a finger of his own.'
                    ], 
                    choices: 
                    [ 
						'Continue'
                    ], 
                    goTo: 
                    [ 
						203
                    ], 
                    image: ""
                }, 

            248: 
                { 
                    title: "", 
                    story: 
                    [
						'You step back away from the cell, while With the murderer dead, Dunstow is safe to relax. Or, so it would seem. A few months later, a body is found in the vicinity of Colefax Manor, possessing the same brutal injuries inflicted on the late Mister Ludwick. It would appear that you have sent an innocent person to their death and let the real killer go free. You are instructed to hand in your badge and retire from the police service. Without your keen intellect, the mystery of who really committed the murder at Colefax Manor will be forever left unsolved.putting your finger to your lips and motioning for the man to not make any more noise. He responds by putting up a finger of his own.'
                    ], 
                    choices: 
                    [ 
						'Try again',
						'Give up'
                    ], 
                    goTo: 
                    [ 
						151,
						336
                    ], 
                    image: ""
                }, 

            249: 
                { 
                    title: "", 
                    story: 
                    [
						'As soon as you approach, the elderly man hisses in a desperate whisper, "Let me out! Please! I\'ve been locked in here for weeks! Let me out and I\'ll make it worth your while!"'
                    ], 
                    choices: 
                    [ 
						'Back away',
						'Let the man out'
                    ], 
                    goTo: 
                    [ 
						246,
						336
                    ], 
                    image: ""
                }, 

            250: 
                { 
                    title: "", 
                    story: 
                    [
						'"Over the sound of clanking plates and clattering dishes? You must be joking," Skinner replies, smirking grimly through his moustache.'
                    ], 
                    choices: 
                    [ 
						'Continue'
                    ], 
                    goTo: 
                    [ 
						242
                    ], 
                    image: ""
                }, 

            251: 
                { 
                    title: "", 
                    story: 
                    [
						'You kneel down and peer through the keyhole. You spy a dank stone room filled with implements and instruments of torture.'
                    ], 
                    choices: 
                    [ 
						'Step back from the keyhole'
                    ], 
                    goTo: 
                    [ 
						159
                    ], 
                    image: ""
                }, 

            252: 
                { 
                    title: "", 
                    story: 
                    [
						'"Hell if I know. I only found out when Blackwood came in at half ten to let me know you\'d be arriving."'
                    ], 
                    choices: 
                    [ 
						'Continue'
                    ], 
                    goTo: 
                    [ 
						242
                    ], 
                    image: ""
                }, 

            253: 
                { 
                    title: "", 
                    story: 
                    [
						'"That\'s all for now."',
						'"It was my pleasure, detective," Blackwood replies dryly, before turning to resume his dusting.'
                    ], 
                    choices: 
                    [ 
						'Continue'
                    ], 
                    goTo: 
                    [ 
						289
                    ], 
                    image: ""
                }, 

            254: 
                { 
                    title: "", 
                    story: 
                    [
						'"Wounds on the victim show he was strangled, but didn\'t die from it. Can you think of a reason why they wouldn\'t have just finished Ludwick off by hand, as it were?"',
						'"None at all," the gamekeeper says. "I never really saw him from up close, but Ludwick always looked like the sort of fellow who\'d be felled by a strong wind. Not sure why they wouldn\'t have just strangled him to death."'
                    ], 
                    choices: 
                    [ 
						'Continue'
                    ], 
                    goTo: 
                    [ 
						179
                    ], 
                    image: ""
                }, 

            255: 
                { 
                    title: "", 
                    story: 
                    [
						'"While conducting my investigations, I came across a map of Cornwall, tucked out of the way, with crosses located upon the towns of Bymarsh, Caer Shaw, Dunstow, and Langston. Do you know what that might be relating to?"',
						'"I\'m afraid I haven\'t the faintest clue, detective," the butler replies, "and I would rather not speculate unto Lord Colefax\'s private affairs."'
                    ], 
                    choices: 
                    [ 
						'Continue'
                    ], 
                    goTo: 
                    [ 
						117
                    ], 
                    image: ""
                }, 

            256: 
                { 
                    title: "", 
                    story: 
                    [
						'You write out a proposal that McFadyen is guilty, due to his previous experience with using morphine, the syringe in Lord Colefax\'s study showing signs of recent use, and a corresponding puncture wound found upon the victim, which you then combine to form the theory that McFadyen drugged Ludwick, before murdering him.'
                    ], 
                    choices: 
                    [ 
						'Choose again',
						'Commit'
                    ], 
                    goTo: 
                    [ 
						152,
						146
                    ], 
                    image: ""
                }, 

            257: 
                { 
                    title: "", 
                    story: 
                    [
						'It looks like the murderer will have to make do with two wavy-bladed daggers, considering that you took the third.'
                    ], 
                    choices: 
                    [ 
						'Continue'
                    ], 
                    goTo: 
                    [ 
						59
                    ], 
                    image: ""
                }, 

            258: 
                { 
                    title: "", 
                    story: 
                    [
						'The main hall of Colefax Manor is as intimidating as it is magnificent. Cream stone walls, chequered marble floors, expensive vases on pedestals, ornate rococo embellishments in gold leaf upon most objects in sight, and an vast circular clock that dominates the northern wall, above a pair of teak double doors. Tall windows flank the even larger set of white doors that lead out into the grounds of the manor, though the view through the glass is far from optimal, given the time of night.'
                    ], 
                    choices: 
                    [ 
						'Enter the dining room',
						'Enter the drawing room',
						'Enter the grounds',
						'Enter the great staircase'
                    ], 
                    goTo: 
                    [ 
						321,
						101,
						151,
						22
                    ], 
                    image: ""
                }, 

            259: 
                { 
                    title: "", 
                    story: 
                    [
						'"I found a secret room in the manor, filled with occult items. Do you know anything about it?"',
						'"Not me," the gamekeeper replies, looking faintly troubled. "I just deal with the grounds and occasionally shift about the odd thing too heavy for Blackwood or Prismall."'
						
                    ], 
                    choices: 
                    [ 
						'Continue'
                    ], 
                    goTo: 
                    [ 
						179
                    ], 
                    image: ""
                }, 

            260: 
                { 
                    title: "", 
                    story: 
                    [
						'Use what you learned last night, including any clues you may have found, to write a proposal of McFadyen\'s guilt.'
                    ], 
                    choices: 
                    [ 
						'Suspicious alibi',
						'Use Clues 1, 3, 6, and 10',
						'Use Clues 1, 6, and 10',
						'Use Clue 3'
                    ], 
                    goTo: 
                    [ 
						150,
						5,
						255,
						266
                    ], 
                    image: ""
                }, 

            261: 
                { 
                    title: "", 
                    story: 
                    [
						'You screw the paper bearing your proposal into a ball and toss it into a nearby waste paper basket.'
                    ], 
                    choices: 
                    [ 
						'Continue'
                    ], 
                    goTo: 
                    [ 
						244
                    ], 
                    image: ""
                }, 

            262: 
                { 
                    title: "", 
                    story: 
                    [
						'After carefully examining a few of the crates, you find one with a loose lid, and shift it to one side to reveal what must be hundreds of off-brown sticks with protruding fuses, that could not be anything but dynamite. If a single stick was lit, then the resulting chain explosion would no doubt destroy the tunnels and Colefax Manor itself.'
                    ], 
                    choices: 
                    [ 
						'Box 6,7 or 8 is ticked',
						'Light a long fuse',
						'Light a medium-length fuse',
						'Light a short fuse',
						'Replace the lid'
                    ], 
                    goTo: 
                    [ 
						37,
						206,
						54,
						335,
						14
                    ], 
                    image: ""
                }, 

            263: 
                { 
                    title: "", 
                    story: 
                    [
						'You find yourself in a rocky tunnel that is thankfully high enough so you don\'t have to stoop, but dark enough so you have to squint, even with the assistance of the lantern you borrowed from the stables.'
                    ], 
                    choices: 
                    [ 
						'Box 8 is ticked',
						'Head down the tunnel',
						'Try to open the door'
                    ], 
                    goTo: 
                    [ 
						323,
						88,
						21
                    ], 
                    image: ""
                }, 

            264: 
                { 
                    title: "", 
                    story: 
                    [
						'The sheer lack of the light in the passage is remarkable. You can\'t even see your own feet, let alone the walls or floor. How you hope to get about without some form of light source is a mystery.'
                    ], 
                    choices: 
                    [ 
						'Box 1 is ticked',
						'Leave the service passage',
						'Venture forth regardless'
                    ], 
                    goTo: 
                    [ 
						50,
						194,
						74
                    ], 
                    image: ""
                }, 

            265: 
                { 
                    title: "", 
                    story: 
                    [
						'The construct that appeared to be a tomb turns out to be the entrance to a crypt, crafted from cold grey marble and fitted with wrought iron gates, one of which hangs open wide. Despite the lack of any engravings or signs, the position and prominence of the entrance suggesting that the crypt most likely hold the remains of Lord Colefax\'s ancestors.'
                    ], 
                    choices: 
                    [ 
						'Enter the crypt',
						'Head back towards the manor'
                    ], 
                    goTo: 
                    [ 
						39,
						151
                    ], 
                    image: ""
                }, 

            266: 
                { 
                    title: "", 
                    story: 
                    [
						'Counting bricks up from the plaque of Lord Colefax III and to the right, you eventually stop at brick beside a dusty plaque bearing an inscription you can\'t make out in the dim light. You push the brick and find that a whole section of wall gives way, swinging open much like a door its hinge to reveal a dark tunnel that appears to be sculpted out of the very rock of the cliffs. You examine the hidden door and conclude that it only opens from the side facing the crypt. If the door were to close while you\'re in the tunnel, you would have no way to open it again. You\'ll have to be certain you have investigated all that you need in the manor and its grounds before heading through.'
                    ], 
                    choices: 
                    [ 
						'Close the door',
						'Enter the tunnel'
                    ], 
                    goTo: 
                    [ 
						76,
						151
                    ], 
                    image: ""
                }, 

            267: 
                { 
                    title: "", 
                    story: 
                    [
						'You write out a proposal that McFadyen is guilty, due to his disgruntled letter to Lord Colefax, which you use to form the theory that McFadyen murdered Ludwick as an act of revenge upon Lord Colefax.'
                    ], 
                    choices: 
                    [ 
						'Choose again',
						'Commit'
                    ], 
                    goTo: 
                    [ 
						152,
						55
                    ], 
                    image: ""
                }, 

            268: 
                { 
                    title: "", 
                    story: 
                    [
						'"I found a map of Cornwall in Lord Colefax\'s private study, with several towns – Bymarsh, Langston, Dunstow, and Caer Shaw – marked with crosses. Any idea what it means?"',
						'"Not a clue. Could be looking at somewhere to move to, for all I know."'
                    ], 
                    choices: 
                    [ 
						'Continue'
                    ], 
                    goTo: 
                    [ 
						139
                    ], 
                    image: ""
                }, 

            269: 
                { 
                    title: "", 
                    story: 
                    [
						'"While investigating a study, I discovered a map of Cornwall, with a few towns crossed out. They were Caer Shaw, Dunstow, Langston, and Bymarsh. Any ideas what it might be related to?"',
						'"Could be lookin\' for more land," the gamekeeper theorises. "You know what these rich folks are like. Always lookin\' for more land and more houses."'
                    ], 
                    choices: 
                    [ 
						'Continue'
                    ], 
                    goTo: 
                    [ 
						179
                    ], 
                    image: ""
                }, 

            270: 
                { 
                    title: "", 
                    story: 
                    [
						'You write out a proposal that Blackwood is guilty, due to having access to Ludwick and a lack of witnesses to attest to his alibi.'
                    ], 
                    choices: 
                    [ 
						'Choose again',
						'Commit'
                    ], 
                    goTo: 
                    [ 
						260,
						131
                    ], 
                    image: ""
                }, 

            271: 
                { 
                    title: "", 
                    story: 
                    [
						'You consult your notebook.'
                    ], 
                    choices: 
                    [ 
						'"Can you think of any motives?"',
						'"Did you hear a commotion?"',
						'"Did you know the deceased?"',
						'"What were you doing at the time?"',
						'"When did the murder occur?"',
						'"Where were the other staff at the time?"',
						'"Why was the deceased here?"',
						'Enquire about clues',
						'Return to your investigations'
                    ], 
                    goTo: 
                    [ 
						215,
						68,
						33,
						96,
						125,
						223,
						71,
						117,
						252
                    ], 
                    image: ""
                }, 

            272: 
                { 
                    title: "", 
                    story: 
                    [
						'After carefully counting up from the floor, positioned directly beneath the plaque, and then over to the right, you firmly press upon the correct brick... to find that, in fact, it does absolutely nothing.'
                    ], 
                    choices: 
                    [ 
						'Push the plaque',
						'Push the brick seventeen up and six right from the plaque' 
                    ], 
                    goTo: 
                    [ 
						168,
						265
                    ], 
                    image: ""
                }, 

            273: 
                { 
                    title: "", 
                    story: 
                    [
						'Before you can take another step, a deafening explosion sounds nearby and you are swiftly buried by rubble as an entire cliff collapses on top of you. In retrospect, you probably should have lit a longer fuse.'
                    ], 
                    choices: 
                    [ 
						'Continue'
                    ], 
                    goTo: 
                    [ 
						282
                    ], 
                    image: ""
                }, 

            274: 
                { 
                    title: "", 
                    story: 
                    [
						'"I came across a map in Lord Colefax\'s private study that depicts Cornwall and has small crosses on it, marking out the towns of Caer Shaw, Bymarsh, Dunstow, and Langston. Do you know of any connexion Lord Colefax has to these places?"',
						'"I do not," the maid replies, shaking her head.'
                    ], 
                    choices: 
                    [ 
						'Continue'
                    ], 
                    goTo: 
                    [ 
						98
                    ], 
                    image: ""
                }, 

            275: 
                { 
                    title: "", 
                    story: 
                    [
						'You may not have found out who exactly was responsible for the murder at Colefax Manor, but you found out enough to warrant a raid by the Cornwall County Constabulary upon Colefax Manor and the arrest of Lord Colefax. In the weeks of trials that follow, however, a lack of evidence against Lord Colefax and his associates result in not only them not only being let off the hook, but then counter-suing you for slander',
						'At the end of the legal process, you have been fired for bringing the police service into disrepute and are left penniless, wandering the streets, with no-one believing your stories of a cult or giving you more than a contemptuous glance in passing.'
                    ], 
                    choices: 
                    [ 
						'Continue'
                    ], 
                    goTo: 
                    [ 
						336
                    ], 
                    image: ""
                }, 

            276: 
                { 
                    title: "", 
                    story: 
                    [
						'The chief inspector approves of your proposal and promptly starts proceedings to arrange a court case. Partway through the month of November, Lord Colefax\'s case comes up, but his lawyer is able to argue that the evidence isn\'t enough to implicate Lord Colefax, and the jury soon renders a verdict of not guilty'
                    ], 
                    choices: 
                    [ 
						'Continue'
                    ], 
                    goTo: 
                    [ 
						102
                    ], 
                    image: ""
                }, 

            277: 
                { 
                    title: "", 
                    story: 
                    [
						'The lower service hall is a dimly lit affair that is somehow dingier than the floor above it. With no windows at all and just a couple of gas lamp for illumination, the room is dominated by washing equipment, including a mangle, washing tub, and copious drying racks, along with a large steam boiler that looks like it must service the whole manor.'
                    ], 
                    choices: 
                    [ 
						'Ascend the staircase',
						'Enter the service passage'
                    ], 
                    goTo: 
                    [ 
						183,
						10
                    ], 
                    image: ""
                }, 

            278: 
                { 
                    title: "", 
                    story: 
                    [
						'Prismall looks like a fairly ordinary, run-of-the-mill maid: young, brown hair tied up into a neat bun, and possessing a general aura of meekness. She wears a frilly white hat fastened with a black bow, a knee-length black dress with short sleeves, a white pinafore, black stockings, and a pair of smart black shoes. Her eyes appear a little red, as if she has recently been crying; considering what she has been through, however, this is not surprising in the least.'
                    ], 
                    choices: 
                    [ 
						'Continue'
                    ], 
                    goTo: 
                    [ 
						299
                    ], 
                    image: ""
                }, 

            279: 
                { 
                    title: "", 
                    story: 
                    [
						'"Ludwick was an old friend of mine from Cambridge," Lord Colefax says, a wistful look in his eyes. "He was a boisterous sort back then, but he mellowed out considerably over time. We used to get together once a year to reminisce about the good old days."'
                    ], 
                    choices: 
                    [ 
						'Continue'
                    ], 
                    goTo: 
                    [ 
						218
                    ], 
                    image: ""
                }, 

            280: 
                { 
                    title: "", 
                    story: 
                    [
						'You have died! Without your keen intellect, the mystery of who committed the murder at Colefax Manor will be forever left unsolved.'
                    ], 
                    choices: 
                    [ 
						'Try again',
						'Give up'
                    ], 
                    goTo: 
                    [ 
						151,
						336
                    ], 
                    image: ""
                }, 

            281: 
                { 
                    title: "", 
                    story: 
                    [
						'"I found a strange puncture wound on the victim, separate from the wounds that killed him. Do you know of anything that might have caused that?"',
						'McFadyen looks thoughtfully for a moment, then suggests, "Syringe? Pen? Could\'ve been accidental. I can\'t really say, without havin\' a look, and I\'d rather keep my dinner down."'
                    ], 
                    choices: 
                    [ 
						'Continue'
                    ], 
                    goTo: 
                    [ 
						179
                    ], 
                    image: ""
                }, 

            282: 
                { 
                    title: "", 
                    story: 
                    [
						'"There was a syringe I found in the study, that appeared to have been recently used."',
						'"I fancy that would be the one I use to medicate Lord Colefax," Blackwood replies. "He was suffering rather badly last night."'
                    ], 
                    choices: 
                    [ 
						'Continue'
                    ], 
                    goTo: 
                    [ 
						117
                    ], 
                    image: ""
                }, 

            283: 
                { 
                    title: "", 
                    story: 
                    [
						'You have died! Without your keen intellect, the mystery of who committed the murder at Colefax Manor will be forever left unsolved.',
						'If any of the Boxes 4 through 8 in the detective’s notebook are ticked, remove them.'
                    ], 
                    choices: 
                    [ 
						'Try again',
						'Give up'
                    ], 
                    goTo: 
                    [ 
						262,
						336
                    ], 
                    image: ""
                }, 

            284: 
                { 
                    title: "", 
                    story: 
                    [
						'The smoking room is rather modest in size, fitted with a deep crimson carpet, dark wooden panelling, and a roaring fireplace. By far the most distinguishing thing about it, however, is the array of mounted weaponry and stuffed heads upon the walls. In stark contrast to these violent displays is a long beige couch, sat facing the fireplace, and flanked by a pair of armchairs in the same design.'
                    ], 
                    choices: 
                    [ 
						'Enter the dining room',
						'Enter the drawing room',
						'Examine the heads',
						'Examine the weaponry'
                    ], 
                    goTo: 
                    [ 
						321,
						101,
						286,
						189
                    ], 
                    image: ""
                }, 

            285: 
                { 
                    title: "", 
                    story: 
                    [
						'The pantry is a dimly-lit, cramped room filled with shelving, stocked high with everything from folded linen and stacks of silverware, to mops and dusters. A dusty wooden desk is set between two of the floor-toceiling shelving units, laden ledgers, writing accoutrements, and a steel mug. Far from in keeping with the manor, this room looks like it belongs at the back of some dingy shop.'
                    ], 
                    choices: 
                    [ 
						'Enter the kitchen',
						'Enter the service hall',
						'Examine the ledgers'
                    ], 
                    goTo: 
                    [ 
						110,
						183,
						7
                    ], 
                    image: ""
                }, 

            286: 
                { 
                    title: "", 
                    story: 
                    [
						'"That\'s all I need for the moment."',
						'"Very good," Skinner replies, before turning back to the sink and digging straight back in.'
                    ], 
                    choices: 
                    [ 
						'Continue'
                    ], 
                    goTo: 
                    [ 
						110
                    ], 
                    image: ""
                }, 

            287: 
                { 
                    title: "", 
                    story: 
                    [
						'It would seem that either Lord Colefax or one of his ancestors has a very keen interest in animals; specifically, shooting them, cutting their heads off, and having them mounted upon plaques. Lions, rhinoceroses, stags, foxes, giant pandas, giraffes, wolves, bears... it would seem that the Colefax family\'s bloodlust knows few bounds. At least, as far as animals are concerned.'
                    ], 
                    choices: 
                    [ 
						'Continue'
                    ], 
                    goTo: 
                    [ 
						283
                    ], 
                    image: ""
                }, 

            288: 
                { 
                    title: "", 
                    story: 
                    [
						'"I found in a recently-used syringe in Lord Colefax\'s study. Do you know why it might have been used?"',
						'"Your guess is as good as – if not better than – mine. Last time I used one of his syringes was a few months back, when one of the horses got an infection."'
                    ], 
                    choices: 
                    [ 
						'Continue'
                    ], 
                    goTo: 
                    [ 
						179
                    ], 
                    image: ""
                }, 

            289: 
                { 
                    title: "", 
                    story: 
                    [
						'With the murderer locked up in Bedlam, Dunstow is safe to relax. Or, so it would seem. A few months later, a body is found in the vicinity of Colefax Manor, possessing the same brutal injuries inflicted on the late Mister Ludwick. It would appear that you have sent an innocent woman to a life of inhumane torment and experimentation, while the real killer went free. You are instructed to hand in your badge and retire from the police service. Without your keen intellect, the mystery of who really committed the murder at Colefax Manor will be forever left unsolved.'
                    ], 
                    choices: 
                    [ 
						'Try again',
						'Give up'
                    ], 
                    goTo: 
                    [ 
						151,
						336
                    ], 
                    image: ""
                }, 

            290: 
                { 
                    title: "", 
                    story: 
                    [
						'The library is easily the largest room in the manor. Rows of chestnut brown bookcases break up the room\'s shape, while uniform green velvet rugs strewn neatly about the floor give parts of the room the strange impression that they are actually sunken pool tables. A wide fireplace on the southern wall crackles softly, its flames low, while a few green armchairs are spaced out in front of it. Standing at the northern end of the room is the butler, delicately polishing a marble bust of an unpleasant-looking fellow.'
                    ], 
                    choices: 
                    [ 
						'Enter the long gallery',
						'Observe the butler',
						'Talk to the butler'
                    ], 
                    goTo: 
                    [ 
						89,
						17,
						188
                    ], 
                    image: ""
                }, 

            291: 
                { 
                    title: "", 
                    story: 
                    [
						'"I\'ve discovered that the victim was strangled before he died. Can you think of a reason why this happened?"',
						'The chef snorts. "Hell if I know. Maybe the killer enjoyed strangling? From what I\'ve heard of Ludwick, he wasn\'t exactly a tower of strength; more like a creaky wooden outhouse. The killer wouldn\'t have needed to try and weaken him first."'
                    ], 
                    choices: 
                    [ 
						'Continue'
                    ], 
                    goTo: 
                    [ 
						139
                    ], 
                    image: ""
                }, 

            292: 
                { 
                    title: "", 
                    story: 
                    [
						'Early the following day, you are at your desk in the Dunstow police station, reviewing your notes from the previous night. For Warren McFadyen to be put away for the murder of Albert Ludwick, you need to submit a written proposition of why the gamekeeper is guilty to the chief inspector and then, if it meets his approval, on to the criminal courts.',
						'You may use certain combinations of clues you have found during your investigation to form your proposal.'
                    ], 
                    choices: 
                    [ 
						'Suspicious alibi',
						'Use Clues 1, 3, 6, and 10',
						'Use Clues 1, 6, and 10',
						'Use Clue 3'
                    ], 
                    goTo: 
                    [ 
						156,
						5,
						255,
						266
                    ], 
                    image: ""
                }, 

            293: 
                { 
                    title: "", 
                    story: 
                    [
						'Atop the ebony desk is relatively little in terms of potential clues. A few wax seals, a signet ring, the skull of a raven, some sealed scrolls, and a few black feathers. Judging by an open space upon a slightly raised, padded section, it is used at least semi-regularly as a place to write. A long drawer that runs most of the length of the desk is set just under the main workspace.'
                    ], 
                    choices: 
                    [ 
						'Check the drawer',
						'Step back from the desk'
                    ], 
                    goTo: 
                    [ 
						326,
						318
                    ], 
                    image: ""
                }, 

            294: 
                { 
                    title: "", 
                    story: 
                    [
						'You not only discovered who was responsible for the murder at Colefax Manor, but you found out enough to send the might of the police crashing down upon Lord Colefax and his associates! During the many months of trials that follow, the details surrounding Lord Colefax and his secret cult come to light, causing such a stir amongst the populace that hasn\'t been seen since even before the famous Jack the Ripper murders',
						'While all the media circus are still dancing upon the subject, long after the trials concluded, you are rewarded with being promoted all the way to the top as chief inspector of the Cornwall County Constabulary, and are recognised throughout the realm for your astounding work at apprehending such vile criminals.'
                    ], 
                    choices: 
                    [ 
						'Continue'
                    ], 
                    goTo: 
                    [ 
						336
                    ], 
                    image: ""
                }, 

            295: 
                { 
                    title: "", 
                    story: 
                    [
						'"I came across a mysterious puncture wound on Mister Ludwick\'s upper arm; it appears to be separate from his unfortunate demise. Have you any ideas on what might have caused it?"',
						'Prismall wracks her brain with enough intensity for her concentration to become most visible. "He could have been injected with something," she suggests helpfully, a sudden inspiration in her voice. "I\'ve come across syringes while cleaning Lord Colefax\'s study. Not that I\'m suggesting him of committing such an act, of course," she quickly adds.'
                    ], 
                    choices: 
                    [ 
						'Continue'
                    ], 
                    goTo: 
                    [ 
						98
                    ], 
                    image: ""
                }, 

            296: 
                { 
                    title: "", 
                    story: 
                    [
						'"That\'s all I need for now," you say, smiling reassuringly at the maid. "Thank you for your time."',
						'The maid attempts a brave smile in return and nods her head gently.'
                    ], 
                    choices: 
                    [ 
						'Continue'
                    ], 
                    goTo: 
                    [ 
						299
                    ], 
                    image: ""
                }, 

            297: 
                { 
                    title: "", 
                    story: 
                    [
						'At the bottom of a long set of steps that hug the cold stone wall is the crypt proper. A variety of stone coffins are spaced out upon the floor, while the walls are devoted to small plaques, each bearing the surname of Colefax and no doubt containing remains behind them. Despite the light from your lantern, the crypt manages to instil in you with an oppressive aura of nervousness.'
                    ], 
                    choices: 
                    [ 
						'Examine the plaques',
						'Leave the crypt'
                    ], 
                    goTo: 
                    [ 
						60,
						264
                    ], 
                    image: ""
                }, 

            298: 
                { 
                    title: "", 
                    story: 
                    [
						'"I can\'t say for definite, but, as a rule, Mister Skinner never leaves the kitchen unless there\'s a delivery and Mister McFadyen rarely leaves the stables. At half nine every night, Mister Blackwood heads off to prepare Lord Colefax\'s bedroom. I\'m afraid I don\'t know what Lord Colefax himself was doing."'
                    ], 
                    choices: 
                    [ 
						'Continue'
                    ], 
                    goTo: 
                    [ 
						56
                    ], 
                    image: ""
                }, 

            299: 
                { 
                    title: "", 
                    story: 
                    [
						'"Nope," McFadyen replies, shaking his head. "All I knew about him is that he visited once every two years and that he used to go to school with Lord Colefax."'
                    ], 
                    choices: 
                    [ 
						'Continue'
                    ], 
                    goTo: 
                    [ 
						167
                    ], 
                    image: ""
                },
					
				300: 
                { 
                    title: "", 
                    story: 
                    [
						'The servants\' quarters is a small room containing four small beds and decorated with cream and greenpatterned wallpaper that looks rather cheap. Each bed has a single pillow and a green wool blanket covered in bobbles. A lavabo and a toilet are crammed into one corner, beside a cheap chest of drawers that bears a small mirror. Sitting upon one of the beds is a young woman in the attire of a scullery maid.'
                    ], 
                    choices: 
                    [ 
						'Enter the upper service hall',
						'Observe the maid',
						'Talk to the maid'
                    ], 
                    goTo: 
                    [ 
						200,
						277,
						192
                    ], 
                    image: ""
                },

            301: 
                { 
                    title: "", 
                    story: 
                    [
						'"I tried asking Mister Blackwood, but I wasn\'t able to get much information out of him. I think Mister Ludwick used to go to school with Lord Colefax."'
                    ], 
                    choices: 
                    [ 
						'Continue'
                    ], 
                    goTo: 
                    [ 
						56
                    ], 
                    image: ""
                }, 

            302: 
                { 
                    title: "", 
                    story: 
                    [
						'The vast majority of the paintings depict hunting scenes in the English countryside, though there a few that depict scenes from classical mythology, including a painted replica of the famous fresco The Triumph of Galatea, which depicts the eponymous nereid surrounded by bizarre and fantastical sea creatures.'
                    ], 
                    choices: 
                    [ 
						'Continue'
                    ], 
                    goTo: 
                    [ 
						89
                    ], 
                    image: ""
                }, 

            303: 
                { 
                    title: "", 
                    story: 
                    [
						'"Heck if I know," the gamekeeper replies gruffly. "I was sleepin\', weren\'t I?"'
                    ], 
                    choices: 
                    [ 
						'Continue'
                    ], 
                    goTo: 
                    [ 
						167
                    ], 
                    image: ""
                }, 

            304: 
                { 
                    title: "", 
                    story: 
                    [
						'"I found this letter from the gamekeeper, complaining about having to handle a risky delivery. What is he referring to?"',
						'"Lord Colefax recently decided to donate some of his chemical reserves to Bymarsh Asylum," Blackwood explains, his expression as monotonous as his voice. "Due to the weight of the bottles, and my considerable age, Lord Colefax very kindly got McFadyen to handle the transportation of the bottles."'
                    ], 
                    choices: 
                    [ 
						'Continue'
                    ], 
                    goTo: 
                    [ 
						117
                    ], 
                    image: ""
                }, 

            305: 
                { 
                    title: "", 
                    story: 
                    [
						'"That\'s all for now."',
						'"Very good, officer," McFadyen replies with a nod his head, before lowering his chin to his chest and closing his eyes once more.'
                    ], 
                    choices: 
                    [ 
						'Continue'
                    ], 
                    goTo: 
                    [ 
						73
                    ], 
                    image: ""
                }, 

            306: 
                { 
                    title: "", 
                    story: 
                    [
						'"I found a syringe in your study that showed signs of recent use."',
						'"It is most likely the one Blackwood uses when I am suffering from nightly aches," Lord Colefax explains. "I have him inject me with some morphine to help me rest easier."'
                    ], 
                    choices: 
                    [ 
						'Continue'
                    ], 
                    goTo: 
                    [ 
						213
                    ], 
                    image: ""
                }, 

            307: 
                { 
                    title: "", 
                    story: 
                    [
						'"The victim appears to have been cut open and stabbed by a serrated blade. Are there any instruments in the manor that could fit the description?"',
						'"Best bet? Knives," Skinner replies, gesturing to a small pile of recently-washed cutlery. "I\'d say it would have been a bread knife, fruit knife, or steak knife. And before you ask, I\'ve been in the kitchen all day, and the only time any cutlery\'s gone out of my sight is along with a meal that Blackwood\'s delivered."'
                    ], 
                    choices: 
                    [ 
						'Continue'
                    ], 
                    goTo: 
                    [ 
						139
                    ], 
                    image: ""
                }, 

            308: 
                { 
                    title: "", 
                    story: 
                    [
						'"When I examined the victim, I found that his pupils were contracted, which suggests that he was not in a state of panic when he was killed."',
						'"He could have been drugged. From my own experiences with opiates – strictly from a medical perspective – one\'s pupils tend to contract when under the influence of such substances."'
                    ], 
                    choices: 
                    [ 
						'Continue'
                    ], 
                    goTo: 
                    [ 
						213
                    ], 
                    image: ""
                }, 

            309: 
                { 
                    title: "", 
                    story: 
                    [
						'Use what you learned last night, including any clues you may have found, to write a proposal of Prismall\'s guilt.'
                    ], 
                    choices: 
                    [ 
						'First on the scene',
						'Suspicious alibi'
                    ], 
                    goTo: 
                    [ 
						162,
						16
                    ], 
                    image: ""
                }, 

            310: 
                { 
                    title: "", 
                    story: 
                    [
						'As you approach, the gamekeeper seems no sign of waking from his slumber. Deciding that your need for a light source outweighs his need for six extinguished spares, you help yourself to one of the spare lanterns. It is only small, several inches in length, but it will be able to serve its purpose well',
						'You attach the lantern to your belt by one of the rings on your belt and quickly step back from the slumbering man, lest you be caught.',
						'Tick Box 1 in the detective\'s notebook.'
                    ], 
                    choices: 
                    [ 
						'Box 1 is ticked',
						'Continue'
                    ], 
                    goTo: 
                    [ 
						173,
						73
                    ], 
                    image: ""
                }, 

            311: 
                { 
                    title: "", 
                    story: 
                    [
						'"I found a suspicious puncture wound on the victim; it is small and spherical. Any ideas on what might have caused it?"',
						'"Cooking skewer... one of those syringes doctors use... a sharp pencil... that\'s the best I\'ve got."'
                    ], 
                    choices: 
                    [ 
						'Continue'
                    ], 
                    goTo: 
                    [ 
						139
                    ], 
                    image: ""
                }, 

            312: 
                { 
                    title: "", 
                    story: 
                    [
						'The chief inspector approves of your proposal and promptly starts proceedings to arrange a court case. Partway through the month of November, Lord Colefax\'s case comes up, and while his lawyer is able to successfully argue that the evidence isn\'t enough to implicate Lord Colefax in Ludwick\'s murder, the judge ends up ruling that he is still guilty of practicing witchcraft, and the jury supports the ruling. Lord Colefax is sentenced to one year in Dartmoor Prison.'
                    ], 
                    choices: 
                    [ 
						'Continue'
                    ], 
                    goTo: 
                    [ 
						197
                    ], 
                    image: ""
                }, 

            313: 
                { 
                    title: "", 
                    story: 
                    [
						'"I don\'t believe so," Lord Colefax replies, looking thoughtful. "After Ludwick retired for the night, I had a small nightcap, then went to the solarium to play some Mendelssohn. The first I heard anything about is was when Blackwood came to inform me of the incident."'
                    ], 
                    choices: 
                    [ 
						'Continue'
                    ], 
                    goTo: 
                    [ 
						218
                    ], 
                    image: ""
                }, 

            314: 
                { 
                    title: "", 
                    story: 
                    [
						'Stepping closer for a better look, you are able to view the painting over the mantle more clearly. It depicts an elderly man with a receding hairline, high cheekbones, and unfriendly demeanour staring out from amidst a countryside scene, whilst holding a black walking stick and dressed similarly sombre clothes; a black, doublebreasted frockcoat, a red waistcoat, dark trousers, and matching shoes. At the bottom of the portrait\'s golden frame is a flattened section that bears the carving \'Lord Colefax, 1750-1832\'.'
                    ], 
                    choices: 
                    [ 
						'Step back from painting'
                    ], 
                    goTo: 
                    [ 
						225
                    ], 
                    image: ""
                }, 

            315: 
                { 
                    title: "", 
                    story: 
                    [
						'"It\'s a most unfortunate thing to happen at the best of times, though one can\'t be selfish enough to leave things \'til the waking hours," you reply, nodding smartly. "Could you take me to the body?"',
						'"Of course, sir," the butler replies. "If you would be so kind as to follow, I shall take you to it at once."'
                    ], 
                    choices: 
                    [ 
						'Follow the butler'
                    ], 
                    goTo: 
                    [ 
						181
                    ], 
                    image: ""
                }, 

            316: 
                { 
                    title: "", 
                    story: 
                    [
						'It would seem, from the marks around Mister Ludwick\'s neck, that he was strangled for a considerable period during the attack. His lingual bone appears to be intact, however, so the strangulation doesn\'t appear to be the cause of death.',
						'Add Clue 9 \'Strangulation\' to the detective\'s notebook.'
                    ], 
                    choices: 
                    [ 
						'Continue'
                    ], 
                    goTo: 
                    [ 
						36
                    ], 
                    image: ""
                }, 

            317: 
                { 
                    title: "", 
                    story: 
                    [
						'You lean over the balcony for a better look at the eldritch monstrosity and feel a wave of sickening euphoria flow over you; a desire to spend the rest of your life giving in to the deepest pits of decadence. A tentacle of hideous ooze abruptly lashes out at you from the heart of the indescribable horror and latches onto your face. As you struggle to remove the burning tendril from your face, it wrenches you back in to the centre of the whirlpool and you are absorbed into the hideous mass that dwells within it.'
                    ], 
                    choices: 
                    [ 
						'Continue'
                    ], 
                    goTo: 
                    [ 
						282
                    ], 
                    image: ""
                }, 

            318: 
                { 
                    title: "", 
                    story: 
                    [
						'You pass by the altar and start descending the spiral stone steps, heading deeper into the Earth. By the time you reach the base of the staircase, you have lost track of how many steps you took. Before you is a small balcony and, stepping out, you find that it overlooks a dimly lit chamber centred around a violent whirlpool filled with jagged rocks. At the heart of the whirlpool is an amorphous mass of undulating, inky blackness. Thick, slimy tendrils extend from its stygian core and to the walls of its dank chamber.'
                    ], 
                    choices: 
                    [ 
						'Box 8 is ticked',
						'Leave at once',
						'Look closer'
						
                    ], 
                    goTo: 
                    [ 
						323,
						187,
						316
                    ], 
                    image: ""
                },

				319: 
                { 
                    title: "", 
                    story: 
                    [
						'The secret study is somewhat larger than its unhidden counterpart and possesses a distinctly more arcane theme. The walls are lined with bookcases, which contain all manner of occult artefacts, such as African fetishes, assorted animal bones, silver chalices, piles of incense, and more strange objects than one can shake a stick at, while at the far end of the room is a desk, laden with yet more bizarre accoutrements.'
                    ], 
                    choices: 
                    [ 
						'Examine the bookcases',
						'Examine the desk',
						'Examine the map',
						'Leave the secret study'
						
                    ], 
                    goTo: 
                    [ 
						186,
						292,
						229,
						219
                    ], 
                    image: ""
                }, 

            320: 
                { 
                    title: "", 
                    story: 
                    [
						'I found an intriguing assortment of chemicals in the study. Do you know what Lord Colefax might be doing with them?"',
						'"Studying them, I guess," the chef replies, scratching his temple idly. "He likes to think of himself as this great thinker. For all his \'great thinking\', he sure as hell doesn\'t give me much variety cooking-wise.'
                    ], 
                    choices: 
                    [ 
						'Continue'
                    ], 
                    goTo: 
                    [ 
						139
                    ], 
                    image: ""
                }, 

            321: 
                { 
                    title: "", 
                    story: 
                    [
						'After stepping just a short distance into the passageway, you feel the floor give way slightly under you, and the door behind you swings shut with a soft, dull thud. Upon close examination, you find that you stepped upon a pressure plate disguised as part of the dark, rocky floor'
                    ], 
                    choices: 
                    [ 
						'Continue'
                    ], 
                    goTo: 
                    [ 
						262
                    ], 
                    image: ""
                }, 

            322: 
                { 
                    title: "", 
                    story: 
                    [
						'The dining room is dominated by an almost staggeringly long teak table, set atop a vast Persian carpet and surrounded by what must be at least two dozen chairs, each crafted from the same teak as the table and possessing red seats. The table itself sports seven silver candelabra, set at regular intervals, along with two displays of autumnal flowers. An ornate crystal chandelier, easily two meters across, hangs down from the ceiling and effortlessly illuminates the whole room. Upon the west wall hangs a large painting of a number of Mediterranean women in a dark chamber.'
                    ], 
                    choices: 
                    [ 
						'Enter the main hall',
						'Enter the parlour',
						'Enter the smoking room',
						'Examine the painting'
                    ], 
                    goTo: 
                    [ 
						257,
						225,
						283,
						80
                    ], 
                    image: ""
                }, 

            323: 
                { 
                    title: "", 
                    story: 
                    [
						'The horses appear to be to be quite content and comfortable in their white-washed stalls. Floors covered in straw, some mixed with droppings, hay in their hay racks, access to relatively clean water, no sign of any injury or illness... The inhabitants all appear to be in good shape. Or, at least, as much as your untrained eye can ascertain.'
                    ], 
                    choices: 
                    [ 
						'Step back from the stalls'
                    ], 
                    goTo: 
                    [ 
						73
                    ], 
                    image: ""
                }, 

            324: 
                { 
                    title: "", 
                    story: 
                    [
						'Before you can take another step, a deafening explosion sounds nearby and you are swiftly buried by rubble as an entire cliff collapses on top of you. In retrospect, you probably shouldn\'t have lit the shortest fuse in the box.'
                    ], 
                    choices: 
                    [ 
						'Continue'
                    ], 
                    goTo: 
                    [ 
						282
                    ], 
                    image: ""
                }, 

            325: 
                { 
                    title: "", 
                    story: 
                    [
						'The upper level of the great staircase provides an excellent vantage point to both the floor below and across to the array of paintings upon the far wall. Crimson carpet covers the landing and spills down onto the stone staircase leading to the lower floor, while green wallpaper decks the sides of the tall room. A bench too decorative and small to sit on is positioned halfway along the landing, between the west and east doors, while the northern stretch of the landing has naught but a vase-laden pedestal to act as a navigational obstacle.'
                    ], 
                    choices: 
                    [ 
						'Descend the staircase',
						'Enter the east hall',
						'Enter the long gallery',
						'Enter the master bedroom'
                    ], 
                    goTo: 
                    [ 
						22,
						75,
						89,
						231
                    ], 
                    image: ""
                }, 

            326: 
                { 
                    title: "", 
                    story: 
                    [
						'You decide to remain upon the balcony. The fresh night air helps clear your head a little from the mild stupor induced by the heady warmth of the manor. A pair of hands suddenly shove against your back and you topple over the small balustrades, falling head over heel a short distance, until you come to land upon the steps to the front door with enough force to fracture your spine in several places. As a small mercy, the shock of the impact causes you to lose consciousness within a matter of seconds.'
                    ], 
                    choices: 
                    [ 
						'Continue',
                    ], 
                    goTo: 
                    [ 
						107
                    ], 
                    image: ""
                }, 

            327: 
                { 
                    title: "", 
                    story: 
                    [
						'Try as you might, the drawer fails to open. Chances are that it is locked, rather than stuck, though where Lord Colefax would keep the key is a mystery.'
                    ], 
                    choices: 
                    [ 
						'Box 2 is ticked',
						'Continue'
                    ], 
                    goTo: 
                    [ 
						221,
						292
                    ], 
                    image: ""
                }, 

            328: 
                { 
                    title: "", 
                    story: 
                    [
						'Use what you learned last night, including any clues you may have found, to write a proposal of Skinner\'s guilt.'
                    ], 
                    choices: 
                    [ 
						'Suspicious alibi',
						'Use Clue 11'
                    ], 
                    goTo: 
                    [ 
						135,
						108
                    ], 
                    image: ""
                }, 

            329: 
                { 
                    title: "", 
                    story: 
                    [
						'After several agonizing minutes of battling the tide, you emerge from the mouth of the cave and onto the rough foaming sea. Dark cliffs rise high up above you, curving around to form the promontory that Colefax Manor sits atop. In the distance, a sandy shore can be seen. It looks like it will be hard work, rowing against both the tide and the crashing waves, but you have little choice.'
                    ], 
                    choices: 
                    [ 
						'Box 6 is ticked',
						'Continue'
                    ], 
                    goTo: 
                    [ 
						240,
						6
                    ], 
                    image: ""
                }, 

            330: 
                { 
                    title: "", 
                    story: 
                    [
						'You write out a proposal that Lord Colefax is guilty, due to his possession of morphine, the syringe in his study showing signs of recent use, and a corresponding puncture wound found upon the victim, which you then combine to form the theory that Lord Colefax drugged Ludwick, before murdering him.'
                    ], 
                    choices: 
                    [ 
						'Choose again',
						'Commit'
                    ], 
                    goTo: 
                    [ 
						61,
						275
                    ], 
                    image: ""
                }, 

            331: 
                { 
                    title: "", 
                    story: 
                    [
						'"I came across an interesting selection of bottled chemicals in Lord Colefax\'s study; could you explain their presence to me?"',
						'"Lord Colefax has a passing interest in medicine and pharmacology," the butler explains. "As far as I am aware, save for the morphine, he keeps them as curios and to amuse himself."',
						'"And the morphine?"',
						'"He suffers occasionally with aching joints," Blackwood explains, smiling politely. "The morphine helps him rest more fully."'
                    ], 
                    choices: 
                    [ 
						'Continue'
                    ], 
                    goTo: 
                    [
						117
                    ], 
                    image: ""
                }, 

            332: 
                { 
                    title: "", 
                    story: 
                    [
						'You kneel down and peer through the keyhole. You spy a lavish room decorated in lavish red and gold silks, filled with burning incense, tables laden with food, an array of children and animals chained to the walls, and several clearly drunken men, cavorting about in a veritably obscene display of orgiastic hedonism.'
                    ], 
                    choices: 
                    [ 
						'Step back from the keyhole'
                    ], 
                    goTo: 
                    [ 
						42
                    ], 
                    image: "./media/keyhole.jpg"
                }, 

            333: 
                { 
                    title: "", 
                    story: 
                    [
						'The victim\'s limbs appear to be mostly unharmed by the struggle. His signet and wedding rings are still on his left hand, which would suggest that the murderer wasn\'t motivated by money. A small hole is visible in the dark fabric of the pyjamas, located on his upper left arm, only visible due to the pallid skin beneath it. Upon closer examination, you are able to spy a spherical wound of corresponding size located in the same place upon the victim’s arm itself, as if the victim was punctured by something',
						'Add Clue 6 \'Puncture\' to the detective\'s notebook.',
                    ], 
                    choices: 
                    [ 
						'Continue'
                    ], 
                    goTo: 
                    [ 
						18
                    ], 
                    image: ""
                }, 

            334: 
                { 
                    title: "", 
                    story: 
                    [
						'"Mister McFadyen?" you ask, prompting the sleepy gamekeeper to rouse from his slumber once again. "I have some more questions to ask you."',
						'"I weren\'t expectin\' to get much sleep anyway, officer," McFadyen replies, smiling toothily back at you.'
                    ], 
                    choices: 
                    [ 
						'Enquire about clues',
						'Enquire about the case',
						'Return to your investigations'
                    ], 
                    goTo: 
                    [ 
						179,
						167,
						304
                    ], 
                    image: ""
                }, 

            335: 
                { 
                    title: "", 
                    story: 
                    [
						'"Well... no, I haven\'t."',
						'"Thank you. The fact that I possess an interest in the history of occult studies does not mean that I cavort about at the full moon while worshipping the devil."',
						'"Forgive me, my lord. I just needed to be sure."',
						'"You are forgiven, detective."'
                    ], 
                    choices: 
                    [ 
						'Continue'
                    ], 
                    goTo: 
                    [ 
						213
                    ], 
                    image: ""
                }, 

            336: 
                { 
                    title: "", 
                    story: 
                    [
						'"You are forgiven, detective."Using a nearby pack of matches, you strike one and, for some bizarre reason, decide to light the shortest fuse in the box, before quickly stepping back as it begins to spark.',
						'Tick Box 8 in the detective\'s notebook.'
                    ], 
                    choices: 
                    [ 
						'Continue'
                    ], 
                    goTo: 
                    [ 
						345
                    ], 
                    image: ""
                }, 

            337: 
                { 
                    title: "", 
                    story: 
                    [
                    ], 
                    choices: 
                    [ 
                    ], 
                    goTo: 
                    [ 
                    ], 
                    image: ""
                }, 
		};