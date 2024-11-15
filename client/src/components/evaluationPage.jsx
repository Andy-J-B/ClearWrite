import React from 'react';
import data from './textGearsData.json'; // Import the JSON data

function EvaluationPage() {
  const { grammarChecked, readabilityScore, summarized } = data; // Destructure the data

  return (
    <div style={styles.container}>
      <div style={styles.evaluationContainer}>
        <h2 style={styles.header}>Overall</h2>
        <p style={styles.grade}>B</p>

        <h2 style={styles.header}>Grammar Evaluation</h2>
        {grammarChecked.corrections.map((correction, index) => (
          <div key={index} style={styles.correctionContainer}>
            <p style={styles.errorText}>{correction.error.en}</p>
            <p>Suggested corrections:</p>
            <ul style={styles.suggestionList}>
              {correction.suggestions.map((suggestion, i) => (
                <li key={i} style={styles.suggestionItem}>{suggestion}</li>
              ))}
            </ul>
          </div>
        ))}
        <p style={styles.grade}>A</p>

        <h2 style={styles.header}>Readability Evaluation</h2>
        <p>Flesch-Kincaid Reading Ease: {readabilityScore.fleschKincaid.readingEase}</p>
        <p>Grade Level: {readabilityScore.fleschKincaid.grade}</p>
        <p>Interpretation: {readabilityScore.fleschKincaid.interpretation}</p>
        <p style={styles.grade}>C</p>

        <h2 style={styles.header}>Summarized Text</h2>
        {summarized.summary.map((sentence, index) => (
          <p key={index} style={styles.textBlock}>{sentence}</p>
        ))}
      </div>

      <div style={styles.textContainer}>
        <h2 style={styles.header}>Original Text</h2>
        {summarized.originalText}
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit nam quis animi dolorum. Mollitia placeat sint non unde veniam quis porro consequatur fugiat nihil quo? Ipsum optio commodi beatae dolores, voluptatem maxime id, consequuntur labore possimus voluptas eaque numquam consectetur aliquid alias? Harum, neque quidem. Officiis voluptatem labore, voluptas unde repudiandae fugiat aliquid suscipit ab dolorum debitis, amet placeat at commodi vitae eveniet excepturi voluptatum tempora dolores magnam cum! Itaque quas libero, quod cumque quae suscipit dolorum, ipsam, eligendi enim explicabo porro culpa tempore dignissimos laboriosam praesentium? Magnam saepe accusantium quam, vel asperiores eos quisquam, eum perspiciatis incidunt totam quibusdam laudantium dolor fugit ducimus rem eveniet voluptas ea quod eligendi iusto magni sapiente! Dolorum totam nam sed molestiae qui dolore, repudiandae maiores vitae voluptatum obcaecati in eum ex, perspiciatis est libero cupiditate saepe itaque eaque! Eum sit quas illum fugit maxime quia aspernatur, ducimus animi deserunt fugiat consectetur repudiandae eos suscipit dolore illo perferendis nam debitis necessitatibus perspiciatis? Quisquam facere blanditiis, commodi vero fugit nulla architecto eos et similique, reiciendis possimus molestiae nostrum libero a rerum ab. Nam incidunt nihil quia nobis a tempore. Ex nesciunt fuga eligendi nulla, aut vero doloremque molestiae excepturi architecto aperiam, modi sed dolorum, voluptas consequuntur obcaecati nobis. Ad illo dolorem quo! Animi et, eum, non aperiam magni illum sunt neque alias, reiciendis necessitatibus aut magnam? Debitis nisi placeat error ad mollitia recusandae impedit earum dolorem vero provident porro dicta in illum expedita, distinctio repellat. Veritatis nemo vel id libero illo necessitatibus, sequi quibusdam nam aliquam sint, quas, eos exercitationem ipsum aperiam deserunt fugit perspiciatis nostrum eligendi laudantium voluptatibus aspernatur ex natus assumenda reprehenderit. Rerum laboriosam minus asperiores consectetur doloremque maxime aspernatur, vel ab nemo ea eaque velit officia suscipit quibusdam, eligendi eum illo perferendis exercitationem id quam reprehenderit placeat? Aliquam cum quam rerum aliquid??</p>
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
  errorText: {
    color: '#ff6347', // distinct color for error messages
    fontSize: '14px',
  },
  correctionContainer: {
    marginBottom: '15px',
  },
  suggestionList: {
    listStyleType: 'disc',
    marginLeft: '20px',
  },
  suggestionItem: {
    fontSize: '14px',
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

// import React from 'react';
// import data from './textGearsData.json';

// function EvaluationPage() {
//   const { grammarChecked, readabilityScore, summarized } = data; // Destructure the data


//   return (
//     <div style={styles.container}>
//       <div style={styles.evaluationContainer}>
//         <h2 style={styles.header}>Overall</h2>
//         <p style={styles.grade}>B</p>

//         <h2 style={styles.header}>Grammar Evaluation</h2>
//         <p style={styles.grade}>A</p>
//         <p>{grammarChecked.originalText} </p>

//         <h2 style={styles.header}>Readability Evaluation</h2>
//         <p style={styles.grade}>C</p>

//         <h2 style={styles.header}>Repeating Words</h2>
//         <ul style={styles.wordList}>
//           <li>Ever - 10 instances</li>
//           <li>And - 20 instances</li>
//         </ul>
//       </div>

//       <div style={styles.textContainer}>
//         <p style={styles.textBlock}>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum faucibus odio, a aliquet orci
//           cursus in. Maecenas at bibendum quam. In nunc orci, varius a ante id, ultrices molestie augue. Vivamus et ex
//           fermentum, faucibus nibh a, sollicitudin justo. Aenean semper, est ut mollis dictum, eros quam tristique
//           metus, vitae condimentum dui diam ac quam. Suspendisse eros ipsum, lobortis nec fermentum id, finibus vitae
//           purus. Nunc porta augue et efficitur pretium. Nam sodales velit id tristique viverra. Mauris mattis ex a eros
//           convall.
//         </p>
//       </div>
//     </div>
//   );
// }

// const styles = {
//   container: {
//     display: 'flex',
//     flexDirection: 'row',
//     alignItems: 'flex-start',
//     padding: '20px',
//   },
//   evaluationContainer: {
//     width: '40%',
//     paddingRight: '20px',
//   },
//   header: {
//     fontWeight: 'bold',
//     fontSize: '18px',
//     marginTop: '10px',
//     marginBottom: '5px',
//   },
//   grade: {
//     fontSize: '24px',
//     fontWeight: 'bold',
//     marginBottom: '20px',
//   },
//   wordList: {
//     listStyleType: 'none',
//     paddingLeft: '0',
//     fontSize: '16px',
//   },
//   textContainer: {
//     width: '60%',
//     backgroundColor: '#e0e0e0',
//     padding: '20px',
//     borderRadius: '8px',
//   },
//   textBlock: {
//     fontSize: '16px',
//     lineHeight: '1.6',
//   },
// };

// export default EvaluationPage;
