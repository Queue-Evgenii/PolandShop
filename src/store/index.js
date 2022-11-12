import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    productList: [
      {
        id: 1,
        category: 1,
        title: 'Profil aluminiowy uniwersalny bezuszczelkowy',
        image: require('@/assets/img/products/product-1.png'),
        offer: 'product offer',
        categoryNum: 26,
        cod: '0723314791448',
        firstPrice: 95,
        price: 75,
        status: true,
        quantity: 1,
        mark: 'Najlepiej sprzedający się',
        label: 'asd',
        href: '#',
        aboutText: 'Profil plastykowy typu A harpun stosuje się do mocowania płótna sufitu napinanego do ściany oraierzchnie pionowe. Dzięki swojej elastyczności pozwala powtarzać zaokrąglenia bez docinania samego profilu. wymaga mocowania w krokachcm. Minimalna utrata wysokości sufitu 3,5 cm Szczelina powstająca pomiędzy ściaga mocowania w krokach co cm. Minimalna utrata wysokości sufitu 3,5 cm Szczelina powstająca pomiędzy ścianą a sufitem, zamyka się maskownicą PCV. Profil plastykowy typu A harpun stosuje się do mocowania płótna sufitu napinanego do ściany oraz inne powierzchnie pionowe. Dzięki swojej elastyczności pozwala powtarzać zaokrąglenia bez docinania samego profilu.cm. Profil plastykowy typu A harpun stosuje się do mocowania płótna sufitu napinanego do ściany oraierzchnie pionowe. Dzięki swojej elastyczności pozwala powtarzać zaokrąglenia bez docinania samego profilu. wymaga mocowania w krokachcm. Minimalna utrata wysokości sufitu 3,5 cm Szczelina powstająca pomiędzy ściaga mocowania w krokach co cm. Minimalna utrata wysokości sufitu 3,5 cm Szczelina powstająca pomiędzy ścianą a sufitem, zamyka się maskownicą PCV. Profil plastykowy typu A harpun stosuje się do mocowania płótna sufitu napinanego do ściany oraz inne powierzchnie pionowe. Dzięki swojej elastyczności pozwala powtarzać zaokrąglenia bez docinania samego profilu.cm.',
        images: [
          {
            id: 1,
            image: require('@/assets/img/product/product-img-1.png')
          },
          {
            id: 2,
            image: require('@/assets/img/product/product-img-2.png')
          },
          {
            id: 3,
            image: require('@/assets/img/product/product-img-3.png')
          },
          {
            id: 4,
            image: require('@/assets/img/product/product-img-4.png')
          },
          
          {
            id: 5,
            image: require('@/assets/img/product/product-img-2.png')
          },
        ],
        description: [
          {
            id: 1,
            th: "Waga:",
            td: "160 g/m.b."
          },
          {
            id: 2,
            th: "Możliwość włożenia uszczelki:",
            td: "Tak"
          },
          {
            id: 3,
            th: "Materiał:",
            td: "Biały"
          },
          {
            id: 4,
            th: "Długość:",
            td: "PCV"
          },
          {
            id: 5,
            th: "Waga:",
            td: "2,0 m"
          },
          {
            id: 6,
            th: "Waga:",
            td: "160 g/m.b."
          },
          {
            id: 7,
            th: "Waga:",
            td: "160 g/m.b."
          },
        ],
        reviews: [
          {
            id: 1,
            username: 'Tatiana',
            text: 'Maszyna została kupiona jako zapas, do odzieży roboczej, dywaników i innych bzdur pranych osobno. Umiarkowanie głośny, nie spodziewałem się kolejnego. Ale są niuanse z programami, czasami nie jest to jasne, nie wyciska się i trzeba osobno ponownie włączyć wirowanie.. nie zawsze zmywa podobne zanieczyszczenia, które inna maszyna Indesit może z łatwością zmyć.'
          },
          {
            id: 2,
            username: 'Jewgienij',
            text: 'Maszyna została kupiona jako zapas, do odzieży roboczej, dywaników i innych bzdur pranych osobno. Umiarkowanie głośny, nie spodziewałem się kolejnego. Ale są niuanse z programami, czasami nie jest to jasne, nie wyciska się i trzeba osobno ponownie włączyć wirowanie.. nie zawsze zmywa podobne zanieczyszczenia, które inna maszyna Indesit może z łatwością zmyć.'
          },
          {
            id: 3,
            username: 'Tatiana',
            text: 'Maszyna została kupiona jako zapas, do odzieży roboczej, dywaników i innych bzdur pranych osobno. Umiarkowanie głośny, nie spodziewałem się kolejnego. Ale są niuanse z programami, czasami nie jest to jasne, nie wyciska się i trzeba osobno ponownie włączyć wirowanie.. nie zawsze zmywa podobne zanieczyszczenia, które inna maszyna Indesit może z łatwością zmyć.'
          },
          {
            id: 4,
            username: 'Jewgienij',
            text: 'Maszyna została kupiona jako zapas, do odzieży roboczej, dywaników i innych bzdur pranych osobno. Umiarkowanie głośny, nie spodziewałem się kolejnego. Ale są niuanse z programami, czasami nie jest to jasne, nie wyciska się i trzeba osobno ponownie włączyć wirowanie.. nie zawsze zmywa podobne zanieczyszczenia, które inna maszyna Indesit może z łatwością zmyć.'
          },
          {
            id: 5,
            username: 'Tatiana',
            text: 'Maszyna została kupiona jako zapas, do odzieży roboczej, dywaników i innych bzdur pranych osobno. Umiarkowanie głośny, nie spodziewałem się kolejnego. Ale są niuanse z programami, czasami nie jest to jasne, nie wyciska się i trzeba osobno ponownie włączyć wirowanie.. nie zawsze zmywa podobne zanieczyszczenia, które inna maszyna Indesit może z łatwością zmyć.'
          },
          {
            id: 6,
            username: 'Jewgienij',
            text: 'Maszyna została kupiona jako zapas, do odzieży roboczej, dywaników i innych bzdur pranych osobno. Umiarkowanie głośny, nie spodziewałem się kolejnego. Ale są niuanse z programami, czasami nie jest to jasne, nie wyciska się i trzeba osobno ponownie włączyć wirowanie.. nie zawsze zmywa podobne zanieczyszczenia, które inna maszyna Indesit może z łatwością zmyć.'
          },
        ],
      },
      {
        id: 2,
        category: 1,
        title: 'Profil aluminiowy uniwersalny bezuszczelkowy',
        image: require('@/assets/img/products/product-2.png'),
        categoryNum: 26,
        cod: '0723314791448',
        firstPrice: 95,
        price: 75,
        status: true,
        quantity: 1,
        mark: '',
        href: '#',
        aboutText: 'Profil plastykowy typu A harpun stosuje się do mocowania płótna sufitu napinanego do ściany oraierzchnie pionowe. Dzięki swojej elastyczności pozwala powtarzać zaokrąglenia bez docinania samego profilu. wymaga mocowania w krokachcm. Minimalna utrata wysokości sufitu 3,5 cm Szczelina powstająca pomiędzy ściaga mocowania w krokach co cm. Minimalna utrata wysokości sufitu 3,5 cm Szczelina powstająca pomiędzy ścianą a sufitem, zamyka się maskownicą PCV. Profil plastykowy typu A harpun stosuje się do mocowania płótna sufitu napinanego do ściany oraz inne powierzchnie pionowe. Dzięki swojej elastyczności pozwala powtarzać zaokrąglenia bez docinania samego profilu.cm. Profil plastykowy typu A harpun stosuje się do mocowania płótna sufitu napinanego do ściany oraierzchnie pionowe. Dzięki swojej elastyczności pozwala powtarzać zaokrąglenia bez docinania samego profilu. wymaga mocowania w krokachcm. Minimalna utrata wysokości sufitu 3,5 cm Szczelina powstająca pomiędzy ściaga mocowania w krokach co cm. Minimalna utrata wysokości sufitu 3,5 cm Szczelina powstająca pomiędzy ścianą a sufitem, zamyka się maskownicą PCV. Profil plastykowy typu A harpun stosuje się do mocowania płótna sufitu napinanego do ściany oraz inne powierzchnie pionowe. Dzięki swojej elastyczności pozwala powtarzać zaokrąglenia bez docinania samego profilu.cm.',
        images: [
          {
            id: 1,
            image: require('@/assets/img/products/product-2.png')
          },
          {
            id: 2,
            image: require('@/assets/img/product/product-img-2.png')
          },
          {
            id: 3,
            image: require('@/assets/img/product/product-img-3.png')
          },
          {
            id: 4,
            image: require('@/assets/img/product/product-img-4.png')
          },
          
          {
            id: 5,
            image: require('@/assets/img/product/product-img-2.png')
          },
        ],
        description: [
          {
            id: 1,
            th: "Waga:",
            td: "160 g/m.b."
          },
          {
            id: 2,
            th: "Możliwość włożenia uszczelki:",
            td: "Tak"
          },
          {
            id: 3,
            th: "Materiał:",
            td: "Biały"
          },
          {
            id: 4,
            th: "Długość:",
            td: "PCV"
          },
          {
            id: 5,
            th: "Waga:",
            td: "2,0 m"
          },
          {
            id: 6,
            th: "Waga:",
            td: "160 g/m.b."
          },
          {
            id: 7,
            th: "Waga:",
            td: "160 g/m.b."
          },
        ],
        reviews: [
          {
            id: 1,
            username: 'Tatiana',
            text: 'Maszyna została kupiona jako zapas, do odzieży roboczej, dywaników i innych bzdur pranych osobno. Umiarkowanie głośny, nie spodziewałem się kolejnego. Ale są niuanse z programami, czasami nie jest to jasne, nie wyciska się i trzeba osobno ponownie włączyć wirowanie.. nie zawsze zmywa podobne zanieczyszczenia, które inna maszyna Indesit może z łatwością zmyć.'
          },
          {
            id: 2,
            username: 'Jewgienij',
            text: 'Maszyna została kupiona jako zapas, do odzieży roboczej, dywaników i innych bzdur pranych osobno. Umiarkowanie głośny, nie spodziewałem się kolejnego. Ale są niuanse z programami, czasami nie jest to jasne, nie wyciska się i trzeba osobno ponownie włączyć wirowanie.. nie zawsze zmywa podobne zanieczyszczenia, które inna maszyna Indesit może z łatwością zmyć.'
          },
          {
            id: 3,
            username: 'Tatiana',
            text: 'Maszyna została kupiona jako zapas, do odzieży roboczej, dywaników i innych bzdur pranych osobno. Umiarkowanie głośny, nie spodziewałem się kolejnego. Ale są niuanse z programami, czasami nie jest to jasne, nie wyciska się i trzeba osobno ponownie włączyć wirowanie.. nie zawsze zmywa podobne zanieczyszczenia, które inna maszyna Indesit może z łatwością zmyć.'
          },
          {
            id: 4,
            username: 'Jewgienij',
            text: 'Maszyna została kupiona jako zapas, do odzieży roboczej, dywaników i innych bzdur pranych osobno. Umiarkowanie głośny, nie spodziewałem się kolejnego. Ale są niuanse z programami, czasami nie jest to jasne, nie wyciska się i trzeba osobno ponownie włączyć wirowanie.. nie zawsze zmywa podobne zanieczyszczenia, które inna maszyna Indesit może z łatwością zmyć.'
          },
          {
            id: 5,
            username: 'Tatiana',
            text: 'Maszyna została kupiona jako zapas, do odzieży roboczej, dywaników i innych bzdur pranych osobno. Umiarkowanie głośny, nie spodziewałem się kolejnego. Ale są niuanse z programami, czasami nie jest to jasne, nie wyciska się i trzeba osobno ponownie włączyć wirowanie.. nie zawsze zmywa podobne zanieczyszczenia, które inna maszyna Indesit może z łatwością zmyć.'
          },
          {
            id: 6,
            username: 'Jewgienij',
            text: 'Maszyna została kupiona jako zapas, do odzieży roboczej, dywaników i innych bzdur pranych osobno. Umiarkowanie głośny, nie spodziewałem się kolejnego. Ale są niuanse z programami, czasami nie jest to jasne, nie wyciska się i trzeba osobno ponownie włączyć wirowanie.. nie zawsze zmywa podobne zanieczyszczenia, które inna maszyna Indesit może z łatwością zmyć.'
          },
        ],
      },
      {
        id: 3,
        category: 1,
        title: 'Profil aluminiowy uniwersalny bezuszczelkowy',
        image: require('@/assets/img/products/product-3.png'),
        categoryNum: 26,
        cod: '0723314791448',
        firstPrice: 95,
        price: 75,
        status: true,
        quantity: 1,
        mark: 'Najlepiej sprzedający się',
        href: '#',
        aboutText: 'Profil plastykowy typu A harpun stosuje się do mocowania płótna sufitu napinanego do ściany oraierzchnie pionowe. Dzięki swojej elastyczności pozwala powtarzać zaokrąglenia bez docinania samego profilu. wymaga mocowania w krokachcm. Minimalna utrata wysokości sufitu 3,5 cm Szczelina powstająca pomiędzy ściaga mocowania w krokach co cm. Minimalna utrata wysokości sufitu 3,5 cm Szczelina powstająca pomiędzy ścianą a sufitem, zamyka się maskownicą PCV. Profil plastykowy typu A harpun stosuje się do mocowania płótna sufitu napinanego do ściany oraz inne powierzchnie pionowe. Dzięki swojej elastyczności pozwala powtarzać zaokrąglenia bez docinania samego profilu.cm. Profil plastykowy typu A harpun stosuje się do mocowania płótna sufitu napinanego do ściany oraierzchnie pionowe. Dzięki swojej elastyczności pozwala powtarzać zaokrąglenia bez docinania samego profilu. wymaga mocowania w krokachcm. Minimalna utrata wysokości sufitu 3,5 cm Szczelina powstająca pomiędzy ściaga mocowania w krokach co cm. Minimalna utrata wysokości sufitu 3,5 cm Szczelina powstająca pomiędzy ścianą a sufitem, zamyka się maskownicą PCV. Profil plastykowy typu A harpun stosuje się do mocowania płótna sufitu napinanego do ściany oraz inne powierzchnie pionowe. Dzięki swojej elastyczności pozwala powtarzać zaokrąglenia bez docinania samego profilu.cm.',
        images: [
          {
            id: 1,
            image: require('@/assets/img/products/product-3.png'),
          },
          {
            id: 2,
            image: require('@/assets/img/product/product-img-2.png')
          },
          {
            id: 3,
            image: require('@/assets/img/product/product-img-3.png')
          },
          {
            id: 4,
            image: require('@/assets/img/product/product-img-4.png')
          },
          
          {
            id: 5,
            image: require('@/assets/img/product/product-img-2.png')
          },
        ],
        description: [
          {
            id: 1,
            th: "Waga:",
            td: "160 g/m.b."
          },
          {
            id: 2,
            th: "Możliwość włożenia uszczelki:",
            td: "Tak"
          },
          {
            id: 3,
            th: "Materiał:",
            td: "Biały"
          },
          {
            id: 4,
            th: "Długość:",
            td: "PCV"
          },
          {
            id: 5,
            th: "Waga:",
            td: "2,0 m"
          },
          {
            id: 6,
            th: "Waga:",
            td: "160 g/m.b."
          },
          {
            id: 7,
            th: "Waga:",
            td: "160 g/m.b."
          },
        ],
        reviews: [
          {
            id: 1,
            username: 'Tatiana',
            text: 'Maszyna została kupiona jako zapas, do odzieży roboczej, dywaników i innych bzdur pranych osobno. Umiarkowanie głośny, nie spodziewałem się kolejnego. Ale są niuanse z programami, czasami nie jest to jasne, nie wyciska się i trzeba osobno ponownie włączyć wirowanie.. nie zawsze zmywa podobne zanieczyszczenia, które inna maszyna Indesit może z łatwością zmyć.'
          },
          {
            id: 2,
            username: 'Jewgienij',
            text: 'Maszyna została kupiona jako zapas, do odzieży roboczej, dywaników i innych bzdur pranych osobno. Umiarkowanie głośny, nie spodziewałem się kolejnego. Ale są niuanse z programami, czasami nie jest to jasne, nie wyciska się i trzeba osobno ponownie włączyć wirowanie.. nie zawsze zmywa podobne zanieczyszczenia, które inna maszyna Indesit może z łatwością zmyć.'
          },
          {
            id: 3,
            username: 'Tatiana',
            text: 'Maszyna została kupiona jako zapas, do odzieży roboczej, dywaników i innych bzdur pranych osobno. Umiarkowanie głośny, nie spodziewałem się kolejnego. Ale są niuanse z programami, czasami nie jest to jasne, nie wyciska się i trzeba osobno ponownie włączyć wirowanie.. nie zawsze zmywa podobne zanieczyszczenia, które inna maszyna Indesit może z łatwością zmyć.'
          },
          {
            id: 4,
            username: 'Jewgienij',
            text: 'Maszyna została kupiona jako zapas, do odzieży roboczej, dywaników i innych bzdur pranych osobno. Umiarkowanie głośny, nie spodziewałem się kolejnego. Ale są niuanse z programami, czasami nie jest to jasne, nie wyciska się i trzeba osobno ponownie włączyć wirowanie.. nie zawsze zmywa podobne zanieczyszczenia, które inna maszyna Indesit może z łatwością zmyć.'
          },
          {
            id: 5,
            username: 'Tatiana',
            text: 'Maszyna została kupiona jako zapas, do odzieży roboczej, dywaników i innych bzdur pranych osobno. Umiarkowanie głośny, nie spodziewałem się kolejnego. Ale są niuanse z programami, czasami nie jest to jasne, nie wyciska się i trzeba osobno ponownie włączyć wirowanie.. nie zawsze zmywa podobne zanieczyszczenia, które inna maszyna Indesit może z łatwością zmyć.'
          },
          {
            id: 6,
            username: 'Jewgienij',
            text: 'Maszyna została kupiona jako zapas, do odzieży roboczej, dywaników i innych bzdur pranych osobno. Umiarkowanie głośny, nie spodziewałem się kolejnego. Ale są niuanse z programami, czasami nie jest to jasne, nie wyciska się i trzeba osobno ponownie włączyć wirowanie.. nie zawsze zmywa podobne zanieczyszczenia, które inna maszyna Indesit może z łatwością zmyć.'
          },
        ],
      },
      {
        id: 4,
        category: 1,
        title: 'Profil aluminiowy uniwersalny bezuszczelkowy',
        image: require('@/assets/img/products/product-4.png'),
        categoryNum: 26,
        cod: '0723314791448',
        firstPrice: 95,
        price: 75,
        status: true,
        quantity: 1,
        mark: '',
        href: '#',
        aboutText: 'Profil plastykowy typu A harpun stosuje się do mocowania płótna sufitu napinanego do ściany oraierzchnie pionowe. Dzięki swojej elastyczności pozwala powtarzać zaokrąglenia bez docinania samego profilu. wymaga mocowania w krokachcm. Minimalna utrata wysokości sufitu 3,5 cm Szczelina powstająca pomiędzy ściaga mocowania w krokach co cm. Minimalna utrata wysokości sufitu 3,5 cm Szczelina powstająca pomiędzy ścianą a sufitem, zamyka się maskownicą PCV. Profil plastykowy typu A harpun stosuje się do mocowania płótna sufitu napinanego do ściany oraz inne powierzchnie pionowe. Dzięki swojej elastyczności pozwala powtarzać zaokrąglenia bez docinania samego profilu.cm. Profil plastykowy typu A harpun stosuje się do mocowania płótna sufitu napinanego do ściany oraierzchnie pionowe. Dzięki swojej elastyczności pozwala powtarzać zaokrąglenia bez docinania samego profilu. wymaga mocowania w krokachcm. Minimalna utrata wysokości sufitu 3,5 cm Szczelina powstająca pomiędzy ściaga mocowania w krokach co cm. Minimalna utrata wysokości sufitu 3,5 cm Szczelina powstająca pomiędzy ścianą a sufitem, zamyka się maskownicą PCV. Profil plastykowy typu A harpun stosuje się do mocowania płótna sufitu napinanego do ściany oraz inne powierzchnie pionowe. Dzięki swojej elastyczności pozwala powtarzać zaokrąglenia bez docinania samego profilu.cm.',
        images: [
          {
            id: 1,
            image: require('@/assets/img/products/product-4.png'),
          },
          {
            id: 2,
            image: require('@/assets/img/product/product-img-2.png')
          },
          {
            id: 3,
            image: require('@/assets/img/product/product-img-3.png')
          },
          {
            id: 4,
            image: require('@/assets/img/product/product-img-4.png')
          },
          
          {
            id: 5,
            image: require('@/assets/img/product/product-img-2.png')
          },
        ],
        description: [
          {
            id: 1,
            th: "Waga:",
            td: "160 g/m.b."
          },
          {
            id: 2,
            th: "Możliwość włożenia uszczelki:",
            td: "Tak"
          },
          {
            id: 3,
            th: "Materiał:",
            td: "Biały"
          },
          {
            id: 4,
            th: "Długość:",
            td: "PCV"
          },
          {
            id: 5,
            th: "Waga:",
            td: "2,0 m"
          },
          {
            id: 6,
            th: "Waga:",
            td: "160 g/m.b."
          },
          {
            id: 7,
            th: "Waga:",
            td: "160 g/m.b."
          },
        ],
        reviews: [
          {
            id: 1,
            username: 'Tatiana',
            text: 'Maszyna została kupiona jako zapas, do odzieży roboczej, dywaników i innych bzdur pranych osobno. Umiarkowanie głośny, nie spodziewałem się kolejnego. Ale są niuanse z programami, czasami nie jest to jasne, nie wyciska się i trzeba osobno ponownie włączyć wirowanie.. nie zawsze zmywa podobne zanieczyszczenia, które inna maszyna Indesit może z łatwością zmyć.'
          },
          {
            id: 2,
            username: 'Jewgienij',
            text: 'Maszyna została kupiona jako zapas, do odzieży roboczej, dywaników i innych bzdur pranych osobno. Umiarkowanie głośny, nie spodziewałem się kolejnego. Ale są niuanse z programami, czasami nie jest to jasne, nie wyciska się i trzeba osobno ponownie włączyć wirowanie.. nie zawsze zmywa podobne zanieczyszczenia, które inna maszyna Indesit może z łatwością zmyć.'
          },
          {
            id: 3,
            username: 'Tatiana',
            text: 'Maszyna została kupiona jako zapas, do odzieży roboczej, dywaników i innych bzdur pranych osobno. Umiarkowanie głośny, nie spodziewałem się kolejnego. Ale są niuanse z programami, czasami nie jest to jasne, nie wyciska się i trzeba osobno ponownie włączyć wirowanie.. nie zawsze zmywa podobne zanieczyszczenia, które inna maszyna Indesit może z łatwością zmyć.'
          },
          {
            id: 4,
            username: 'Jewgienij',
            text: 'Maszyna została kupiona jako zapas, do odzieży roboczej, dywaników i innych bzdur pranych osobno. Umiarkowanie głośny, nie spodziewałem się kolejnego. Ale są niuanse z programami, czasami nie jest to jasne, nie wyciska się i trzeba osobno ponownie włączyć wirowanie.. nie zawsze zmywa podobne zanieczyszczenia, które inna maszyna Indesit może z łatwością zmyć.'
          },
          {
            id: 5,
            username: 'Tatiana',
            text: 'Maszyna została kupiona jako zapas, do odzieży roboczej, dywaników i innych bzdur pranych osobno. Umiarkowanie głośny, nie spodziewałem się kolejnego. Ale są niuanse z programami, czasami nie jest to jasne, nie wyciska się i trzeba osobno ponownie włączyć wirowanie.. nie zawsze zmywa podobne zanieczyszczenia, które inna maszyna Indesit może z łatwością zmyć.'
          },
          {
            id: 6,
            username: 'Jewgienij',
            text: 'Maszyna została kupiona jako zapas, do odzieży roboczej, dywaników i innych bzdur pranych osobno. Umiarkowanie głośny, nie spodziewałem się kolejnego. Ale są niuanse z programami, czasami nie jest to jasne, nie wyciska się i trzeba osobno ponownie włączyć wirowanie.. nie zawsze zmywa podobne zanieczyszczenia, które inna maszyna Indesit może z łatwością zmyć.'
          },
        ],
      },
      {
        id: 5,
        category: 2,
        title: 'Profil aluminiowy uniwersalny bezuszczelkowy2',
        image: require('@/assets/img/products/product-1.png'),
        categoryNum: 26,
        cod: '0723314791448',
        firstPrice: 95,
        price: 75,
        status: true,
        quantity: 1,
        mark: '',
        href: '#',
        aboutText: 'Profil plastykowy typu A harpun stosuje się do mocowania płótna sufitu napinanego do ściany oraierzchnie pionowe. Dzięki swojej elastyczności pozwala powtarzać zaokrąglenia bez docinania samego profilu. wymaga mocowania w krokachcm. Minimalna utrata wysokości sufitu 3,5 cm Szczelina powstająca pomiędzy ściaga mocowania w krokach co cm. Minimalna utrata wysokości sufitu 3,5 cm Szczelina powstająca pomiędzy ścianą a sufitem, zamyka się maskownicą PCV. Profil plastykowy typu A harpun stosuje się do mocowania płótna sufitu napinanego do ściany oraz inne powierzchnie pionowe. Dzięki swojej elastyczności pozwala powtarzać zaokrąglenia bez docinania samego profilu.cm. Profil plastykowy typu A harpun stosuje się do mocowania płótna sufitu napinanego do ściany oraierzchnie pionowe. Dzięki swojej elastyczności pozwala powtarzać zaokrąglenia bez docinania samego profilu. wymaga mocowania w krokachcm. Minimalna utrata wysokości sufitu 3,5 cm Szczelina powstająca pomiędzy ściaga mocowania w krokach co cm. Minimalna utrata wysokości sufitu 3,5 cm Szczelina powstająca pomiędzy ścianą a sufitem, zamyka się maskownicą PCV. Profil plastykowy typu A harpun stosuje się do mocowania płótna sufitu napinanego do ściany oraz inne powierzchnie pionowe. Dzięki swojej elastyczności pozwala powtarzać zaokrąglenia bez docinania samego profilu.cm.',
        images: [
          {
            id: 1,
            image: require('@/assets/img/product/product-img-1.png')
          },
          {
            id: 2,
            image: require('@/assets/img/product/product-img-2.png')
          },
          {
            id: 3,
            image: require('@/assets/img/product/product-img-3.png')
          },
          {
            id: 4,
            image: require('@/assets/img/product/product-img-4.png')
          },
          
          {
            id: 5,
            image: require('@/assets/img/product/product-img-2.png')
          },
        ],
        description: [
          {
            id: 1,
            th: "Waga:",
            td: "160 g/m.b."
          },
          {
            id: 2,
            th: "Możliwość włożenia uszczelki:",
            td: "Tak"
          },
          {
            id: 3,
            th: "Materiał:",
            td: "Biały"
          },
          {
            id: 4,
            th: "Długość:",
            td: "PCV"
          },
          {
            id: 5,
            th: "Waga:",
            td: "2,0 m"
          },
          {
            id: 6,
            th: "Waga:",
            td: "160 g/m.b."
          },
          {
            id: 7,
            th: "Waga:",
            td: "160 g/m.b."
          },
        ],
        reviews: [
          {
            id: 1,
            username: 'Tatiana',
            text: 'Maszyna została kupiona jako zapas, do odzieży roboczej, dywaników i innych bzdur pranych osobno. Umiarkowanie głośny, nie spodziewałem się kolejnego. Ale są niuanse z programami, czasami nie jest to jasne, nie wyciska się i trzeba osobno ponownie włączyć wirowanie.. nie zawsze zmywa podobne zanieczyszczenia, które inna maszyna Indesit może z łatwością zmyć.'
          },
          {
            id: 2,
            username: 'Jewgienij',
            text: 'Maszyna została kupiona jako zapas, do odzieży roboczej, dywaników i innych bzdur pranych osobno. Umiarkowanie głośny, nie spodziewałem się kolejnego. Ale są niuanse z programami, czasami nie jest to jasne, nie wyciska się i trzeba osobno ponownie włączyć wirowanie.. nie zawsze zmywa podobne zanieczyszczenia, które inna maszyna Indesit może z łatwością zmyć.'
          },
          {
            id: 3,
            username: 'Tatiana',
            text: 'Maszyna została kupiona jako zapas, do odzieży roboczej, dywaników i innych bzdur pranych osobno. Umiarkowanie głośny, nie spodziewałem się kolejnego. Ale są niuanse z programami, czasami nie jest to jasne, nie wyciska się i trzeba osobno ponownie włączyć wirowanie.. nie zawsze zmywa podobne zanieczyszczenia, które inna maszyna Indesit może z łatwością zmyć.'
          },
          {
            id: 4,
            username: 'Jewgienij',
            text: 'Maszyna została kupiona jako zapas, do odzieży roboczej, dywaników i innych bzdur pranych osobno. Umiarkowanie głośny, nie spodziewałem się kolejnego. Ale są niuanse z programami, czasami nie jest to jasne, nie wyciska się i trzeba osobno ponownie włączyć wirowanie.. nie zawsze zmywa podobne zanieczyszczenia, które inna maszyna Indesit może z łatwością zmyć.'
          },
          {
            id: 5,
            username: 'Tatiana',
            text: 'Maszyna została kupiona jako zapas, do odzieży roboczej, dywaników i innych bzdur pranych osobno. Umiarkowanie głośny, nie spodziewałem się kolejnego. Ale są niuanse z programami, czasami nie jest to jasne, nie wyciska się i trzeba osobno ponownie włączyć wirowanie.. nie zawsze zmywa podobne zanieczyszczenia, które inna maszyna Indesit może z łatwością zmyć.'
          },
          {
            id: 6,
            username: 'Jewgienij',
            text: 'Maszyna została kupiona jako zapas, do odzieży roboczej, dywaników i innych bzdur pranych osobno. Umiarkowanie głośny, nie spodziewałem się kolejnego. Ale są niuanse z programami, czasami nie jest to jasne, nie wyciska się i trzeba osobno ponownie włączyć wirowanie.. nie zawsze zmywa podobne zanieczyszczenia, które inna maszyna Indesit może z łatwością zmyć.'
          },
        ],
      },
      {
        id: 6,
        category: 2,
        title: 'Profil aluminiowy uniwersalny bezuszczelkowy2',
        image: require('@/assets/img/products/product-2.png'),
        categoryNum: 26,
        cod: '0723314791448',
        firstPrice: 95,
        price: 75,
        status: true,
        quantity: 1,
        mark: 'Najlepiej sprzedający się',
        href: '#',
        aboutText: 'Profil plastykowy typu A harpun stosuje się do mocowania płótna sufitu napinanego do ściany oraierzchnie pionowe. Dzięki swojej elastyczności pozwala powtarzać zaokrąglenia bez docinania samego profilu. wymaga mocowania w krokachcm. Minimalna utrata wysokości sufitu 3,5 cm Szczelina powstająca pomiędzy ściaga mocowania w krokach co cm. Minimalna utrata wysokości sufitu 3,5 cm Szczelina powstająca pomiędzy ścianą a sufitem, zamyka się maskownicą PCV. Profil plastykowy typu A harpun stosuje się do mocowania płótna sufitu napinanego do ściany oraz inne powierzchnie pionowe. Dzięki swojej elastyczności pozwala powtarzać zaokrąglenia bez docinania samego profilu.cm. Profil plastykowy typu A harpun stosuje się do mocowania płótna sufitu napinanego do ściany oraierzchnie pionowe. Dzięki swojej elastyczności pozwala powtarzać zaokrąglenia bez docinania samego profilu. wymaga mocowania w krokachcm. Minimalna utrata wysokości sufitu 3,5 cm Szczelina powstająca pomiędzy ściaga mocowania w krokach co cm. Minimalna utrata wysokości sufitu 3,5 cm Szczelina powstająca pomiędzy ścianą a sufitem, zamyka się maskownicą PCV. Profil plastykowy typu A harpun stosuje się do mocowania płótna sufitu napinanego do ściany oraz inne powierzchnie pionowe. Dzięki swojej elastyczności pozwala powtarzać zaokrąglenia bez docinania samego profilu.cm.',
        images: [
          {
            id: 1,
            image: require('@/assets/img/products/product-2.png')
          },
          {
            id: 2,
            image: require('@/assets/img/product/product-img-2.png')
          },
          {
            id: 3,
            image: require('@/assets/img/product/product-img-3.png')
          },
          {
            id: 4,
            image: require('@/assets/img/product/product-img-4.png')
          },
          
          {
            id: 5,
            image: require('@/assets/img/product/product-img-2.png')
          },
        ],
        description: [
          {
            id: 1,
            th: "Waga:",
            td: "160 g/m.b."
          },
          {
            id: 2,
            th: "Możliwość włożenia uszczelki:",
            td: "Tak"
          },
          {
            id: 3,
            th: "Materiał:",
            td: "Biały"
          },
          {
            id: 4,
            th: "Długość:",
            td: "PCV"
          },
          {
            id: 5,
            th: "Waga:",
            td: "2,0 m"
          },
          {
            id: 6,
            th: "Waga:",
            td: "160 g/m.b."
          },
          {
            id: 7,
            th: "Waga:",
            td: "160 g/m.b."
          },
        ],
        reviews: [
          {
            id: 1,
            username: 'Tatiana',
            text: 'Maszyna została kupiona jako zapas, do odzieży roboczej, dywaników i innych bzdur pranych osobno. Umiarkowanie głośny, nie spodziewałem się kolejnego. Ale są niuanse z programami, czasami nie jest to jasne, nie wyciska się i trzeba osobno ponownie włączyć wirowanie.. nie zawsze zmywa podobne zanieczyszczenia, które inna maszyna Indesit może z łatwością zmyć.'
          },
          {
            id: 2,
            username: 'Jewgienij',
            text: 'Maszyna została kupiona jako zapas, do odzieży roboczej, dywaników i innych bzdur pranych osobno. Umiarkowanie głośny, nie spodziewałem się kolejnego. Ale są niuanse z programami, czasami nie jest to jasne, nie wyciska się i trzeba osobno ponownie włączyć wirowanie.. nie zawsze zmywa podobne zanieczyszczenia, które inna maszyna Indesit może z łatwością zmyć.'
          },
          {
            id: 3,
            username: 'Tatiana',
            text: 'Maszyna została kupiona jako zapas, do odzieży roboczej, dywaników i innych bzdur pranych osobno. Umiarkowanie głośny, nie spodziewałem się kolejnego. Ale są niuanse z programami, czasami nie jest to jasne, nie wyciska się i trzeba osobno ponownie włączyć wirowanie.. nie zawsze zmywa podobne zanieczyszczenia, które inna maszyna Indesit może z łatwością zmyć.'
          },
          {
            id: 4,
            username: 'Jewgienij',
            text: 'Maszyna została kupiona jako zapas, do odzieży roboczej, dywaników i innych bzdur pranych osobno. Umiarkowanie głośny, nie spodziewałem się kolejnego. Ale są niuanse z programami, czasami nie jest to jasne, nie wyciska się i trzeba osobno ponownie włączyć wirowanie.. nie zawsze zmywa podobne zanieczyszczenia, które inna maszyna Indesit może z łatwością zmyć.'
          },
          {
            id: 5,
            username: 'Tatiana',
            text: 'Maszyna została kupiona jako zapas, do odzieży roboczej, dywaników i innych bzdur pranych osobno. Umiarkowanie głośny, nie spodziewałem się kolejnego. Ale są niuanse z programami, czasami nie jest to jasne, nie wyciska się i trzeba osobno ponownie włączyć wirowanie.. nie zawsze zmywa podobne zanieczyszczenia, które inna maszyna Indesit może z łatwością zmyć.'
          },
          {
            id: 6,
            username: 'Jewgienij',
            text: 'Maszyna została kupiona jako zapas, do odzieży roboczej, dywaników i innych bzdur pranych osobno. Umiarkowanie głośny, nie spodziewałem się kolejnego. Ale są niuanse z programami, czasami nie jest to jasne, nie wyciska się i trzeba osobno ponownie włączyć wirowanie.. nie zawsze zmywa podobne zanieczyszczenia, które inna maszyna Indesit może z łatwością zmyć.'
          },
        ],
      },
      {
        id: 7,
        category: 2,
        title: 'Profil aluminiowy uniwersalny bezuszczelkowy2',
        image: require('@/assets/img/products/product-3.png'),
        categoryNum: 26,
        cod: '0723314791448',
        firstPrice: 95,
        price: 75,
        status: true,
        quantity: 1,
        mark: '',
        href: '#',
        aboutText: 'Profil plastykowy typu A harpun stosuje się do mocowania płótna sufitu napinanego do ściany oraierzchnie pionowe. Dzięki swojej elastyczności pozwala powtarzać zaokrąglenia bez docinania samego profilu. wymaga mocowania w krokachcm. Minimalna utrata wysokości sufitu 3,5 cm Szczelina powstająca pomiędzy ściaga mocowania w krokach co cm. Minimalna utrata wysokości sufitu 3,5 cm Szczelina powstająca pomiędzy ścianą a sufitem, zamyka się maskownicą PCV. Profil plastykowy typu A harpun stosuje się do mocowania płótna sufitu napinanego do ściany oraz inne powierzchnie pionowe. Dzięki swojej elastyczności pozwala powtarzać zaokrąglenia bez docinania samego profilu.cm. Profil plastykowy typu A harpun stosuje się do mocowania płótna sufitu napinanego do ściany oraierzchnie pionowe. Dzięki swojej elastyczności pozwala powtarzać zaokrąglenia bez docinania samego profilu. wymaga mocowania w krokachcm. Minimalna utrata wysokości sufitu 3,5 cm Szczelina powstająca pomiędzy ściaga mocowania w krokach co cm. Minimalna utrata wysokości sufitu 3,5 cm Szczelina powstająca pomiędzy ścianą a sufitem, zamyka się maskownicą PCV. Profil plastykowy typu A harpun stosuje się do mocowania płótna sufitu napinanego do ściany oraz inne powierzchnie pionowe. Dzięki swojej elastyczności pozwala powtarzać zaokrąglenia bez docinania samego profilu.cm.',
        images: [
          {
            id: 1,
            image: require('@/assets/img/products/product-3.png'),
          },
          {
            id: 2,
            image: require('@/assets/img/product/product-img-2.png')
          },
          {
            id: 3,
            image: require('@/assets/img/product/product-img-3.png')
          },
          {
            id: 4,
            image: require('@/assets/img/product/product-img-4.png')
          },
          
          {
            id: 5,
            image: require('@/assets/img/product/product-img-2.png')
          },
        ],
        description: [
          {
            id: 1,
            th: "Waga:",
            td: "160 g/m.b."
          },
          {
            id: 2,
            th: "Możliwość włożenia uszczelki:",
            td: "Tak"
          },
          {
            id: 3,
            th: "Materiał:",
            td: "Biały"
          },
          {
            id: 4,
            th: "Długość:",
            td: "PCV"
          },
          {
            id: 5,
            th: "Waga:",
            td: "2,0 m"
          },
          {
            id: 6,
            th: "Waga:",
            td: "160 g/m.b."
          },
          {
            id: 7,
            th: "Waga:",
            td: "160 g/m.b."
          },
        ],
        reviews: [
          {
            id: 1,
            username: 'Tatiana',
            text: 'Maszyna została kupiona jako zapas, do odzieży roboczej, dywaników i innych bzdur pranych osobno. Umiarkowanie głośny, nie spodziewałem się kolejnego. Ale są niuanse z programami, czasami nie jest to jasne, nie wyciska się i trzeba osobno ponownie włączyć wirowanie.. nie zawsze zmywa podobne zanieczyszczenia, które inna maszyna Indesit może z łatwością zmyć.'
          },
          {
            id: 2,
            username: 'Jewgienij',
            text: 'Maszyna została kupiona jako zapas, do odzieży roboczej, dywaników i innych bzdur pranych osobno. Umiarkowanie głośny, nie spodziewałem się kolejnego. Ale są niuanse z programami, czasami nie jest to jasne, nie wyciska się i trzeba osobno ponownie włączyć wirowanie.. nie zawsze zmywa podobne zanieczyszczenia, które inna maszyna Indesit może z łatwością zmyć.'
          },
          {
            id: 3,
            username: 'Tatiana',
            text: 'Maszyna została kupiona jako zapas, do odzieży roboczej, dywaników i innych bzdur pranych osobno. Umiarkowanie głośny, nie spodziewałem się kolejnego. Ale są niuanse z programami, czasami nie jest to jasne, nie wyciska się i trzeba osobno ponownie włączyć wirowanie.. nie zawsze zmywa podobne zanieczyszczenia, które inna maszyna Indesit może z łatwością zmyć.'
          },
          {
            id: 4,
            username: 'Jewgienij',
            text: 'Maszyna została kupiona jako zapas, do odzieży roboczej, dywaników i innych bzdur pranych osobno. Umiarkowanie głośny, nie spodziewałem się kolejnego. Ale są niuanse z programami, czasami nie jest to jasne, nie wyciska się i trzeba osobno ponownie włączyć wirowanie.. nie zawsze zmywa podobne zanieczyszczenia, które inna maszyna Indesit może z łatwością zmyć.'
          },
          {
            id: 5,
            username: 'Tatiana',
            text: 'Maszyna została kupiona jako zapas, do odzieży roboczej, dywaników i innych bzdur pranych osobno. Umiarkowanie głośny, nie spodziewałem się kolejnego. Ale są niuanse z programami, czasami nie jest to jasne, nie wyciska się i trzeba osobno ponownie włączyć wirowanie.. nie zawsze zmywa podobne zanieczyszczenia, które inna maszyna Indesit może z łatwością zmyć.'
          },
          {
            id: 6,
            username: 'Jewgienij',
            text: 'Maszyna została kupiona jako zapas, do odzieży roboczej, dywaników i innych bzdur pranych osobno. Umiarkowanie głośny, nie spodziewałem się kolejnego. Ale są niuanse z programami, czasami nie jest to jasne, nie wyciska się i trzeba osobno ponownie włączyć wirowanie.. nie zawsze zmywa podobne zanieczyszczenia, które inna maszyna Indesit może z łatwością zmyć.'
          },
        ],
      },
      {
        id: 8,
        category: 2,
        title: 'Profil aluminiowy uniwersalny bezuszczelkowy2',
        image: require('@/assets/img/products/product-4.png'),
        categoryNum: 26,
        cod: '0723314791448',
        firstPrice: 95,
        price: 75,
        status: true,
        quantity: 1,
        mark: 'Najlepiej sprzedający się',
        href: '#',
        aboutText: 'Profil plastykowy typu A harpun stosuje się do mocowania płótna sufitu napinanego do ściany oraierzchnie pionowe. Dzięki swojej elastyczności pozwala powtarzać zaokrąglenia bez docinania samego profilu. wymaga mocowania w krokachcm. Minimalna utrata wysokości sufitu 3,5 cm Szczelina powstająca pomiędzy ściaga mocowania w krokach co cm. Minimalna utrata wysokości sufitu 3,5 cm Szczelina powstająca pomiędzy ścianą a sufitem, zamyka się maskownicą PCV. Profil plastykowy typu A harpun stosuje się do mocowania płótna sufitu napinanego do ściany oraz inne powierzchnie pionowe. Dzięki swojej elastyczności pozwala powtarzać zaokrąglenia bez docinania samego profilu.cm. Profil plastykowy typu A harpun stosuje się do mocowania płótna sufitu napinanego do ściany oraierzchnie pionowe. Dzięki swojej elastyczności pozwala powtarzać zaokrąglenia bez docinania samego profilu. wymaga mocowania w krokachcm. Minimalna utrata wysokości sufitu 3,5 cm Szczelina powstająca pomiędzy ściaga mocowania w krokach co cm. Minimalna utrata wysokości sufitu 3,5 cm Szczelina powstająca pomiędzy ścianą a sufitem, zamyka się maskownicą PCV. Profil plastykowy typu A harpun stosuje się do mocowania płótna sufitu napinanego do ściany oraz inne powierzchnie pionowe. Dzięki swojej elastyczności pozwala powtarzać zaokrąglenia bez docinania samego profilu.cm.',
        images: [
          {
            id: 1,
            image: require('@/assets/img/products/product-4.png'),
          },
          {
            id: 2,
            image: require('@/assets/img/product/product-img-2.png')
          },
          {
            id: 3,
            image: require('@/assets/img/product/product-img-3.png')
          },
          {
            id: 4,
            image: require('@/assets/img/product/product-img-4.png')
          },
          
          {
            id: 5,
            image: require('@/assets/img/product/product-img-2.png')
          },
        ],
        description: [
          {
            id: 1,
            th: "Waga:",
            td: "160 g/m.b."
          },
          {
            id: 2,
            th: "Możliwość włożenia uszczelki:",
            td: "Tak"
          },
          {
            id: 3,
            th: "Materiał:",
            td: "Biały"
          },
          {
            id: 4,
            th: "Długość:",
            td: "PCV"
          },
          {
            id: 5,
            th: "Waga:",
            td: "2,0 m"
          },
          {
            id: 6,
            th: "Waga:",
            td: "160 g/m.b."
          },
          {
            id: 7,
            th: "Waga:",
            td: "160 g/m.b."
          },
        ],
        reviews: [
          {
            id: 1,
            username: 'Tatiana',
            text: 'Maszyna została kupiona jako zapas, do odzieży roboczej, dywaników i innych bzdur pranych osobno. Umiarkowanie głośny, nie spodziewałem się kolejnego. Ale są niuanse z programami, czasami nie jest to jasne, nie wyciska się i trzeba osobno ponownie włączyć wirowanie.. nie zawsze zmywa podobne zanieczyszczenia, które inna maszyna Indesit może z łatwością zmyć.'
          },
          {
            id: 2,
            username: 'Jewgienij',
            text: 'Maszyna została kupiona jako zapas, do odzieży roboczej, dywaników i innych bzdur pranych osobno. Umiarkowanie głośny, nie spodziewałem się kolejnego. Ale są niuanse z programami, czasami nie jest to jasne, nie wyciska się i trzeba osobno ponownie włączyć wirowanie.. nie zawsze zmywa podobne zanieczyszczenia, które inna maszyna Indesit może z łatwością zmyć.'
          },
          {
            id: 3,
            username: 'Tatiana',
            text: 'Maszyna została kupiona jako zapas, do odzieży roboczej, dywaników i innych bzdur pranych osobno. Umiarkowanie głośny, nie spodziewałem się kolejnego. Ale są niuanse z programami, czasami nie jest to jasne, nie wyciska się i trzeba osobno ponownie włączyć wirowanie.. nie zawsze zmywa podobne zanieczyszczenia, które inna maszyna Indesit może z łatwością zmyć.'
          },
          {
            id: 4,
            username: 'Jewgienij',
            text: 'Maszyna została kupiona jako zapas, do odzieży roboczej, dywaników i innych bzdur pranych osobno. Umiarkowanie głośny, nie spodziewałem się kolejnego. Ale są niuanse z programami, czasami nie jest to jasne, nie wyciska się i trzeba osobno ponownie włączyć wirowanie.. nie zawsze zmywa podobne zanieczyszczenia, które inna maszyna Indesit może z łatwością zmyć.'
          },
          {
            id: 5,
            username: 'Tatiana',
            text: 'Maszyna została kupiona jako zapas, do odzieży roboczej, dywaników i innych bzdur pranych osobno. Umiarkowanie głośny, nie spodziewałem się kolejnego. Ale są niuanse z programami, czasami nie jest to jasne, nie wyciska się i trzeba osobno ponownie włączyć wirowanie.. nie zawsze zmywa podobne zanieczyszczenia, które inna maszyna Indesit może z łatwością zmyć.'
          },
          {
            id: 6,
            username: 'Jewgienij',
            text: 'Maszyna została kupiona jako zapas, do odzieży roboczej, dywaników i innych bzdur pranych osobno. Umiarkowanie głośny, nie spodziewałem się kolejnego. Ale są niuanse z programami, czasami nie jest to jasne, nie wyciska się i trzeba osobno ponownie włączyć wirowanie.. nie zawsze zmywa podobne zanieczyszczenia, które inna maszyna Indesit może z łatwością zmyć.'
          },
        ],
      },
      {
        id: 9,
        category: 3,
        title: 'Profil aluminiowy uniwersalny bezuszczelkowy3',
        image: require('@/assets/img/products/product-1.png'),
        categoryNum: 26,
        cod: '0723314791448',
        firstPrice: 95,
        price: 75,
        status: true,
        quantity: 1,
        mark: '',
        href: '#',
        aboutText: 'Profil plastykowy typu A harpun stosuje się do mocowania płótna sufitu napinanego do ściany oraierzchnie pionowe. Dzięki swojej elastyczności pozwala powtarzać zaokrąglenia bez docinania samego profilu. wymaga mocowania w krokachcm. Minimalna utrata wysokości sufitu 3,5 cm Szczelina powstająca pomiędzy ściaga mocowania w krokach co cm. Minimalna utrata wysokości sufitu 3,5 cm Szczelina powstająca pomiędzy ścianą a sufitem, zamyka się maskownicą PCV. Profil plastykowy typu A harpun stosuje się do mocowania płótna sufitu napinanego do ściany oraz inne powierzchnie pionowe. Dzięki swojej elastyczności pozwala powtarzać zaokrąglenia bez docinania samego profilu.cm. Profil plastykowy typu A harpun stosuje się do mocowania płótna sufitu napinanego do ściany oraierzchnie pionowe. Dzięki swojej elastyczności pozwala powtarzać zaokrąglenia bez docinania samego profilu. wymaga mocowania w krokachcm. Minimalna utrata wysokości sufitu 3,5 cm Szczelina powstająca pomiędzy ściaga mocowania w krokach co cm. Minimalna utrata wysokości sufitu 3,5 cm Szczelina powstająca pomiędzy ścianą a sufitem, zamyka się maskownicą PCV. Profil plastykowy typu A harpun stosuje się do mocowania płótna sufitu napinanego do ściany oraz inne powierzchnie pionowe. Dzięki swojej elastyczności pozwala powtarzać zaokrąglenia bez docinania samego profilu.cm.',
        images: [
          {
            id: 1,
            image: require('@/assets/img/product/product-img-1.png')
          },
          {
            id: 2,
            image: require('@/assets/img/product/product-img-2.png')
          },
          {
            id: 3,
            image: require('@/assets/img/product/product-img-3.png')
          },
          {
            id: 4,
            image: require('@/assets/img/product/product-img-4.png')
          },
          
          {
            id: 5,
            image: require('@/assets/img/product/product-img-2.png')
          },
        ],
        description: [
          {
            id: 1,
            th: "Waga:",
            td: "160 g/m.b."
          },
          {
            id: 2,
            th: "Możliwość włożenia uszczelki:",
            td: "Tak"
          },
          {
            id: 3,
            th: "Materiał:",
            td: "Biały"
          },
          {
            id: 4,
            th: "Długość:",
            td: "PCV"
          },
          {
            id: 5,
            th: "Waga:",
            td: "2,0 m"
          },
          {
            id: 6,
            th: "Waga:",
            td: "160 g/m.b."
          },
          {
            id: 7,
            th: "Waga:",
            td: "160 g/m.b."
          },
        ],
        reviews: [
          {
            id: 1,
            username: 'Tatiana',
            text: 'Maszyna została kupiona jako zapas, do odzieży roboczej, dywaników i innych bzdur pranych osobno. Umiarkowanie głośny, nie spodziewałem się kolejnego. Ale są niuanse z programami, czasami nie jest to jasne, nie wyciska się i trzeba osobno ponownie włączyć wirowanie.. nie zawsze zmywa podobne zanieczyszczenia, które inna maszyna Indesit może z łatwością zmyć.'
          },
          {
            id: 2,
            username: 'Jewgienij',
            text: 'Maszyna została kupiona jako zapas, do odzieży roboczej, dywaników i innych bzdur pranych osobno. Umiarkowanie głośny, nie spodziewałem się kolejnego. Ale są niuanse z programami, czasami nie jest to jasne, nie wyciska się i trzeba osobno ponownie włączyć wirowanie.. nie zawsze zmywa podobne zanieczyszczenia, które inna maszyna Indesit może z łatwością zmyć.'
          },
          {
            id: 3,
            username: 'Tatiana',
            text: 'Maszyna została kupiona jako zapas, do odzieży roboczej, dywaników i innych bzdur pranych osobno. Umiarkowanie głośny, nie spodziewałem się kolejnego. Ale są niuanse z programami, czasami nie jest to jasne, nie wyciska się i trzeba osobno ponownie włączyć wirowanie.. nie zawsze zmywa podobne zanieczyszczenia, które inna maszyna Indesit może z łatwością zmyć.'
          },
          {
            id: 4,
            username: 'Jewgienij',
            text: 'Maszyna została kupiona jako zapas, do odzieży roboczej, dywaników i innych bzdur pranych osobno. Umiarkowanie głośny, nie spodziewałem się kolejnego. Ale są niuanse z programami, czasami nie jest to jasne, nie wyciska się i trzeba osobno ponownie włączyć wirowanie.. nie zawsze zmywa podobne zanieczyszczenia, które inna maszyna Indesit może z łatwością zmyć.'
          },
          {
            id: 5,
            username: 'Tatiana',
            text: 'Maszyna została kupiona jako zapas, do odzieży roboczej, dywaników i innych bzdur pranych osobno. Umiarkowanie głośny, nie spodziewałem się kolejnego. Ale są niuanse z programami, czasami nie jest to jasne, nie wyciska się i trzeba osobno ponownie włączyć wirowanie.. nie zawsze zmywa podobne zanieczyszczenia, które inna maszyna Indesit może z łatwością zmyć.'
          },
          {
            id: 6,
            username: 'Jewgienij',
            text: 'Maszyna została kupiona jako zapas, do odzieży roboczej, dywaników i innych bzdur pranych osobno. Umiarkowanie głośny, nie spodziewałem się kolejnego. Ale są niuanse z programami, czasami nie jest to jasne, nie wyciska się i trzeba osobno ponownie włączyć wirowanie.. nie zawsze zmywa podobne zanieczyszczenia, które inna maszyna Indesit może z łatwością zmyć.'
          },
        ],
      },
      {
        id: 10,
        category: 3,
        title: 'Profil aluminiowy uniwersalny bezuszczelkowy3',
        image: require('@/assets/img/products/product-2.png'),
        categoryNum: 26,
        cod: '0723314791448',
        firstPrice: 95,
        price: 75,
        status: true,
        quantity: 1,
        mark: 'Najlepiej sprzedający się',
        href: '#',
        aboutText: 'Profil plastykowy typu A harpun stosuje się do mocowania płótna sufitu napinanego do ściany oraierzchnie pionowe. Dzięki swojej elastyczności pozwala powtarzać zaokrąglenia bez docinania samego profilu. wymaga mocowania w krokachcm. Minimalna utrata wysokości sufitu 3,5 cm Szczelina powstająca pomiędzy ściaga mocowania w krokach co cm. Minimalna utrata wysokości sufitu 3,5 cm Szczelina powstająca pomiędzy ścianą a sufitem, zamyka się maskownicą PCV. Profil plastykowy typu A harpun stosuje się do mocowania płótna sufitu napinanego do ściany oraz inne powierzchnie pionowe. Dzięki swojej elastyczności pozwala powtarzać zaokrąglenia bez docinania samego profilu.cm. Profil plastykowy typu A harpun stosuje się do mocowania płótna sufitu napinanego do ściany oraierzchnie pionowe. Dzięki swojej elastyczności pozwala powtarzać zaokrąglenia bez docinania samego profilu. wymaga mocowania w krokachcm. Minimalna utrata wysokości sufitu 3,5 cm Szczelina powstająca pomiędzy ściaga mocowania w krokach co cm. Minimalna utrata wysokości sufitu 3,5 cm Szczelina powstająca pomiędzy ścianą a sufitem, zamyka się maskownicą PCV. Profil plastykowy typu A harpun stosuje się do mocowania płótna sufitu napinanego do ściany oraz inne powierzchnie pionowe. Dzięki swojej elastyczności pozwala powtarzać zaokrąglenia bez docinania samego profilu.cm.',
        images: [
          {
            id: 1,
            image: require('@/assets/img/products/product-2.png')
          },
          {
            id: 2,
            image: require('@/assets/img/product/product-img-2.png')
          },
          {
            id: 3,
            image: require('@/assets/img/product/product-img-3.png')
          },
          {
            id: 4,
            image: require('@/assets/img/product/product-img-4.png')
          },
          
          {
            id: 5,
            image: require('@/assets/img/product/product-img-2.png')
          },
        ],
        description: [
          {
            id: 1,
            th: "Waga:",
            td: "160 g/m.b."
          },
          {
            id: 2,
            th: "Możliwość włożenia uszczelki:",
            td: "Tak"
          },
          {
            id: 3,
            th: "Materiał:",
            td: "Biały"
          },
          {
            id: 4,
            th: "Długość:",
            td: "PCV"
          },
          {
            id: 5,
            th: "Waga:",
            td: "2,0 m"
          },
          {
            id: 6,
            th: "Waga:",
            td: "160 g/m.b."
          },
          {
            id: 7,
            th: "Waga:",
            td: "160 g/m.b."
          },
        ],
        reviews: [
          {
            id: 1,
            username: 'Tatiana',
            text: 'Maszyna została kupiona jako zapas, do odzieży roboczej, dywaników i innych bzdur pranych osobno. Umiarkowanie głośny, nie spodziewałem się kolejnego. Ale są niuanse z programami, czasami nie jest to jasne, nie wyciska się i trzeba osobno ponownie włączyć wirowanie.. nie zawsze zmywa podobne zanieczyszczenia, które inna maszyna Indesit może z łatwością zmyć.'
          },
          {
            id: 2,
            username: 'Jewgienij',
            text: 'Maszyna została kupiona jako zapas, do odzieży roboczej, dywaników i innych bzdur pranych osobno. Umiarkowanie głośny, nie spodziewałem się kolejnego. Ale są niuanse z programami, czasami nie jest to jasne, nie wyciska się i trzeba osobno ponownie włączyć wirowanie.. nie zawsze zmywa podobne zanieczyszczenia, które inna maszyna Indesit może z łatwością zmyć.'
          },
          {
            id: 3,
            username: 'Tatiana',
            text: 'Maszyna została kupiona jako zapas, do odzieży roboczej, dywaników i innych bzdur pranych osobno. Umiarkowanie głośny, nie spodziewałem się kolejnego. Ale są niuanse z programami, czasami nie jest to jasne, nie wyciska się i trzeba osobno ponownie włączyć wirowanie.. nie zawsze zmywa podobne zanieczyszczenia, które inna maszyna Indesit może z łatwością zmyć.'
          },
          {
            id: 4,
            username: 'Jewgienij',
            text: 'Maszyna została kupiona jako zapas, do odzieży roboczej, dywaników i innych bzdur pranych osobno. Umiarkowanie głośny, nie spodziewałem się kolejnego. Ale są niuanse z programami, czasami nie jest to jasne, nie wyciska się i trzeba osobno ponownie włączyć wirowanie.. nie zawsze zmywa podobne zanieczyszczenia, które inna maszyna Indesit może z łatwością zmyć.'
          },
          {
            id: 5,
            username: 'Tatiana',
            text: 'Maszyna została kupiona jako zapas, do odzieży roboczej, dywaników i innych bzdur pranych osobno. Umiarkowanie głośny, nie spodziewałem się kolejnego. Ale są niuanse z programami, czasami nie jest to jasne, nie wyciska się i trzeba osobno ponownie włączyć wirowanie.. nie zawsze zmywa podobne zanieczyszczenia, które inna maszyna Indesit może z łatwością zmyć.'
          },
          {
            id: 6,
            username: 'Jewgienij',
            text: 'Maszyna została kupiona jako zapas, do odzieży roboczej, dywaników i innych bzdur pranych osobno. Umiarkowanie głośny, nie spodziewałem się kolejnego. Ale są niuanse z programami, czasami nie jest to jasne, nie wyciska się i trzeba osobno ponownie włączyć wirowanie.. nie zawsze zmywa podobne zanieczyszczenia, które inna maszyna Indesit może z łatwością zmyć.'
          },
        ],
      },
      {
        id: 11,
        category: 3,
        title: 'Profil aluminiowy uniwersalny bezuszczelkowy3',
        image: require('@/assets/img/products/product-3.png'),
        categoryNum: 26,
        cod: '0723314791448',
        firstPrice: 95,
        price: 75,
        status: true,
        quantity: 1,
        mark: '',
        href: '#',
        aboutText: 'Profil plastykowy typu A harpun stosuje się do mocowania płótna sufitu napinanego do ściany oraierzchnie pionowe. Dzięki swojej elastyczności pozwala powtarzać zaokrąglenia bez docinania samego profilu. wymaga mocowania w krokachcm. Minimalna utrata wysokości sufitu 3,5 cm Szczelina powstająca pomiędzy ściaga mocowania w krokach co cm. Minimalna utrata wysokości sufitu 3,5 cm Szczelina powstająca pomiędzy ścianą a sufitem, zamyka się maskownicą PCV. Profil plastykowy typu A harpun stosuje się do mocowania płótna sufitu napinanego do ściany oraz inne powierzchnie pionowe. Dzięki swojej elastyczności pozwala powtarzać zaokrąglenia bez docinania samego profilu.cm. Profil plastykowy typu A harpun stosuje się do mocowania płótna sufitu napinanego do ściany oraierzchnie pionowe. Dzięki swojej elastyczności pozwala powtarzać zaokrąglenia bez docinania samego profilu. wymaga mocowania w krokachcm. Minimalna utrata wysokości sufitu 3,5 cm Szczelina powstająca pomiędzy ściaga mocowania w krokach co cm. Minimalna utrata wysokości sufitu 3,5 cm Szczelina powstająca pomiędzy ścianą a sufitem, zamyka się maskownicą PCV. Profil plastykowy typu A harpun stosuje się do mocowania płótna sufitu napinanego do ściany oraz inne powierzchnie pionowe. Dzięki swojej elastyczności pozwala powtarzać zaokrąglenia bez docinania samego profilu.cm.',
        images: [
          {
            id: 1,
            image: require('@/assets/img/products/product-3.png'),
          },
          {
            id: 2,
            image: require('@/assets/img/product/product-img-2.png')
          },
          {
            id: 3,
            image: require('@/assets/img/product/product-img-3.png')
          },
          {
            id: 4,
            image: require('@/assets/img/product/product-img-4.png')
          },
          
          {
            id: 5,
            image: require('@/assets/img/product/product-img-2.png')
          },
        ],
        description: [
          {
            id: 1,
            th: "Waga:",
            td: "160 g/m.b."
          },
          {
            id: 2,
            th: "Możliwość włożenia uszczelki:",
            td: "Tak"
          },
          {
            id: 3,
            th: "Materiał:",
            td: "Biały"
          },
          {
            id: 4,
            th: "Długość:",
            td: "PCV"
          },
          {
            id: 5,
            th: "Waga:",
            td: "2,0 m"
          },
          {
            id: 6,
            th: "Waga:",
            td: "160 g/m.b."
          },
          {
            id: 7,
            th: "Waga:",
            td: "160 g/m.b."
          },
        ],
        reviews: [
          {
            id: 1,
            username: 'Tatiana',
            text: 'Maszyna została kupiona jako zapas, do odzieży roboczej, dywaników i innych bzdur pranych osobno. Umiarkowanie głośny, nie spodziewałem się kolejnego. Ale są niuanse z programami, czasami nie jest to jasne, nie wyciska się i trzeba osobno ponownie włączyć wirowanie.. nie zawsze zmywa podobne zanieczyszczenia, które inna maszyna Indesit może z łatwością zmyć.'
          },
          {
            id: 2,
            username: 'Jewgienij',
            text: 'Maszyna została kupiona jako zapas, do odzieży roboczej, dywaników i innych bzdur pranych osobno. Umiarkowanie głośny, nie spodziewałem się kolejnego. Ale są niuanse z programami, czasami nie jest to jasne, nie wyciska się i trzeba osobno ponownie włączyć wirowanie.. nie zawsze zmywa podobne zanieczyszczenia, które inna maszyna Indesit może z łatwością zmyć.'
          },
          {
            id: 3,
            username: 'Tatiana',
            text: 'Maszyna została kupiona jako zapas, do odzieży roboczej, dywaników i innych bzdur pranych osobno. Umiarkowanie głośny, nie spodziewałem się kolejnego. Ale są niuanse z programami, czasami nie jest to jasne, nie wyciska się i trzeba osobno ponownie włączyć wirowanie.. nie zawsze zmywa podobne zanieczyszczenia, które inna maszyna Indesit może z łatwością zmyć.'
          },
          {
            id: 4,
            username: 'Jewgienij',
            text: 'Maszyna została kupiona jako zapas, do odzieży roboczej, dywaników i innych bzdur pranych osobno. Umiarkowanie głośny, nie spodziewałem się kolejnego. Ale są niuanse z programami, czasami nie jest to jasne, nie wyciska się i trzeba osobno ponownie włączyć wirowanie.. nie zawsze zmywa podobne zanieczyszczenia, które inna maszyna Indesit może z łatwością zmyć.'
          },
          {
            id: 5,
            username: 'Tatiana',
            text: 'Maszyna została kupiona jako zapas, do odzieży roboczej, dywaników i innych bzdur pranych osobno. Umiarkowanie głośny, nie spodziewałem się kolejnego. Ale są niuanse z programami, czasami nie jest to jasne, nie wyciska się i trzeba osobno ponownie włączyć wirowanie.. nie zawsze zmywa podobne zanieczyszczenia, które inna maszyna Indesit może z łatwością zmyć.'
          },
          {
            id: 6,
            username: 'Jewgienij',
            text: 'Maszyna została kupiona jako zapas, do odzieży roboczej, dywaników i innych bzdur pranych osobno. Umiarkowanie głośny, nie spodziewałem się kolejnego. Ale są niuanse z programami, czasami nie jest to jasne, nie wyciska się i trzeba osobno ponownie włączyć wirowanie.. nie zawsze zmywa podobne zanieczyszczenia, które inna maszyna Indesit może z łatwością zmyć.'
          },
        ],
      },
      {
        id: 12,
        category: 3,
        title: 'Profil aluminiowy uniwersalny bezuszczelkowy3',
        image: require('@/assets/img/products/product-4.png'),
        categoryNum: 26,
        cod: '0723314791448',
        firstPrice: 95,
        price: 75,
        status: true,
        quantity: 1,
        mark: 'Najlepiej sprzedający się',
        href: '#',
        aboutText: 'Profil plastykowy typu A harpun stosuje się do mocowania płótna sufitu napinanego do ściany oraierzchnie pionowe. Dzięki swojej elastyczności pozwala powtarzać zaokrąglenia bez docinania samego profilu. wymaga mocowania w krokachcm. Minimalna utrata wysokości sufitu 3,5 cm Szczelina powstająca pomiędzy ściaga mocowania w krokach co cm. Minimalna utrata wysokości sufitu 3,5 cm Szczelina powstająca pomiędzy ścianą a sufitem, zamyka się maskownicą PCV. Profil plastykowy typu A harpun stosuje się do mocowania płótna sufitu napinanego do ściany oraz inne powierzchnie pionowe. Dzięki swojej elastyczności pozwala powtarzać zaokrąglenia bez docinania samego profilu.cm. Profil plastykowy typu A harpun stosuje się do mocowania płótna sufitu napinanego do ściany oraierzchnie pionowe. Dzięki swojej elastyczności pozwala powtarzać zaokrąglenia bez docinania samego profilu. wymaga mocowania w krokachcm. Minimalna utrata wysokości sufitu 3,5 cm Szczelina powstająca pomiędzy ściaga mocowania w krokach co cm. Minimalna utrata wysokości sufitu 3,5 cm Szczelina powstająca pomiędzy ścianą a sufitem, zamyka się maskownicą PCV. Profil plastykowy typu A harpun stosuje się do mocowania płótna sufitu napinanego do ściany oraz inne powierzchnie pionowe. Dzięki swojej elastyczności pozwala powtarzać zaokrąglenia bez docinania samego profilu.cm.',
        images: [
          {
            id: 1,
            image: require('@/assets/img/products/product-4.png'),
          },
          {
            id: 2,
            image: require('@/assets/img/product/product-img-2.png')
          },
          {
            id: 3,
            image: require('@/assets/img/product/product-img-3.png')
          },
          {
            id: 4,
            image: require('@/assets/img/product/product-img-4.png')
          },
          
          {
            id: 5,
            image: require('@/assets/img/product/product-img-2.png')
          },
        ],
        description: [
          {
            id: 1,
            th: "Waga:",
            td: "160 g/m.b."
          },
          {
            id: 2,
            th: "Możliwość włożenia uszczelki:",
            td: "Tak"
          },
          {
            id: 3,
            th: "Materiał:",
            td: "Biały"
          },
          {
            id: 4,
            th: "Długość:",
            td: "PCV"
          },
          {
            id: 5,
            th: "Waga:",
            td: "2,0 m"
          },
          {
            id: 6,
            th: "Waga:",
            td: "160 g/m.b."
          },
          {
            id: 7,
            th: "Waga:",
            td: "160 g/m.b."
          },
        ],
        reviews: [
          {
            id: 1,
            username: 'Tatiana',
            text: 'Maszyna została kupiona jako zapas, do odzieży roboczej, dywaników i innych bzdur pranych osobno. Umiarkowanie głośny, nie spodziewałem się kolejnego. Ale są niuanse z programami, czasami nie jest to jasne, nie wyciska się i trzeba osobno ponownie włączyć wirowanie.. nie zawsze zmywa podobne zanieczyszczenia, które inna maszyna Indesit może z łatwością zmyć.'
          },
          {
            id: 2,
            username: 'Jewgienij',
            text: 'Maszyna została kupiona jako zapas, do odzieży roboczej, dywaników i innych bzdur pranych osobno. Umiarkowanie głośny, nie spodziewałem się kolejnego. Ale są niuanse z programami, czasami nie jest to jasne, nie wyciska się i trzeba osobno ponownie włączyć wirowanie.. nie zawsze zmywa podobne zanieczyszczenia, które inna maszyna Indesit może z łatwością zmyć.'
          },
          {
            id: 3,
            username: 'Tatiana',
            text: 'Maszyna została kupiona jako zapas, do odzieży roboczej, dywaników i innych bzdur pranych osobno. Umiarkowanie głośny, nie spodziewałem się kolejnego. Ale są niuanse z programami, czasami nie jest to jasne, nie wyciska się i trzeba osobno ponownie włączyć wirowanie.. nie zawsze zmywa podobne zanieczyszczenia, które inna maszyna Indesit może z łatwością zmyć.'
          },
          {
            id: 4,
            username: 'Jewgienij',
            text: 'Maszyna została kupiona jako zapas, do odzieży roboczej, dywaników i innych bzdur pranych osobno. Umiarkowanie głośny, nie spodziewałem się kolejnego. Ale są niuanse z programami, czasami nie jest to jasne, nie wyciska się i trzeba osobno ponownie włączyć wirowanie.. nie zawsze zmywa podobne zanieczyszczenia, które inna maszyna Indesit może z łatwością zmyć.'
          },
          {
            id: 5,
            username: 'Tatiana',
            text: 'Maszyna została kupiona jako zapas, do odzieży roboczej, dywaników i innych bzdur pranych osobno. Umiarkowanie głośny, nie spodziewałem się kolejnego. Ale są niuanse z programami, czasami nie jest to jasne, nie wyciska się i trzeba osobno ponownie włączyć wirowanie.. nie zawsze zmywa podobne zanieczyszczenia, które inna maszyna Indesit może z łatwością zmyć.'
          },
          {
            id: 6,
            username: 'Jewgienij',
            text: 'Maszyna została kupiona jako zapas, do odzieży roboczej, dywaników i innych bzdur pranych osobno. Umiarkowanie głośny, nie spodziewałem się kolejnego. Ale są niuanse z programami, czasami nie jest to jasne, nie wyciska się i trzeba osobno ponownie włączyć wirowanie.. nie zawsze zmywa podobne zanieczyszczenia, które inna maszyna Indesit może z łatwością zmyć.'
          },
        ],
      },
    ],
    categoryList :[
      {
        id: 1,
        label: 'Akcesoria do sufitów napinanych',
        image: require('@/assets/img/main/slider/subslide-bg.png'),
        asideSubItems: [
          {
            id: 1,
            title: 'Profile',
            href: '#'
          },
          {
            id: 2,
            title: 'Listwa wykończeniowa',
            href: '#'
          },
          {
            id: 3,
            title: 'Platformy',
            href: '#'
          },
          {
            id: 4,
            title: 'Termo pierścienie',
            href: '#'
          },
          {
            id: 5,
            title: 'Termo kwadraty',
            href: '#'
          },
          {
            id: 6,
            title: 'Świecące szpilki',
            href: '#'
          },
          {
            id: 7,
            title: 'Katalogi',
            href: '#'
          },
          {
            id: 8,
            title: 'Pozostałe',
            href: '#'
          }
        ]
      },
      {
        id: 2,
        label: 'Folia do sufitów napinanych',
        image: require('@/assets/img/main/slider/subslide-bg.png'),
        asideSubItems: [
          {
            id: 1,
            title: 'Termo kwadraty',
            href: '#'
          },
          {
            id: 2,
            title: 'Listwa wykończeniowa',
            href: '#'
          },
          {
            id: 3,
            title: 'Platformy',
            href: '#'
          },
          {
            id: 4,
            title: 'Termo pierścienie',
            href: '#'
          },
          {
            id: 5,
            title: 'Profile',
            href: '#'
          },
          {
            id: 6,
            title: 'Katalogi',
            href: '#'
          },
          {
            id: 7,
            title: 'Pozostałe',
            href: '#'
          },
          {
            id: 8,
            title: 'Świecące szpilki',
            href: '#'
          }
        ]
      },
      {
        id: 3,
        label: 'Oprawy sufitowe',
        image: require('@/assets/img/main/slider/subslide-bg.png'),
        asideSubItems: [
          {
            id: 1,
            title: 'Profile',
            href: '#'
          },
          {
            id: 2,
            title: 'Listwa wykończeniowa',
            href: '#'
          },
          {
            id: 3,
            title: 'Platformy',
            href: '#'
          },
          {
            id: 4,
            title: 'Termo pierścienie',
            href: '#'
          },
          {
            id: 5,
            title: 'Termo kwadraty',
            href: '#'
          },
          {
            id: 6,
            title: 'Świecące szpilki',
            href: '#'
          },
          {
            id: 7,
            title: 'Katalogi',
            href: '#'
          },
          {
            id: 8,
            title: 'Pozostałe',
            href: '#'
          }
        ]
      },
      {
        id: 4,
        label: 'LED akcesoria',
        image: require('@/assets/img/main/slider/subslide-bg.png'),
        asideSubItems: [
          {
            id: 1,
            title: 'Profile',
            href: '#'
          },
          {
            id: 2,
            title: 'Listwa wykończeniowa',
            href: '#'
          },
          {
            id: 3,
            title: 'Platformy',
            href: '#'
          },
          {
            id: 4,
            title: 'Termo pierścienie',
            href: '#'
          },
          {
            id: 5,
            title: 'Termo kwadraty',
            href: '#'
          },
          {
            id: 6,
            title: 'Świecące szpilki',
            href: '#'
          },
          {
            id: 7,
            title: 'Katalogi',
            href: '#'
          },
          {
            id: 8,
            title: 'Pozostałe',
            href: '#'
          }
        ]
      },
      {
        id: 5,
        label: 'Elektryka i akcesoria',
        image: require('@/assets/img/main/slider/subslide-bg.png'),
        asideSubItems: [
          {
            id: 1,
            title: 'Termo kwadraty',
            href: '#'
          },
          {
            id: 2,
            title: 'Listwa wykończeniowa',
            href: '#'
          },
          {
            id: 3,
            title: 'Platformy',
            href: '#'
          },
          {
            id: 4,
            title: 'Termo pierścienie',
            href: '#'
          },
          {
            id: 5,
            title: 'Profile',
            href: '#'
          },
          {
            id: 6,
            title: 'Katalogi',
            href: '#'
          },
          {
            id: 7,
            title: 'Pozostałe',
            href: '#'
          },
          {
            id: 8,
            title: 'Świecące szpilki',
            href: '#'
          }
        ]
      }
    ],
    cartList: [],
    quickBuy: [],
    recentList: [],
  },
  getters: {
    productList (state) {
      return state.productList
    },
    categoryList (state){
      return state.categoryList
    },
    cartList (state) {
      return state.cartList
    },
    recentList (state) {
      return state.recentList
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
