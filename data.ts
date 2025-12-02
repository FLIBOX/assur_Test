import { Car, Bike, Home, HeartPulse, Globe, Briefcase } from 'lucide-react';
import { Product } from './types';

export const products: Product[] = [
  {
    id: '1',
    slug: 'assurance-auto',
    title: 'ASSURANCE AUTO',
    description: 'Vous souhaitez assurer votre voiture ? Permis Français/UE ou étranger possible',
    contentTitle: 'A qui est destiné une assurance Auto ?',
    longDescription: `
      <p class="mb-4">Que vous soyez jeune conducteur, conducteur expérimenté, ou que vous ayez un historique d'assurance complexe (malussé, résilié), nous avons des solutions adaptées à votre profil.</p>
      <p class="mb-4">Notre assurance auto couvre :</p>
      <ul class="list-disc pl-5 mb-4 space-y-2">
        <li>La Responsabilité Civile (obligatoire)</li>
        <li>Le vol et l'incendie</li>
        <li>Le bris de glace sans franchise (selon option)</li>
        <li>La protection juridique du conducteur</li>
        <li>L'assistance 0km en cas de panne ou d'accident</li>
      </ul>
      <p>Nous acceptons les permis français, européens et étrangers, et nous proposons des tarifs compétitifs pour les véhicules de prestige.</p>
    `,
    icon: Car,
    imageUrl: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=1000&auto=format&fit=crop',
    linkText: 'En Savoir Plus',
  },
  {
    id: '2',
    slug: 'assurance-moto',
    title: 'ASSURANCE MOTO',
    description: 'Cyclo Scooter <= 50 cm3, Scooter > 50 cm3, Tricycle, Quad',
    contentTitle: 'A qui est destiné une assurance Moto ?',
    longDescription: `
      <p class="mb-4">Passionné de deux-roues ou utilisateur quotidien de scooter pour vos trajets urbains ? Notre assurance moto s'adapte à votre usage et à votre véhicule.</p>
      <p class="mb-4">Nous assurons tous types de véhicules :</p>
      <ul class="list-disc pl-5 mb-4 space-y-2">
        <li>Scooters 50cc et 125cc</li>
        <li>Motos de toutes cylindrées (Roadster, Sportive, Custom...)</li>
        <li>Quads et Buggys</li>
        <li>Tricycles à moteur (MP3...)</li>
      </ul>
      <p>Bénéficiez d'options spécifiques comme la garantie des équipements (casque, gants, blouson) et une assistance dédiée aux motards.</p>
    `,
    icon: Bike,
    imageUrl: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=1000&auto=format&fit=crop',
    linkText: 'En Savoir Plus',
  },
  {
    id: '3',
    slug: 'multirisque-habitation',
    title: 'MULTIRISQUE HABITATION',
    description: 'Locataire ? Propriétaire ? Nous avons la solution adaptée à votre logement',
    contentTitle: 'Pourquoi souscrire une multirisque habitation ?',
    longDescription: `
      <p class="mb-4">L'assurance habitation est essentielle pour protéger votre patrimoine, que vous soyez locataire, propriétaire occupant ou propriétaire non occupant.</p>
      <p class="mb-4">Nos garanties incluent :</p>
      <ul class="list-disc pl-5 mb-4 space-y-2">
        <li>Incendie, Dégâts des eaux, Événements climatiques</li>
        <li>Vol et vandalisme</li>
        <li>Responsabilité civile vie privée</li>
        <li>Rééquipement à neuf (selon option)</li>
      </ul>
      <p>Nous proposons également des extensions pour vos objets de valeur, vos équipements de jardin et vos installations extérieures.</p>
    `,
    icon: Home,
    imageUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000&auto=format&fit=crop',
    linkText: 'En Savoir Plus',
  },
  {
    id: '4',
    slug: 'mutuelle-sante',
    title: 'MUTUELLE SANTÉ',
    description: 'Offre 100% santé adaptée à tout âge et à tous les profils',
    contentTitle: 'Votre santé mérite la meilleure protection',
    longDescription: `
      <p class="mb-4">Parce que la santé est ce qu'il y a de plus précieux, nous vous proposons des complémentaires santé modulables selon vos besoins et votre budget.</p>
      <p class="mb-4">Nos points forts :</p>
      <ul class="list-disc pl-5 mb-4 space-y-2">
        <li>Remboursement rapide (sous 48h)</li>
        <li>Tiers payant généralisé (pas d'avance de frais)</li>
        <li>Forfaits optique et dentaire renforcés</li>
        <li>Prise en charge des médecines douces (ostéopathie, etc.)</li>
      </ul>
      <p>Nos offres sont conformes au "100% Santé" pour un reste à charge zéro sur une sélection de lunettes, prothèses dentaires et aides auditives.</p>
    `,
    icon: HeartPulse,
    imageUrl: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=1000&auto=format&fit=crop',
    linkText: 'En Savoir Plus',
  },
  {
    id: '5',
    slug: 'sante-international',
    title: 'SANTÉ INTERNATIONAL',
    description: 'Une assurance complète pour les expatriés en France',
    contentTitle: 'Assurance santé pour les expatriés',
    longDescription: `
      <p class="mb-4">Vous venez vous installer en France ou vous accueillez de la famille de l'étranger ? Notre assurance Santé International est conçue pour couvrir les frais médicaux des non-résidents ou des nouveaux arrivants.</p>
      <p class="mb-4">Détails de l'offre :</p>
      <ul class="list-disc pl-5 mb-4 space-y-2">
        <li>Couverture des frais d'hospitalisation et de médecine courante</li>
        <li>Assistance rapatriement incluse</li>
        <li>Valable pour l'obtention de visa long séjour</li>
        <li>Souscription immédiate et certificat multilingue</li>
      </ul>
    `,
    icon: Globe,
    imageUrl: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=1000&auto=format&fit=crop',
    linkText: 'En Savoir Plus',
  },
  {
    id: '6',
    slug: 'multirisques-pro',
    title: 'MULTIRISQUES PRO',
    description: 'Nos solutions d’assurance professionnelle adaptées à votre activité',
    contentTitle: 'Protégez votre activité professionnelle',
    longDescription: `
      <p class="mb-4">Chaque métier a ses risques spécifiques. C'est pourquoi nous proposons des contrats Multirisque Professionnelle sur-mesure pour les artisans, commerçants, professions libérales et entreprises.</p>
      <p class="mb-4">Nous couvrons :</p>
      <ul class="list-disc pl-5 mb-4 space-y-2">
        <li>Vos locaux et votre matériel professionnel</li>
        <li>Votre responsabilité civile professionnelle (RC Pro)</li>
        <li>La perte d'exploitation après un sinistre</li>
        <li>La protection juridique professionnelle</li>
      </ul>
      <p>Assurance décennale disponible pour les professionnels du bâtiment.</p>
    `,
    icon: Briefcase,
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop',
    linkText: 'En Savoir Plus',
  }
];