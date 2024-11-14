import React from 'react';

function EvaluationPage() {
  return (
    <div style={styles.container}>
      <div style={styles.evaluationContainer}>
        <h2 style={styles.header}>Overall</h2>
        <p style={styles.grade}>B</p>

        <h2 style={styles.header}>Grammar Evaluation</h2>
        <p style={styles.grade}>A</p>

        <h2 style={styles.header}>Readability Evaluation</h2>
        <p style={styles.grade}>C</p>
        <h2 style={styles.header}>Repeating Words</h2>
        <ul style={styles.wordList}>
          <li>Ever - 10 instances</li>
          <li>And - 20 instances</li>
        </ul>
      </div>

      <div style={styles.textContainer}>
        <p style={styles.textBlock}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum faucibus odio, a aliquet orci
          cursus in. Maecenas at bibendum quam. In nunc orci, varius a ante id, ultrices molestie augue. Vivamus et ex
          fermentum, faucibus nibh a, sollicitudin justo. Aenean semper, est ut mollis dictum, eros quam tristique
          metus, vitae condimentum dui diam ac quam. Suspendisse eros ipsum, lobortis nec fermentum id, finibus vitae
          purus. Nunc porta augue et efficitur pretium. Nam sodales velit id tristique viverra. Mauris mattis ex a eros
          convall. 
          
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: '20px',
  },
  evaluationContainer: {
    width: '40%',
    paddingRight: '20px',
  },
  header: {
    fontWeight: 'bold',
    fontSize: '18px',
    marginTop: '10px',
    marginBottom: '5px',
  },
  grade: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  wordList: {
    listStyleType: 'none',
    paddingLeft: '0',
    fontSize: '16px',
  },
  textContainer: {
    width: '70%',
    backgroundColor: '#e0e0e0',
    padding: '20px',
    borderRadius: '8px',
  },
  
  textBlock: {
    fontSize: '16px',
    lineHeight: '1.6',
  },
};

export default EvaluationPage;
