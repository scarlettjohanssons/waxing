import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Image1 from '../../images/OurAdvices/1-min.jpeg';
import Image2 from '../../images/OurAdvices/2-min.jpeg';
import Image3 from '../../images/OurAdvices/3-min.jpeg';
import Image4 from '../../images/OurAdvices/4-min.jpeg';
import Image5 from '../../images/OurAdvices/5-min.jpeg';
import Image6 from '../../images/OurAdvices/6-min.jpeg';
import { HomeState } from './typedefs';

const initialState: HomeState = {
  advices: [
    {
      id: 1,
      text: 'text1',
      title: 'Як підготуватися до епіляції',
      body: 'Нерідко дівчата хвилюються перед процедурою епіляції, особливо, якщо вона має бути перший раз. Думки "Як же я ляжу?", "А раптом у мене там щось не так?", "А що вона про мене подумає?" не дають спокою. Повірте, майстра цікавлять тільки ваше волосся. Розслабтеся та відкиньте всі зайві думки. Я бачила все і багато разів. І все-таки, як ми готуємось до процедури?',
      list: [
        'Насамперед потрібно відростити волосся. Оптимальна довжина має бути 5-7мм. Якщо ви вже досвідчений боєць і робите процедуру не вперше, то досить 4мм. Якщо після гоління, то має пройти десь 2 тижні.',
        'За 2 дні до процедури потрібно поскрабитися, прийняти душ з мочалкою, щоб очистити шкіру від лусочок, що відмерли.',
        '2-3 дні утриматися від засмаги, дуже інтенсивного масажу та іншого, що може пошкодити шкіру.',
        'У день процедури прийміть душ просто теплою водою без мила, гелю та мочалки. Не користуйтеся цього дня кремами, маслами та антиперспірантами (залежно від того, яка зона епілюватиметься).',
        'Вдягніть або візьміть чисту білизну (в залежності від зони епіляції) з натуральної тканини. Не рекомендую синтетику, вузькі джинси, капронові колготки, якщо робите шугаринг ніжок.',
        'Візьміть із собою гарний настрій, розслабтеся, налаштуйтеся на позитив. Перед процедурою побалуйте себе чимось смачненьким, щоб були лише приємні враження. І наостанок! Перестаньте слухати тих, хто мав невдалий досвід.',
      ],
      image: Image1,
    },
    {
      id: 2,
      text: 'text2',
      title: 'Епіляція дітям, підліткам',
      body: `Давайте згадаємо, що таке шугаринг. Шугаринг - це найбільш лагідний вид епіляції (видаляє волосся з коренем). Виконується професійною цукровою пастою, прибираючи волосся ПО росту, що практично виключає травматизацію шкіри.
          Епіляцію дитині, підлітку можна робити тоді, коли виникає потреба. Наприклад, коли дитина відчуває дискомфорт при відвідуванні спортивної секції, бентежиться в басейні, влітку, коли оголюються ніжки та ручки, а ще гірше – дражнять однокласники. Неповнолітній дитині процедура робиться тільки з дозволом одного з батьків, а якщо потрібно, то й з ним. Якщо підліток самостійний, то можна вперше прийти з ним, а наступні рази можна дати можливість відчути себе комфортно, розслабитися та залишити одного.
          Не потрібно переживати про те, що, якщо у дитини вирвати волосся, то вони будуть рости густіше і більше. Це не правда. Якщо вашим волоскам судилося перерости в жорсткі – це станеться, щоб ви не робили. Якщо їх збривати, то в результаті швидко отримаєте щетину. Просто вибираючи щадний і безпечний метод видалення волосся - шугаринг, шкіра довше радуватиме своєю гладкістю, без будь-яких подразнень і висипань.`,
      image: Image2,
    },
    {
      id: 3,
      text: 'text3',
      title: 'Шугаринг вагітним',
      body: `Вагітність - це не хвороба і не має протипоказань до проведення епіляції і, тим більше, не привід перестати доглядати за собою. Якщо немає заборони на процедуру від лікаря, чому ні? Якщо ви робили до вагітності лазерну епіляцію, то шугаринг гідно замінить її. Всім відомо, що в період «цікавого» положення та в період лактації лазер та електроепіляція суворо заборонені.`,
      body2:
        'З дівчатами «в положенні» завжди намагаюся працювати ще акуратніше, дбайливо, якщо потрібно повільніше, враховуючи побажання та звертаю увагу на найіндивідуальніші нюанси.',
      body3:
        "АЛЕ! Варто утриматися від процедури у перший триместр. Це зв'язано тим, що у цей період формується серцево - судинна система плода. У цей час закріплюються всі процеси, і організм жінки несе велике навантаження. Тому, якщо не обов'язково – краще не робити.",
      body4:
        'Також хочу наголосити на тому, що епіляція вагітним категорично заборонена при токсикозі, просто поганому самопочутті, при хронічних захворюваннях.',
      image: Image3,
    },
    {
      id: 4,
      text: 'text4',
      title: 'Вросле волосся',
      body: `Ми дуже часто стикаємося з таким поняттям, як вросле волосся. Від них шкіра стає негарною і неприємною, ніби недоглянутою. На превеликий жаль і зона бікіні (лобок) – не виняток. Відразу руки так і сверблять поколупати і вийняти цю злощасну волосину, а якщо вона ще й запалена і там біла верхівка прища, то і видавити хочеться. Але наслідки можуть бути набагато гіршими, ніж здається. Це дуже дратує та засмучує. Є багато причин, які можуть спричинити такі неприємні наслідки. У кожного вона своя. Можливо, хтось знайде свою з тих, які я перерахую.`,
      list: [
        'гоління',
        'неправильний догляд за шкірою або просто його відсутність',
        'неякісно виконана процедура',
        'самостійне і постійне колупання або видавлювання місць з врослим волоссям',
        'дуже щільно прилеглий або одяг, що натирає',
        'епіляція проти росту волосся',
        'генетична схильність (наприклад, коли у дівчини кудряве волосся)',
      ],
      body2: `Але і з цією проблемою можна впоратися, якщо правильно визначити причину та почати з нею працювати. Після шугарингу або лікування врослого волосся я завжди намагаюся підібрати косметику для домашнього догляду, щоб «вирівняти» проблемні ділянки шкіри, приділити трохи уваги вдома та уникнути повторення неприємностей. Тоді дуже скоро шкіра знову вас буде балувати своєю красою та гладкістю.`,
      image: Image4,
    },
    {
      id: 5,
      text: 'text5',
      title: 'Після шугарингу',
      body: 'Свою шкіру потрібно любити і не забувати дбати про неї. Епіляція це круто, красиво, приємно і гладко. Живіть шкіру, зволожуйте її, очищайте і вона відповість вам своїм станом. А ще потрібно не забувати про догляд за нею після процедури епіляції, адже саме в той момент вона особливо в ньому потребує. Необхідно дотримуватися кількох нескладних правил після епіляції, щоб уникнути неприємних наслідків. А саме:',
      list: [
        'На протязі 12 годин не можна відвідувати солярій, сауну, басейн, засмагати на сонці, займатися спортом;',
        'Не приймайте гарячу ванну. Можна прийняти теплий душ, але без мила, гелю, мочалки;',
        `Протягом 12 годин не користуватися кремами, лосьйонами для тіла, антиперспірантами (залежно яку зону епілювали);`,
        'Через 2 дні можна скрабитися або користуватися ензимами. Краще це робити 2-3 рази на тиждень, а після цього не забувайте зволожувати шкіру;',
        'Зволожуйте шкіру щодня;',
        'Забудьте про бритву, епілятор, креми для депіляції. Після них волосся знову стане товстим і жорстким;',
        'При кожному наступному шугарингу або ваксингу волосся стає слабшим, тоншим і рідшим.',
      ],
      body2:
        'Більше, ніж 70% успіху в досягненні тієї заповітної, гладенької, красивої шкіри залежить саме від того, що ви з нею робите або НЕ робите вдома.',
      image: Image5,
    },
    {
      id: 6,
      text: 'text6',
      title: 'Протипоказання',
      body: 'Хочу ознайомити вас із кількома пунктами, які забороняють процедуру шугарингу. Це:',
      list: [
        'Алергія на цукор або мед. В іншому випадку на шкірі може висипати алергія',
        'Цукровий діабет',
        'Епілепсія',
        'Захворювання шкіри (герпес, псоріаз)',
        'Варикоз 3-4 ступеня. Якщо у вас легка капілярна сітка або чітка видимість вен, процедуру можна спокійно проводити',
        'Новоутворення на шкірі',
      ],
      image: Image6,
    },
  ],
  currentAdvice: null,
};

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setCurrentAdvice: (state, action: PayloadAction<any>) => {
      state.currentAdvice = state.advices.find(
        (item) => item.id === action.payload,
      );
    },
  },
});

export default homeSlice;
