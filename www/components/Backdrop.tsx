/**
 * Componente que exibe um overlay cobrindo toda a tela.
 * Geralmente utilizado como backdrop durante carregamentos ou processos que não podem ser interrompidos.
 */
export function Backdrop() {
	return <div className="fixed inset-0 bg-black bg-opacity-60 z-50"></div>;
}
