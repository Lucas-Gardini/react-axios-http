/**
 * Instância de axios configurada para uso padrão na API.
 * - baseURL: obtém a URL base a partir do arquivo de configuração.
 * - timeout: define o tempo máximo de resposta.
 * - headers: define o tipo de conteúdo padrão.
 */
import config from "@/utils/config";
import axios from "axios";

const axiosInstance = axios.create({
	baseURL: config.apiBaseUrl,
	timeout: 10000,
	headers: { "Content-Type": "application/json" },
});

export default axiosInstance;
