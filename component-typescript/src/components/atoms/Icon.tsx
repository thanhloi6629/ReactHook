/** @jsx jsx */
import React from 'react';
import { css, jsx, SerializedStyles } from '@emotion/core';

import Add from 'components/atoms/Icon/Add';
import Analize from 'components/atoms/Icon/Analize';
import Arrow from 'components/atoms/Icon/Arrow';
import ArrowLeft from 'components/atoms/Icon/ArrowLeft';
import ArrowUp from 'components/atoms/Icon/ArrowUp';
import ArrowDown from 'components/atoms/Icon/ArrowDown';
import Auth from 'components/atoms/Icon/Auth';
import Avatar from 'components/atoms/Icon/Avatar';
import Calc from 'components/atoms/Icon/Calc';
import Calendar from 'components/atoms/Icon/Calendar';
import Date from 'components/atoms/Icon/Date';
import Chart from 'components/atoms/Icon/Chart';
import CheckboxAll from 'components/atoms/Icon/CheckboxAll';
import CheckboxOff from 'components/atoms/Icon/CheckboxOff';
import CheckboxOn from 'components/atoms/Icon/CheckboxOn';
import ChevronDown from 'components/atoms/Icon/ChevronDown';
import ChevronLeft from 'components/atoms/Icon/ChevronLeft';
import ChevronRight from 'components/atoms/Icon/ChevronRight';
import ChevronUp from 'components/atoms/Icon/ChevronUp';
import Clock from 'components/atoms/Icon/Clock';
import Close from 'components/atoms/Icon/Close';
import CloseCircle from 'components/atoms/Icon/CloseCircle';
import Company from 'components/atoms/Icon/Company';
import Dashboard from 'components/atoms/Icon/Dashboard';
import Delete from 'components/atoms/Icon/Delete';
import Download from 'components/atoms/Icon/Download';
import Dragdrop from 'components/atoms/Icon/Dragdrop';
import Dropdown from 'components/atoms/Icon/Dropdown';
import Edit from 'components/atoms/Icon/Edit';
import Employ from 'components/atoms/Icon/Employ';
import Filter from 'components/atoms/Icon/Filter';
import Hamburger from 'components/atoms/Icon/Hamburger';
import Help from 'components/atoms/Icon/Help';
import Home from 'components/atoms/Icon/Home';
import IndicatorFill from 'components/atoms/Icon/IndicatorFill';
import IndicatorWarning from 'components/atoms/Icon/IndicatorWarning';
import Kebab from 'components/atoms/Icon/Kebab';
import Lightbulb from 'components/atoms/Icon/Lightbulb';
import Meatball from 'components/atoms/Icon/Meatball';
import Money from 'components/atoms/Icon/Money';
import Notification from 'components/atoms/Icon/Notification';
import Organization from 'components/atoms/Icon/Organization';
import RadioOff from 'components/atoms/Icon/RadioOff';
import RadioOn from 'components/atoms/Icon/RadioOn';
import Ranking from 'components/atoms/Icon/Ranking';
import Rate from 'components/atoms/Icon/Rate';
import Remove from 'components/atoms/Icon/Remove';
import Report from 'components/atoms/Icon/Report';
import Rocket from 'components/atoms/Icon/Rocket';
import Search from 'components/atoms/Icon/Search';
import Settings from 'components/atoms/Icon/Settings';
import SingleCheck from 'components/atoms/Icon/SingleCheck';
import SinglecheckRounded from 'components/atoms/Icon/SinglecheckRounded';
import Sort from 'components/atoms/Icon/Sort';
import Telephone from 'components/atoms/Icon/Telephone';
import Upload from 'components/atoms/Icon/Upload';
import Warning from 'components/atoms/Icon/Warning';
import WorkScheudle from 'components/atoms/Icon/WorkScheudle';
import Switch from 'components/atoms/Icon/Switch';
import SwitchOff from 'components/atoms/Icon/SwitchOff';
import Copy from 'components/atoms/Icon/Copy';
import NineDots from 'components/atoms/Icon/NineDots';
import Module from 'components/atoms/Icon/Module';
import HrProgress from 'components/atoms/Icon/HrProgress';
import Org from 'components/atoms/Icon/Org';
import HrWorkflow from 'components/atoms/Icon/HrWorkflow';
import ReportDropdown from 'components/atoms/Icon/ReportDropdown';
import MyList from 'components/atoms/Icon/MyList';
import DashboardDropdown from 'components/atoms/Icon/DashboardDropdown';
import ManagementAdmin from 'components/atoms/Icon/ManagementAdmin';
import ManagementUser from 'components/atoms/Icon/ManagementUser';
import LogoDropdown from 'components/atoms/Icon/LogoDropdown';
import Question from 'components/atoms/Icon/Question';
import Nudge from 'components/atoms/Icon/Nudge';
import SelfReport from 'components/atoms/Icon/SelfReport';
import PositionManagement from 'components/atoms/Icon/PositionManagement';
import Plan from 'components/atoms/Icon/Plan';
import DiscoveryBoard from 'components/atoms/Icon/DiscoveryBoard';
import On1 from 'components/atoms/Icon/On1';
import Survey from 'components/atoms/Icon/Survey';
import Onboarding from 'components/atoms/Icon/Onboarding';
import SafetyConfirmation from 'components/atoms/Icon/SafetyConfirmation';
import YUI from 'components/atoms/Icon/YUI';
import MBOCloud from 'components/atoms/Icon/MBOCloud';
import Banto from 'components/atoms/Icon/Banto';
import CareerDesign from 'components/atoms/Icon/CareerDesign';
import Cubic from 'components/atoms/Icon/Cubic';
import Coffee from 'components/atoms/Icon/Coffee';
import UploadFile from './Icon/UploadFile';
import DoubleArrowRight from './Icon/DoubleArrowRight';
import DoubleArrowLeft from './Icon/DoubleArrowLeft';
import SortAsc from './Icon/SortAsc';
import SortDesc from './Icon/SortDesc';
import AddCircle from './Icon/AddCirlcle';
import WarningYellow from './Icon/WarningYellow';
import Clone from 'components/atoms/Icon/Clone';
import Printer from 'components/atoms/Icon/Printer';
import TimeRecorder from 'components/atoms/Icon/TimeRecorder';
import CheckInOffice from 'components/atoms/Icon/CheckInOffice';
import CheckInRemote from 'components/atoms/Icon/CheckInRemote';
import CheckOut from 'components/atoms/Icon/CheckOut';
import RegisterLocation from 'components/atoms/Icon/RegisterLocation';
import BreakStart from 'components/atoms/Icon/BreakStart';
import BreakEnd from 'components/atoms/Icon/BreakEnd';
import Capture from 'components/atoms/Icon/Capture';
import FalsePerson from 'components/atoms/Icon/FalsePerson';
import Error from 'components/atoms/Icon/Error';
import ICCard from 'components/atoms/Icon/ICCard';
import productColor from 'components/styles';
import Back from './Icon/Back';
import AddFace from './Icon/AddFace';
import Cancel from './Icon/Cancel';
import { grayScale } from 'components/styles';
import Reload from './Icon/Reload';

