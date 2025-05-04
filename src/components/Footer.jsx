// src/components/Footer.jsx
export default function Footer() {
    return (
      <footer style={{
        marginTop: '2em',
        padding: '1em',
        textAlign: 'center',
        backgroundColor: '#222',
        color: 'white'
      }}>
        <p>
          <a 
            href="https://github.com/DardanJ" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{ color: '#61dafb', marginLeft: '0.5em' }}
          >
            GitHub
          </a>
        </p>
      </footer>
    );
  }
  