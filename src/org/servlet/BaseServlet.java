package org.servlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class BaseServlet extends HttpServlet{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	/**
	 * Método de resposta aos pedidos get
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		PrintWriter pw=response.getWriter();
		pw.write("<h1>Erro</h1>");
		pw.write("<p>Esta página deve ser invocada segundo o método POST (do protocolo HTTP). A invocação" +
				" directa não tem qualquer funcionalidade pelo que termino aqui a minha simpática mensagem</p>");
	}
}
