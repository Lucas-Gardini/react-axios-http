"use client";

/**
 * Página inicial que permite chamar a API e navegar até o formulário.
 */
import axiosInstance from "@/lib/api";
import { useState } from "react";

export default function Home() {
	/**
	 * Controla o estado de carregamento durante a chamada de API.
	 */
	const [loading, setLoading] = useState(false);

	/**
	 * Realiza requisição GET à API, simulando atraso para teste.
	 */
	async function chamarAPI() {
		setLoading(true);
		try {
			const response = await axiosInstance.get("/");
			await new Promise((resolve) => setTimeout(resolve, 2000));
			alert("API chamada com sucesso: " + response.data);
		} catch (error: any) {
			alert("Erro ao chamar a API. " + error.message);
		} finally {
			setLoading(false);
		}
	}

	return (
		<main className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
			<div className="flex flex-row gap-5">
				<button disabled={loading} onClick={chamarAPI}>
					{loading ? "Carregando..." : "Chamar API"}
				</button>
				<a href="/form" className="text-blue-500">
					Formulário
				</a>
			</div>
		</main>
	);
}
