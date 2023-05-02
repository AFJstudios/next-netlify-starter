import Layout, { siteTitle } from '../components/layout';
import Calendar from '../components/calendar';

export default function CustomCal() {

  return (
    <>
      <Layout calendarpage>
        <Calendar></Calendar>        
      </Layout>
    </>
  );
}