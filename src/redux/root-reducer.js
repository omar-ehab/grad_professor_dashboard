import { combineReducers } from 'redux';
import App from '@iso/redux/app/reducer';
import Auth from '@iso/redux/auth/reducer';
import ThemeSwitcher from '@iso/redux/themeSwitcher/reducer';
import LanguageSwitcher from '@iso/redux/languageSwitcher/reducer';
import qrModal from '@iso/redux/qrModal/reducer';
import lectureModal from '@iso/redux/lectureModal/reducer';
import lecture from '@iso/redux/lecture/reducer';

export default combineReducers({
  Auth,
  App,
  ThemeSwitcher,
  LanguageSwitcher,
  qrModal,
  lectureModal,
  lecture
});
