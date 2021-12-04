
$(function(){

    /* Flag emerge */
	const flag_selector = $('.dropdown');

	$('body').change(function(){
		if ($('#id_country option:selected').text() == 'Afghanistan') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/067-afghanistan.svg')");
            flag_selector.css('color','black');
		} else if ($('#id_country option:selected').text() == 'Albania') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/068-albania.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Algeria') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/066-algeria.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Andorra') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/022-andorra.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Angola') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/067-angola.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Antigua and Barbuda') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/066-antigua-and-barbuda.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Argentina') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/061-argentina.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Armenia') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/065-armenia.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Australia') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/064-australia.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Austria') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/060-austria.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Azerbaijan') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/065-azerbaijan.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Bahamas') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/064-bahamas.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Bahrain') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/058-bahrain.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Bangladesh') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/057-bangladesh.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Barbados') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/063-barbados.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Belarus') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/062-belarus.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Belgium') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/056-belgium.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Belize') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/belize.svg')");
            $('.select-cnt__flag').css("background-size","160%");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Benin') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/061-benin.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Bhutan') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/060-bhutan.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Bolivia') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/bolivia.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Bosnia and Herzegovina') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/061-bosnia-and-herzegovina.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Botswana') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/059-botswana.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Brazil') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/060-brazil.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Brunei Darussalam') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/058-brunei.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Bulgaria') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/057-bulgaria.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Burkina Faso') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/055-burkina-faso.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Burundi') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/064-burundi.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Cabo Verde') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/057-cape-verde.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'California') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/054-california.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Cambodia') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/055-cambodia.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Cameroon') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/054-cameroon.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Canada') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/053-canada.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Central African Republic') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/052-central-african-republic.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Chad') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/chad.svg')");
            flag_selector.css('color','black');
            $('.select-cnt__flag').css("background-size","160%");
        } else if ($('#id_country option:selected').text() == 'Chile') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/051-chile.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'China') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/053-china.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Colombia') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/052-colombia.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Comoros') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/056-comoros.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Congo') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/republic-of-the-congo.svg')");
            flag_selector.css('color','black');
            $('.select-cnt__flag').css("background-size","160%");
        } else if ($('#id_country option:selected').text() == 'Congo, The Democratic Republic of The') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/055-democratic-republic-of-congo.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Cook Islands') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/cook-islands.svg')");
            flag_selector.css('color','black');
            $('.select-cnt__flag').css("background-size","160%");
        } else if ($('#id_country option:selected').text() == 'Costa Rica') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/051-costa-rica.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Cote D\'ivoire') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/ivory-coast.svg')");
            flag_selector.css('color','black');
            $('.select-cnt__flag').css("background-size","160%");
        } else if ($('#id_country option:selected').text() == 'Croatia') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/050-croatia.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Cuba') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/053-cuba.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Cyprus') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/049-cyprus.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Czech Republic') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/048-czech-republic.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Denmark') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/047-denmark.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Djibouti') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/048-djibouti.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Dominica') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/052-dominica.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Dominican Republic') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/051-dominican-republic.svg')");
            flag_selector.css('color','black');
        }
        else if ($('#id_country option:selected').text() == 'Ecuador') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/050-ecuador.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Egypt') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/046-egypt.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'El Salvador') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/049-el-salvador.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Equatorial Guinea') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/equatorial-guinea.svg')");
            flag_selector.css('color','black');
            $('.select-cnt__flag').css("background-size","160%");
        } else if ($('#id_country option:selected').text() == 'Eritrea') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/eritrea.svg')");
            $('.select-cnt__flag').css("background-size","160%");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Estonia') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/047-estonia.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Ethiopia') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/044-ethiopia.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Falkland Islands (Malvinas)') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/falkland-islands.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Faroe Islands') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/002-faroe-islands.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Fiji') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/046-fiji.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Finland') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/045-finland.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'France') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/042-france.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'French Guiana') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/041-french-guiana.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'French Polynesia') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/french-polynesia.svg')");
            flag_selector.css('color','black');
            $('.select-cnt__flag').css("background-size","160%");
        } else if ($('#id_country option:selected').text() == 'Gabon') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/045-gabon.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Gambia') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/040-gambia.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Georgia') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/044-georgia.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Germany') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/039-germany.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Ghana') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/065-ghana.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Gibraltar') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/gibraltar.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Greece') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/038-greece.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Greenland') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/greenland.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Grenada') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/grenada.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Guadeloupe') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/Wikipedia-Flags-GP-Guadeloupe-Flag.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Guam') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/guam.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Guatemala') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/044-guatemala.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Guinea') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/043-guinea.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Guinea-bissau') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/037-guinea-bissau.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Guyana') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/042-guyana.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Haiti') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/haiti.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Holy See (Vatican City State)') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/008-vatican-city.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Honduras') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/036-honduras.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Hong Kong') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/hong-kong.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Hungary') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/hungary.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Iceland') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/041-iceland.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'India') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/034-india-1.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Indonesia') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/indonesia.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Iran, Islamic Republic of') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/040-iran.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Iraq') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/039-iraq.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Ireland') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/033-ireland.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Israel') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/037-israel.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Italy') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/032-italy.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Jamaica') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/031-jamaica.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Japan') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/030-japan.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Jordan') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/036-jordan.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Kazakhstan') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/035-kazakhstan.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Kenya') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/040-kenya.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Kiribati') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/004-kiribati.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Korea, Democratic People\'s Republic of') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/050-north-korea.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Korea, Republic of') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/012-south-korea.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Kuwait') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/029-kuwait.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Kyrgyzstan') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/034-kyrgyzstan.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Lao People\'s Democratic Republic') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/033-laos.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Latvia') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/039-latvia.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Lebanon') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/032-lebanon.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Lesotho') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/lesotho.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Liberia') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/031-liberia.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Libyan Arab Jamahiriya') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/028-libya.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Liechtenstein') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/038-liechtenstein.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Lithuania') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/027-lithuania.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Luxembourg') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/026-luxembourg.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Macao') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/macao.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'North Macedonia') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/030-macedonia.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Madagascar') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/025-madagascar.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Malawi') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/037-malawi.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Malaysia') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/029-malaysia.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Maldives') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/maldives.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Mali') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/027-mali.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Malta') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/026-malta.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Marshall Islands') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/marshall-island.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Martinique') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/martinique.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Mauritania') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/024-mauritania.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Mauritius') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/023-mauritius.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Mexico') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/036-mexico.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Micronesia, Federated States of') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/043-micronesia.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Moldova, Republic of') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/062-moldova.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Monaco') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/021-monaco.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Mongolia') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/025-mongolia.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Montserrat') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/montserrat.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Morocco') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/035-morocco.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Mozambique') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/mozambique.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Myanmar') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/056-myanmar.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Namibia') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/033-namibia.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Nauru') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/032-nauru.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Nepal') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/024-nepal.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Netherlands') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/008-netherlands.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Netherlands Antilles') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/netherlands-antilles.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'New Zealand') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/new-zealand.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Nicaragua') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/nicaragua.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Niger') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/019-niger.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Nigeria') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/023-nigeria.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Niue') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/niue.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Norfolk Island') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/norfolk-island.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Northern Mariana Islands') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/northern-marianas-islands.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Norway') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/003-norway.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Oman') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/022-oman.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Pakistan') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/021-pakistan.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Palau') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/018-palau.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Palestinian Territory, Occupied') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/020-palestine.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Panama') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/030-panama.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Papua New Guinea') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/029-papua-new-guinea.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Paraguay') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/028-paraguay.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Peru') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/068-peru.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Philippines') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/019-philippines.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Pitcairn') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/pitcairn-islands.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Poland') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/017-poland.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Portugal') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/016-portugal.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Puerto Rico') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/049-puerto-rico.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Qatar') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/qatar.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Romania') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/027-romania.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Russian Federation') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/015-russia.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Rwanda') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/026-rwanda.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Saint Kitts and Nevis') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/saint-kitts-and-nevis.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Saint Lucia') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/017-saint-lucia.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Saint Pierre and Miquelon') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/france_st_pierre_and_miquelon.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Saint Vincent and The Grenadines') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/016-saint-vincent-and-the-grenadines.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Samoa') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/025-samoa.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'San Marino') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/024-san-marino.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Sao Tome and Principe') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/sao-tome-and-principe.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Saudi Arabia') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/014-saudi-arabia.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Senegal') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/013-senegal.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Serbia and Montenegro') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/022-serbia.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Seychelles') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/seychelles.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Sierra Leone') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/015-sierra-leone.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Slovakia') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/021-slovakia.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Singapore') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/014-singapore.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Slovenia') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/020-slovenia.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Solomon Islands') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/019-solomon-islands.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Somalia') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/013-somalia.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'South Africa') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/018-south-africa.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Spain') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/012-spain.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Sri Lanka') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/010-sri-lanka.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Sudan') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/009-sudan.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'South Sudan') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/011-south-sudan.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Suriname') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/063-suriname.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Swaziland') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/swaziland.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Sweden') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/008-sweden.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Switzerland') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/011-switzerland.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Syrian Arab Republic') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/010-syria.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Taiwan, Province of China') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/taiwan.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Tajikistan') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/017-tajikistan.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Tanzania, United Republic of') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/007-tanzania.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Thailand') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/016-thailand.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Timor-leste') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/006-east-timor.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Togo') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/007-togo.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Tokelau') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/tokelau.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Tonga') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/006-tonga.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Trinidad and Tobago') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/068-trinidad-and-tobago.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Tunisia') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/015-turkey.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Turkey') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/005-turkey.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Turkmenistan') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/004-turkmenistan.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Tuvalu') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/tuvalu.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Uganda') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/014-uganda.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Ukraine') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/005-ukraine.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'United Arab Emirates') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/004-united-arab-emirates.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'United Kingdom') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/003-united-kingdom.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'United States') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/002-united-states.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Uruguay') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/011-uruguay.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Uzbekistan') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/uzbekistan.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Vanuatu') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/009-vanuatu.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Venezuela') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/007-venezuela.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Viet Nam') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/020-vietnam.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Virgin Islands, British') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/british-virgin-islands.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Yemen') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/001-yemen.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Zambia') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/uzbekistan.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Zimbabwe') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/uzbekistan.svg')");
            flag_selector.css('color','black');
        } else if ($('#id_country option:selected').text() == 'Sealand') {
            $('.select-cnt__flag').css("background-image","url('../static/img/flags/svg/uzbekistan.svg')");
            flag_selector.css('color','black');
        } 
        else {
            $('.select-cnt__flag').css("background-image","none") 
        }
        
	});
});