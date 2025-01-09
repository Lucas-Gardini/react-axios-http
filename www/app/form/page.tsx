"use client";

/**
 * Formulário que carrega dados salvos ao iniciar,
 * e envia as informações preenchidas para a API.
 * Exibe um backdrop de carregamento enquanto aguarda a resposta.
 */

import { Backdrop } from "@/components/Backdrop";
import axiosInstance from "@/lib/api";
import { isAxiosError } from "axios";
import { FormEvent, useEffect, useState } from "react";

export default function Form() {
	/**
	 * Armazena dados do formulário e controla estado de carregamento.
	 */
	const [formData, setFormData] = useState({
		email: "",
		senha: "",
		lembrarDeMim: false,
	});
	const [loading, setLoading] = useState(false);

	/**
	 * Dispara carregamento inicial para buscar dados previamente salvos.
	 */
	useEffect(() => {
		startup();
	}, []);

	/**
	 * Recupera dados salvos na API e atualiza o estado do formulário.
	 */
	async function startup() {
		setLoading(true);
		try {
			await new Promise((resolve) => setTimeout(resolve, 2000));

			const response = await axiosInstance.get("/saved");
			if (response.data) setFormData(response.data);
		} catch (error: any) {
			if (isAxiosError(error) && error.response?.status === 404) alert("Nenhum dado salvo encontrado.");
			else alert("Erro ao chamar a API. " + error.message);
		} finally {
			setLoading(false);
		}
	}

	/**
	 * Valida campos e envia dados do formulário para a API.
	 */
	async function onSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();

		if (!formData.email || !formData.senha) {
			alert("Preencha todos os campos para continuar.");
			return;
		}

		setLoading(true);
		try {
			await new Promise((resolve) => setTimeout(resolve, 2000));

			const response = await axiosInstance.post("/data", { ...formData });
			alert(response.data.message);
			console.log(response.data.data);
		} catch (error: any) {
			alert("Erro ao chamar a API. " + error.message);
		} finally {
			setLoading(false);
		}
	}

	return (
		<form className="container mx-auto bg-slate-100 p-10" onSubmit={onSubmit}>
			{loading && <Backdrop />}

			<div className="flex flex-col gap-5">
				<label htmlFor="email">E-mail</label>
				<input type="email" id="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />

				<label htmlFor="senha">Senha</label>
				<input type="password" id="senha" value={formData.senha} onChange={(e) => setFormData({ ...formData, senha: e.target.value })} />

				<label className="flex gap-2" htmlFor="lembrarDeMim">
					<input
						type="checkbox"
						id="lembrarDeMim"
						checked={formData.lembrarDeMim}
						onChange={(e) => setFormData({ ...formData, lembrarDeMim: e.target.checked })}
					/>
					Lembrar de mim
				</label>

				<button type="submit" className="bg-blue-500 text-white p-2 rounded-md">
					Enviar
				</button>
			</div>
		</form>
	);
}
