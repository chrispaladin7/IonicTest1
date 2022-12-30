import { IonButton,IonMenu,IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar ,IonMenuToggle} from '@ionic/react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <>
    {/* <IonMenu contentId="main-content">
    <IonHeader>
      <IonToolbar>
        <IonTitle>Menu Content</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent className="ion-padding">This is the menu content.</IonContent>
  </IonMenu> */}
   <IonMenu contentId="main-content">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Menu Content</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonMenuToggle>
            <IonButton>Click to close the menu</IonButton>
          </IonMenuToggle>  
        </IonContent>
      </IonMenu>
      <IonPage id="main-content">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Menu</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonMenuToggle>
            <IonButton>Click to open the menu</IonButton>
          </IonMenuToggle>
          <IonCard>
      <IonCardHeader>
        <IonCardTitle>Card Title</IonCardTitle>
        <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum itaque vel ad modi fuga incidunt facere maiores. Cupiditate nulla sit eius at, voluptatem aut architecto, quaerat quasi provident doloremque ipsa!
        Here's a small text description for the card content. Nothing more, nothing less.
      </IonCardContent>
     
    </IonCard>
    <img src="https://webpage.pace.edu/CM22566P/assignment3/CHRISTUS.gif"/>
        </IonContent>
      </IonPage>
    {/* <IonPage>
      <IonHeader>
        <IonToolbar>
        <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>Menu</IonTitle>
    
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 1 page" />
      </IonContent>
   </IonPage> */}
    </>
  );
};

export default Tab1;
