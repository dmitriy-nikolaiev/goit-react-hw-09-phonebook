import ContactForm from '../ContactForm';
import Filter from '../Filter';
import ContactList from '../ContactList';

import Typography from '@material-ui/core/Typography';

const styles = {
  title: {
    marginTop: '20px',
  },
};

const ContactsView = () => {
  return (
    <section>
      <Typography variant="h3" gutterBottom style={styles.title}>
        Телефонная книга
      </Typography>
      <ContactForm />
      <Typography variant="h4" gutterBottom>
        Контакты
      </Typography>
      <Filter />
      <ContactList />
    </section>
  );
};

export default ContactsView;
