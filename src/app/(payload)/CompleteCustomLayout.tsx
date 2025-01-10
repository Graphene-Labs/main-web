// // src/components/CompleteCustomLayout.jsx
// import React from 'react';
// import { DefaultNav, DefaultHeader, DefaultDashboard } from 'payload/components';
// import { useAuth } from 'payload/components/utilities';
// import { useRouter } from 'next/router';

// const CompleteCustomLayout = ({ children }) => {
//   const { user } = useAuth(); // Información del usuario autenticado
//   const router = useRouter();

//   return (
//     <div className="complete-layout">
//       {/* Menú lateral */}
//       <aside className="sidebar">
//         <DefaultNav />
//       </aside>

//       {/* Contenido principal */}
//       <div className="main">
//         {/* Encabezado */}
//         <header className="header">
//           <DefaultHeader />
//         </header>

//         {/* Contenido dinámico (Dashboard o contenido principal) */}
//         <main className="content">
//           {children || <DefaultDashboard />}
//         </main>
//       </div>

//       {/* Footer */}
//       <footer className="footer">
//         <p>
//           © {new Date().getFullYear()} - Panel administrado por Payload CMS
//         </p>
//       </footer>

//       {/* Estilos */}
//       <style jsx>{`
//         .complete-layout {
//           display: grid;
//           grid-template-columns: 250px 1fr;
//           grid-template-rows: auto 1fr auto;
//           height: 100vh;
//           grid-template-areas:
//             "sidebar header"
//             "sidebar content"
//             "sidebar footer";
//         }
//         .sidebar {
//           grid-area: sidebar;
//           background-color: #f4f4f4;
//           padding: 1rem;
//         }
//         .header {
//           grid-area: header;
//           background-color: #fff;
//           border-bottom: 1px solid #ddd;
//           padding: 1rem;
//         }
//         .content {
//           grid-area: content;
//           padding: 2rem;
//           overflow-y: auto;
//         }
//         .footer {
//           grid-area: footer;
//           background-color: #f4f4f4;
//           text-align: center;
//           padding: 1rem;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default CompleteCustomLayout;
