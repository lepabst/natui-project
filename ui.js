const names = {
    male: ['Gordon_Runsay', 'Mervyn_Zaine','Abraham_Salvador','Murray_Garman','Abe_Edward','Johnny_Arman','Nathaniel_Montgomery','Morris_Kody','Darnell_Wolf','Jason_Davion','Yahir_Jaydon','Rock_Caleb','Walter_Marcos','Ennio_Calvin','Joss_Martyn','Basil_Jaret','Phebian_Kolby','Barney_Gavin','Alexander_Abriel','Ricky_Pete','Klaus_Dean','Haiden_Jenson','Nathanael_Rock','Randal_Deon','Alejandro_Zac','Eddie_Giorgio','Desmond_Malloy','Tiernan_Emery','Stanley_Jerome','Micah_Giorgio','Brandon_Roland','Jaime_Graham','Rik_Maxwell','David_Hassan','Jace_Garrett','Leslie_Eric','Jeffery_Robby','Koby_Klay','Klay_Bradley','Barry_Fabio','Aldrin_Lebron','Scot_Usama','Samir_Lester','Lawson_Ford','Jaylen_Keegan','Toby_Lynn','Corbin_Tiago','Ricardo_Marty','Calvin_Kaden','Raul_Lowell','Finley_Dash','Marvin_Emmanuel','Amari_Gil','Demetrius_Hilary','Charley_Van','Febian_Chester','Lowell_Mark','Solomon_Irvin','Fergal_Lars','Clancy_Gannon','Seb_Loki','Johnathon_Quinlan','Zac_Denny','Fred_Kade','Ziggy_Khalid','Palmer_Jamison','Karsten_Clifford','Albie_Maximilian','Sam_Cullen','Orlando_Sam','Nick_Clyde','Tate_Homer','Lincoln_Bradwin','Marshall_John','Rex_Kasper','Earl_Timothy','Van_Samir','Bradwin_Bert','Zaiden_Pip','Angus_Tristen','Nicholas_Pat','Kyler_Benjamin','Emiliano_Brighton','Kurt_Kye','Jacob_Marty','Llewelyn_Casper','Dale_Brian','Leopold_Xerxes','Carlisle_Tarquin','Uriel_Castor','Ross_Marquis','Castiel_Bodie','Irwin_Colton','Brady_Lake','Kurtis_Aden','Grady_Paddy','Ty_Kieran','Darrel_Mickey','Alberto_Trey','Gilberto_Breck','Reese_Amit','Lennie_Clint','Donovan_Zayne','Rory_Marvin','Ronan_Jack','Esteban_Sonny','Jayce_Nasir','Gus_Lou','Art_Donald','Ricardo_Sven','Sid_Killian','Crosby_Ishaan','Emiliano_Nico','Fritz_Skyler','Javid_Lake','Tadhg_Parker','Kristopher_Kurt','Gabe_Gavin','Juan_Kaiden','Gregg_Andrew','Hilary_Ulysses','Wilhelm_Mehtab','Boston_Ken','Buck_Clement','Linus_Pearce','Tate_Jase','Zac_Marcus','Myron_Crosby','Arnold_Castor','Willard_Vinnie','Manny_Nikolai','Howard_Rahul','Braydon_Shane','Branden_Billy','Kaylen_Delbert','Mike_Aldric','Jake_Ronan','Luca_Karl','Tyler_Galen','Ryker_Jonas','Jago_Kellin','Robert_Ewan','Arran_Pascal','Ivor_Abdullah','Isidore_Jaxson','Leighton_Salman','Willis_Atticus','Fox_Alastair','Gage_Henry','Geoff_Lars','Bastian_Malcolm','Mervin_Jerry','Les_Van','Landyn_Aldo','Alphonso_Zain','Arnold_Robin','Roland_Xavier','Jerry_Cory','Gene_Bob','Lacey_Vaughn','Glynn_Malik','Stacey_Lex','Giorgio_Benjy','Pete_Fletcher','Tristen_Tyson','Ainsley_Mateo','Rodger_Jerry','Alexis_Trey','Emmett_Bartholomew','Ianto_Asher','Guillermo_Ken','Etienne_Parker','Alton_Chad','Dorian_Louis','Michael_Niklaus','Barclay_Reef','Greg_Shannon','Everett_Spike','Cayson_Moses','Kyan_Jediah','Jarvis_Kristoff','Raiden_Beau','Shannon_Pip','Tucker_Kyron','Lee_Greg','Chester_Paddy','Dewey_Oakes','Laurence_Keith','Noel_Egon','Matthias_Cyril','Elon_Kylen','Fergal_Sonny','Bret_Tiago','Lionel_Leo','Lynn_Reuben','Billy_Zed','Gene_Aiden','Randal_Jayce','Sammy_Stan','Horace_Wesley','Rodolfo_Hunter'],
    female: ['Gordine_Runsay', 'Sara_Katia','Zali_Prudence','Brinley_Saffron','Roselle_Guadalupe','Eloise_Reanne','Pixie_Blaire','Lily_Kloe','Carolina_Jeannie','Noely_Marion','Jeannine_Lyra','Fanny_Francine','Isabella_Gail','Deirdre_Charlotte','Brooklynn_Sierra','Ruth_Braelyn','Tonya_Nadine','Ariana_Queenie','Arielle_Lily','Suzy_Starla','Alice_Vivian','Anushka_Deana','Ayla_Jemma','Pam_Nala','Clodagh_Mea','Norah_Lola','Constance_Athena','Christie_Rosanna','Wilhelmina_Teegan','Ailsa_Kinsey','Saira_Jolie','Audrina_Sierra','Karolina_Dottie','Campbell_Camila','Amanda_Irena','Lacie_Celine','Makenna_Ethel','Lizette_Christi','Amelie_Kylee','Tamia_Clodagh','Leanne_Darla','Bessie_Carys','Tahlia_Marie','Kya_Karyn','Alondra_Ayla','Mariam_Nell','Paola_Blessing','Hildegard_Beth','Shelby_Tamika','Kiersten_Alisa','Marisa_Loran','Angel_Vickie','Hester_Kyla','Teresa_Joyce','Shary_Becca','Caitlan_Sherry','Sapphire_Thalia','Lyric_Myrna','Felicity_Athene','Karolina_Zada','Deidre_Quinn','Mariella_Darcie','Anya_Darla','Frankie_Jean','Josephine_Briley','Mia_Minerva','Cecily_Minerva','Laurie_Keeley','Daniella_Fifi','Marina_Hailey','Camila_Angeline','Bay_Lavender','Nila_Natalia','Shania_Ester','Alba_Maureen','Nelly_Leona','Gladys_Jeanine','Autumn_Indira','Laney_Ellis','Millie_Karolina','Yulissa_Monica','Lotus_Ashleigh','Camry_Sydney','Shona_Ines','Sophie_Octavia','Catherine_Livia','Lydia_Elvina','Gwen_Darcie','Shelly_Katy','Nessa_Gisela','Harriet_Rosalinda','Chrysanthemum_Isidora','Amanda_Mattie','Clementine_Celina','Deanna_Hazeline','Haleigh_Elena','Tisha_Zelda','Emely_Calista','Rue_Esme','Mavis_Nicola','Amy_Lorelei','Erika_Cat','Carley_Harley','Tracie_Luisa','Carmen_Rosa','Braelyn_Abree','Poppy_Rowena','Nora_Norah','Rosie_Krista','Clarisse_Geena','Marci_Clea','Annabeth_Kim','Vera_Clarissa','Tiffany_Kayleigh','Orianna_Nelly','Noemi_Hermione','Genevieve_Marlee','Brie_Brea','Adele_Annika','Roxana_Sabina','Lyra_Regan','Arlette_Dara','Eden_Daisy','Dayle_Caris','Yesenia_Kat','Jazlyn_Bridget','Georgia_Dina','Justice_Oprah','Ricki_Lidia','Alannah_Janiya','Jaylinn_Saira','Mindy_Rania','Millicent_Sutton','Janae_Cathleen','Bertha_Raine','Deja_Erica','Trista_Ila','Prue_Bianca','Cindy_Cassidy','Hayley_Wendy','Brianne_Madeleine','Nyla_Susanna','Raven_Lea','Sara_Rebecca','Kya_Livvy','Dara_Vivian','Zula_Edith','Rosalind_Alisa','Guadalupe_Leonora','Ailsa_Shannon','Jasmine_Barbie','Agatha_Deana','Madyson_Tailynn','Avia_Ellie','Paula_Justina','Coralie_Reanna','Rosalina_Makenna','Mira_Shelley','Lou_Mariah','Iliana_Remi','Geraldine_Gianna','Yazmin_Shyla','Debora_Chole','Kallie_Presley','Wynne_Gina','Louise_Bronwen','Hetty_Lily','Yasmin_Nicole','Eryn_Arden','Ginny_Saffron','Chenai_Lynette','Clara_Laney','Cecily_Callista','Ariadne_Zyana','Tagan_Brittany','Elodie_Tammie','Julie_Breeze','Rylie_Zelida','Ester_Dominique','Jess_Alex','Alex_Haylee','Lily_Meera','Stacy_Annamaria','Georgia_Jamie','Roselle_Jayla','Dee_Liah','Brielle_Tracey','Cornelia_Silvia','Oasis_Odelia','Libby_Deanna','Bloom_Candis','Meredith_Zita','Dayna_Charla','Bridget_Victoria','Ayanna_Eliza','Julia_Audrina','Kendra_Edie','Cathalina_Jessica','Rylie_Maxime','Rose_Roxy','Tayler_Connie']
}

