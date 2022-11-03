				relogio = () => {
					var horario = new Date();
					var ss = horario.getSeconds();
					var hh = horario.getHours();
					var mm = horario.getMinutes();
					var rots = ss * 6 + "deg";
					var rotm = mm * 6 + "deg";
						if(hh > 12) {
							hh = hh - 12;
						}
					var roth = ((hh * 30) + (mm / 2)) + "deg";
					document.querySelector("#ponteiro_minuto").style.transform = "rotate(" + rotm + ")";
					document.querySelector("#ponteiro_segundo").style.transform = "rotate(" + rots + ")";
					document.querySelector("#ponteiro_hora").style.transform = "rotate(" + roth + ")";
					setTimeout(relogio, 1000);
				}