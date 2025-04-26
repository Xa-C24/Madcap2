import { Component } from '@angular/core';
import { DonSectionComponent } from '../don-section/don-section.component'; // <-- Import du composant

@Component({
  selector: 'app-don',
  standalone: true, // <-- Nécessaire pour permettre l'import de composants indépendants
  imports: [DonSectionComponent], // <-- Ajout du composant ici
  templateUrl: './don.component.html',
  styleUrls: ['./don.component.scss']
})
export class DonComponent {
  raisonDons = [
    { title: "Préserver le patrimoine maritime", description: "Maintenir le cotre pilote Madcap en état de naviguer." },
    { title: "Organiser des sorties en mer", description: "Offrir une expérience unique aux passionnés." },
    { title: "Partager l’histoire", description: "Transmettre notre héritage aux générations futures." }
  ];

  utilisationDons = [
    { title: "Entretien du bateau", description: "Assurer les réparations nécessaires." },
    { title: "Organisation des sorties", description: "Financer les équipements de sécurité." },
    { title: "Participation aux événements", description: "Présenter notre patrimoine lors d'expositions." }
  ];

  avantagesFiscaux = [
    { title: "Pour les particuliers", description: "Déduction fiscale de 66% du montant du don." },
    { title: "Pour les entreprises", description: "Déduction fiscale de 60% du montant, dans la limite de 0,5% du chiffre d'affaires." }
  ];
}
