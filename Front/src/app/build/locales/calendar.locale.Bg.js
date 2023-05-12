/*!
 *
 * Bryntum Calendar 5.3.5 (TRIAL VERSION)
 *
 * Copyright(c) 2023 Bryntum AB
 * https://bryntum.com/contact
 * https://bryntum.com/license
 *
 */
(function(s,l){var n=typeof exports=="object";if(typeof define=="function"&&define.amd)define([],l);else if(typeof module=="object"&&module.exports)module.exports=l();else{var d=l(),m=n?exports:s;for(var p in d)m[p]=d[p]}})(typeof self<"u"?self:void 0,()=>{var s={},l={exports:s},n=Object.defineProperty,d=Object.getOwnPropertyDescriptor,m=Object.getOwnPropertyNames,p=Object.prototype.hasOwnProperty,g=(e,t,a)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,y=(e,t)=>{for(var a in t)n(e,a,{get:t[a],enumerable:!0})},b=(e,t,a,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of m(t))!p.call(e,r)&&r!==a&&n(e,r,{get:()=>t[r],enumerable:!(o=d(t,r))||o.enumerable});return e},v=e=>b(n({},"__esModule",{value:!0}),e),h=(e,t,a)=>(g(e,typeof t!="symbol"?t+"":t,a),a),u={};y(u,{default:()=>C}),l.exports=v(u);var c=class{static mergeLocales(...e){let t={};return e.forEach(a=>{Object.keys(a).forEach(o=>{typeof a[o]=="object"?t[o]={...t[o],...a[o]}:t[o]=a[o]})}),t}static trimLocale(e,t){let a=(o,r)=>{e[o]&&(r?e[o][r]&&delete e[o][r]:delete e[o])};Object.keys(t).forEach(o=>{Object.keys(t[o]).length>0?Object.keys(t[o]).forEach(r=>a(o,r)):a(o)})}static normalizeLocale(e,t){if(!e)throw new Error('"nameOrConfig" parameter can not be empty');if(typeof e=="string"){if(!t)throw new Error('"config" parameter can not be empty');t.locale?t.name=e||t.name:t.localeName=e}else t=e;let a={};if(t.name||t.locale)a=Object.assign({localeName:t.name},t.locale),t.desc&&(a.localeDesc=t.desc),t.code&&(a.localeCode=t.code),t.path&&(a.localePath=t.path);else{if(!t.localeName)throw new Error(`"config" parameter doesn't have "localeName" property`);a=Object.assign({},t)}for(let o of["name","desc","code","path"])a[o]&&delete a[o];if(!a.localeName)throw new Error("Locale name can not be empty");return a}static get locales(){return globalThis.bryntum.locales||{}}static set locales(e){globalThis.bryntum.locales=e}static get localeName(){return globalThis.bryntum.locale||"En"}static set localeName(e){globalThis.bryntum.locale=e||c.localeName}static get locale(){return c.localeName&&this.locales[c.localeName]||this.locales.En||Object.values(this.locales)[0]||{localeName:"",localeDesc:"",localeCoode:""}}static publishLocale(e,t){let{locales:a}=globalThis.bryntum,o=c.normalizeLocale(e,t),{localeName:r}=o;return!a[r]||t===!0?a[r]=o:a[r]=this.mergeLocales(a[r]||{},o||{}),a[r]}},i=c;h(i,"skipLocaleIntegrityCheck",!1),globalThis.bryntum=globalThis.bryntum||{},globalThis.bryntum.locales=globalThis.bryntum.locales||{},i._$name="LocaleHelper";var f={localeName:"Bg",localeDesc:"Български",localeCode:"bg",Object:{Yes:"Да",No:"Не",Cancel:"Отказ",Ok:"ОК",Week:"Седмица"},Combo:{noResults:"Няма резултати",recordNotCommitted:"Записът не може да бъде добавен",addNewValue:e=>`Добавете ${e}`},FilePicker:{file:"Файл"},Field:{badInput:"Невалидна стойност на полето",patternMismatch:"Стойността трябва да съответства на определен шаблон",rangeOverflow:e=>`Стойността трябва да е по-малка или равна на ${e.max}`,rangeUnderflow:e=>`Стойността трябва да е по-голяма или равна на ${e.min}`,stepMismatch:"Стойността трябва да съответства на стъпката",tooLong:"Стойността трябва да е по-къса",tooShort:"Стойността трябва да е по-дълга",typeMismatch:"Стойността трябва да бъде в специален формат",valueMissing:"Това поле е задължително",invalidValue:"Невалидна стойност на полето",minimumValueViolation:"Нарушение на минималната стойност",maximumValueViolation:"Нарушение на максималната стойност",fieldRequired:"Това поле е задължително",validateFilter:"Стойността трябва да бъде избрана от списъка"},DateField:{invalidDate:"Невалидно въвеждане на дата"},DatePicker:{gotoPrevYear:"Преминаване към предишната година",gotoPrevMonth:"Преминаване към предишния месец",gotoNextMonth:"Преминаване към следващия месец",gotoNextYear:"Преминаване към следващата година"},NumberFormat:{locale:"bg",currency:"BGN"},DurationField:{invalidUnit:"Невалидна единица"},TimeField:{invalidTime:"Невалидно въведено време"},TimePicker:{hour:"Час",minute:"Минута",second:"Секунда"},List:{loading:"Зареждане..."},GridBase:{loadMask:"Зареждане...",syncMask:"Запазване на промените, моля, изчакайте..."},PagingToolbar:{firstPage:"Преминаване на първа страница",prevPage:"Преминаване на предишната страница",page:"Стр.",nextPage:"Преминаване на следващата страница",lastPage:"Преминаване на последната страница",reload:"Презареждане на текущата страница",noRecords:"Няма записи за показване",pageCountTemplate:e=>`от ${e.lastPage}`,summaryTemplate:e=>`Показване на записи ${e.start} - ${e.end} от ${e.allCount}`},PanelCollapser:{Collapse:"Свиване",Expand:"Разгръщане"},Popup:{close:"Затваряне на изскачащ прозорец"},UndoRedo:{Undo:"Отмяна",Redo:"Повтаряне",UndoLastAction:"Отмяна на последното действие",RedoLastAction:"Повторно извършване на последното отменено действие",NoActions:"Няма елементи в опашката за отмяна"},FieldFilterPicker:{equals:"е равно на",doesNotEqual:"не е равно на",isEmpty:"е празно",isNotEmpty:"не е празно",contains:"съдържа",doesNotContain:"не съдържа",startsWith:"започва с",endsWith:"свършва с",isOneOf:"е част от",isNotOneOf:"не е част от",isGreaterThan:"е по-голямо от",isLessThan:"е по-малко от",isGreaterThanOrEqualTo:"е по-голямо от или равно на",isLessThanOrEqualTo:"е по-малко от или равно на",isBetween:"е между",isNotBetween:"не е между",isBefore:"е преди",isAfter:"е след",isToday:"е днес",isTomorrow:"е утре",isYesterday:"е вчера",isThisWeek:"е тази седмица",isNextWeek:"е следващата седмица",isLastWeek:"е миналата седмица",isThisMonth:"е този месец",isNextMonth:"е следващият месец",isLastMonth:"е миналият месец",isThisYear:"е тази година",isNextYear:"е следващата година",isLastYear:"е миналата година",isYearToDate:"е от началото на годината до днес",isTrue:"е вярно",isFalse:"е грешно",selectAProperty:"Избор на свойство",selectAnOperator:"Избор на оператор",caseSensitive:"Чувствителност към малки и големи букви",and:"и",dateFormat:"D/M/YY",selectOneOrMoreValues:"Избор на една или повече стойности",enterAValue:"Въвеждане на стойност",enterANumber:"Въвеждане на число",selectADate:"Избор на дата"},FieldFilterPickerGroup:{addFilter:"Добавяне на филтър"},DateHelper:{locale:"bg",weekStartDay:1,nonWorkingDays:{0:!0,6:!0},weekends:{0:!0,6:!0},unitNames:[{single:"милисекунда",plural:"милисекунди",abbrev:"мсек"},{single:"секунда",plural:"секунди",abbrev:"сек"},{single:"минута",plural:"минути",abbrev:"мин"},{single:"час",plural:"часа",abbrev:"ч"},{single:"ден",plural:"дни",abbrev:"д"},{single:"седмица",plural:"седмици",abbrev:"сед"},{single:"месец",plural:"месеци",abbrev:"мес"},{single:"тримесечие",plural:"тримесечия",abbrev:"трим"},{single:"година",plural:"години",abbrev:"год"},{single:"десетилетие",plural:"десетилетия",abbrev:"десетил"}],unitAbbreviations:[["милисек"],["с","сек"],["м","мин"],["ч","часа"],["д"],["с","сед"],["ме","мес","мсц"],["тр","трим","тримес"],["г","год"],["дес"]],parsers:{L:"DD.MM.YYYY",LT:"HH:mm",LTS:"HH:mm:ss A"},ordinalSuffix:e=>{let t=e[e.length-1],a={1:"-во",2:"-ро",3:"-то"}[t]||"-ти";return e+a}}},x=i.publishLocale(f),E=new String,T={localeName:"Bg",localeDesc:"Български",localeCode:"bg",ColumnPicker:{column:"Колона",columnsMenu:"Колони",hideColumn:"Скриване на колона",hideColumnShort:"Скриване",newColumns:"Нова колона"},Filter:{applyFilter:"Прилагане на филтър",filter:"Филтри",editFilter:"Редактиране на филтър",on:"Вкл.",before:"Преди",after:"След",equals:"Равно",lessThan:"По-малко от",moreThan:"Повече от",removeFilter:"Премахване на филтър",disableFilter:"Деактивиране на филтъра"},FilterBar:{enableFilterBar:"Показване на лентата с филтри",disableFilterBar:"Скриване на лентата с филтри"},Group:{group:"Група",groupAscending:"Възходяща група",groupDescending:"Низходящ група",groupAscendingShort:"Възходящ",groupDescendingShort:"Низходящ",stopGrouping:"Стоп на групиране",stopGroupingShort:"Стоп"},HeaderMenu:{moveBefore:e=>`Преместване преди "${e}"`,moveAfter:e=>`Преместване след "${e}"`,collapseColumn:"Свиване на колона",expandColumn:"Разширяване на колона"},ColumnRename:{rename:"Преименуване"},MergeCells:{mergeCells:"Сливане на клетки",menuTooltip:"Сливане на клетки с една и съща стойност при сортиране по тази колона"},Search:{searchForValue:"Търсене на стойност"},Sort:{sort:"Сортиране",sortAscending:"Сортиране във възходящ ред",sortDescending:"Сортиране в низходящ ред",multiSort:"Мулти сортиране",removeSorter:"Премахване на сортировач",addSortAscending:"Добавяне на възходящ сортировач",addSortDescending:"Добавяне на низходящ сортировач",toggleSortAscending:"Промяна към възходящ",toggleSortDescending:"Промяна към низходящ",sortAscendingShort:"Възходящ",sortDescendingShort:"Низходящ",removeSorterShort:"Отстраняване",addSortAscendingShort:"+ Възходящ",addSortDescendingShort:"+ Низходящ"},Column:{columnLabel:e=>`${e.text?`${e.text} колона. `:""}SPACE за контекстно меню${e.sortable?", ENTER за сортиране":""}`,cellLabel:E},Checkbox:{toggleRowSelect:"Превключване на избора на ред",toggleSelection:"Превключване на избора на целия набор от данни"},RatingColumn:{cellLabel:e=>{var t;return`${e.text?e.text:""} ${(t=e.location)!=null&&t.record?`рейтинг : ${e.location.record[e.field]||0}`:""}`}},GridBase:{loadFailedMessage:"Неуспешно зареждане на данни!",syncFailedMessage:"Неуспешна синхронизация за данни!",unspecifiedFailure:"Неуточнена неизправност",networkFailure:"Грешка в мрежата",parseFailure:"Неуспешен анализ на отговора на сървъра",serverResponse:"Отговор на сървъра:",noRows:"Няма записи за показване",moveColumnLeft:"Преместване в лявата част",moveColumnRight:"Преместване в дясната част",moveColumnTo:e=>`Преместване на колоната в ${e}`},CellMenu:{removeRow:"Изтриване"},RowCopyPaste:{copyRecord:"Копирай",cutRecord:"Изрежи",pasteRecord:"Постави",rows:"редове",row:"ред"},CellCopyPaste:{copy:"Копиране",cut:"Изрязване",paste:"Вмъкване"},PdfExport:{"Waiting for response from server":"В очакване на отговор от сървъра...","Export failed":"Неуспешен експорт","Server error":"Грешка в сървъра","Generating pages":"Генериране на страници...","Click to abort":"Отказ"},ExportDialog:{width:"40em",labelWidth:"12em",exportSettings:"Настройки на експорта",export:"Експорт",exporterType:"Контрол на странирането",cancel:"Отказ",fileFormat:"Файлов формат",rows:"Редове",alignRows:"Подравняване на редовете",columns:"Колони",paperFormat:"Формат на документа",orientation:"Ориентация",repeatHeader:"Повтаряне на заглавката"},ExportRowsCombo:{all:"Всички редове",visible:"Видими редове"},ExportOrientationCombo:{portrait:"Портрет",landscape:"Пейзаж"},SinglePageExporter:{singlepage:"Единична страница"},MultiPageExporter:{multipage:"Няколко страници",exportingPage:({currentPage:e,totalPages:t})=>`Експортиране на страница ${e}/${t}`},MultiPageVerticalExporter:{multipagevertical:"Няколко страници (вертикално)",exportingPage:({currentPage:e,totalPages:t})=>`Експортиране на страница ${e}/${t}`},RowExpander:{loading:"Зареждане",expand:"Разгръщане",collapse:"Свиване"}},F=i.publishLocale(T),D={localeName:"Bg",localeDesc:"Български",localeCode:"bg",Object:{newEvent:"Ново събитие"},ResourceInfoColumn:{eventCountText:e=>e+" събити"+(e!==1?"я":"е")},Dependencies:{from:"От",to:"До",valid:"Валидно",invalid:"Невалидно"},DependencyType:{SS:"НН",SF:"НК",FS:"КН",FF:"КК",StartToStart:"От начало до начало",StartToEnd:"От начало до край",EndToStart:"От край до начало",EndToEnd:"От край до край",short:["НН","НК","КН","КК"],long:["От начало до начало","От начало до край","От край до начало","От край до край"]},DependencyEdit:{From:"От",To:"До",Type:"Тип",Lag:"Забавяне","Edit dependency":"Редактиране на зависимостта",Save:"Запис",Delete:"Изтриване",Cancel:"Отказ",StartToStart:"От начало до начало",StartToEnd:"От начало до край",EndToStart:"От край до начало",EndToEnd:"От край до край"},EventEdit:{Name:"Име",Resource:"Ресурс",Start:"Начало",End:"Край",Save:"Запис",Delete:"Изтриване",Cancel:"Отказ","Edit event":"Редактиране на събитие",Repeat:"Повторение"},EventDrag:{eventOverlapsExisting:"Събитието се припокрива със съществуващо събитие за този ресурс",noDropOutsideTimeline:"Събитието не може да бъде изхвърлено изцяло извън времевата линия"},SchedulerBase:{"Add event":"Добавяне на събитие","Delete event":"Изтриване на събитие","Unassign event":"Отмяна на събитието"},TimeAxisHeaderMenu:{pickZoomLevel:"Мащабиране",activeDateRange:"Диапазон на датите",startText:"Начална дата",endText:"Крайна дата",todayText:"Днес"},EventCopyPaste:{copyEvent:"Събитие за копиране",cutEvent:"Прекъсване на събитието",pasteEvent:"Събитие за вмъкване"},EventFilter:{filterEvents:"Задачи за филтриране",byName:"По име"},TimeRanges:{showCurrentTimeLine:"Показване на текуша хронология"},PresetManager:{secondAndMinute:{displayDateFormat:"ll LTS",name:"Секунди"},minuteAndHour:{topDateFormat:"ddd DD.MM, H",displayDateFormat:"ll LST"},hourAndDay:{topDateFormat:"ddd DD.MM",middleDateFormat:"LST",displayDateFormat:"ll LST",name:"Ден"},day:{name:"Ден/часа"},week:{name:"Седмица/часа"},dayAndWeek:{displayDateFormat:"ll LST",name:"Седмица/дни"},dayAndMonth:{name:"Месец"},weekAndDay:{displayDateFormat:"ll LST",name:"Седмица"},weekAndMonth:{name:"Седмици"},weekAndDayLetter:{name:"Седмици/делници"},weekDateAndMonth:{name:"Месеци/седмици"},monthAndYear:{name:"Месеци"},year:{name:"Години"},manyYears:{name:"Много години"}},RecurrenceConfirmationPopup:{"delete-title":"Вие изтривате събитие","delete-all-message":"Искате ли да изтриете всички повторения на това събитие?","delete-further-message":"Искате ли да изтриете това и всички бъдещи повторения на това събитие, или само избраното повторение?","delete-further-btn-text":"Изтриване на всички бъдещи събития","delete-only-this-btn-text":"Изтриване само на това събитие","update-title":"Променяте повтарящо се събитие","update-all-message":"Искате ли промяна на всички повторения на това събитие?","update-further-message":"Искате ли да промените само това повторение на събитието или тази и всички бъдещи повторения?","update-further-btn-text":"Всички бъдещи събития","update-only-this-btn-text":"Само това събитие",Yes:"Да",Cancel:"Отказ",width:600},RecurrenceLegend:{" and ":" и ",Daily:"Ежедневно","Weekly on {1}":({days:e})=>`Ежеседмично на ${e}`,"Monthly on {1}":({days:e})=>`Ежемесечно на ${e}`,"Yearly on {1} of {2}":({days:e,months:t})=>`Ежегодно на ${e} на ${t}`,"Every {0} days":({interval:e})=>`На всеки ${e} дни`,"Every {0} weeks on {1}":({interval:e,days:t})=>`На всеки ${e} седмици на ${t}`,"Every {0} months on {1}":({interval:e,days:t})=>`На всеки ${e} месеца на ${t}`,"Every {0} years on {1} of {2}":({interval:e,days:t,months:a})=>`На всеки ${e} години на ${t} от ${a}`,position1:"първия",position2:"втория",position3:"третия",position4:"четвъртия",position5:"петия","position-1":"последния",day:"дни",weekday:"ден от седмицата","weekend day":"ден от уикенда",daysFormat:({position:e,days:t})=>`${e} ${t}`},RecurrenceEditor:{"Repeat event":"Повтаряне на събития",Cancel:"Отказ",Save:"Запис",Frequency:"Честота",Every:"Всеки",DAILYintervalUnit:"ден(дни)",WEEKLYintervalUnit:"седмица(и)",MONTHLYintervalUnit:"месец(и)",YEARLYintervalUnit:"година(и)",Each:"Всеки","On the":"На","End repeat":"Край на повторението","time(s)":"път(и)"},RecurrenceDaysCombo:{day:"ден",weekday:"ден от седмицата","weekend day":"ден от уикенда"},RecurrencePositionsCombo:{position1:"първи",position2:"втори",position3:"трети",position4:"четвърти",position5:"пети","position-1":"последния"},RecurrenceStopConditionCombo:{Never:"Никога",After:"След","On date":"На дата"},RecurrenceFrequencyCombo:{None:"Без повторение",Daily:"Ежедневно",Weekly:"Ежеседмично",Monthly:"Ежемесечно",Yearly:"Ежегодно"},RecurrenceCombo:{None:"Няма",Custom:"Потребителски..."},Summary:{"Summary for":e=>`Резюме за ${e}`},ScheduleRangeCombo:{completeview:"Пълен график",currentview:"Видим график",daterange:"Диапазон на датите",completedata:"Пълен график (за всички събития)"},SchedulerExportDialog:{"Schedule range":"Диапазон на графика","Export from":"От","Export to":"До"},ExcelExporter:{"No resource assigned":"Няма назначен ресурс"},CrudManagerView:{serverResponseLabel:"Отговор на сървъра:"},DurationColumn:{Duration:"Продължителност"}},L=i.publishLocale(D),S={localeName:"Bg",localeDesc:"Български",localeCode:"bg",EventEdit:{Calendar:"Календар","All day":"Цял ден",day:"Ден",week:"Седмица",month:"Месец",year:"Година",decade:"Десетилетие"},EventMenu:{duplicateEvent:"Дублиране на събитие ",copy:"копиране"},Calendar:{Today:"Днес",next:e=>`Следващ ${e}`,previous:e=>`Предишен ${e}`,plusMore:e=>`още +${e}`,allDay:"Цял ден",endsOn:e=>`Свършва ${e}`,weekOfYear:([e,t])=>`Седмица ${t}, ${e}`,loadFail:"Неуспешно зареждане на данните от календара. Моля, свържете се със системния администратор"},CalendarDrag:{holdCtrlForRecurrence:"Задържане на CTRL за повтарящо се събитие"},CalendarMixin:{eventCount:e=>`${e||"Не"} събити${e&&e>1?"я":"е"}`},EventTip:{"Edit event":"Редактиране на събитие",timeFormat:"LST"},ModeSelector:{includeWeekends:"включване на уикенди",weekends:"Уикенди"},AgendaView:{Agenda:"Програма"},MonthView:{Month:"Месец",monthUnit:"месец"},WeekView:{weekUnit:"седмица"},YearView:{Year:"Година",yearUnit:"година"},EventList:{List:"Списък",Start:"Начало",Finish:"Край",days:e=>`${e>1?`${e} `:""}ден${e===1?"":"а"}`},DayView:{Day:"Ден",dayUnit:"ден",daysUnit:"дни",expandAllDayRow:"Разгръщане на секцията за целия ден",collapseAllDayRow:"Свиване на секцията за целия ден",timeFormat:"LST"},Sidebar:{"Filter events":"Филтриране на събития"},WeekExpander:{expandTip:"Щракнете, за да разширите реда",collapseTip:"Щракнете, за да свиете реда "}},C=i.publishLocale(S);if(typeof l.exports=="object"&&typeof s=="object"){var w=(e,t,a,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of Object.getOwnPropertyNames(t))!Object.prototype.hasOwnProperty.call(e,r)&&r!==a&&Object.defineProperty(e,r,{get:()=>t[r],enumerable:!(o=Object.getOwnPropertyDescriptor(t,r))||o.enumerable});return e};l.exports=w(l.exports,s)}return l.exports});