SVGElement.prototype.getTransformToElement = SVGElement.prototype.getTransformToElement || function(elem) {
    return elem.getScreenCTM().inverse().multiply(this.getScreenCTM());
};

const participants = document.querySelector('#participants')
   
async function generateParticipants() {
    for(let i = 0; i < 100 - Math.round(Math.random() * 50); i++) {
        const img = new Image
        const gender = Math.round(Math.random()) === 0 ? 'female' : 'male'
        img.src = `https://xsgames.co/randomusers/avatar.php?g=${gender}`
        img.width = '48'
        img.height = '48'

        const li = document.createElement('li')
        li.appendChild(img)

        const name = document.createElement('span')

        name.innerText = names[gender][Math.round(Math.random() * (names[gender].length - 1))].replace('_', ' ')

        li.appendChild(name)

        participants.appendChild(li)

        await new Promise(resolve => setTimeout(resolve, 100))
    }
}

generateParticipants()

// async function generateWheelTools() {
//     const wrapper = document.querySelector('#wheel-wrapper')
//     const tools = document.querySelectorAll('.wheel-tool')
//     const wheel = document.getElementById('wheel')
//     for(let i = 1; i <= tools.length; i++) {
//         const svgPos = wheel.createSVGPoint()
//         const tool = tools[i-1]
//         const box = tool.getBoundingClientRect()
//         console.log('Bounding: ', wheel.getScreenCTM())
//         svgPos.x = box.x
//         svgPos.y = box.y
//         const pos = svgPos.matrixTransform(wheel.getScreenCTM())
//         const img = new Image
//         img.src = './media/tool-' + i + '.png'
//         img.id = 'tool-image-' + i
//         img.style.position = 'fixed'
//         img.style.left = (box.x - 320) + 'px'
//         img.style.top = box.y + 'px'
//         wrapper.appendChild(img)
//     }
// }

// generateWheelTools()