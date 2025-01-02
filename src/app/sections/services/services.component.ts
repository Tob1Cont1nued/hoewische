import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  services = [
    { 
      title: 'Haupt- und Abgasuntersuchung', 
      description: `
      <p>Als zertifizierter KFZ-Sachverständiger biete ich Haupt- und Abgasuntersuchungen gemäß §29 StVZO für alle Fahrzeugtypen an.
      Ich prüfe Ihr Fahrzeug nach den strengen gesetzlichen Vorgaben, um die Betriebssicherheit und Umweltverträglichkeit zu gewährleisten.
      Mit meinem Service sorgen Sie dafür, dass Ihr Fahrzeug den TÜV-Anforderungen entspricht und sicher auf den Straßen unterwegs ist.</p>
      <ul>
        <li>Hauptuntersuchung</li>
        <li>Abgasuntersuchung</li>
        <li>TÜV</li>
        <li>KFZ-Gutachten</li>
      </ul>
    `, 
      image: '/assets/images/kategorie1.png' 
    },
    { 
      title: 'Änderungsabnahmen', 
      description: `<p>Wenn Sie an Ihrem Fahrzeug Änderungen vorgenommen haben, ist eine <strong>Änderungsabnahme</strong> nach §19.2/3 StVZO erforderlich, um die Verkehrssicherheit zu gewährleisten und die Zulassung zu erhalten.</p>

      <p>Ich unterstütze Sie bei:</p>
      <ul>
        <li><strong>Tuning</strong></li>
        <li><strong>Fahrwerksumbauten</strong></li>
        <li><strong>Anbauteilen</strong></li>
        <li><strong>Geräuschmessungen</strong></li>
        <li><strong>Spoiler-Montagen</strong></li>
        <li><strong>Motorumbauten</strong></li>
      </ul>
      
      <p>Ich prüfe die Änderungen fachgerecht und stelle sicher, dass sie den gesetzlichen Vorgaben entsprechen. Mit meiner langjährigen Erfahrung als KFZ-Ingenieur berate ich Sie bei allen Fragen rund um die <strong>Eintragung</strong> und <strong>Abnahme</strong> von Fahrzeugmodifikationen.</p>
      
      <p><em>Relevante Keywords:</em></p>
      <ul> 
        <li>Tuning</li> 
        <li>Eintragung</li> 
        <li>Änderungsabnahme</li> 
        <li>Fahrzeugumbau</li> 
        <li>TÜV-Abnahme</li> 
        <li>KFZ-Sachverständiger</li> 
        <li>Geräuschmessung</li> 
        <li>Motorumbau</li> 
        <li>Spoiler</li>
      </ul>  
        </p>`
      , 
      image: '/assets/images/kategorie2.png' 
    },
    { 
      title: 'Einzelgutachten und Vollgutachten', 
      description: `<p>Bei Importfahrzeugen, Fahrzeugen ohne gültige Papiere oder umfangreichen Umbauten ist ein <strong>Einzelgutachten</strong> nach §21 StVZO erforderlich. Ich erstelle für Sie das notwendige Gutachten, um eine <strong>Straßenzulassung</strong> zu erhalten.</p>
<p>Als Sachverständiger garantiere ich Ihnen eine gründliche und professionelle Bewertung Ihres Fahrzeugs, damit Sie sicher und legal unterwegs sind.</p>

<h3>Vollgutachten für Neufahrzeuge</h3>
<p>Für die Zulassung von <strong>Neufahrzeugen</strong> und <strong>Nutzfahrzeugen</strong>, die durch Aufbauten komplettiert wurden, ist ein <strong>Vollgutachten</strong> nach Artikel 44, bzw. 45 der Richtlinie 2018/858/EG erforderlich (<em>siehe §13 EG-FGV</em>).</p>

<p>Ich erstelle detaillierte Gutachten für Neufahrzeuge, um sicherzustellen, dass sie alle Anforderungen für die Straßenzulassung erfüllen. Ob <strong>Eigenaufbau</strong> oder <strong>Sonderfahrzeug</strong> – ich stehe Ihnen mit meinem Fachwissen zur Seite.</p>

<p><em>Relevante Keywords:</em></p>
<ul>
  <li>Einzelgutachten</li>
  <li>Fahrzeugzulassung</li>
  <li>Importfahrzeuge</li>
  <li>KFZ-Gutachten</li>
  <li>Sachverständiger</li>
  <li>Straßenzulassung</li>
  <li>Neufahrzeug</li>
  <li>Vollgutachten</li>
  <li>Sonderfahrzeug</li>
  <li>Artikel 44</li>
  <li>2018/858/EG</li>
  <li>§13 EG-FGV</li>
  <li>Eigenaufbau</li>
  <li>Nutzfahrzeuge</li>
</ul>
`, 
      image: '/assets/images/kategorie3.png' 
    },
    { 
      title: 'DMSB Wagenpassabnahme und KFP', 
      description: `<p>Für den Motorsport benötigen Sie eine <strong>DMSB-Wagenpassabnahme</strong> und einen <strong>Kraftfahrzeugpass (KFP)</strong>.</p>

      <p>Ich unterstütze Sie bei:</p>
      <ul>
        <li>Der Erstellung der notwendigen Unterlagen</li>
        <li>Der Durchführung der erforderlichen Prüfungen</li>
      </ul>
      
      <p>Damit erfüllen Sie alle Voraussetzungen für den <strong>Renneinsatz</strong>. Mit meiner Expertise im Motorsport sorge ich dafür, dass Ihr Fahrzeug den hohen <strong>Sicherheitsstandards</strong> gerecht wird.</p>
      
      <p><em>Relevante Keywords:</em></p>
      <ul>
        <li>DMSB</li>
        <li>Wagenpass</li>
        <li>KFP</li>
        <li>Motorsport</li>
        <li>Sicherheitsprüfung</li>
        <li>Renneinsatz</li>
      </ul>
      `, 
      image: '/assets/images/kategorie4.png' 
    },
    { 
      title: 'Abfahrkontrolle Schwertransporte', 
      description: `<p>Für <strong>Schwertransporte ab 100t Gesamtzuggewicht</strong> ist vor Fahrtantritt eine <strong>Abfahrkontrolle</strong> vorgeschrieben, um die <strong>Betriebssicherheit</strong> zu gewährleisten.</p>

<p>Ich biete Ihnen:</p>
<ul>
  <li>Professionelle Abfahrkontrollen</li>
  <li>Sicherstellung der Einhaltung aller gesetzlichen Anforderungen</li>
</ul>

<p>Mit meinem Service erhöhen Sie die <strong>Sicherheit auf den Straßen</strong> und vermeiden potenzielle Bußgelder.</p>

<p><em>Relevante Keywords:</em></p>
<ul>
  <li>Abfahrkontrolle</li>
  <li>Schwertransporte</li>
  <li>Betriebssicherheit</li>
  <li>Fahrzeugprüfung</li>
  <li>Schwerlast</li>
  <li>100t</li>
</ul>
`, 
      image: '/assets/images/kategorie5.png' 
    },
    { 
      title: 'Weitere...', 
      description: `<h3>Oldtimerbegutachtung</h3>
<p>Als Liebhaber von historischen Fahrzeugen biete ich umfassende <strong>Oldtimerbegutachtungen</strong> an. Ich erstelle Gutachten nach §23 StVZO, um eine <strong>H-Zulassung</strong> zu erhalten und den Status als Oldtimer zu sichern.</p>
<p>Durch eine fachgerechte Bewertung des Zustands und der Originalität des Fahrzeugs wird der Wert langfristig geschützt und dokumentiert.</p>
<p><em>Relevante Keywords:</em></p>
<ul>
  <li>Oldtimer</li>
  <li>H-Zulassung</li>
  <li>Oldtimerbegutachtung</li>
  <li>KFZ-Gutachten</li>
  <li>Sachverständiger</li>
</ul>

<h3>Sicherheitsprüfung</h3>
<p>Für bestimmte Fahrzeuge, wie <strong>Nutzfahrzeuge</strong> und <strong>Schwertransporte</strong>, sind regelmäßige <strong>Sicherheitsprüfungen</strong> gesetzlich vorgeschrieben. Ich führe diese Prüfungen durch und stelle sicher, dass Ihr Fahrzeug allen sicherheitsrelevanten Anforderungen entspricht.</p>
<p>Mit meiner Unterstützung erfüllen Sie die gesetzlichen Vorgaben und gewährleisten die Sicherheit im Straßenverkehr.</p>
<p><em>Relevante Keywords:</em></p>
<ul>
  <li>Sicherheitsprüfung</li>
  <li>Nutzfahrzeuge</li>
  <li>Schwertransporte</li>
  <li>Fahrzeugprüfung</li>
  <li>Verkehrssicherheit</li>
</ul>

<h3>DVGW Gasprüfungen (Camping)</h3>
<p>Für <strong>Campingfahrzeuge</strong> ist die regelmäßige Prüfung der <strong>Gasanlagen</strong> nach DVGW-Vorschriften vorgeschrieben. Ich führe <strong>DVGW-Gasprüfungen</strong> durch, um die Sicherheit der Gasanlagen zu gewährleisten und mögliche Risiken auszuschließen.</p>
<p>Vertrauen Sie meiner Erfahrung, um sicher und komfortabel mit Ihrem Wohnmobil unterwegs zu sein.</p>
<p><em>Relevante Keywords:</em></p>
<ul>
  <li>Gasprüfung</li>
  <li>Camping</li>
  <li>Wohnmobil</li>
  <li>DVGW</li>
  <li>Gasanlagenprüfung</li>
</ul>

<h3>Gefahrgutabnahme ADR</h3>
<p>Für Fahrzeuge, die <strong>Gefahrgut</strong> transportieren, ist eine <strong>ADR/GGVSEB-Gefahrgutabnahme</strong> erforderlich. Ich biete umfassende Prüfungen und Gutachten für die Zulassung von Gefahrguttransporten an.</p>
<p>Mein Service stellt sicher, dass alle gesetzlichen Vorschriften eingehalten werden, um die Sicherheit auf der Straße zu gewährleisten.</p>
<p><em>Relevante Keywords:</em></p>
<ul>
  <li>Gefahrgut</li>
  <li>ADR</li>
  <li>GGVSEB</li>
  <li>Gefahrguttransport</li>
  <li>Sicherheitsprüfung</li>
  <li>Fahrzeugabnahme</li>
</ul>

<h3>Gasanlagenprüfung PKW</h3>
<p><strong>Gasanlagen</strong> in Fahrzeugen müssen regelmäßig auf ihre Sicherheit geprüft werden. Ich führe die <strong>Gasanlagenprüfung</strong> für PKW durch und sorge dafür, dass Ihr Fahrzeug den gesetzlichen Vorgaben entspricht.</p>
<p>Nutzen Sie meine Dienstleistungen, um die Sicherheit und Funktionsfähigkeit Ihrer Gasanlage sicherzustellen.</p>
<p><em>Relevante Keywords:</em></p>
<ul>
  <li>Gasanlagenprüfung</li>
  <li>PKW</li>
  <li>Fahrzeuggas</li>
  <li>Sicherheitsprüfung</li>
  <li>TÜV</li>
</ul>
`, 
      image: '/assets/images/kategorie6.png' 
    }
  ];

  selectedServiceIndex: number | null = null;

  toggleService(index: number): void {
    this.selectedServiceIndex = this.selectedServiceIndex === index ? null : index;
  }
}