const icons = {
  add: Add,
  analize: Analize,
  arrow: Arrow,
  arrowLeft: ArrowLeft,
  arrowUp: ArrowUp,
  arrowDown: ArrowDown,
  auth: Auth,
  avatar: Avatar,
  calc: Calc,
  calendar: Calendar,
  chart: Chart,
  checkboxAll: CheckboxAll,
  checkboxOff: CheckboxOff,
  checkboxOn: CheckboxOn,
  chevronDown: ChevronDown,
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
  chevronUp: ChevronUp,
  clock: Clock,
  close: Close,
  closeCircle: CloseCircle,
  company: Company,
  copy: Copy,
  dashboard: Dashboard,
  delete: Delete,
  download: Download,
  dragdrop: Dragdrop,
  dropdown: Dropdown,
  edit: Edit,
  employ: Employ,
  filter: Filter,
  hamburger: Hamburger,
  help: Help,
  home: Home,
  indicatorFill: IndicatorFill,
  indicatorWarning: IndicatorWarning,
  kebab: Kebab,
  lightbulb: Lightbulb,
  meatball: Meatball,
  money: Money,
  ninedots: NineDots,
  notification: Notification,
  organization: Organization,
  radioOff: RadioOff,
  radioOn: RadioOn,
  ranking: Ranking,
  rate: Rate,
  remove: Remove,
  report: Report,
  rocket: Rocket,
  search: Search,
  settings: Settings,
  singleCheck: SingleCheck,
  singlecheckRounded: SinglecheckRounded,
  sort: Sort,
  telephone: Telephone,
  upload: Upload,
  warning: Warning,
  workSchedule: WorkScheudle,
  switch: Switch,
  switchOff: SwitchOff,
  sortDesc: SortDesc,
  sortAsc: SortAsc,
  doubleArrowLeft: DoubleArrowLeft,
  doubleArrowRight: DoubleArrowRight,
  uploadFile: UploadFile,
  module: Module,
  hrProgress: HrProgress,
  org: Org,
  hrWorkflow: HrWorkflow,
  reportDropdown: ReportDropdown,
  myList: MyList,
  dashboardDropdown: DashboardDropdown,
  managementAdmin: ManagementAdmin,
  managementUser: ManagementUser,
  logoDropdown: LogoDropdown,
  question: Question,
  nudge: Nudge,
  selfReport: SelfReport,
  positionManagement: PositionManagement,
  plan: Plan,
  discoveryBoard: DiscoveryBoard,
  on1: On1,
  survey: Survey,
  onboarding: Onboarding,
  safetyConfirmation: SafetyConfirmation,
  yui: YUI,
  mboCloud: MBOCloud,
  banto: Banto,
  careerDesign: CareerDesign,
  cubic: Cubic,
  coffee: Coffee,
  date: Date,
  addCircle: AddCircle,
  warningYellow: WarningYellow,
  clone: Clone,
  printer: Printer,
  timeRecorder: TimeRecorder,
  error: Error,
  back: Back,
  checkInOffice: CheckInOffice,
  checkInRemote: CheckInRemote,
  checkOut: CheckOut,
  registerLocation: RegisterLocation,
  breakStart: BreakStart,
  breakEnd: BreakEnd,
  capture: Capture,
  falsePerson: FalsePerson,
  iCCard: ICCard,
  addFace: AddFace,
  cancel: Cancel,
  reload: Reload
};

