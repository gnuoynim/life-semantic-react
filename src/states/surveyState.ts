
import { SurveyInterface } from '@/interfaces/surveyInterface';
import { atom, DefaultValue, selector } from 'recoil';

const surveyState = atom<SurveyInterface>({
  key: 'surveyState',
  default: {
    before: {
      countDay: 0,
      date: new Date(),
      level: 0,
    },
    day:0,
    after: 0,
  },
});

export{surveyState}


