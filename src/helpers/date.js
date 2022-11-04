import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

export const dateFromNow = date => dayjs(date).fromNow();

export const formatDate = (date, template) => dayjs(date).format(template);