type Icons = typeof icons;
export type IconType = keyof Icons;
interface IconProps {
  type: IconType;
  color: string;
  verticalAlign?: string;
  size?: string;
  margin?: string;
  display?: string;
  isHover?: boolean;
  disabled?: boolean;
  customStyle?: SerializedStyles;
  onClick?: () => void;
}

// Figmaから作成したアイコンだとsvgの形式が違うため、分岐処理を入れる
const figmaIcons: Array<IconType> = [
  'notification',
  'warning',
  'download',
  'checkboxOff',
  'addCircle',
  'clone'
];

const createStyle = (type: IconType, color: string, verticalAlign: string, size: string, margin: string, display: string, disabled: boolean) => css({
  width: size,
  margin,
  '& > svg': {
    verticalAlign,
    width: size,
    height: size,
    fill: color,
    display,
    '& > g > path:nth-of-type(2)': {
      fill: figmaIcons.includes(type) ? undefined : color,
    },
    '& > path': {
      fill: figmaIcons.includes(type) ? color : undefined,
    },
  },
  ':hover': {
    cursor: disabled ? 'not-allowed' : 'pointer'
  },
});

const Icon: React.FC<IconProps> = ({
  type, color, verticalAlign = 'bottom', size = '20px', margin = '0', display = 'unset', isHover = false, disabled = false, customStyle, onClick
}) => {
  const RenderIcon = icons[type];
  return (
    <span css={css([createStyle(type, disabled ? grayScale.gray60 : isHover ? productColor.primaryHoverText : color, verticalAlign, size, margin, display, disabled), customStyle])} onClick={onClick}>
      <RenderIcon/>
    </span>
  );
};

export default Icon;
