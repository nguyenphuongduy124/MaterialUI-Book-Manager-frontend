const { makeStyles } = require('@material-ui/core');

const styles = makeStyles({
  wrapCategories: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    gridTemplateRows: 'auto auto auto',
  },
});

export default styles;
