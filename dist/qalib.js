require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/*
 * mathmo question/answer configuration
 */
module.exports = function(manifest){
  require('./problems')(manifest);
  return {
    topicById: function(id){
      return this.topics[id];
    },
    topicTitleById: function(id){
      return this.topics[id][0];
    },
    topicMakerById: function(id){
      return this.topics[id][1];
    },
    groups: [
      {
        title: "Algebraic",
        topicIds: ["C11", "C7", "C9", "C1", "C30", "C13", "C17", "C35", "C36", "C37"]
      }, {
        title: "Curve sketching",
        topicIds: ["C24", "C25", "C26", "C270", "C27"]
      }, {
        title: "Geometry",
        topicIds: ["C15", "C16", "C6", "C31", "C32", "C33", "C34", "C38", "C39"]
      }, {
        title: "Sequences & series",
        topicIds: ["C8", "C12", "C23", "C2"]
      }, {
        title: "Vectors",
        topicIds: ["C5", "C18"]
      }, {
        title: "Differentiation",
        topicIds: ["C14", "C20", "C21", "C22", "C19"]
      }, {
        title: "Integration",
        topicIds: ["C28", "C3", "C4"]
      }, {
        title: "Differential equations",
        topicIds: ["C29", "F3a"]
      }, {
        title: "Further Topics",
        topicIds: ["F1", "F2", "F4", "F5", "F7", "F8", "F9", "F10", "F11", "F12", "F13"]
      }, {
        title: "Statistics Topics",
        topicIds: ["S1", "S2", "S3", "S4", "S5", "S6"]
      }
    ],
    topics: {
      "C1": ["Partial fractions", makePartial],
      "C2": ["Binomial theorem", makeBinomial2],
      "C3": ["Polynomial integration", makePolyInt],
      "C4": ["Trig integration", makeTrigInt],
      "C5": ["Scalar products", makeVector],
      "C6": ["3D Lines", makeLines],
      "C7": ["Inequalities", makeIneq],
      "C8": ["Arithmetic progressions", makeAP],
      "C9": ["Factor theorem", makeFactor],
      "C10": ["Quadratics", makeQuadratic],
      "C11": ["Completing the square", makeComplete],
      "C12": ["Binomial expansion", makeBinExp],
      "C13": ["Logarithms", makeLog],
      "C14": ["Stationary points", makeStationary],
      "C15": ["Triangles", makeTriangle],
      "C16": ["Circles", makeCircle],
      "C17": ["Trig equations", makeSolvingTrig],
      "C18": ["Vector equations", makeVectorEq],
      "C19": ["Implicit differentiation", makeImplicit],
      "C20": ["The chain rule", makeChainRule],
      "C21": ["The product rule", makeProductRule],
      "C22": ["The quotient rule", makeQuotientRule],
      "C23": ["Geometric progressions", makeGP],
      "C24": ["Modulus function", makeModulus],
      "C25": ["Transforms of functions", makeTransformation],
      "C26": ["Composition of functions", makeComposition],
      "C27": ["Parametric functions", makeParametric],
      "C270": ["Implicit functions", makeImplicitFunction],
      "C28": ["Integration", makeIntegration],
      "C29": ["Differential equations", makeDE],
      "C30": ["Powers", makePowers],
      "C31": ["Equations of 2D lines", makeLinesEq],
      "C32": ["Equations of circles", makeCircleEq],
      "C33": ["Parallel and perpendicular lines", makeLineParPerp],
      "C34": ["Intersections of circles and lines", makeCircLineInter],
      "C35": ["Highest common factors", makeHCF],
      "C36": ["Least common multiples", makeLCM],
      "C37": ["Integer solutions to equations", makeDiophantine],
      "C38": ["Distance between points", makeDistance],
      "C39": ["Circle passing through three points", makeCircumCircle],
      "F1": ["Complex Arithmetic", makeCArithmetic],
      "F2": ["Modulus Argument", makeCPolar],
      "F3a": ["2nd order DEs", makeDETwoHard],
      "F4": ["Rank 2 matrices", makeMatrix2],
      "F5": ["Taylor Series", makeTaylor],
      "F6": ["Polar Coordinates", makePolarSketch],
      "F7": ["Rank 3 matrices", makeMatrix3],
      "F8": ["Further vectors", makeFurtherVector],
      "F9": ["Newton-Raphson", makeNewtonRaphson],
      "F10": ["Further inequalities", makeFurtherIneq],
      "F11": ["Integration by substitution", makeSubstInt],
      "F12": ["Figures of revolution", makeRevolution],
      "F13": ["Matrix transformations", makeMatXforms],
      'S1': ["Discrete Distributions", makeDiscreteDistn],
      'S2': ["Continuous Distributions", makeContinDistn],
      'S3': ["Hypothesis Testing", makeHypTest],
      'S4': ["Confidence Intervals", makeConfidInt],
      'S5': ["Chi Squared", makeChiSquare],
      'S6': ["Product Moments", makeProductMoment]
    }
  };
};
},{"./problems":2}],2:[function(require,module,exports){
module.exports = function(problems){
  var makePartial, makeBinomial2, makePolyInt, makeTrigInt, makeVector, makeLines, makeLinesEq, makeLineParPerp, makeCircleEq, makeCircLineInter, makeIneq, makeAP, makeFactor, makeQuadratic, makeComplete, makeBinExp, makeLog, makeStationary, makeTriangle, makeCircle, makeSolvingTrig, makeVectorEq, makeModulus, makeTransformation, makeComposition, makeParametric, makeImplicit, makeChainRule, makeProductRule, makeQuotientRule, makeGP, makeImplicitFunction, makeIntegration, makeDE, makePowers, makeHCF, makeLCM, makeDiophantine, makeDistance, makeCircumCircle, makeCArithmetic, makeCPolar, makeDETwoHard, makeMatrixQ, makeMatrix2, makeMatrix3, makeTaylor, makePolarSketch, makeFurtherVector, makeNewtonRaphson, makeFurtherIneq, makeSubstInt, makeRevolution, makeMatXforms, makeDiscreteDistn, makeContinDistn, makeHypTest, makeConfidInt, makeChiSquare, makeProductMoment;
  problems.makePartial = makePartial = function(){
    var makePartial1, makePartial2, qa;
    makePartial1 = function(){
      var a, b, e, c, d, f, aString, bot, qString, qa;
      a = randnz(8);
      b = new poly(1);
      b.setrand(8);
      if (b[1] < 0) {
        b.xthru(-1);
        a = -a;
      }
      e = gcd(a, b.gcd());
      if (e > 1) {
        b.xthru(1 / e);
        a /= e;
      }
      c = randnz(8);
      d = new poly(1);
      d.setrand(8);
      if (d[1] < 0) {
        d.xthru(-1);
        c = -c;
      }
      f = gcd(c, d.gcd());
      if (f > 1) {
        d.xthru(1 / f);
        c /= f;
      }
      if (b[1] === d[1] && b[0] === d[0]) {
        d[0] = -d[0];
      }
      if (a > 0) {
        aString = "$$";
      } else {
        aString = "$$-";
      }
      aString += "\\frac{" + Math.abs(a) + "}{" + b.write() + "}";
      if (c > 0) {
        aString += "+";
      } else {
        aString += "-";
      }
      aString += "\\frac{" + Math.abs(c) + "}{" + d.write() + "}$$";
      bot = polyexpand(b, d);
      b.xthru(c);
      d.xthru(a);
      b.addp(d);
      qString = "Express$$\\frac{" + b.write() + "}{" + bot.write() + "}$$in partial fractions.";
      qa = [qString, aString];
      return qa;
    };
    makePartial2 = function(){
      var m, l, d, e, f, n, a, b, c, u, v, w, p, q, r, qString, aString, qa;
      m = distrandnz(3, 3);
      l = ranking(m);
      d = randnz(4);
      e = randnz(3);
      f = randnz(3);
      n = [d, e, f];
      a = m[l[0]];
      b = m[l[1]];
      c = m[l[2]];
      d = n[l[0]];
      e = n[l[1]];
      f = n[l[2]];
      u = new poly(1);
      v = new poly(1);
      w = new poly(1);
      u[1] = v[1] = w[1] = 1;
      u[0] = a;
      v[0] = b;
      w[0] = c;
      p = polyexpand(u, v);
      q = polyexpand(u, w);
      r = polyexpand(v, w);
      p.xthru(f);
      q.xthru(e);
      r.xthru(d);
      p.addp(q);
      p.addp(r);
      qString = "Express$$\\frac{" + p.write() + "}{" + express([a, b, c]) + "}$$in partial fractions.";
      if (d > 0) {
        aString = "$$";
      } else {
        aString = "$$-";
      }
      aString += "\\frac{" + Math.abs(d) + "}{" + u.write() + "}";
      if (e > 0) {
        aString += "+";
      } else {
        aString += "-";
      }
      aString += "\\frac{" + Math.abs(e) + "}{" + v.write() + "}";
      if (f > 0) {
        aString += "+";
      } else {
        aString += "-";
      }
      aString += "\\frac{" + Math.abs(f) + "}{" + w.write() + "}$$";
      qa = [qString, aString];
      return qa;
    };
    if (rand()) {
      qa = makePartial1();
    } else {
      qa = makePartial2();
    }
    return qa;
  };
  problems.makeBinomial2 = makeBinomial2 = function(){
    var p, n, q, qString, aString, qa;
    p = new poly(1);
    p[0] = rand(1, 5);
    p[1] = randnz(6 - p[0]);
    n = Math.round(3 + Math.random() * (3 - Math.max(0, Math.max(p[0] - 3, p[1] - 3))));
    q = new poly(3);
    q[0] = Math.pow(p[0], n);
    q[1] = n * Math.pow(p[0], n - 1) * p[1];
    q[2] = n * (n - 1) * Math.pow(p[0], n - 2) / 2 * Math.pow(p[1], 2);
    q[3] = n * (n - 1) * (n - 2) * Math.pow(p[0], n - 3) / 6 * Math.pow(p[1], 3);
    qString = "Evaluate$$(" + p.rwrite() + ")^" + n + "$$to the fourth term.";
    aString = "$$" + q.rwrite() + "$$";
    qa = [qString, aString];
    return qa;
  };
  problems.makePolyInt = makePolyInt = function(){
    var A, B, a, b, c, qString, hi, lo, ans, aString, qa;
    A = rand(-3, 2);
    B = rand(A + 1, 3);
    a = new poly(3);
    a.setrand(6);
    b = new fpoly(3);
    b.setpoly(a);
    c = new fpoly(4);
    b.integ(c);
    qString = "Evaluate$$\\int_{" + A + "}^{" + B + "}" + a.write() + "\\,\\mathrm{d}x$$";
    hi = c.compute(B);
    lo = c.compute(A);
    lo.prod(-1);
    ans = new frac(hi.top, hi.bot);
    ans.add(lo.top, lo.bot);
    aString = "$$" + ans.write() + "$$";
    qa = [qString, aString];
    return qa;
  };
  problems.makeTrigInt = makeTrigInt = function(){
    var a, b, A, term1, B, term2, U, qString, soln1, soln2, soln, i$, i, c, aString, qa;
    a = rand(0, 7);
    b = rand(1 - Math.min(a, 1), 8);
    if (a) {
      A = randnz(4);
      term1 = abscoeff(A) + "\\sin{" + ascoeff(a) + "x}";
    } else {
      A = 0;
      term1 = "";
    }
    if (b) {
      B = randnz(4);
      term2 = abscoeff(B) + "\\cos{" + ascoeff(b) + "x}";
    } else {
      B = 0;
      term2 = "";
    }
    U = pickrand(2, 3, 4, 6);
    qString = "Evaluate$$\\int_{0}^{\\pi / " + U + "}";
    if (a) {
      if (b) {
        qString += term1;
        if (B > 0) {
          qString += " + ";
        } else {
          qString += " - ";
        }
        qString += term2;
      } else {
        qString += term1;
      }
    } else {
      if (B < 0) {
        qString += " - ";
      }
      qString += term2;
    }
    qString += "\\,\\mathrm{d}x$$";
    soln1 = new Array(6);
    soln2 = new Array(6);
    soln = new Array(6);
    if (a) {
      soln1 = cospi(a, U);
      for (i$ = 0; i$ <= 4; i$ += 2) {
        i = i$;
        soln1[i] *= -A;
      }
      for (i$ = 1; i$ <= 5; i$ += 2) {
        i = i$;
        soln1[i] *= a;
      }
      if (soln1[0]) {
        soln1[0] = soln1[1] * A + a * soln1[0];
        soln1[1] *= a;
      } else {
        soln1[0] = A;
        soln1[1] = a;
      }
    } else {
      soln1 = [0, 1, 0, 1, 0, 1];
    }
    if (b) {
      soln2 = sinpi(b, U);
      for (i$ = 0; i$ <= 4; i$ += 2) {
        i = i$;
        soln2[i] *= B;
      }
      for (i$ = 1; i$ <= 5; i$ += 2) {
        i = i$;
        soln2[i] *= b;
      }
    } else {
      soln2 = [0, 1, 0, 1, 0, 1];
    }
    for (i$ = 0; i$ <= 4; i$ += 2) {
      i = i$;
      soln[i] = soln1[i] * soln2[i + 1] + soln1[i + 1] * soln2[i];
      soln[i + 1] = soln1[i + 1] * soln2[i + 1];
      if (soln[i + 1] < 0) {
        soln[i] *= -1;
        soln[i + 1] *= -1;
      }
      if (soln[i]) {
        c = gcd(Math.abs(soln[i]), soln[i + 1]);
        soln[i] /= c;
        soln[i + 1] /= c;
      }
    }
    aString = "$$";
    if (soln[0] && soln[1] === 1) {
      aString += soln[0];
    } else if (soln[0] > 0) {
      aString += "\\frac{" + soln[0] + "}{" + soln[1] + "}";
    } else if (soln[0] < 0) {
      aString += " - \\frac{" + (-soln[0]) + "}{" + soln[1] + "}";
    }
    if (soln[2] && soln[3] === 1) {
      if (aString.length > 2) {
        if (soln[2] > 0) {
          aString += " + ";
        }
      }
      aString += soln[2] + "\\sqrt{2}";
    } else if (soln[2] > 0) {
      if (aString.length > 2) {
        aString += " + ";
      }
      aString += "\\frac{" + soln[2] + "}{" + soln[3] + "}\\sqrt{2}";
    } else if (soln[2] < 0) {
      aString += "-\\frac{" + (-soln[2]) + "}{" + soln[3] + "}\\sqrt{2}";
    }
    if (soln[4] && soln[5] === 1) {
      if (aString.length > 2) {
        if (soln[4] > 0) {
          aString += "+";
        }
      }
      if (Math.abs(soln[4]) === 1) {
        if (soln[4] === -1) {
          aString += "-";
        }
      } else {
        aString += soln[4];
      }
      aString += "\\sqrt{3}";
    } else if (soln[4] > 0) {
      if (aString.length > 2) {
        aString += " + ";
      }
      aString += "\\frac{" + soln[4] + "}{" + soln[5] + "}\\sqrt{3}";
    } else if (soln[4] < 0) {
      aString += "-\\frac{" + (-soln[4]) + "}{" + soln[5] + "}\\sqrt{3}";
    }
    if (aString === "$$") {
      aString += "0$$";
    } else {
      aString += "$$";
    }
    qa = [qString, aString];
    return qa;
  };
  problems.makeVector = makeVector = function(){
    var ntol, A, i$, i, B, c, v, qString, aString, top1, bot1, top2, bot2, qa;
    ntol = function(n){
      return String.fromCharCode(n + "A".charCodeAt(0));
    };
    A = new Array(4);
    for (i$ = 0; i$ <= 3; ++i$) {
      i = i$;
      A[i] = new vector(3);
      A[i].setrand(10);
    }
    B = new Array(0, 1, 2, 3);
    i = 0;
    while (i < 3) {
      if (A[B[i]].mag() < A[B[i + 1]].mag()) {
        c = B[i];
        B[i] = B[i + 1];
        B[i + 1] = c;
        i = -1;
      }
      i++;
    }
    v = distrand(3, 0, 3);
    qString = "Consider the four vectors";
    qString += "$$\\mathbf{A} = " + A[0].write() + "\\,,\\ \\mathbf{B} = " + A[1].write() + "$$";
    qString += "$$\\mathbf{C} = " + A[2].write() + "\\,,\\ \\mathbf{D} = " + A[3].write() + "$$";
    qString += "<ol class=\"exercise\"><li>Order the vectors by magnitude.</li>";
    qString += "<li>Use the scalar product to find the angles between";
    qString += "<ol class=\"subexercise\"><li>\\(\\mathbf{" + ntol(v[0]) + "}\\) and \\(\\mathbf{" + ntol(v[1]) + "}\\),</li>";
    qString += "<li>\\(\\mathbf{" + ntol(v[1]) + "}\\) and \\(\\mathbf{" + ntol(v[2]) + "}\\)</li></ol></ol>";
    aString = "<ol class=\"exercise\"><li>";
    aString += "\\(|\\mathbf{" + ntol(B[0]) + "}| = \\sqrt{" + A[B[0]].mag();
    aString += "},\\) \\(|\\mathbf{" + ntol(B[1]) + "}| = \\sqrt{" + A[B[1]].mag();
    aString += "},\\) \\( |\\mathbf{" + ntol(B[2]) + "}| = \\sqrt{" + A[B[2]].mag();
    aString += "}\\) and \\(|\\mathbf{" + ntol(B[3]) + "}| = \\sqrt{" + A[B[3]].mag();
    aString += "}\\).</li>";
    top1 = A[v[0]].dot(A[v[1]]);
    bot1 = new sqroot(A[v[0]].mag() * A[v[1]].mag());
    c = gcd(Math.abs(top1), bot1.a);
    top1 /= c;
    bot1.a /= c;
    top2 = A[v[1]].dot(A[v[2]]);
    bot2 = new sqroot(A[v[1]].mag() * A[v[2]].mag());
    c = gcd(Math.abs(top2), bot2.a);
    top2 /= c;
    bot2.a /= c;
    aString += "<li><ol class=\"subexercise\"><li>\\(";
    if (top1 === 0) {
      aString += "\\pi / 2";
    } else if (top1 === 1 && bot1.n === 1 && bot1.a === 1) {
      aString += "0";
    } else if (top1 === -1 && bot1.n === 1 && bot1.a === 1) {
      aString += "\\pi";
    } else {
      aString += "\\arccos\\left(";
      if (bot1.a === 1 && bot1.n === 1) {
        aString += top1;
      } else {
        aString += "\\frac{" + top1 + "}{" + bot1.write() + "}";
      }
      aString += "\\right)";
    }
    aString += "\\)</li><li>\\(";
    if (top2 === 0) {
      aString += "\\pi / 2";
    } else if (top2 === 1 && bot2.n === 1 && bot2.a === 1) {
      aString += "0";
    } else if (top2 === -1 && bot2.n === 1 && bot2.a === 1) {
      aString += "\\pi";
    } else {
      aString += "\\arccos\\left(";
      if (bot2.a === 1 && bot2.n === 1) {
        aString += top2;
      } else {
        aString += "\\frac{" + top2 + "}{" + bot2.write() + "}";
      }
      aString += "\\right)";
    }
    aString += "\\)</li></ol></li></ol>";
    qa = [qString, aString];
    return qa;
  };
  problems.makeLines = makeLines = function(){
    var a1, b1, c1, d1, e1, f1, ch, a2, b2, c2, d2, e2, f2, m1, m2, sn, p1, q1, r1, p2, q2, r2, eqn1, eqn2, qString, aString, cosbot, costh, mu, lam1, lam2, xm, ym, zm, qa;
    a1 = randnz(3);
    b1 = randnz(3);
    c1 = randnz(3);
    d1 = rand(3);
    e1 = rand(3);
    f1 = rand(3);
    ch = rand(1, 10);
    if (ch < 6) {
      a2 = randnz(3);
      b2 = randnz(3);
      c2 = randnz(3);
      d2 = rand(3);
      e2 = rand(3);
      f2 = rand(3);
    } else if (ch < 10) {
      a2 = randnz(2);
      b2 = randnz(2);
      c2 = randnz(2);
      if ((a1 * b1 * c1) % 6 === 0) {
        if (rand()) {
          if (a1 % 3 === 0) {
            a1 /= 3;
          }
          if (b1 % 3 === 0) {
            b1 /= 3;
          }
          if (c1 % 3 === 0) {
            c1 /= 3;
          }
        } else {
          if (a1 % 2 === 0) {
            a1 /= 2;
          }
          if (b1 % 2 === 0) {
            b1 /= 2;
          }
          if (c1 % 2 === 0) {
            c1 /= 2;
          }
        }
      }
      if ((a2 * d1) % a1 !== 0) {
        a2 *= a1;
        b2 *= a1;
        c2 *= a1;
      }
      if ((b2 * e1) % b1 !== 0) {
        a2 *= b1;
        b2 *= b1;
        c2 *= b1;
      }
      if ((c2 * f1) % c1 !== 0) {
        a2 *= c1;
        b2 *= c1;
        c2 *= c1;
      }
      d2 = a2 * d1 / a1;
      e2 = b2 * e1 / b1;
      f2 = c2 * f1 / c1;
      m1 = Math.abs(Math.min(d2, Math.min(e2, f2)));
      m2 = Math.max(d2, Math.max(e2, f2));
      if (m1 > 4) {
        d2 += 4;
        e2 += 4;
        f2 += 4;
      }
      if (m2 > 4) {
        d2 -= 2;
        e2 -= 2;
        f2 -= 2;
      }
      m1 = gcd(a2, b2, c2, d2, e2, f2);
      if (m1 > 1) {
        a2 /= m1;
        b2 /= m1;
        c2 /= m1;
        d2 /= m1;
        e2 /= m1;
        f2 /= m1;
      }
    } else {
      sn = randnz(2);
      a2 = a1 * sn;
      b2 = b1 * sn;
      c2 = c1 * sn;
      d2 = rand(3);
      e2 = rand(3);
      f2 = rand(3);
    }
    p1 = new poly(1);
    p1[0] = d1;
    p1[1] = a1;
    q1 = new poly(1);
    q1[0] = e1;
    q1[1] = b1;
    r1 = new poly(1);
    r1[0] = f1;
    r1[1] = c1;
    p2 = new poly(1);
    p2[0] = d2;
    p2[1] = a2;
    q2 = new poly(1);
    q2[0] = e2;
    q2[1] = b2;
    r2 = new poly(1);
    r2[0] = f2;
    r2[1] = c2;
    eqn1 = p1.write("x") + " = " + q1.write("y") + " = " + r1.write("z");
    eqn2 = p2.write("x") + " = " + q2.write("y") + " = " + r2.write("z");
    qString = "Consider the lines$$" + eqn1 + "$$and$$" + eqn2 + "$$Find the angle between them<br>and determine whether they<br>intersect.";
    aString = "";
    if (a1 * b2 === b1 * a2 && b1 * c2 === c1 * b2) {
      if (a2 * b2 * d1 - b2 * a1 * d2 === a2 * b2 * e1 - a2 * b1 * e2 && b2 * c2 * e1 - c2 * b1 * e2 === b2 * c2 * f1 - b2 * c1 * f2) {
        aString += "\\mbox{The lines are identical.}";
      } else {
        aString += "The lines are parallel and do not meet.";
      }
    } else {
      cosbot = new sqroot((Math.pow(b1, 2) * Math.pow(c1, 2) + Math.pow(c1, 2) * Math.pow(a1, 2) + Math.pow(a1, 2) * Math.pow(b1, 2)) * (Math.pow(b2, 2) * Math.pow(c2, 2) + Math.pow(c2, 2) * Math.pow(a2, 2) + Math.pow(a2, 2) * Math.pow(b2, 2)));
      costh = new frac(b1 * b2 * c1 * c2 + c1 * c2 * a1 * a2 + a1 * a2 * b1 * b2, cosbot.a);
      cosbot.a = costh.bot;
      aString += "The angle between the lines is$$";
      if (costh.top === 0) {
        aString += "\\pi / 2.$$";
      } else {
        aString += "\\arccos\\left(";
        if (cosbot.n === 1) {
          aString += costh.write();
        } else {
          aString += "\\frac{" + costh.top + "}{" + cosbot.write() + "}";
        }
        aString += "\\right).$$";
      }
      mu = new frac();
      lam1 = new frac();
      lam2 = new frac();
      if (a1 * b2 - a2 * b1) {
        mu.set(a2 * b2 * (e1 - d1) - a2 * b1 * e2 + a1 * b2 * d2, a1 * b2 - a2 * b1);
        lam1.set(b1 * mu.top - b1 * e2 * mu.bot + e1 * b2 * mu.bot, mu.bot * b2);
        lam2.set(c1 * mu.top - c1 * f2 * mu.bot + f1 * c2 * mu.bot, mu.bot * c2);
      } else {
        mu.set(b2 * c2 * (f1 - e1) - b2 * c1 * f2 + b1 * c2 * e2, b1 * c2 - b2 * c1);
        lam1.set(c1 * mu.top - c1 * f2 * mu.bot + f1 * c2 * mu.bot, mu.bot * c2);
        lam2.set(a1 * mu.top - a1 * d2 * mu.bot + d1 * a2 * mu.bot, mu.bot * a2);
      }
      if (lam1.equals(lam2)) {
        xm = new frac(lam1.top - d1 * lam1.bot, a1 * lam1.bot);
        ym = new frac(lam1.top - e1 * lam1.bot, b1 * lam1.bot);
        zm = new frac(lam1.top - f1 * lam1.bot, c1 * lam1.bot);
        aString += "The lines meet at the point$$\\left(" + xm.write() + "," + ym.write() + "," + zm.write() + "\\right).$$";
      } else {
        aString += "The lines do not meet.";
      }
    }
    qa = [qString, aString];
    return qa;
  };
  problems.makeLinesEq = makeLinesEq = function(){
    var makeLines1, qa;
    makeLines1 = function(){
      var a, b, c, d, qString, aString, grad, intercept, qa;
      a = rand(6);
      b = rand(6);
      c = rand(6);
      d = rand(6);
      while (a === c && b === d) {
        c = rand(6);
        d = rand(6);
      }
      qString = "Find the equation of the line passing through \\((" + a + "," + b + ")\\) and \\((" + c + "," + d + ")\\).";
      if (b === d) {
        aString = "$$y = " + b + ".$$";
      }
      if (a === c) {
        aString = "$$x = " + a + ".$$";
      } else {
        if (d - b === c - a) {
          grad = "";
        } else if (d - b === a - c) {
          grad = " - ";
        } else {
          grad = new frac(d - b, c - a);
          grad = grad.write();
        }
      }
      intercept = new frac(Math.abs(b * (c - a) - (d - b) * a), Math.abs(c - a));
      intercept = intercept.write();
      if (b - (d - b) / (c - a) * a < 0) {
        intercept = " - " + intercept;
      } else if (b * (c - a) === (d - b) * a) {
        intercept = "";
      } else {
        intercept = " + " + intercept;
      }
      aString = "$$y = " + grad + "x" + intercept + "\\qquad \\text{or} \\qquad " + lineEq1(a, b, c, d) + ".$$";
      qa = [qString, aString];
      return qa;
    };
    qa = makeLines1();
    return qa;
  };
  problems.makeLineParPerp = makeLineParPerp = function(){
    var a, b, c, m, makeLinePar, makeLinePerp, qa;
    a = rand(6);
    b = rand(6);
    c = rand(6);
    m = rand(6);
    makeLinePar = function(a, b, m, c){
      var qString, aString, intercept, qa;
      qString = "Find the equation of the line passing through \\((" + a + "," + b + ")\\) and parallel to the line ";
      if (Math.abs(m) === 6) {
        while (a === c) {
          c = rand(5);
        }
        qString += "\\(x = " + c + "\\).";
        aString = "$$x = " + a + ".$$";
      } else {
        if (rand()) {
          qString += "\\(" + lineEq1(0, c, 1, m + c) + ".\\)";
        } else {
          qString += "\\(" + lineEq2(m, c) + ".\\)";
        }
      }
      intercept = b - m * a;
      if (m === 0) {
        aString = "$$y = " + b + ".$$";
      } else {
        aString = "$$" + lineEq2(m, intercept) + "\\qquad\\text{or}\\qquad " + lineEq1(0, intercept, 1, m + intercept) + "$$";
      }
      qa = [qString, aString];
      return qa;
    };
    makeLinePerp = function(a, b, m, c){
      var qString, aString, grad, intercept, C, qa;
      qString = "Find the equation of the line passing through \\((" + a + "," + b + ")\\) and perpendicular to the line ";
      if (Math.abs(m) === 6) {
        while (a === c) {
          c = rand(5);
        }
        qString += "\\(x = " + c + "\\).";
        aString = "$$y = " + b + ".$$";
      } else if (m === 0) {
        while (a === 0) {
          c = rand(5);
        }
        qString += "\\(y = " + c + "\\).";
        aString = "$$x = " + a + ".$$";
      } else {
        if (rand()) {
          qString += "\\(" + lineEq1(0, c, 1, m + c) + ".\\)";
        } else {
          qString += "\\(" + lineEq2(m, c) + ".\\)";
        }
        aString = "$$y = ";
        grad = new frac(-1, m);
        intercept = new frac(b * m + a, m);
        C = (b * m + a) / m;
        if (m === -1) {
          aString += "x";
        } else if (m === 1) {
          aString += " - x";
        } else {
          aString += grad.write() + "x";
        }
        if (C % 1 === 0 && C !== 0) {
          aString += signedNumber(C);
        } else {
          if (C > 0) {
            aString += " + " + intercept.write();
          } else if (C < 0) {
            aString += intercept.write();
          }
        }
        aString += "\\qquad\\text{or}\\qquad ";
        if (m === 1) {
          aString += "x + y";
        } else if (m === -1) {
          aString += "x - y";
        } else {
          aString += "x" + signedNumber(m) + "y";
        }
        if (-b * m - a !== 0) {
          aString += signedNumber(-b * m - a);
        }
        aString += " = 0.$$";
      }
      qa = [qString, aString];
      return qa;
    };
    qa = pickrand(makeLinePar, makeLinePerp)(a, b, m, c);
    return qa;
  };
  problems.makeCircleEq = makeCircleEq = function(){
    var r, a, b, makeCircleEq1, makeCircleEq2, qa;
    r = rand(2, 7);
    a = rand(6);
    b = rand(6);
    makeCircleEq1 = function(a, b, r){
      var qString, aString, qa;
      qString = "Find the equation of the circle with centre \\((" + a + "," + b + ")\\) and radius \\(" + r + "\\).";
      if (a === 0 && b === 0) {
        aString = "$$" + circleEq1(a, b, r) + ".$$";
      } else {
        aString = "$$" + circleEq1(a, b, r) + "\\qquad\\text{or}\\qquad " + circleEq2(a, b, r) + ".$$";
      }
      qa = [qString, aString];
      return qa;
    };
    makeCircleEq2 = function(a, b, r){
      var qString, aString, qa;
      qString = "Find the centre and radius of the circle with equation";
      if (rand()) {
        qString += "$$" + circleEq1(a, b, r) + ".$$";
      } else {
        qString += "$$" + circleEq2(a, b, r) + ".$$";
      }
      aString = "The circle has centre \\((" + a + "," + b + ")\\) and radius \\(" + r + " \\).";
      qa = [qString, aString];
      return qa;
    };
    if (rand()) {
      qa = makeCircleEq1(a, b, r);
    } else {
      qa = makeCircleEq2(a, b, r);
    }
    return qa;
  };
  problems.makeCircLineInter = makeCircLineInter = function(){
    var makeLLInter, makeCLInter, makeCCInter, qa;
    makeLLInter = function(){
      var m1, m2, c1, c2, qString, aString, xint, yint, qa;
      m1 = rand(6);
      m2 = rand(6);
      c1 = rand(6);
      c2 = rand(6);
      if (rand()) {
        m1 = m2;
      }
      while (m1 === m2 && c1 === c2) {
        m2 = rand(6);
        c2 = rand(6);
      }
      qString = "Find all the points where the line \\(";
      if (rand()) {
        qString += lineEq1(0, c1, 1, m1 + c1);
      } else {
        qString += lineEq2(m1, c1);
      }
      qString += "\\) and the line \\(";
      if (rand()) {
        qString += lineEq1(0, c2, 1, m2 + c2);
      } else {
        qString += lineEq2(m2, c2);
      }
      qString += "\\) intersect.";
      if (m1 === m2) {
        aString = "The lines do not intersect.";
      } else {
        xint = new frac(c2 - c1, m1 - m2);
        yint = new frac(m1 * (c2 - c1) + c1 * (m1 - m2), m1 - m2);
        aString = "The lines intersect in a single point, which occurs at \\(\\left(" + xint.write() + "," + yint.write() + "\\right)\\).";
      }
      qa = [qString, aString];
      return qa;
    };
    makeCLInter = function(){
      var a, b, r, m, c, qString, A, B, C, disc, sq, aString, xint, yint, qa;
      a = rand(6);
      b = rand(6);
      r = rand(2, 7);
      m = rand(6);
      c = rand(6);
      qString = "Find all the points where the line \\(";
      if (rand()) {
        qString += lineEq1(0, c, 1, m + c);
      } else {
        qString += lineEq2(m, c);
      }
      qString += "\\) and the circle \\( ";
      if (rand()) {
        qString += circleEq1(a, b, r);
      } else {
        qString += circleEq2(a, b, r);
      }
      qString += "\\) intersect.";
      A = Math.pow(m, 2) + 1;
      B = -2 * a + 2 * m * (c - b);
      C = Math.pow(c - b, 2) - Math.pow(r, 2) + Math.pow(a, 2);
      disc = Math.pow(B, 2) - 4 * A * C;
      sq = new sqroot(disc);
      if (disc > 0) {
        aString = "The line and the circle intersect in two points, specifically ";
        aString += "$$\\left(";
        aString += simplifySurd(-B, sq.a, sq.n, 2 * A);
        aString += "," + simplifySurd(-m * B + 2 * c * A, m * sq.a, sq.n, 2 * A);
        aString += "\\right)";
        aString += "\\qquad\\text{and}\\qquad ";
        aString += "\\left(";
        aString += simplifySurd(-B, -sq.a, sq.n, 2 * A);
        aString += "," + simplifySurd(-m * B + 2 * c * A, -m * sq.a, sq.n, 2 * A);
        aString += "\\right)$$";
      } else if (disc < 0) {
        aString = "The line and the circle do not intersect in any points.";
      } else if (disc === 0) {
        xint = new frac(-B, 2 * A);
        yint = new frac(-B * m + c * 2 * A, 2 * A);
        aString = "The line and the circle intersect in exactly one point, which occurs at \\(\\left(" + xint.write() + "," + yint.write() + "\\right)\\).";
      }
      qa = [qString, aString];
      return qa;
    };
    makeCCInter = function(){
      var a1, b1, r1, a2, b2, r2, qString, D, DD, R, RR, S, aString, d, x1, y1, qa;
      a1 = rand(6);
      b1 = rand(6);
      r1 = rand(2, 7);
      a2 = rand(6);
      b2 = rand(6);
      r2 = rand(2, 7);
      while (a1 === a2 && b1 === b2 && r1 === r2) {
        a2 = rand(6);
        b2 = rand(6);
        r2 = rand(2, 7);
      }
      qString = "Find all the points where the circle \\(";
      if (rand()) {
        qString += circleEq1(a1, b1, r1);
      } else {
        qString += circleEq2(a1, b1, r1);
      }
      qString += "\\) and the circle \\(";
      if (rand()) {
        qString += circleEq1(a2, b2, r2);
      } else {
        qString += circleEq2(a2, b2, r2);
      }
      qString += "\\) intersect.";
      D = Math.sqrt(Math.pow(b2 - b1, 2) + Math.pow(a2 - a1, 2));
      DD = Math.pow(b2 - b1, 2) + Math.pow(a2 - a1, 2);
      R = r1 + r2;
      RR = Math.pow(r1, 2) - Math.pow(r2, 2);
      S = Math.abs(r1 - r2);
      if (R > D && D > S) {
        aString = "The circles intersect in two points, which are";
        d = new sqroot(-Math.pow(DD, 2) + 2 * DD * Math.pow(r1, 2) - Math.pow(r1, 4) + 2 * DD * Math.pow(r2, 2) + 2 * Math.pow(r1, 2) * Math.pow(r2, 2) - Math.pow(r2, 4));
        aString += "$$\\left(";
        aString += simplifySurd((a1 + a2) * DD + (a2 - a1) * RR, (b1 - b2) * d.a, d.n, 2 * DD) + ",";
        aString += simplifySurd((b1 + b2) * DD + (b2 - b1) * RR, (a2 - a1) * d.a, d.n, 2 * DD);
        aString += "\\right)";
        aString += "\\qquad\\text{and}\\qquad ";
        aString += "\\left(";
        aString += simplifySurd((a1 + a2) * DD + (a2 - a1) * RR, (b2 - b1) * d.a, d.n, 2 * DD) + ",";
        aString += simplifySurd((b1 + b2) * DD + (b2 - b1) * RR, (a1 - a2) * d.a, d.n, 2 * DD);
        aString += "\\right)";
        aString += "$$";
      } else if (DD === Math.pow(R, 2)) {
        x1 = new frac(a1 * R + r1 * (a2 - a1), R);
        y1 = new frac(b1 * R + r1 * (b2 - b1), R);
        aString = "The circles intersect in a single point, which is \\((" + x1.write() + "," + y1.write() + ")\\).";
      } else if (D > R || D <= S) {
        aString = "The two circles do not intersect in any points.";
      } else {
        aString = "Uh oh, something went wrong. Please try another question.";
      }
      qa = [qString, aString];
      return qa;
    };
    qa = pickrand(makeCLInter, makeLLInter, makeCCInter)();
    return qa;
  };
  problems.makeIneq = makeIneq = function(){
    var makeIneq2, makeIneq3, qa;
    makeIneq2 = function(){
      var roots, B, C, qString, p, aString, qa;
      roots = distrandnz(2, 6);
      B = -roots[0] - roots[1];
      C = roots[0] * roots[1];
      qString = "By factorising a suitable polynomial, or otherwise, find the values of \\(x\\) which satisfy$$";
      p = new poly(2);
      switch (rand(1, 3)) {
      case 1:
        p[0] = 0;
        p[1] = B;
        p[2] = 1;
        qString += p.write() + " < " + (-C);
        break;
      case 2:
        p[0] = C;
        p[1] = 0;
        p[2] = 1;
        qString += p.write() + " < ";
        if (B) {
          qString += ascoeff(-B) + "x";
        } else {
          qString += "0";
        }
        break;
      case 3:
        p[0] = -C;
        p[1] = -B;
        p[2] = 0;
        qString += "x^2" + " < " + p.write();
      }
      qString += "$$";
      aString = "$$" + Math.min(roots[0], roots[1]) + " < x < " + Math.max(roots[0], roots[1]) + "$$";
      qa = [qString, aString];
      return qa;
    };
    makeIneq3 = function(){
      var a, b, c, qString, B, C, D, p, q, m, r, aString, qa;
      a = randnz(5);
      b = randnz(5);
      c = rand(2);
      qString = "By factorising a suitable polynomial, or otherwise, find the values of \\(y\\) which satisfy$$";
      B = -(a + b + c);
      C = a * b + b * c + c * a;
      D = -a * b * c;
      p = new poly(3);
      p.set(0, 0, 0, 1);
      q = new poly(2);
      q.set(0, 0, 0);
      switch (rand(1, 3)) {
      case 1:
        p[2] = B;
        q[1] = -C;
        q[0] = -D;
        break;
      case 2:
        p[1] = C;
        q[2] = -B;
        q[0] = -D;
        break;
      case 3:
        p[0] = D;
        q[2] = -B;
        q[1] = -C;
      }
      qString += p.write('y') + " < " + q.write('y') + "$$";
      m = [a, b, c];
      r = ranking(m);
      aString = "$$y < " + m[r[0]];
      if (m[r[1]] !== m[r[2]]) {
        aString += "$$and$$" + m[r[1]] + " < y < " + m[r[2]] + "$$";
      } else {
        aString += "$$";
      }
      qa = [qString, aString];
      return qa;
    };
    qa = pickrand(makeIneq2, makeIneq3)();
    return qa;
  };
  problems.makeAP = makeAP = function(){
    var m, n, k, a1, a2, qString, aString, qa;
    m = rand(2, 6);
    n = rand(m + 2, 11);
    k = rand(Math.max(n + 3, 10), 40);
    a1 = new frac();
    a2 = new frac();
    qString = "An arithmetic progression has " + ordt(m) + " term \\(\\alpha\\) and " + ordt(n) + " term \\(\\beta\\). Find the ";
    if (rand() === 0) {
      qString += "sum to \\(" + k + "\\) terms.";
      a1.set(k * (2 * n - 1 - k), 2 * (n - m));
      a2.set(k * (1 + k - 2 * m), 2 * (n - m));
    } else {
      qString += "value of the \\(" + ordt(k) + "\\) term.";
      a1.set(n - k, n - m);
      a2.set(k - m, n - m);
    }
    aString = "$$" + fcoeff(a1, "\\alpha") + (a2.top > 0 ? " + " : " - ") + fbcoeff(a2, "\\beta") + "$$";
    qa = [qString, aString];
    return qa;
  };
  problems.makeFactor = makeFactor = function(){
    var makeFactor1, makeFactor2, makeFactor3;
    makeFactor1 = function(){
      var a, b, c, u, v, w, x, qString, aString, qa;
      a = randnz(4);
      b = randnz(7);
      c = randnz(7);
      u = new poly(1);
      v = new poly(1);
      w = new poly(1);
      u[1] = v[1] = w[1] = 1;
      u[0] = a;
      v[0] = b;
      w[0] = c;
      x = polyexpand(polyexpand(u, v), w);
      qString = "Divide $$" + x.write() + "$$ by $$(" + u.write() + ")$$ and hence factorise it completely.";
      aString = "$$" + express([a, b, c]) + "$$";
      qa = [qString, aString];
      return qa;
    };
    makeFactor2 = function(){
      var a, b, c, u, v, w, x, qString, aString, qa;
      a = randnz(2);
      b = randnz(5);
      c = randnz(5);
      u = new poly(1);
      v = new poly(1);
      w = new poly(1);
      u[1] = v[1] = w[1] = 1;
      u[0] = a;
      v[0] = b;
      w[0] = c;
      x = polyexpand(polyexpand(u, v), w);
      qString = "Use the factor theorem to factorise $$" + x.write() + ".$$";
      aString = "$$" + express([a, b, c]) + "$$";
      qa = [qString, aString];
      return qa;
    };
    makeFactor3 = function(){
      var a, b, c, d, u, v, w, y, x, z, qString, aString, qa;
      a = randnz(2);
      b = randnz(4);
      c = randnz(4);
      d = randnz(4);
      if (d === c) {
        d = -d;
      }
      u = new poly(1);
      v = new poly(1);
      w = new poly(1);
      y = new poly(1);
      u[1] = v[1] = w[1] = y[1] = 1;
      u[0] = a;
      v[0] = b;
      w[0] = c;
      y[0] = d;
      x = polyexpand(polyexpand(u, v), w);
      z = polyexpand(polyexpand(u, v), y);
      qString = "Simplify$$\\frac{" + x.write() + "}{" + z.write() + "}.$$";
      aString = "$$\\frac{" + w.write() + "}{" + y.write() + "}$$";
      qa = [qString, aString];
      return qa;
    };
    return pickrand(makeFactor1, makeFactor2, makeFactor3)();
  };
  problems.makeQuadratic = makeQuadratic = function(){
    var qString, p, dcr, aString, r1, disc, r2, roots, qa;
    qString = "Find the real roots, if any, of$$";
    if (rand()) {
      p = new poly(2);
      p.setrand(5);
      p[2] = 1;
      qString += p.write();
      dcr = Math.pow(p[1], 2) - 4 * p[0];
      if (dcr < 0) {
        aString = "There are no real roots.";
      } else if (dcr === 0) {
        r1 = new frac(-p[1], 2);
        aString = "$$x = " + r1.write() + "$$is a repeated root.";
      } else {
        disc = new sqroot(dcr);
        r1 = new frac(-p[1], 2);
        if (disc.n === 1) {
          r1.add(disc.a, 2);
          aString = "$$x = " + r1.write() + "\\mbox{ and }x = ";
          r1.add(-disc.a);
          aString += r1.write() + "$$";
        } else {
          r2 = new frac(disc.a, 2);
          aString = "$$x = ";
          if (r1.top) {
            aString += r1.write();
          }
          aString += +"\\pm";
          if (r2.top !== 1 || r2.bot !== 1) {
            aString += r2.write();
          }
          aString += "\\sqrt{" + disc.n + "}$$";
        }
      }
    } else {
      roots = distrandnz(2, 5);
      p = new poly(2);
      p[2] = 1;
      p[1] = -roots[0] - roots[1];
      p[0] = roots[0] * roots[1];
      qString += p.write();
      aString = "$$x = " + roots[0] + "\\mbox{ and }x = " + roots[1] + "$$";
    }
    qString += " = 0$$";
    qa = [qString, aString];
    return qa;
  };
  problems.makeComplete = makeComplete = function(){
    var a, b, p, qString, aString, c, d, qa;
    a = randnz(4);
    b = randnz(5);
    p = new poly(2);
    p[2] = 1;
    p[1] = -2 * a;
    p[0] = Math.pow(a, 2) + b;
    if (rand()) {
      qString = "By completing the square, find (for real \\(x\\)) the minimum value of$$" + p.write() + ".$$";
      aString = "The minimum value is \\(" + b + ",\\) which occurs at \\(x = " + a + "\\).";
    } else {
      c = randnz(3);
      d = randnz(c + 2, c + 4);
      qString = "Find the minimum value of$$" + p.write() + "$$in the range$$" + c + "\\leq x\\leq" + d + ".$$";
      if (c <= a && a <= d) {
        aString = "The minimum value is \\(" + b + "\\) which occurs at \\(x = " + a + "\\)";
      } else if (a < c) {
        aString = "The minimum value is \\(" + (Math.pow(c, 2) - 2 * a * c + Math.pow(a, 2) + b) + "\\) which occurs at \\(x = " + c + "\\)";
      } else {
        aString = "The minimum value is \\(" + (Math.pow(d, 2) - 2 * a * d + Math.pow(a, 2) + b) + "\\) which occurs at \\(x = " + d + "\\)";
      }
    }
    qa = [qString, aString];
    return qa;
  };
  problems.makeBinExp = makeBinExp = function(){
    var a, b, n, m, pow, p, qString, q, aString, qa;
    a = rand(1, 3);
    b = randnz(2);
    n = rand(2, 5);
    m = rand(1, n - 1);
    pow = new frac(m, n);
    p = new fpoly(1);
    p[0] = new frac(1, 1);
    p[1] = new frac(b, a);
    qString = "Find the first four terms in the expansion of $$\\left(" + p.rwrite() + "\\right)^{" + pow.write() + "}$$";
    q = new fpoly(3);
    q[0] = new frac(1);
    q[1] = new frac(m * b, n * a);
    q[2] = new frac(m * (m - n) * Math.pow(b, 2), 2 * Math.pow(n, 2) * Math.pow(a, 2));
    q[3] = new frac(m * (m - n) * (m - 2 * n) * Math.pow(b, 3), 6 * Math.pow(n, 3) * Math.pow(a, 3));
    aString = "$$" + q.rwrite() + "$$";
    qa = [qString, aString];
    return qa;
  };
  problems.makeLog = makeLog = function(){
    var makeLog1, makeLog2, makeLog3, qa;
    makeLog1 = function(){
      var a, m, n, qString, r, aString, qa;
      a = pickrand(2, 3, 5);
      m = rand(1, 4);
      n = rand(1, 4);
      if (n >= m) {
        n++;
      }
      qString = "If \\(" + Math.pow(a, m) + " = " + Math.pow(a, n) + "^{x},\\) then find \\(x\\).";
      r = new frac(m, n);
      aString = "$$x = " + r.write() + "$$";
      qa = [qString, aString];
      return qa;
    };
    makeLog2 = function(){
      var a, b, c, qString, aString, qa;
      a = rand(2, 9);
      b = rand(2, 5);
      c = Math.pow(b, 2);
      qString = "Find \\(x\\) if \\(" + c + "\\log_{x}" + a + " = \\log_{" + a + "}x\\).";
      aString = "$$x = " + Math.pow(a, b) + "\\mbox{ or }x = \\frac{1}{" + Math.pow(a, b) + "}$$";
      qa = [qString, aString];
      return qa;
    };
    makeLog3 = function(){
      var a, b, qString, c, aString, qa;
      a = rand(2, 7);
      b = Math.floor(Math.pow(a, 7 * Math.random()));
      qString = "If \\(" + a + "^{x} = " + b + "\\), then find \\(x\\) to three decimal places.";
      c = new Number(Math.log(b) / Math.log(a));
      aString = "$$x = " + c.toFixed(3) + "$$";
      qa = [qString, aString];
      return qa;
    };
    qa = pickrand(makeLog1, makeLog2, makeLog3)();
    return qa;
  };
  problems.makeStationary = makeStationary = function(){
    var makeStationary2, makeStationary3, qa;
    makeStationary2 = function(){
      var p, d, qString, aString, qa;
      p = new poly(2);
      p.set(randnz(4), randnz(8), randnz(4));
      d = new frac(-p[1], 2 * p[2]);
      qString = "Find the stationary point of $$y = " + p.write() + ",$$ and state whether it is a maximum or a minimum.";
      aString = "The stationary point occurs at \\(x = " + d.write() + "\\), and it is a ";
      if (p[2] > 0) {
        aString += "minimum.";
      } else {
        aString += "maximum.";
      }
      qa = [qString, aString];
      return qa;
    };
    makeStationary3 = function(){
      var p, d, c, b, a, qString, aString, qa;
      p = new poly(3);
      d = randnz(4);
      c = randnz(3);
      b = randnz(3);
      a = randnz(5);
      if (Math.abs(c * (b + a)) % 2 === 1) {
        b++;
      }
      p.set(d, 3 * c * a * b, -3 * c * (a + b) / 2, c);
      qString = "Find the stationary points of $$y = " + p.write() + ",$$ and state their nature.";
      if (a === b) {
        aString = "The stationary point occurs at \\(x = " + a + ",\\) and is a point of inflexion.";
      } else if (c > 0) {
        aString = "The stationary points occur at \\(x = " + Math.min(a, b) + "\\), a maximum, and \\(x = " + Math.max(a, b) + "\\), a minimum";
      } else {
        aString = "The stationary points occur at \\(x = " + Math.min(a, b) + "\\), a minimum, and \\(x = " + Math.max(a, b) + "\\), a maximum";
      }
      qa = [qString, aString];
      return qa;
    };
    if (rand()) {
      qa = makeStationary2();
    } else {
      qa = makeStationary3();
    }
    return qa;
  };
  problems.makeTriangle = makeTriangle = function(){
    var makeTriangle1, makeTriangle2, makeTriangle3, qa;
    makeTriangle1 = function(){
      var a, b, m, s, hyp, shortv, other, angle, qString, length, aString, qa;
      a = rand(3, 8);
      b = rand(a + 1, 16);
      m = distrand(3, 0, 2);
      s = ["AB", "BC", "CA"];
      hyp = s[m[0]];
      shortv = s[m[1]];
      other = s[m[2]];
      switch (hyp) {
      case "AB":
        angle = "C";
        break;
      case "BC":
        angle = "A";
        break;
      case "CA":
        angle = "B";
      }
      qString = "In triangle \\(ABC\\), \\(" + shortv + " = " + a + "\\), \\(" + hyp + " = " + b + ",\\) and angle \\(" + angle + "\\) is a right angle. Find the length of \\(" + other + "\\).";
      length = new sqroot(Math.pow(b, 2) - Math.pow(a, 2));
      aString = "$$" + other + " = " + length.write() + "$$";
      qa = [qString, aString];
      return qa;
    };
    makeTriangle2 = function(){
      var a, b, c, qString, aa, bb, cc, aString, qa;
      a = rand(2, 8);
      b = rand(1, 6);
      c = rand(Math.max(a, b) - Math.min(a, b) + 1, a + b - 1);
      qString = "In triangle \\(ABC\\), \\(AB = " + c + "\\), \\(BC = " + a + ",\\) and \\(CA = " + b + ".\\) Find the angles of the triangle.";
      aa = new frac(Math.pow(b, 2) + Math.pow(c, 2) - Math.pow(a, 2), 2 * b * c);
      bb = new frac(Math.pow(c, 2) + Math.pow(a, 2) - Math.pow(b, 2), 2 * c * a);
      cc = new frac(Math.pow(a, 2) + Math.pow(b, 2) - Math.pow(c, 2), 2 * a * b);
      aString = "$$\\cos A = " + aa.write() + ",\\cos B = " + bb.write() + ",\\cos C = " + cc.write() + ".$$";
      qa = [qString, aString];
      return qa;
    };
    makeTriangle3 = function(){
      var a, cc, lb, c, qString, d, aString, qa;
      a = rand(1, 6);
      cc = pickrand(3, 4, 6);
      lb = a * Math.ceil(Math.sin(Math.PI / cc));
      c = rand(lb, Math.max(5, lb + 1));
      qString = "In triangle \\(ABC\\), \\(AB = " + c + "\\), \\(BC = " + a + "\\) and angle \\(C = \\frac{\\pi}{" + cc + "}\\). Find angle \\(A\\).";
      d = new frac(a, 2 * c);
      aString = "$$A = \\arcsin\\left(" + d.write();
      if (cc === 3) {
        aString += "\\sqrt{3}";
      } else if (cc === 4) {
        aString += "\\sqrt{2}";
      }
      aString += "\\right)$$";
      qa = [qString, aString];
      return qa;
    };
    qa = pickrand(makeTriangle1, makeTriangle2, makeTriangle3)();
    return qa;
  };
  problems.makeCircle = makeCircle = function(){
    var r, bot, top, prop, qString, length, area, aString, qa;
    r = rand(2, 8);
    bot = rand(2, 9);
    top = rand(1, 2 * bot - 1);
    prop = new frac(top, bot);
    qString = "Find, for a sector of angle \\(";
    if (prop.bot === 1) {
      qString += ascoeff(prop.top) + "\\pi";
    } else {
      qString += "\\frac{" + ascoeff(prop.top) + "\\pi}{" + prop.bot + "}";
    }
    qString += "\\) of a disc of radius \\(" + r + ":\\)<ul class=\"exercise\"><li> the length of the perimeter and</li><li>the area.</li></ul>";
    length = new frac(prop.top * r, prop.bot);
    area = new frac(prop.top * Math.pow(r, 2), 2 * prop.bot);
    aString = "<ul class=\"exercise\"><li>\\(" + r * 2 + " + " + length.write() + "\\pi\\)</li><li>\\(" + area.write() + "\\pi\\)</li></ul>";
    qa = [qString, aString];
    return qa;
  };
  problems.makeSolvingTrig = makeSolvingTrig = function(){
    var A, alpha, c, qString, aString, qa;
    A = pickrand(1, 3, 4, 5);
    alpha = pickrand(3, 4, 6);
    c = new frac(A, 2);
    qString = "Write $$" + c.write();
    if (alpha === 6) {
      qString += "\\sqrt{3}";
    } else if (alpha === 4) {
      qString += "\\sqrt{2}";
    }
    qString += "\\sin{\\theta} + " + c.write();
    if (alpha === 4) {
      qString += "\\sqrt{2}";
    } else if (alpha === 3) {
      qString += "\\sqrt{3}";
    }
    qString += "\\cos{\\theta}$$ in the form \\(A\\sin(\\theta + \\alpha),\\) where \\(A\\) and \\(\\alpha\\) are to be determined.";
    if (A === 1) {
      aString = "$$";
    } else {
      aString = "$$" + A;
    }
    aString += "\\sin\\left(\\theta + \\frac{\\pi}{" + alpha + "}\\right)$$";
    qa = [qString, aString];
    return qa;
  };
  problems.makeVectorEq = makeVectorEq = function(){
    var a, b, l, v, i$, i, qString, aString, qa;
    a = new vector(3);
    a.setrand(6);
    b = new vector(3);
    b.setrand(6);
    l = distrand(3, 5);
    v = new Array(3);
    for (i$ = 0; i$ <= 2; ++i$) {
      i = i$;
      v[i] = new vector(3);
      v[i].set(a[0] + l[i] * b[0], a[1] + l[i] * b[1], a[2] + l[i] * b[2]);
    }
    qString = "Show that the points with position vectors$$" + v[0].write() + "\\,," + v[1].write() + "\\,," + v[2].write() + "$$";
    qString += "lie on a straight line, and give the equation of the line in the form \\(\\mathbf{r} = \\mathbf{a} + \\lambda\\mathbf{b}\\).";
    aString = '$$' + a.write() + " + \\lambda\\," + b.write() + '$$';
    qa = [qString, aString];
    return qa;
  };
  problems.makeModulus = makeModulus = function(){
    var parms, fn, data, graph, a, aa, l, r, qString, drawIt, aString, params, s, xa, qa;
    parms = 0;
    fn = 0;
    data = [];
    graph = null;
    drawIt;
    if (rand()) {
      a = randnz(4);
      aa = Math.abs(a);
      l = rand(-aa - 6, -aa - 2);
      r = rand(aa + 2, aa + 6);
      qString = "Sketch the graph of \\(|" + a + " - |x||\\) for \\(" + l + "\\leq{x}\\leq" + r + "\\).";
      drawIt = function(parms){
        var d1, n, i$, to$, i;
        d1 = [];
        n = 0;
        for (i$ = parms[1], to$ = parms[2]; i$ <= to$; i$ += 0.5) {
          i = i$;
          n++;
          d1.push([i, Math.abs(parms[0] - Math.abs(i))]);
          if (n > 50) {
            i = parms[2];
          }
        }
        return [d1];
      };
      aString = '%GRAPH%';
      params = [a, l, r];
    } else {
      a = distrandnz(2, 4);
      s = [rand(), rand()];
      xa = Math.max(Math.abs(a[0]), Math.abs(a[1]));
      l = rand(-xa - 6, -xa - 2);
      r = rand(xa + 2, xa + 6);
      qString = "Sketch the graph of \\((" + a[0];
      if (s[0]) {
        qString += " + ";
      } else {
        qString += " - ";
      }
      qString += "|x|)(" + a[1];
      if (s[1]) {
        qString += " + ";
      } else {
        qString += " - ";
      }
      qString += "|x|)\\) for \\(" + l + "\\leq{x}\\leq" + r + "\\).";
      drawIt = function(parms){
        var a, s, l, r, d1, n, i$, i, s0, s1;
        a = parms[0];
        s = parms[1];
        l = parms[2];
        r = parms[3];
        d1 = [];
        n = 0;
        for (i$ = l; i$ <= r; i$ += 0.25) {
          i = i$;
          n++;
          if (s[0]) {
            s0 = 1;
          } else {
            s0 = -1;
          }
          if (s[1]) {
            s1 = 1;
          } else {
            s1 = -1;
          }
          d1.push([i, (a[0] + s0 * Math.abs(i)) * (a[1] + s1 * Math.abs(i))]);
          if (n > 100) {
            i = r;
          }
        }
        return [d1];
      };
      aString = '%GRAPH%';
      params = [a, s, l, r];
    }
    qa = [qString, aString, drawIt, params];
    return qa;
  };
  problems.makeTransformation = makeTransformation = function(){
    var fnn, which, fnf, parms, fn, data, p, q, l, r, qString, drawIt, aString, qa;
    fnn = new Array("\\ln(z)", "\\csc(z)", "\\sec(z)", "\\sin(z)", "\\tan(z)", "\\cos(z)", "{z}^{2}");
    which = rand(0, 6);
    fnf = [
      Math.log, function(x){
        return 1 / Math.sin(x);
      }, function(x){
        return 1 / Math.cos(x);
      }, Math.sin, function(x){
        return Math.tan(x);
      }, Math.cos, function(x){
        return Math.pow(x, 2);
      }
    ][which];
    parms = 0;
    fn = 0;
    data = "";
    p = new poly(1);
    p.setrand(2);
    q = new poly(1);
    q.setrand(3);
    q[1] = Math.abs(q[1]);
    if (rand()) {
      p[1] = 1;
    } else if (rand()) {
      q[1] = 1;
    } else if (rand()) {
      p[0] = 0;
    } else {
      q[0] = 0;
    }
    if (which) {
      l = rand(-5, 2);
    } else {
      l = Math.max(Math.ceil((1 - q[0]) / q[1]), 0);
    }
    r = l + rand(4, 8);
    qString = "Let \\(f(x) = " + fnn[which].replace(/z/g, 'x') + "\\). Sketch the graphs of \\(y = f(x)\\) and \\(y = " + p.write("f(" + q.write() + ")") + "\\) for \\(" + l;
    if (which === 0 && l === 0) {
      qString += " < ";
    } else {
      qString += "\\leq ";
    }
    qString += "x \\leq " + r + "\\).";
    drawIt = function(parms){
      var p, q, f, l, r, d1, d2, n, i$, i, y1, y2;
      p = parms[0];
      q = parms[1];
      f = parms[2];
      l = parms[3];
      r = parms[4];
      d1 = [];
      d2 = [];
      n = 0;
      for (i$ = l; i$ <= r; i$ += 0.01) {
        i = i$;
        n++;
        y1 = f(i);
        if (Math.abs(y1) > 20) {
          y1 = null;
        }
        d1.push([i, y1]);
        y2 = p.compute(f(q.compute(i)));
        if (Math.abs(y2) > 20) {
          y2 = null;
        }
        d2.push([i, y2]);
        if (n > 2500) {
          i = r;
        }
      }
      return [d1, d2];
    };
    aString = '%GRAPH%';
    qa = [qString, aString, drawIt, [p, q, fnf, l, r]];
    return qa;
  };
  problems.makeComposition = makeComposition = function(){
    var p, fnf, fnn, which, parms, fn, data, l, r, qString, drawIt, aString, qa;
    p = new poly(rand(1, 2));
    p.setrand(2);
    if (p.rank === 1 && p[0] === 0 && p[1] === 1) {
      p[0] = randnz(2);
    }
    fnf = new Array(Math.sin, Math.tan, Math.cos, 0);
    fnn = new Array("\\sin(z)", "\\tan(z)", "\\cos(z)", p.write("z"));
    which = distrand(2, 0, 3);
    parms = 0;
    fn = 0;
    data = "";
    l = rand(-4, 0);
    r = rand(Math.max(l + 5, 2), 8);
    qString = "Let \\(f(x) = " + fnn[which[0]].replace(/z/g, 'x') + ", g(x) = " + fnn[which[1]].replace(/z/g, 'x') + ".\\) Sketch the graph of \\(y = f(g(x))\\) (where it exists) for \\(" + l + "\\leq{x}\\leq" + r + "\\) and \\(-12\\leq{y}\\leq12.\\)";
    drawIt = function(parms){
      var f, g, p, l, r, d1, n, i$, i, y2, y3;
      f = parms[0];
      g = parms[1];
      p = parms[2];
      l = parms[3];
      r = parms[4];
      d1 = [];
      n = 0;
      for (i$ = l; i$ <= r; i$ += 0.01) {
        i = i$;
        n++;
        if (g) {
          y2 = g(i);
        } else {
          y2 = p.compute(i);
        }
        if (y2) {
          if (f) {
            y3 = f(y2);
          } else {
            y3 = p.compute(y2);
          }
        } else {
          y3 = null;
        }
        if (Math.abs(y3) > 12) {
          y3 = null;
        }
        d1.push([i, y3]);
        if (n > 2500) {
          i = r;
        }
      }
      return [d1];
    };
    aString = '%GRAPH%';
    qa = [qString, aString, drawIt, [fnf[which[0]], fnf[which[1]], p, l, r]];
    return qa;
  };
  problems.makeParametric = makeParametric = function(){
    var p, fnf, fnn, which, parms, fn, data, qString, drawIt, aString, qa;
    p = new poly(rand(1, 2));
    p.setrand(2);
    if (p.rank === 1 && p[0] === 0 && p[1] === 1) {
      p[0] = randnz(2);
    }
    fnf = new Array(Math.log, function(x){
      return 1 / Math.sin(x);
    }, function(x){
      return 1 / Math.cos(x);
    }, Math.sin, Math.tan, Math.cos, 0);
    fnn = new Array("\\ln(z)", "\\csc(z)", "\\sec(z)", "\\sin(z)", "\\tan(z)", "\\cos(z)", p.write('z'));
    which = distrand(2, 0, 6);
    parms = 0;
    fn = 0;
    data = "";
    qString = "Sketch the curve in the \\(xy\\) plane given by \\(x = " + fnn[which[0]].replace(/z/g, 't') + ", y = " + fnn[which[1]].replace(/z/g, 't') + ". t\\) is a real parameter which ranges from \\(";
    if (which[0] && which[1]) {
      qString += " - 10";
    } else {
      qString += "0";
    }
    qString += " \\mbox{ to } 10.\\)";
    drawIt = function(parms){
      var f, g, p, l, d1, i$, i, x, y;
      f = parms[0];
      g = parms[1];
      p = parms[2];
      l = parms[3];
      d1 = [];
      for (i$ = l; i$ <= 10; i$ += 0.01) {
        i = i$;
        if (f) {
          x = f(i);
        } else {
          x = p.compute(i);
        }
        if (Math.abs(x) > 12) {
          x = null;
        }
        if (g) {
          y = g(i);
        } else {
          y = p.compute(i);
        }
        if (Math.abs(y) > 12) {
          y = null;
        }
        if (x && y) {
          d1.push([x, y]);
        } else {
          d1.push([null, null]);
        }
      }
      return [d1];
    };
    aString = '%GRAPH%';
    if (which[0] && which[1]) {
      qa = [qString, aString, drawIt, [fnf[which[0]], fnf[which[1]], p, -10]];
    } else {
      qa = [qString, aString, drawIt, [fnf[which[0]], fnf[which[1]], p, 0]];
    }
    return qa;
  };
  problems.makeImplicit = makeImplicit = function(){
    var makeImplicit1, makeImplicit2, qa;
    makeImplicit1 = function(){
      var a1, b1, c1, d1, a2, b2, c2, d2, t, qString, a, aString, qa;
      a1 = rand(1, 3);
      b1 = randnz(4);
      c1 = rand(1, 3);
      d1 = randnz(4);
      if (d1 * a1 - b1 * c1 === 0) {
        if (d1 > 0) {
          d1++;
        } else {
          d1--;
        }
      }
      a2 = randnz(3);
      b2 = randnz(4);
      c2 = rand(1, 3);
      d2 = randnz(4);
      if (d2 * a2 - b2 * c2 === 0) {
        if (d2 > 0) {
          d2++;
        } else {
          d2--;
        }
      }
      t = randnz(3);
      while (c1 * t + d1 === 0 || c2 * t + d2 === 0) {
        if (t > 0) {
          t++;
        } else {
          t--;
        }
      }
      qString = "If $$y = \\frac{" + p_linear(a1, b1).write('t') + "}{" + p_linear(c1, d1).write('t') + "}$$ and $$x = \\frac{" + p_linear(a2, b2).write('t') + "}{" + p_linear(c2, d2).write('t') + "},$$find \\(\\frac{\\mathrm{d}y}{\\mathrm{d}x}\\) when \\(t = " + t + "\\).";
      a = new frac((a1 * d1 - b1 * c1) * Math.pow(c2 * t + d2, 2), (a2 * d2 - b2 * c2) * Math.pow(c1 * t + d1, 2));
      aString = "$$" + a.write() + "$$";
      qa = [qString, aString];
      return qa;
    };
    makeImplicit2 = function(){
      var fns, difs, which, p, q, qString, aString, qa;
      fns = new Array("\\ln(z)", "e^{z}", "\\csc(z)", "\\sec(z)", "\\sin(z)", "\\tan(z)", "\\cos(z)");
      difs = new Array("\\frac{1}{z}", "e^{z}", " - \\csc(z)\\cot(z)", "\\sec(z)\\tan(z)", "\\cos(z)", "\\sec^2(z)", "-\\sin(z)");
      which = distrand(2, 0, 6);
      p = new poly(rand(1, 3));
      p.setrand(3);
      q = new poly(1);
      p.diff(q);
      qString = "If $$y + " + fns[which[0]].replace(/z/g, 'y') + " = " + fns[which[1]].replace(/z/g, 'x');
      if (p[p.rank] > 0) {
        qString += " + ";
      }
      qString += p.write('x') + ",$$ find \\(\\frac{\\mathrm{d}y}{\\mathrm{d}x}\\) in terms of \\(y\\) and \\(x\\).";
      aString = "$$\\frac{\\mathrm{d}y}{\\mathrm{d}x} = \\frac{" + difs[which[1]].replace(/z/g, 'x');
      if (q[q.rank] > 0) {
        aString += " + ";
      }
      aString += q.write('x') + "}{" + difs[which[0]].replace(/z/g, 'y') + " + 1}$$";
      qa = [qString, aString];
      return qa;
    };
    if (rand()) {
      qa = makeImplicit1();
    } else {
      qa = makeImplicit2();
    }
    return qa;
  };
  problems.makeChainRule = makeChainRule = function(){
    var fns, difs, even, which, a, b, qString, c, aString, qa;
    fns = new Array("\\ln(z)", "\\csc(z)", "\\sec(z)", "\\sin(z)", "\\tan(z)", "\\cos(z)");
    difs = new Array("\\frac{y}{z}", "-y\\csc(z)\\cot(z)", "y\\sec(z)\\tan(z)", "y\\cos(z)", "y\\sec^2(z)", "-y\\sin(z)");
    even = new Array(-1, 1, -1, 1, 1, -1);
    which = rand(0, 5);
    a = new poly(rand(1, 3));
    a.setrand(8);
    b = new poly(0);
    a.diff(b);
    qString = "Differentiate \\(" + fns[which].replace(/z/g, a.write()) + "\\)";
    if (difs[which].charAt(0) === "-") {
      difs[which] = difs[which].slice(1);
      b.xthru(-1);
    }
    if (a[a.rank] < 0) {
      a.xthru(-1);
      b.xthru(even[which]);
    }
    if (which === 0) {
      c = gcd(a.gcd());
      a.xthru(1.0 / c);
      b.xthru(1.0 / c);
    }
    if (b.terms() > 1 && which) {
      aString = "(" + b.write() + ')';
    } else if (b.rank === 0 && which) {
      aString = ascoeff(b[0]);
    } else {
      aString = b.write();
    }
    aString = "$$" + difs[which].replace(/z/g, a.write()).replace(/y/g, aString) + "$$";
    qa = [qString, aString];
    return qa;
  };
  problems.makeProductRule = makeProductRule = function(){
    var fns, difs, even, which, a, b, qString, aString, i$, to$, i, qa;
    fns = new Array("\\ln(z)", "\\csc(z)", "\\sec(z)", "\\sin(z)", "\\tan(z)", "\\cos(z)");
    difs = new Array("\\frac{y}{z}", " - y\\csc(z)\\cot(z)", "y\\sec(z)\\tan(z)", "y\\cos(z)", "y\\sec^2(z)", " - y\\sin(z)");
    even = new Array(-1, 1, -1, 1, 1, -1);
    which = rand(0, 5);
    a = new poly(rand(1, 3));
    a.setrand(8);
    b = new poly(0);
    a.diff(b);
    qString = "Differentiate $$";
    if (a.terms() > 1) {
      qString += '(' + a.write() + ')' + fns[which].replace(/z/g, 'x');
    } else {
      qString += a.write() + fns[which].replace(/z/g, 'x');
    }
    qString += "$$";
    if (b.terms() > 1) {
      aString = '$$(' + b.write() + ')';
    } else if (b[0] === 1) {
      aString = '$$';
    } else if (b[0] === -1) {
      aString = '$$ - ';
    } else {
      aString = '$$' + b.write();
    }
    if (difs[which].charAt(0) === ' - ') {
      difs[which] = difs[which].slice(1);
      a.xthru(-1);
    }
    if (a[a.rank] > 0) {
      aString += fns[which].replace(/z/g, 'x') + ' + ';
    } else {
      aString += fns[which].replace(/z/g, 'x') + ' - ';
      a.xthru(-1);
    }
    if (which === 0 && a[0] === 0) {
      for (i$ = 0, to$ = a.rank - 1; i$ <= to$; ++i$) {
        i = i$;
        a[i] = a[i + 1];
      }
      a.rank--;
      aString += a.write();
    } else if (a.terms() > 1 && which) {
      aString += difs[which].replace(/y/g, '(' + a.write() + ')').replace(/z/g, 'x');
    } else if (a[0] === 1 && which) {
      aString += difs[which].replace(/y/g, '');
    } else {
      aString += difs[which].replace(/y/g, a.write()).replace(/z/g, 'x');
    }
    aString += '$$';
    qa = [qString, aString];
    return qa;
  };
  problems.makeQuotientRule = makeQuotientRule = function(){
    var fns, difs, even, which, a, b, qString, c, lead, bot, aString, qa;
    fns = new Array("\\sin(z)", "\\tan(z)", "\\cos(z)");
    difs = new Array("\\csc(z)\\cot(z)", "\\csc^2(z)", "\\sec(z)\\tan(z)");
    even = new Array(1, 1, -1);
    which = rand(0, 2);
    a = randnz(8);
    b = new poly(2);
    b.setrand(8);
    qString = "Differentiate $$\\frac{" + a + "}{" + fns[which].replace(/z/g, b.write()) + "}$$";
    c = new poly(1);
    b.diff(c);
    c.xthru(a);
    if (b[b.rank] < 0) {
      b.xthru(-1);
      c.xthru(even[which]);
    }
    lead = c.write();
    if (c.terms() > 1) {
      lead = '(' + lead + ')';
    } else if (c.rank === 0) {
      if (c[0] === 1) {
        lead = "";
      } else if (c[0] === -1) {
        lead = " - ";
      }
    }
    bot = difs[which].replace(/z/g, b.write());
    aString = '$$' + lead + bot + '$$';
    qa = [qString, aString];
    return qa;
  };
  problems.makeGP = makeGP = function(){
    var makeGP1, makeGP2, qa;
    makeGP1 = function(){
      var a, b, c, d, n, qString, top, bot, ans, aString, qa;
      a = randnz(8);
      b = rand(2, 9);
      c = 1;
      if (rand()) {
        b = -b;
      }
      if (rand()) {
        c = rand(2, 5);
        if (c === b) {
          c++;
        }
        d = gcd(b, c);
        b /= d;
        c /= d;
      }
      n = rand(5, 10);
      qString = "Evaluate $$\\sum_{r = 0}^{" + n + "} ";
      if (a !== 1) {
        if (a === -1) {
          if (c === 1 && b > 0) {
            qString += " - \\left(";
          } else {
            qString += " - ";
          }
        } else {
          qString += a + "\\times";
        }
      }
      if (c === 1) {
        if (b < 0) {
          qString += "\\left(" + b + "\\right)";
        } else {
          qString += b;
        }
      } else {
        qString += "\\left(\\frac{" + b + "}{" + c + "}\\right)";
      }
      qString += "^{r}";
      if (a === -1 && c === 1 && b > 0) {
        qString += "\\right)";
      }
      qString += "$$";
      top = new frac(-Math.pow(b, n + 1), Math.pow(c, n + 1));
      top.add(1);
      top.prod(a);
      bot = new frac(-b, c);
      bot.add(1);
      ans = new frac(top.top * bot.bot, top.bot * bot.top);
      ans.reduce();
      aString = '$$' + ans.write() + '$$';
      qa = [qString, aString];
      return qa;
    };
    makeGP2 = function(){
      var a, b, c, r, qString, ans, aString, qa;
      a = randnz(8);
      b = rand(1, 6);
      c = rand(b + 1, 12);
      if (rand()) {
        b = -b;
      }
      r = new frac(b, c);
      r.reduce();
      qString = "Evaluate$$\\sum_{r = 0}^{\\infty} ";
      if (a !== 1) {
        if (a === -1) {
          qString += " - ";
        } else {
          qString += a + "\\times";
        }
      }
      qString += "\\left(" + r.write() + "\\right)^{r}$$";
      r.prod(-1);
      r.add(1);
      ans = new frac(a * r.bot, r.top);
      aString = '$$' + ans.write() + '$$';
      qa = [qString, aString];
      return qa;
    };
    if (rand()) {
      qa = makeGP1();
    } else {
      qa = makeGP2();
    }
    return qa;
  };
  problems.makeImplicitFunction = makeImplicitFunction = function(){
    var mIF1, mIF2, mIF3;
    mIF1 = function(){
      var a, n, f, data, qString, drawIt, aString, qa;
      a = distrand(2, 2, 5);
      n = randnz(3);
      f = new frac(a[0], a[1]);
      data = "";
      qString = "Sketch the curve in the \\(xy\\) plane given by \\(y = " + ascoeff(n) + "x^{" + f.write() + "}\\)";
      drawIt = function(parms){
        var f, n, d1, i$, i, x, y;
        f = parms[0];
        n = parms[1];
        d1 = [];
        for (i$ = -10; i$ <= 10; i$ += 0.01) {
          i = i$;
          x = Math.pow(i, f.bot);
          if (Math.abs(x) > 12) {
            x = null;
          }
          y = n * Math.pow(i, f.top);
          if (Math.abs(y) > 12) {
            y = null;
          }
          if (x && y) {
            d1.push([x, y]);
          } else {
            d1.push([null, null]);
          }
        }
        return [d1];
      };
      aString = '%GRAPH%';
      qa = [qString, aString, drawIt, [f, n]];
      return qa;
    };
    mIF2 = function(){
      var a, n, f, data, qString, drawIt, parms, aString, qa;
      a = distrandnz(2, 5);
      n = randnz(6);
      f = new frac(a[0], a[1]);
      data = "";
      qString = "Sketch the curve in the \\(xy\\) plane given by \\(" + ascoeff(a[0]) + "y";
      if (a[1] > 0) {
        qString += " + ";
      }
      qString += ascoeff(a[1]) + "x";
      if (n > 0) {
        qString += " + ";
      }
      qString += n + " = 0\\)";
      drawIt = function(parms){
        var f, n, d1, i$, i, y;
        f = parms[0];
        n = parms[1];
        d1 = [];
        for (i$ = -10; i$ <= 10; i$ += 0.01) {
          i = i$;
          y = -i * a[1] / a[0] - n / a[0];
          d1.push([i, y]);
        }
        return [d1];
      };
      parms = [f, n];
      aString = '%GRAPH%';
      qa = [qString, aString, drawIt, [f, n]];
      return qa;
    };
    mIF3 = function(){
      var a, qString, drawIt, aString, qa;
      a = distrandnz(2, 2, 5);
      qString = "Sketch the curve in the \\(xy\\) plane given by \\(\\frac{x^2}{" + a[0] * a[0] + "} + \\frac{y^2}{" + a[1] * a[1] + "} = 1\\)";
      drawIt = function(parms){
        var d1, i$, i, x, y;
        d1 = [];
        for (i$ = -1; i$ <= 1; i$ += 0.005) {
          i = i$;
          x = parms[0] * Math.cos(i * Math.PI);
          y = parms[1] * Math.sin(i * Math.PI);
          d1.push([x, y]);
        }
        return [d1];
      };
      aString = '%GRAPH%';
      qa = [qString, aString, drawIt, a];
      return qa;
    };
    return pickrand(mIF1, mIF2, mIF3)();
  };
  problems.makeIntegration = makeIntegration = function(){
    var makeIntegration1, makeIntegration2, qa;
    makeIntegration1 = function(){
      var fns, difs, even, which, a, u, b, aString, qString, qa;
      fns = new Array("\\ln(z)", "\\csc(z)", "\\sec(z)", "\\sin(z)", "\\tan(z)", "\\cos(z)");
      difs = new Array("\\frac{y}{z}", "-y\\csc(z)\\cot(z)", "y\\sec(z)\\tan(z)", "y\\cos(z)", "y\\sec^2(z)", "-y\\sin(z)");
      even = new Array(-1, 1, -1, 1, 1, -1);
      which = rand(0, 5);
      a = new poly(rand(1, 3));
      a.setrand(8);
      a[a.rank] = Math.abs(a[a.rank]);
      if (which === 0) {
        a.xthru(1.0 / a.gcd());
      }
      u = randnz(4);
      b = new poly(0);
      a.diff(b);
      aString = '$$' + p_linear(u, 0).write(fns[which].replace(/z/g, a.write())) + " + c$$";
      if (difs[which].charAt(0) === "-") {
        difs[which] = difs[which].slice(1);
        b.xthru(-1);
      }
      b.xthru(u);
      if (b.terms() > 1 && which) {
        qString = '(' + b.write() + ')';
      } else if (b.rank === 0 && which) {
        qString = ascoeff(b[0]);
      } else {
        qString = b.write();
      }
      qString = "Find $$\\int" + difs[which].replace(/z/g, a.write()).replace(/y/g, qString) + "\\,\\mathrm{d}x$$";
      qa = [qString, aString];
      return qa;
    };
    makeIntegration2 = function(){
      var fns, difs, even, which, a, b, aString, qString, i$, to$, i, qa;
      fns = new Array("\\ln(z)", "\\csc(z)", "\\sec(z)", "\\sin(z)", "\\tan(z)", "\\cos(z)");
      difs = new Array("\\frac{y}{z}", "-y\\csc(z)\\cot(z)", "y\\sec(z)\\tan(z)", "y\\cos(z)", "y\\sec^2(z)", "-y\\sin(z)");
      even = new Array(-1, 1, -1, 1, 1, -1);
      which = rand(0, 5);
      a = new poly(rand(1, 3));
      a.setrand(8);
      b = new poly(0);
      a.diff(b);
      aString = "$$";
      if (a.terms() > 1) {
        aString += '(' + a.write() + ')' + fns[which].replace(/z/g, 'x');
      } else {
        aString += a.write() + fns[which].replace(/z/g, 'x');
      }
      aString += " + c$$";
      qString = "Find $$\\int";
      if (b.terms() > 1) {
        qString += "(" + b.write() + ")";
      } else if (b[0] === 1) {
        qString += "";
      } else if (b[0] === -1) {
        qString += "-";
      } else {
        qString += b.write();
      }
      if (difs[which].charAt(0) === "-") {
        difs[which] = difs[which].slice(1);
        a.xthru(-1);
      }
      if (a[a.rank] > 0) {
        qString += fns[which].replace(/z/g, 'x') + "+";
      } else {
        qString += fns[which].replace(/z/g, 'x') + "-";
        a.xthru(-1);
      }
      if (which === 0 && a[0] === 0) {
        for (i$ = 0, to$ = a.rank - 1; i$ <= to$; ++i$) {
          i = i$;
          a[i] = a[i + 1];
        }
        a.rank--;
        qString += a.write();
      } else if (a.terms() > 1 && which) {
        qString += difs[which].replace(/y/g, '(' + a.write() + ')').replace(/z/g, 'x');
      } else if (a[0] === 1 && which) {
        qString += difs[which].replace(/y/g, '');
      } else {
        qString += difs[which].replace(/y/g, a.write()).replace(/z/g, 'x');
      }
      qString += "\\,\\mathrm{d}x$$";
      qa = [qString, aString];
      return qa;
    };
    qa = pickrand(makeIntegration1, makeIntegration2)();
    return qa;
  };
  problems.makeDE = makeDE = function(){
    /* The first order code was buggy. No time to fix, so removed */
    /*makeDE1 = ->
      n = rand(1,3)
      fns = new Array("\\csc(z)", "\\sec(z)", "\\sin(z)", "\\tan(z)", "\\cos(z)", n == 1?"{z}":"{z}^" + n)
      recint = new Array(" - \\cos(z)", "\\sin(z)", " - \\ln{\|\\csc(z) + \\cot(z)\|}", "\\ln\|\\sin(z)\|", "\\ln\|\\sec(z) + \\tan(z)\|", "{z}^{" + (-1 - n) + "}")
      riinv = new Array("\\arccos\\left(-z\\right)", "\\arcsin\\left(z\\right)", 0, 0, 0, "{\\left(z\\right)}^{ - \\frac{1}{" + (1 + n) + "}}")
      eriinv = new Array(0, 0, 0, "\\arcsin\\left(z\\right)", 0, 0)
      which = distrand(2, 0, 5)
      qString = "\\begin{array}{l}\\mbox{Find the general solution of the following first - order ODE:}\\\\ " + fns[which[0]].replace(/z/g, 'x') + "\\frac{\\,dy}{\\,dx} + " + fns[which[1]].replace(/z/g, 'y') + " = 0\\end{array}"
      # f(x)y' + g(y) = 0 = > - 1 / g(y) dy = 1 / f(x) dx
    
      if recint[which[1]].charAt(0) is ' - '
        recint[which[1]] = recint[which[1]].slice(1)
      else
        recint[which[1]] = ' - ' + recint[which[1]]
    
      if (recint[which[0]].search(/ln/) is - 1) or (recint[which[1]].search(/ln/) is - 1)
        if riinv[which[1]] is 0
          aString = recint[which[1]].replace(/z/g, 'y') + " = - " + recint[which[0]].replace(/z/g, 'x') + " + c"
        else
          aString = "y = " + riinv[which[1]].replace(/z/g, ' - ' + recint[which[0]].replace(/z/g, 'x') + " + c")
    
      else
        if eriinv[which[1]] is 0
          aString = recint[which[1]].replace(/z/g, 'y').replace(/-\\ln{/, "\\frac{1}{").replace(/\\ln/, "") + " = - " + recint[which[0]].replace(/z/g, 'x').replace(/-\\ln{/, "\\frac{A}{").replace(/\\ln/, "A")
        else
          aString = "y = " + eriinv[which[1]].replace(/z/g, ' - ' + recint[which[0]].replace(/z/g, 'x').replace(/-\\ln{/, "\\frac{A}{").replace(/\\ln/, "A"))
    
      aString = aString.replace(/--/g, "") # - (-x + c) = (x - c) = (x + k) and call k c
    
      qa = [qString, aString]
      return qa */
    var makeDE2, makeDE3, qa;
    makeDE2 = function(){
      var roots, p, qString, aString, qa;
      roots = distrand(2, 4);
      p = p_quadratic(1, -roots[0] - roots[1], roots[0] * roots[1]);
      qString = "Find the general solution of the following second-order ODE:$$" + p.write('D').replace("D^2", "\\frac{{\\,\\mathrm{d}^2}y}{{\\,\\mathrm{d}x}^2}").replace("D", "\\frac{\\,\\mathrm{d}y}{\\,\\mathrm{d}x}");
      if (p[0] === 0) {
        qString += " = 0$$";
      } else {
        qString += "y = 0$$";
      }
      aString = "$$y = ";
      if (roots[0] === 0) {
        aString += "A + ";
      } else {
        aString += "Ae^{" + ascoeff(roots[0]) + "x}" + " + ";
      }
      if (roots[1] === 0) {
        aString += "B$$";
      } else {
        aString += "Be^{" + ascoeff(roots[1]) + "x}" + '$$';
      }
      qa = [qString, aString];
      return qa;
    };
    makeDE3 = function(){
      var b, qString, aString, qa;
      b = randnz(6);
      qString = "Find the general solution of the following first-order ODE:$$x\\frac{\\,\\mathrm{d}y}{\\,\\mathrm{d}x} - y";
      if (b > 0) {
        qString += signedNumber(-b) + " = 0.$$";
      } else {
        qString += " = " + (-b) + "$$";
      }
      aString = "$$y = Ax";
      if (b > 0) {
        aString += " + ";
      }
      aString += b + '$$';
      qa = [qString, aString];
      return qa;
    };
    qa = pickrand(makeDE2, makeDE3)();
    return qa;
  };
  problems.makePowers = makePowers = function(){
    var res, q, i$, i, a, b, p, u, c, qString, aString, qa;
    res = new frac();
    q = "";
    for (i$ = 0; i$ <= 4; ++i$) {
      i = i$;
      if (i === 1 || i > 2) {
        q += "\\times ";
      }
      switch (rand(1, 4)) {
      case 1:
        a = randnz(4);
        b = randnz(5);
        p = new frac(a, b);
        if (p.top === p.bot) {
          q += "x";
        } else {
          q += "x^{" + p.write() + "}";
        }
        if (i > 1) {
          a = -a;
        }
        res.add(a, b);
        break;
      case 2:
        a = randnz(4);
        b = randnz(2, 5);
        if (gcd(a, b) !== 1) {
          if (a > 0) {
            a++;
          } else {
            a--;
          }
        }
        q += "\\root " + b + " \\of";
        if (a === 1) {
          q += "{x}";
        } else {
          q += "{x^{" + a + "}}";
        }
        if (i > 1) {
          a = -a;
        }
        res.add(a, b);
        break;
      case 3:
        u = distrand(2, 1, 3);
        a = u[0];
        b = u[1];
        c = randnz(2, 6);
        p = new frac(a, b);
        q += "\\left(x^{" + p.write() + "}\\right)^" + c;
        if (i > 1) {
          a = -a;
        }
        res.add(a * c, b);
        break;
      case 4:
        q += "x";
        if (i > 1) {
          res.add(-1, 1);
        } else {
          res.add(1, 1);
        }
      }
      if (i === 1) {
        q += "}{";
      }
    }
    qString = "Simplify $$\\frac{" + q + "}$$";
    if (res.top === res.bot) {
      aString = "$$x$$";
    } else {
      aString = "$$x^{" + res.write() + "}$$";
    }
    qa = [qString, aString];
    return qa;
  };
  problems.makeHCF = makeHCF = function(){
    var a, b, qString, aString, qa;
    a = rand(1, 99999);
    b = rand(1, 99999);
    if (rand()) {
      while (gcd(a, b) === 1) {
        b = rand(1, 99999);
      }
    }
    while (a === b) {
      b = rand(1, 99999);
    }
    qString = "Find the highest common factor of \\(" + a + "\\) and \\(" + b + "\\).";
    aString = "$$" + gcd(a, b) + "$$";
    qa = [qString, aString];
    return qa;
  };
  problems.makeLCM = makeLCM = function(){
    var a, b, qString, aString, qa;
    a = rand(1, 200);
    b = rand(1, 200);
    if (rand()) {
      while (gcd(a, b) === 1) {
        b = rand(1, 200);
      }
    }
    while (a === b) {
      b = rand(1, 200);
    }
    qString = "Find the least common multiple of \\(" + a + "\\) and \\(" + b + "\\).";
    aString = "$$" + lcm(a, b) + "$$";
    qa = [qString, aString];
    return qa;
  };
  problems.makeDiophantine = makeDiophantine = function(){
    var a, b, c, qString, d, aString, coeffs, printSol, qa;
    a = rand(1, 999);
    b = rand(1, 999);
    if (rand()) {
      while (gcd(a, b) === 1) {
        b = rand(1, 999);
      }
    }
    while (a === b) {
      b = rand(1, 200);
    }
    c = rand(999);
    while (a === c || b === c) {
      c = rand(999);
    }
    qString = "Find all integer solutions \\(m\\) and \\(n\\) to the equation \\(" + a + "m + " + b + "n = " + c + "\\).";
    d = gcd(a, b);
    if (c % d !== 0) {
      aString = "There are no integer solutions to the equation.";
    } else {
      coeffs = lincombination(a, b);
      printSol = function(c1, varname, c2){
        var eqString;
        eqString = varname + " = ";
        if (c1 !== 0) {
          eqString += c1;
        }
        if (c2 < 0) {
          if (c2 === -1) {
            eqString += "-";
          } else {
            eqString += c2;
          }
          eqString += "r";
        } else if (c2 > 0) {
          if (c1 !== 0) {
            if (c2 === 1) {
              eqString += "+";
            } else {
              eqString += signedNumber(c2);
            }
          } else {
            if (c2 !== 1) {
              eqString += c2;
            }
          }
          eqString += "r";
        }
        return eqString;
      };
      aString = "The solutions are $$";
      aString += printSol(c / d * coeffs[0], "m", b / d) + ", \\qquad\\text{and}\\qquad ";
      aString += printSol(c / d * coeffs[1], "n", -b / d);
      aString += "$$ where \\(r\\) is an integer.";
    }
    qa = [qString, aString];
    return qa;
  };
  problems.makeDistance = makeDistance = function(){
    var maxdist, makeDistII, makeDistFF, qa;
    maxdist = 10;
    makeDistII = function(){
      var a1, a2, b1, b2, a3, b3, a3str, b3str, qString, sq, aString, qa;
      a1 = rand(maxdist);
      a2 = rand(maxdist);
      b1 = rand(maxdist);
      b2 = rand(maxdist);
      while (b1 === a1 && b2 === a2) {
        b1 = rand(maxdist);
        b2 = rand(maxdist);
      }
      if (rand()) {
        a3 = rand(maxdist);
        b3 = rand(maxdist);
        a3str = "," + a3;
        b3str = "," + b3;
      } else {
        a3 = 0;
        b3 = 0;
        a3str = "";
        b3str = "";
      }
      qString = "Find the distance between the points \\((" + a1 + "," + a2 + a3str + ")\\) and \\((" + b1 + "," + b2 + b3str + ")\\).";
      sq = new sqroot(Math.pow(b1 - a1, 2) + Math.pow(b2 - a2, 2) + Math.pow(b3 - a3, 2));
      aString = "$$" + sq.write() + "$$";
      qa = [qString, aString];
      return qa;
    };
    makeDistFF = function(){
      var a1, a2, b1, b2, a3, b3, a3str, b3str, qString, denom, s1, s2, s3, t1, t2, t3, sq, aString, qa;
      a1 = new frac(rand(maxdist), randnz(maxdist));
      a2 = new frac(rand(maxdist), randnz(maxdist));
      b1 = new frac(rand(maxdist), randnz(maxdist));
      b2 = new frac(rand(maxdist), randnz(maxdist));
      if (rand()) {
        a3 = new frac(rand(maxdist), randnz(maxdist));
        b3 = new frac(rand(maxdist), randnz(maxdist));
        a3str = "," + a3.write();
        b3str = "," + b3.write();
      } else {
        a3 = new frac(0, 1);
        b3 = new frac(0, 1);
        a3str = "";
        b3str = "";
      }
      qString = "Find the distance between the points \\((" + a1.write() + "," + a2.write() + a3str + ")\\) and \\((" + b1.write() + "," + b2.write() + b3str + ")\\).";
      denom = a1.bot * a2.bot * a3.bot * b1.bot * b2.bot * b3.bot;
      s1 = denom / a1.bot * a1.top;
      s2 = denom / a2.bot * a2.top;
      s3 = denom / a3.bot * a3.top;
      t1 = denom / b1.bot * b1.top;
      t2 = denom / b2.bot * b2.top;
      t3 = denom / b3.bot * b3.top;
      sq = new sqroot(Math.pow(t1 - s1, 2) + Math.pow(t2 - s2, 2) + Math.pow(t3 - s3, 2));
      aString = "$$" + simplifySurd(0, sq.a, sq.n, denom) + "$$";
      qa = [qString, aString];
      return qa;
    };
    qa = pickrand(makeDistII, makeDistFF)();
    return qa;
  };
  problems.makeCircumCircle = makeCircumCircle = function(){
    var maxdist, a1, a2, b1, b2, c1, c2, d, X, Y, x, y, sq, qString, aString, qa;
    maxdist = 10;
    a1 = rand(maxdist);
    a2 = rand(maxdist);
    b1 = rand(maxdist);
    b2 = rand(maxdist);
    c1 = rand(maxdist);
    c2 = rand(maxdist);
    d = 2 * (a1 * (b2 - c2) + b1 * (c2 - a2) + c1 * (a2 - b2));
    X = (Math.pow(a1, 2) + Math.pow(a2, 2)) * (b2 - c2) + (Math.pow(b1, 2) + Math.pow(b2, 2)) * (c2 - a2) + (Math.pow(c1, 2) + Math.pow(c2, 2)) * (a2 - b2);
    Y = (Math.pow(a1, 2) + Math.pow(a2, 2)) * (c1 - b1) + (Math.pow(b1, 2) + Math.pow(b2, 2)) * (a1 - c1) + (Math.pow(c1, 2) + Math.pow(c2, 2)) * (b1 - a1);
    x = new frac(X, d);
    y = new frac(Y, d);
    sq = new sqroot(Math.pow(X - b1 * d, 2) + Math.pow(Y - b2 * d, 2));
    qString = "Find the centre and radius of the circle passing through the points ";
    qString += "\\((" + a1 + "," + a2 + ")\\), ";
    qString += "\\((" + b1 + "," + b2 + ")\\) and ";
    qString += "\\((" + c1 + "," + c2 + ")\\).";
    aString = "The centre is ";
    aString += "\\((" + x.write() + "," + y.write() + ")\\) and ";
    aString += "the radius is \\(" + simplifySurd(0, sq.a, sq.n, d) + "\\).";
    qa = [qString, aString];
    return qa;
  };
  /**************************\
  |*  START OF FP MATERIAL  *|
  \**************************/
  problems.makeCArithmetic = makeCArithmetic = function(){
    var z, w, qString, aString, qa;
    z = Complex.randnz(6, 6);
    w = Complex.randnz(4, 6);
    qString = "Given \\(z = " + z.write() + "\\) and \\(w = " + w.write() + "\\), compute:";
    qString += "<ul class=\"exercise\">";
    qString += "<li>\\(z + w\\)</li>";
    qString += "<li>\\(z\\times w\\)</li>";
    qString += "<li>\\(\\frac{z}{w}\\)</li>";
    qString += "<li>\\(\\frac{w}{z}\\)</li>";
    qString += "</ul>";
    aString = "<ul class=\"exercise\">";
    aString += "<li>\\(" + z.add(w.Re, w.Im).write() + "\\)</li>";
    aString += "<li>\\(" + z.times(w.Re, w.Im).write() + "\\)</li>";
    aString += "<li>\\(" + z.divide(w.Re, w.Im).write() + "\\)</li>";
    aString += "<li>\\(" + w.divide(z.Re, z.Im).write() + "\\)</li>";
    aString += "</ul>";
    qa = [qString, aString];
    return qa;
  };
  problems.makeCPolar = makeCPolar = function(){
    var z, qString, ma, r, t, aString, qa;
    if (rand()) {
      z = Complex.randnz(6, 6);
    } else {
      z = Complex.randnz(6, 4);
    }
    qString = "Convert \\(" + z.write() + "\\) to modulus-argument form.";
    ma = Complex.ctop(z);
    r = Math.round(ma[0]);
    t = guessExact(ma[1] / Math.PI);
    if (r === 1) {
      aString = "$$";
    } else {
      aString = "$$" + r;
    }
    aString += "e^{";
    if (t === 0) {
      aString += "0";
    } else if (t === 1) {
      aString += "\\pi i";
    } else {
      aString += t + "\\pi i";
    }
    aString += "}$$";
    qa = [qString, aString];
    return qa;
  };
  problems.makeDETwoHard = makeDETwoHard = function(){
    var p, disc, roots, qString, aString, qa;
    p = new poly(2);
    p.setrand(6);
    p[2] = 1;
    disc = Math.pow(p[1], 2) - 4 * p[0] * p[2];
    roots = [0, 0];
    if (disc > 0) {
      roots[0] = (-p[1] + Math.sqrt(disc)) / 2;
      roots[1] = (-p[1] - Math.sqrt(disc)) / 2;
    } else if (disc === 0) {
      roots[0] = roots[1] = (-p[1]) / 2;
    } else {
      roots[0] = new complex(-p[1] / 2, Math.sqrt(-disc) / 2);
      roots[1] = new complex(-p[1] / 2, -Math.sqrt(-disc) / 2);
    }
    qString = "Find the general solution of the following second-order ODE:$$" + p.write('D').replace("D^2", "\\frac{{\\,\\mathrm{d}^2}y}{{\\,\\mathrm{d}x}^2}").replace("D", "\\frac{\\,\\mathrm{d}y}{\\,\\mathrm{d}x}");
    if (p[0] !== 0) {
      qString += "y";
    }
    qString += " = 0$$";
    qString = qString.replace(/1y/g, "y");
    aString = "$$y = ";
    if (disc > 0) {
      if (guessExact(roots[0]) === 0) {
        aString += "A";
      } else {
        aString += "Ae^{" + ascoeff(guessExact(roots[0])) + "x}";
      }
      if (guessExact(roots[1]) === 0) {
        aString += " + B$$";
      } else {
        aString += " + Be^{" + ascoeff(guessExact(roots[0])) + "x}$$";
      }
    } else if (disc === 0) {
      if (roots[0] === 0) {
        aString += "Ax + B";
      } else {
        aString += "(Ax + B)";
      }
      if (guessExact(roots[0])) {
        aString += "e^{" + ascoeff(guessExact(roots[0])) + "x}";
      }
      aString += "$$";
    } else {
      aString += "A\\cos\\left(" + ascoeff(guessExact(roots[0].Im)) + "x + \\varepsilon\\right)";
      if (guessExact(roots[0].Re)) {
        aString += "e^{" + ascoeff(guessExact(roots[0].Re)) + "x}";
      }
      aString += "$$";
    }
    qa = [qString, aString];
    return qa;
  };
  problems.makeMatrixQ = makeMatrixQ = function(dim, max){
    var A, B, I, i$, to$, i, qString, S, P, Y, aString, qa;
    A = new fmatrix(dim);
    A.setrand(max);
    B = new fmatrix(dim);
    B.setrand(max);
    I = new fmatrix(dim);
    I.zero();
    for (i$ = 0, to$ = I.dim - 1; i$ <= to$; ++i$) {
      i = i$;
      I[i][i].set(1, 1);
    }
    i = 0;
    while (B.det().top === 0) {
      if (i >= B.dim) {
        throw new Error("makeMatrixQ: failed to make a non-singular matrix");
      }
      B = B.add(I);
      i++;
    }
    qString = "Let $$A = " + A.write() + " \\qquad \\text{and} \\qquad B = " + B.write() + "$$.";
    qString += "Compute: <ul class=\"exercise\">";
    qString += "<li>\\(A + B\\)</li>";
    qString += "<li>\\(A \\times B\\)</li>";
    qString += "<li>\\(B^{ - 1}\\)</li>";
    qString += "</ul>";
    S = A.add(B);
    P = A.times(B);
    Y = B.inv();
    aString = "<ul class=\"exercise\">";
    aString += "<li>\\(" + S.write() + "\\)</li>";
    aString += "<li>\\(" + P.write() + "\\)</li>";
    aString += "<li>\\(" + Y.write() + "\\)</li>";
    aString += "</ul>";
    qa = [qString, aString];
    return qa;
  };
  problems.makeMatrix2 = makeMatrix2 = function(){
    return makeMatrixQ(2, 6);
  };
  problems.makeMatrix3 = makeMatrix3 = function(){
    return makeMatrixQ(3, 4);
  };
  problems.makeTaylor = makeTaylor = function(){
    var f, t, which, n, qString, p, i$, i, aString, qa;
    f = ["\\sin(z)", "\\cos(z)", "\\arctan(z)", "e^{z}", "\\log_{e}(1 + z)"];
    t = [[new frac(0), new frac(1), new frac(0), new frac(-1, 6)], [new frac(1), new frac(0), new frac(-1, 2), new frac(0)], [new frac(0), new frac(1), new frac(0), new frac(-1, 3)], [new frac(1), new frac(1), new frac(1, 2), new frac(1, 6)], [new frac(0), new frac(1), new frac(-1, 2), new frac(1, 3)]];
    which = rand(0, 4);
    n = randfrac(6);
    if (n.top === 0) {
      n = new frac(1);
    }
    qString = "Find the Taylor series of \\(" + f[which].replace(/z/g, fcoeff(n, 'x')) + "\\) about \\(x = 0\\) up to and including the term in \\(x^3\\)";
    p = new fpoly(3);
    for (i$ = 0; i$ <= 3; ++i$) {
      i = i$;
      p[i] = new frac(t[which][i].top * Math.pow(n.top, i), t[which][i].bot * Math.pow(n.bot, i));
    }
    aString = "$$" + p.rwrite() + "$$";
    qa = [qString, aString];
    return qa;
  };
  problems.makePolarSketch = makePolarSketch = function(){
    var fnf, fnn, which, parms, fn, a, b, qString, aString, qa;
    fnf = [
      Math.sin, Math.tan, Math.cos, function(x){
        return x;
      }
    ];
    fnn = ["\\sin(z)", "\\tan(z)", "\\cos(z)", "z"];
    which = rand(0, 3);
    parms = 0;
    fn = 0;
    a = rand(0, 3);
    if (which === 3) {
      b = rand(1, 1);
    } else {
      b = rand(1, 5);
    }
    qString = "Sketch the curve given in polar co-ordinates by \\(r = ";
    if (a) {
      qString += a + " + ";
    }
    qString += fnn[which].replace(/z/g, ascoeff(b) + '\\theta') + "\\) (where \\(\\theta\\) runs from \\(-\\pi\\) to \\(\\pi\\)).";
    makePolarSketch.fn = function(parms){
      var f, d1, i$, i, r, x, y;
      f = parms[0];
      d1 = [];
      for (i$ = -1; i$ <= 1; i$ += 0.005) {
        i = i$;
        r = parms[1] + f(i * Math.PI * parms[2]);
        x = r * Math.cos(i * Math.PI);
        if (Math.abs(x) > 6) {
          x = null;
        }
        y = r * Math.sin(i * Math.PI);
        if (Math.abs(y) > 6) {
          y = null;
        }
        if (x && y) {
          d1.push([x, y]);
        } else {
          d1.push([null, null]);
        }
      }
      return [d1];
    };
    aString = '%GRAPH%' + JSON.stringify([fnf[which], a, b]);
    qa = [qString, aString];
    return qa;
  };
  problems.makeFurtherVector = makeFurtherVector = function(){
    var a, b, c, qString, axb, abc, aString, qa;
    a = new vector(3);
    a.setrand(5);
    b = new vector(3);
    b.setrand(5);
    c = new vector(3);
    c.setrand(5);
    qString = "Let \\(\\mathbf{a} = " + a.write() + "\\,\\), \\(\\mathbf{b} = " + b.write() + "\\,\\) and \\(\\mathbf{c} = " + c.write() + "\\). ";
    qString += "Calculate: <ul class=\"exercise\">";
    qString += "<li>the vector product, \\(\\mathbf{a}\\wedge \\mathbf{b}\\),</li>";
    qString += "<li>the scalar triple product, \\([\\mathbf{a}, \\mathbf{b}, \\mathbf{c}]\\).</li>";
    qString += "</ul>";
    axb = a.cross(b);
    abc = axb.dot(c);
    aString = "<ul class=\"exercise\">";
    aString += "<li>\\(" + axb.write() + "\\)</li>";
    aString += "<li>\\(" + abc + "\\)</li>";
    aString += "</ul>";
    qa = [qString, aString];
    return qa;
  };
  problems.makeNewtonRaphson = makeNewtonRaphson = function(){
    var fns, difs, fnf, diff, which, p, np, i$, i, q, nq, n, x, qString, aString, to$, eff, effdash, qa;
    fns = ["\\ln(z)", "e^{z}", "\\csc(z)", "\\sec(z)", "\\sin(z)", "\\tan(z)", "\\cos(z)"];
    difs = ["\\frac{1}{z}", "e^{z}", " - \\csc(z)\\cot(z)", "\\sec(z)\\tan(z)", "\\cos(z)", "\\sec^2(z)", " - \\sin(z)"];
    fnf = [
      Math.log, Math.exp, function(x){
        return 1 / Math.sin(x);
      }, function(x){
        return 1 / Math.cos(x);
      }, Math.sin, Math.tan, Math.cos
    ];
    diff = [
      function(x){
        return 1 / x;
      }, Math.exp, function(x){
        return Math.cos(x) / Math.pow(Math.sin(x), 2);
      }, function(x){
        return Math.sin(x) / Math.pow(Math.cos(x), 2);
      }, Math.cos, function(x){
        return 1 / Math.pow(Math.cos(x), 2);
      }, function(x){
        return -Math.sin(x);
      }
    ];
    which = rand(0, 6);
    p = new poly(2);
    p.setrand(6);
    p[2] = 1;
    np = new poly(2);
    for (i$ = 0; i$ <= 2; ++i$) {
      i = i$;
      np[i] = -p[i];
    }
    q = new poly(1);
    p.diff(q);
    nq = new poly(1);
    np.diff(nq);
    n = rand(4, 6);
    x = new Array(n + 1);
    if (which) {
      x[0] = rand(0, 4);
    } else {
      x[0] = rand(2, 4);
    }
    qString = "Use the Newton-Raphson method to find the first \\(" + n + "\\) iterates in solving \\(" + p.write() + " = " + fns[which].replace(/z/g, 'x') + "\\) with \\(x_0 = " + x[0] + "\\).";
    aString = "Iteration: \\begin{align*} x_{n + 1} &= x_{n} - \\frac{" + fns[which].replace(/z/g, 'x_n') + np.write() + "}{" + difs[which].replace(/z/g, 'x_n') + nq.write() + "} \\\\[10pt]";
    for (i$ = 0, to$ = n - 1; i$ <= to$; ++i$) {
      i = i$;
      eff = fnf[which](x[i]) - p.compute(x[i]);
      effdash = diff[which](x[i]) - q.compute(x[i]);
      x[i + 1] = x[i] - eff / effdash;
      if (Math.abs(x[i + 1]) < 1 - 7) {
        x[i + 1] = 0;
      }
      aString += "x_{" + (i + 1) + "} &= " + x[i + 1].toPrecision(6) + "\\\\";
    }
    aString += "\\end{align*}";
    if (isNaN(x[n])) {
      return makeNewtonRaphson();
    }
    qa = [qString, aString];
    return qa;
  };
  problems.makeFurtherIneq = makeFurtherIneq = function(){
    var A, B, C, qString, aedb, root, poles, aString, m, i$, i, l, j, n, qa;
    A = distrandnz(2, 6);
    B = distrandnz(2, 6);
    C = distrand(2, 6);
    qString = "Find the range of values of \\(x\\) for which$$";
    qString += "\\frac{" + A[0] + "}{" + p_linear(B[0], C[0]).write() + "} < \\frac{" + A[1] + "}{" + p_linear(B[1], C[1]).write() + "}$$";
    aedb = A[0] * B[1] - A[1] * B[0];
    root = new frac(A[1] * C[0] - A[0] * C[1], aedb);
    poles = [new frac(-C[0], B[0]), new frac(-C[1], B[1])];
    if (aedb === 0) {
      if (poles[0].equals(poles[1])) {
        aString = "The two fractions are equivalent, so the inequality never holds.";
      } else {
        m = new Array(2);
        for (i$ = 0; i$ <= 1; ++i$) {
          i = i$;
          m[i] = poles[i].top / poles[i].bot;
        }
        l = ranking(m);
        if (m[0] > m[1]) {
          aString = "$$x < " + poles[l[0]].write() + " \\mbox{ or }" + poles[l[1]].write() + " < x$$";
        } else {
          aString = "$$" + poles[l[0]].write() + " < x < " + poles[l[1]].write() + "$$";
        }
      }
    } else {
      if (poles[0].equals(poles[1])) {
        i = A[0] / B[0];
        j = A[1] / B[1];
        if (i > j) {
          aString = "$$x < " + poles[0].write() + "$$";
        } else {
          aString = "$$" + poles[0].write() + " < x$$";
        }
      } else {
        n = [root, poles[0], poles[1]];
        m = new Array(3);
        for (i$ = 0; i$ <= 2; ++i$) {
          i = i$;
          m[i] = n[i].top / n[i].bot;
        }
        l = ranking(m);
        i = A[0] / B[0];
        j = A[1] / B[1];
        if (i > j) {
          aString = "$$x < " + n[l[0]].write() + "\\mbox{ or }" + n[l[1]].write() + " < x < " + n[l[2]].write() + "$$";
        } else {
          aString = "$$" + n[l[0]].write() + " < x < " + n[l[1]].write() + "\\mbox{ or }" + n[l[2]].write() + " < x$$";
        }
      }
    }
    qa = [qString, aString];
    return qa;
  };
  problems.makeSubstInt = makeSubstInt = function(){
    var p, fns, fsq, q, difs, t, dt, pm, ldt, pdt, which, what, a, qString, r, aString, qa;
    p = new poly(rand(1, 2));
    p.setrand(2);
    fns = ["\\ln(Az)", "e^{Az}", p.rwrite('z')];
    fsq = ["(\\ln(Az))^2", "e^{2Az}", polyexpand(p, p).write('z')];
    q = new poly(p.rank - 1);
    p.diff(q);
    difs = ["\\frac{A}{z}", "Ae^{Az}", q.write('z')];
    t = ["\\arcsin(f)", "\\arctan(f)", "{\\rm arsinh}(f)", "{\\rm artanh}(f)"];
    dt = ["\\frac{y}{\\sqrt{1 - F}}", "\\frac{y}{1 + F}", "\\frac{y}{\\sqrt{1 + F}}", "\\frac{y}{1 - F}"];
    pm = [-1, 1, 1, -1];
    ldt = ["\\frac{A}{y\\sqrt{1 - F}}", "\\frac{A}{y(1 + F)}", "\\frac{A}{y\\sqrt{1 + F}}", "\\frac{A}{y(1 - F)}"];
    pdt = ["\\frac{y}{\\sqrt{F}}", "\\frac{y}{F}", "\\frac{y}{\\sqrt{F}}", "\\frac{y}{F}"];
    which = rand(0, 2);
    what = rand(0, 3);
    if (what === 0 && which === 0) {
      which = rand(0, 1);
    }
    a = randnz(4);
    qString = "Find $$\\int";
    if (which === 0) {
      qString += ldt[what].replace(/y/g, 'x').replace(/F/g, fsq[which].replace(/A/g, ascoeff(a))).replace(/z/g, 'x').replace(/A/g, a);
    } else if (which === 2) {
      r = polyexpand(p, p);
      r.xthru(pm[what]);
      r[0]++;
      qString += pdt[what].replace(/y/g, difs[which]).replace(/F/g, r.rwrite('z')).replace(/z/g, 'x');
    } else {
      qString += dt[what].replace(/y/g, difs[which]).replace(/F/g, fsq[which]).replace(/z/g, 'x').replace("2A", ascoeff(2 * a)).replace(/A/g, ascoeff(a));
    }
    qString += "\\,\\mathrm{d}x$$";
    aString = "$$" + t[what].replace(/f/g, fns[which]).replace(/z/g, 'x').replace(/A/g, ascoeff(a)) + " + c$$";
    qa = [qString, aString];
    return qa;
  };
  problems.makeRevolution = makeRevolution = function(){
    var makeSolidRevolution, makeSurfaceRevolution, qa;
    makeSolidRevolution = function(){
      var fns, iss, isf, which, x0, x, qString, ans, aString, qa;
      fns = ["\\sec(z)", "\\csc(z)", "\\sqrt{z}"];
      iss = ["\\tan(z)", "-\\cot(z)", 0];
      isf = [
        Math.tan, function(x){
          return -1 / Math.tan(x);
        }, function(x){
          return Math.pow(x, 2) / 2;
        }
      ];
      which = rand(0, 2);
      x0 = 0;
      if (which === 1) {
        x0++;
      }
      if (which === 2) {
        x = rand(x0 + 1, x0 + 4);
      } else {
        x = rand(x0 + 1, x0 + 1);
      }
      qString = "Find the volume of the solid formed when the area under";
      qString += "$$y = " + fns[which].replace(/z/g, 'x') + "$$";
      qString += "from \\(x = " + x0 + "\\) to \\(x = " + x + "\\) is rotated through \\(2\\pi\\) around the \\(x\\)-axis.";
      if (which === 2) {
        ans = guessExact(isf[which](x) - isf[which](x0));
      } else {
        ans = "\\left(" + iss[which].replace(/z/g, x);
        if (isf[which](x0) !== 0) {
          ans += " - ";
        }
        ans += iss[which].replace(/z/g, x0) + "\\right)\\,";
        ans = ans.replace(/--/, " + ");
      }
      aString = "$$" + ans + "\\pi$$";
      qa = [qString, aString];
      return qa;
    };
    makeSurfaceRevolution = function(){
      var a, i$, to$, i, b, c, x, qString, hi, ans, aString, qa;
      a = new poly(rand(1, 3));
      a.setrand(6);
      for (i$ = 0, to$ = a.rank; i$ <= to$; ++i$) {
        i = i$;
        a[i] = Math.abs(a[i]);
      }
      b = new fpoly(3);
      b.setpoly(a);
      c = new fpoly(4);
      b.integ(c);
      x = rand(1, 4);
      qString = "Find the area of the surface formed when the curve";
      qString += "$$y = " + a.write('x') + "$$";
      qString += "from \\(x = 0\\mbox{ to }x = " + x + "\\) is rotated through \\(2\\pi\\) around the \\(x\\)-axis.";
      hi = c.compute(x);
      ans = new frac(hi.top, hi.bot);
      ans.prod(2);
      aString = "$$" + fcoeff(ans, "\\pi") + "$$";
      qa = [qString, aString];
      return qa;
    };
    if (rand()) {
      qa = makeSolidRevolution();
    } else {
      qa = makeSurfaceRevolution();
    }
    return qa;
  };
  problems.makeMatXforms = makeMatXforms = function(){
    var a, xfms, i$, i, cosines, sines, acosines, asines, f, xft, which, qString, ans, aString, qa;
    a = rand(0, 2);
    xfms = new Array(5);
    for (i$ = 0; i$ <= 4; ++i$) {
      i = i$;
      xfms[i] = new fmatrix(2);
    }
    cosines = [new frac(0), new frac(-1), new frac(0)];
    sines = [new frac(1), new frac(0), new frac(-1)];
    acosines = [new frac(0), new frac(1), new frac(0)];
    asines = [new frac(-1), new frac(0), new frac(1)];
    xfms[0].set(cosines[a], asines[a], sines[a], cosines[a]);
    xfms[1].set(cosines[a], sines[a], sines[a], acosines[a]);
    xfms[2].set(1, a + 1, 0, 1);
    xfms[3].set(1, 0, a + 1, 1);
    xfms[4].set(a + 2, 0, 0, a + 2);
    f = new frac(a + 1, 2);
    xft = ["a rotation through \\(" + fcoeff(f, "\\pi") + "\\) anticlockwise about O", "a reflection in the line \\(" + ["y = x", "x = 0", "y = - x"][a] + "\\)", "a shear of element \\(" + (a + 1) + ", x\\) axis invariant", "a shear of element \\(" + (a + 1) + ", y\\) axis invariant", "an enlargement of scale factor \\(" + (a + 1) + "\\)"];
    which = distrand(2, 0, 4);
    qString = "Compute the matrix representing, in 2D, " + xft[which[0]] + " followed by " + xft[which[1]] + ".";
    ans = xfms[which[1]].times(xfms[which[0]]);
    aString = "$$" + ans.write() + "$$";
    qa = [qString, aString];
    return qa;
  };
  /****************************\
  |*  START OF STATS MATERIAL *|
  \****************************/
  problems.makeDiscreteDistn = makeDiscreteDistn = function(){
    var massfn, pd, pn, f, p, parms, dists, x, which, leq, qString, ans, i$, i, aString, qa;
    massfn = [massBin, massPo, massGeo];
    pd = rand(2, 6);
    pn = rand(1, pd - 1);
    f = new frac(pn, pd);
    p = pn / pd;
    parms = [[rand(5, 12), p], [rand(1, 5)], [p]];
    dists = ["{\\rm B}\\left(" + parms[0][0] + ', ' + f.write() + "\\right)", "{\\rm Po}(" + parms[1][0] + ")", "{\\rm Geo}\\left(" + f.write() + "\\right)"];
    x = rand(1, 4);
    which = rand(0, 2);
    leq = rand();
    qString = "The random variable \\(X\\) is distributed as$$" + dists[which] + ".$$ Find \\(\\mathbb{P}(X";
    if (leq) {
      qString += "\\le";
    } else {
      qString += " = ";
    }
    qString += x + ")\\)";
    if (leq) {
      ans = 0;
      for (i$ = 0; i$ <= x; ++i$) {
        i = i$;
        ans += massfn[which](i, parms[which][0], parms[which][1]);
      }
    } else {
      ans = massfn[which](x, parms[which][0], parms[which][1]);
    }
    aString = "$$" + ans.toFixed(6) + "$$";
    qa = [qString, aString];
    return qa;
  };
  problems.makeContinDistn = makeContinDistn = function(){
    var mu, sigma, x, qString, z, index, p, aString, qa;
    tableN.populate();
    mu = rand(0, 4);
    sigma = rand(1, 4);
    x = Math.floor(Math.random() * 3 * sigma * 10) / 10;
    if (rand()) {
      x *= -1;
    }
    x += mu;
    qString = "The random variable \\(X\\) is normally distributed with mean \\(" + mu + "\\) and variance \\(" + Math.pow(sigma, 2) + "\\).";
    qString += "<br />Find \\(\\mathbb{P}(X\\le" + x + ")\\)";
    z = (x - mu) / sigma;
    index = Math.floor(1e3 * Math.abs(z));
    if (index < 0 || index >= tableN.values.length) {
      throw new Error('makeContinDistn: index ' + index + ' out of range\n' + 'x: ' + x);
    }
    p = tableN.values[index];
    if (z < 0) {
      p = 1 - p;
    }
    aString = "$$" + p.toFixed(3) + "$$";
    qa = [qString, aString];
    return qa;
  };
  problems.makeHypTest = makeHypTest = function(){
    var makeHypTest1, makeHypTest2, qa;
    makeHypTest1 = function(){
      var mu, sigma, which, n, sl, Sx, qString, xbar, aString, p, critdev, acc, qa;
      mu = new Array(2);
      sigma = new Array(2);
      which = 0;
      n = rand(8, 12);
      sl = pickrand(1, 5, 10);
      if (rand()) {
        mu[1] = mu[0] = rand(-1, 5);
        sigma[1] = sigma[0] = rand(1, 4);
        which = rand(0, 2);
      } else {
        mu = distrand(2, -1, 5);
        sigma[0] = rand(1, 4);
        sigma[1] = rand(1, 4);
        if (rand()) {
          if (mu[0] < mu[1]) {
            which = 2;
          } else {
            which = 1;
          }
        } else {
          which = 0;
        }
      }
      Sx = genN(mu[1] * n, sigma[1] * Math.sqrt(n));
      qString = "In a hypothesis test, the null hypothesis \\({\\rm H}_0\\) is that \\(X\\) is normally distributed, with \\(\\mu = " + mu[0] + "\\mbox{, }\\sigma^2 = " + sigma[0] * sigma[0] + "\\). ";
      qString += "The alternative hypothesis \\({\\rm H}_1\\) is that \\(\\mu" + ['\\ne', '<', '>'][which] + mu[0] + "\\). ";
      qString += "The significance level is \\(" + sl + "\\%\\). ";
      qString += "A sample of size \\(" + n + "\\) is drawn from \\(X\\), and its sum \\(\\sum{x} = " + Sx.toFixed(3) + "\\).<br />";
      qString += "<br />Compute: <ul class=\"exercise\">";
      qString += "<li>\\(\\overline{x}\\)</li>";
      qString += "<li> Is \\({\\rm H}_0\\) accepted?}</li>";
      qString += "</ul>";
      xbar = Sx / n;
      aString = "<ul class=\"exercise\">";
      aString += "<li>\\(\\overline{x} = " + xbar.toFixed(3) + "\\)</li>";
      p = 0;
      if (which) {
        switch (sl) {
        case 1:
          p = 4;
          break;
        case 5:
          p = 2;
          break;
        case 10:
          p = 1;
        }
      } else {
        switch (sl) {
        case 1:
          p = 5;
          break;
        case 5:
          p = 3;
          break;
        case 10:
          p = 2;
        }
      }
      critdev = sigma[0] * tableT.values[tableT.values.length - 1][p] / Math.sqrt(n);
      if (which) {
        aString += "<li>The critical region is $$\\overline{x}";
        if (which === 1) {
          aString += "<" + (mu[0] - critdev).toFixed(3) + "$$<br />";
        } else {
          aString += ">" + (mu[0] + critdev).toFixed(3) + "$$<br />";
        }
      } else {
        aString += "<li>The critical values are $$" + (mu[0] - critdev).toFixed(3) + "\\) and \\(" + (mu[0] + critdev).toFixed(3) + "$$<br />";
      }
      acc = false;
      switch (which) {
      case 0:
        acc = xbar >= mu[0] - critdev && xbar <= mu[0] + critdev;
        break;
      case 1:
        acc = xbar >= mu[0] - critdev;
        break;
      case 2:
        acc = xbar <= mu[0] + critdev;
      }
      if (acc) {
        aString += "\\(\\rm H}_0\\) is accepted.</li>";
      } else {
        aString += "\\(\\rm H}_0\\) is rejected.</li>";
      }
      aString += "</ul>";
      qa = [qString, aString];
      return qa;
    };
    makeHypTest2 = function(){
      var mu, which, n, sl, sigma, Sx, Sxx, i$, to$, i, xi, qString, xbar, aString, SS, p, critdev, acc, qa;
      mu = new Array(2);
      which = 0;
      n = rand(10, 25);
      sl = pickrand(1, 5, 10);
      if (rand()) {
        mu[1] = mu[0] = rand(-1, 5);
        sigma = rand(1, 4);
        which = rand(0, 2);
      } else {
        mu = distrand(2, -1, 5);
        sigma = rand(1, 4);
        if (rand()) {
          if (mu[0] < mu[1]) {
            which = 2;
          } else {
            which = 1;
          }
        } else {
          which = 0;
        }
      }
      Sx = 0;
      Sxx = 0;
      for (i$ = 0, to$ = n - 1; i$ <= to$; ++i$) {
        i = i$;
        xi = genN(mu[1], sigma);
        Sx += xi;
        Sxx += Math.pow(xi, 2);
      }
      qString = "In a hypothesis test, the null hypothesis \\({\\rm H}_0\\) is that \\(X\\) is normally distributed, with \\(\\mu = " + mu[0] + "\\). ";
      qString += "The alternative hypothesis \\({\\rm H}_1\\) is that \\(\\mu" + ['\\ne', '<', '>'][which] + mu[0] + "\\). ";
      qString += "The significance level is \\(" + sl + "\\%\\). ";
      qString += "A sample of size \\(" + n + "\\) is drawn from \\(X\\), and its sum \\(\\sum{x} = " + Sx.toFixed(3) + "\\). ";
      qString += "The sum of squares, \\(\\sum{x^2} = " + Sxx.toFixed(3) + "\\). ";
      qString += "Compute: <ul class=\"exercise\">";
      qString += "<li>\\(\\overline{x}\\)</li>";
      qString += "<li>Compute an estimate, \\(S^2\\), of the variance of \\(X\\)</li>";
      qString += "<li>Is \\({\\rm H}_0\\) accepted?</li>";
      qString += "</ul>";
      xbar = Sx / n;
      aString = "<ul class=\"exercise\">";
      aString = "<li>\\(\\overline{x} = " + xbar.toFixed(3) + "\\)</li>";
      SS = (Sxx - Math.pow(Sx, 2) / n) / (n - 1);
      aString += "<li>\\(S^2 = " + SS.toFixed(3) + "\\). ";
      aString += "Under \\({\\rm H}_0\\), \\({\\frac{\\overline{X}";
      if (mu[0]) {
        if (mu[0] > 0) {
          aString += " - ";
        } else {
          aString += " + ";
        }
        aString += Math.abs(mu[0]);
      }
      aString += "}{" + Math.sqrt(SS / n).toFixed(3) + "}}\\sim t_{" + (n - 1) + "}\\)</li>";
      p = 0;
      if (which) {
        switch (sl) {
        case 1:
          p = 4;
          break;
        case 5:
          p = 2;
          break;
        case 10:
          p = 1;
        }
      } else {
        switch (sl) {
        case 1:
          p = 5;
          break;
        case 5:
          p = 3;
          break;
        case 10:
          p = 2;
        }
      }
      critdev = Math.sqrt(SS) * tableT.values[n - 2][p] / Math.sqrt(n);
      if (which) {
        aString += "<li>The critical region is \\(\\overline{x}";
        if (which === 1) {
          aString += "<" + (mu[0] - critdev).toFixed(3);
        } else {
          aString += ">" + (mu[0] + critdev).toFixed(3);
        }
        aString += "\\) </br/>";
      } else {
        aString += "<li>The critical values are \\(" + (mu[0] - critdev).toFixed(3) + "\\) and \\(" + (mu[0] + critdev).toFixed(3) + "\\) <br />";
      }
      acc = false;
      switch (which) {
      case 0:
        acc = xbar >= mu[0] - critdev && xbar <= mu[0] + critdev;
        break;
      case 1:
        acc = xbar >= mu[0] - critdev;
        break;
      case 2:
        acc = xbar <= mu[0] + critdev;
      }
      if (acc) {
        aString += "\\({\\rm H}_0\\) is accepted.</li>";
      } else {
        aString += "\\({\\rm H}_0\\) is rejected.</li>";
      }
      aString += "</ul>";
      qa = [qString, aString];
      return qa;
    };
    if (rand()) {
      qa = makeHypTest1();
    } else {
      qa = makeHypTest2();
    }
    return qa;
  };
  problems.makeConfidInt = makeConfidInt = function(){
    var mu, sigma, n, sl, Sx, Sxx, i$, to$, i, xi, qString, xbar, SS, p, critdev, aString, qa;
    mu = rand(4);
    sigma = rand(1, 4);
    n = 2 * rand(6, 10);
    sl = pickrand(99, 95, 90);
    Sx = 0;
    Sxx = 0;
    for (i$ = 0, to$ = n - 1; i$ <= to$; ++i$) {
      i = i$;
      xi = genN(mu, sigma);
      Sx += xi;
      Sxx += xi * xi;
    }
    qString = "The random variable \\(X\\) has a normal distribution with unknown parameters. ";
    qString += "A sample of size \\(" + n + "\\) is taken for which $$\\sum{x} = " + Sx.toFixed(3) + "$$$$\\mbox{and}\\sum{x^2} = " + Sxx.toFixed(3) + ".$$";
    qString += "Compute, to 3 DP., a \\(" + sl + "\\)% confidence interval for the mean of \\(X\\).<br />";
    xbar = Sx / n;
    SS = (Sxx - Sx * Sx / n) / (n - 1);
    switch (sl) {
    case 99:
      p = 5;
      break;
    case 95:
      p = 3;
      break;
    case 90:
      p = 2;
    }
    critdev = Math.sqrt(SS / n) * tableT.values[n - 2][p];
    aString = "$$[" + (xbar - critdev).toFixed(3) + ", " + (xbar + critdev).toFixed(3) + "]$$";
    qa = [qString, aString];
    return qa;
  };
  problems.makeChiSquare = makeChiSquare = function(){
    var parms, distns, parmnames, nparms, massfn, genfn, which, n, sl, qString, sample, min, max, i$, to$, i, freq, y, Sx, Sxx, x, p, xbar, SS, hypparms, aString, qa, nrows, row, zh, zl, ph, pl, j1, j2, j$, j, row2, chisq, currow, crow, nu, critval;
    tableN.populate();
    parms = [[rand(10, 18) * 2, rand(20, 80) / 100], [rand(4, 12)], [rand(10, 30) / 100], [rand(4, 10), rand(2, 4)]];
    distns = ["binomial", "Poisson", "geometric", "normal"];
    parmnames = [["n", "p"], ["\\lambda"], ["p"], ["\\mu", "\\sigma"]];
    nparms = [2, 1, 1, 2];
    massfn = [massBin, massPo, massGeo, massN];
    genfn = [genBin, genPo, genGeo, genN];
    which = rand(0, 3);
    n = 5 * rand(10, 15);
    sl = pickrand(90, 95, 99);
    qString = "The random variable \\(X\\) is modelled by a <i>" + distns[which] + "</i> distribution. ";
    qString += "A sample of size \\(" + n + "\\) is drawn from \\(X\\) with the following grouped frequency data. ";
    sample = [];
    min = 1e3;
    max = 0;
    for (i$ = 0, to$ = n - 1; i$ <= to$; ++i$) {
      i = i$;
      sample[i] = genfn[which](parms[which][0], parms[which][1]);
      min = Math.min(min, sample[i]);
      max = Math.max(max, sample[i]);
    }
    min = Math.floor(min);
    max = Math.ceil(max);
    freq = [];
    for (i$ = 0, to$ = Math.ceil((max + 1 - min) / 2) - 1; i$ <= to$; ++i$) {
      i = i$;
      freq[i] = 0;
    }
    for (i$ = 0, to$ = n - 1; i$ <= to$; ++i$) {
      i = i$;
      y = Math.floor((sample[i] - min) / 2);
      freq[y]++;
    }
    qString += "<div style=\"font-size: 80%;\">$$\\begin{array}{c|r}x&\\mbox{Frequency}\\\\";
    Sx = 0;
    Sxx = 0;
    for (i$ = 0, to$ = Math.ceil((max + 1 - min) / 2) - 1; i$ <= to$; ++i$) {
      i = i$;
      x = min + i * 2;
      Sx += (x + 1) * freq[i];
      Sxx += (x + 1) * (x + 1) * freq[i];
      if (i === 0) {
        qString += "x < " + (x + 2);
      } else if (i === Math.ceil((max - 1 - min) / 2)) {
        qString += x + "\\le x";
      } else {
        qString += x + "\\le x <" + (x + 2);
      }
      qString += "&" + freq[i] + "\\\\";
    }
    qString += "\\end{array}$$</div>";
    qString += "<ul class=\"exercise\">";
    qString += "<li>Estimate the parameters of the distribution.</li>";
    qString += "<li>Use a \\(\\chi^2\\) test, with a significance level of \\(" + sl + "\\)%, to test this hypothesis.</li>";
    qString += "</ul>";
    switch (sl) {
    case 90:
      p = 3;
      break;
    case 95:
      p = 4;
      break;
    case 99:
      p = 6;
    }
    xbar = Sx / n;
    SS = (Sxx - Math.pow(Sx, 2) / n) / (n - 1);
    hypparms = [0, 0];
    aString = "<ol class=\"exercise\">";
    switch (which) {
    case 0:
      hypparms[1] = 1 - SS / xbar;
      hypparms[0] = Math.round(xbar / hypparms[1]);
      break;
    case 1:
      hypparms[0] = xbar;
      break;
    case 2:
      hypparms[0] = 1 / xbar;
      break;
    case 3:
      hypparms[0] = xbar;
      hypparms[1] = Math.sqrt(SS);
    }
    if (which === 0) {
      aString += "<li>$$" + parmnames[which][0] + " = " + hypparms[0].toString() + ", " + parmnames[which][1] + " = " + hypparms[1].toFixed(3) + ".$$</li>";
      if (hypparms[0] < 1) {
        aString += "</ol>";
        aString += "<p>The binomial model cannot fit these data</p>";
        qa = [qString, aString];
        return qa;
      }
    } else {
      aString += "<li>$$" + parmnames[which][0] + " = " + hypparms[0].toFixed(3);
      if (nparms[which] === 2) {
        aString += ", " + parmnames[which][1] + " = " + hypparms[1].toFixed(3);
      }
      aString += ".$$</li>";
    }
    aString += "<li></li></ol>";
    nrows = Math.ceil((max + 1 - min) / 2);
    row = [];
    for (i$ = 0, to$ = nrows - 1; i$ <= to$; ++i$) {
      i = i$;
      x = min + i * 2;
      row[i] = [x, x + 2, freq[i], 0, 0];
      if (which === 3) {
        zh = (x + 2 - hypparms[0]) / hypparms[1];
        zl = (x - hypparms[0]) / hypparms[1];
        if (Math.abs(zh) < 3) {
          if (zh >= 0) {
            ph = tableN.values[Math.floor(zh * 1000)];
          } else {
            ph = 1 - tableN.values[Math.floor(-zh * 1000)];
          }
        } else {
          if (zh > 0) {
            ph = 1;
          } else {
            ph = 0;
          }
        }
        if (Math.abs(zl) < 3) {
          if (zl >= 0) {
            ph = tableN.values[Math.floor(zl * 1000)];
          } else {
            pl = 1 - tableN.values[Math.floor(-zl * 1000)];
          }
        } else {
          if (zl > 0) {
            pl = 1;
          } else {
            pl = 0;
          }
        }
        if (i === 0) {
          pl = 0;
        }
        if (i === nrows - 1) {
          ph = 1;
        }
        row[i][3] = (ph - pl) * n;
      } else {
        if (i === 0) {
          j1 = 0;
        } else {
          j1 = x;
        }
        if (i === nrows - 1) {
          j2 = x + 99;
        } else {
          j2 = x + 1;
        }
        for (j$ = j1; j$ <= j2; ++j$) {
          j = j$;
          row[i][3] += massfn[which](j, hypparms[0], hypparms[1]) * n;
        }
      }
    }
    row2 = [];
    chisq = 0;
    currow = [0, 0, 0, 0, 0];
    for (i$ = 0, to$ = nrows - 1; i$ <= to$; ++i$) {
      i = i$;
      currow[1] = row[i][1];
      currow[2] += row[i][2];
      currow[3] += row[i][3];
      if (currow[3] >= 5) {
        currow[4] = Math.pow(currow[2] - currow[3], 2) / currow[3];
        row2.push(currow);
        chisq += currow[4];
        currow = [currow[1], currow[1], 0, 0, 0];
      }
    }
    if (row2.length) {
      crow = row2.pop();
    } else {
      crow = [0, 0, 0, 0, 0];
    }
    crow[1] = currow[1];
    crow[2] += currow[2];
    crow[3] += currow[3];
    chisq -= crow[4];
    crow[4] = Math.pow(crow[2] - crow[3], 2) / crow[3];
    row2.push(crow);
    chisq += crow[4];
    aString += "<div style=\"font-size: 80%;\">$$\\begin{array}{c||r|r|r}";
    aString += "x&O_i&E_i&\\frac{(O_i - E_i)^2}{E_i}\\\\";
    for (i$ = 0, to$ = row2.length - 1; i$ <= to$; ++i$) {
      i = i$;
      if (i === 0) {
        aString += "x < " + row2[i][1];
      } else if (i === row2.length - 1) {
        aString += row2[i][0] + "\\le x";
      } else {
        aString += row2[i][0] + "\\le x <" + row2[i][1];
      }
      aString += "&" + row2[i][2] + "&" + row2[i][3].toFixed(3) + "&" + row2[i][4].toFixed(3) + "\\\\";
    }
    aString += "\\end{array}$$</div>";
    aString += "$$\\chi^2 = " + chisq.toFixed(3) + "$$";
    nu = row2.length - 1 - nparms[which];
    aString += "$$\\nu = " + nu + "$$";
    if (nu < 1) {
      throw new Error("makeChiSquare: nu < 1!" + "\n\twhich:" + which + "\n\trow2.length:" + row2.length);
    }
    critval = tableChi.values[nu - 1][p];
    aString += "Critical region: \\(\\chi^2 >" + critval + "\\)<br />";
    if (chisq > critval) {
      aString += "The hypothesis is rejected.";
    } else {
      aString += "The hypothesis is accepted.";
    }
    qa = [qString, aString];
    return qa;
  };
  problems.makeProductMoment = makeProductMoment = function(){
    var n, mu, sigma, x, i$, to$, i, Ex, Exx, Exy, Eyy, Ey, qString, xbar, ybar, Sxx, Syy, Sxy, r, b, a, aString, qa;
    n = rand(6, 12);
    mu = [rand(4), rand(4)];
    sigma = [rand(1, 6), rand(1, 6)];
    x = [];
    for (i$ = 0, to$ = n - 1; i$ <= to$; ++i$) {
      i = i$;
      x[i] = [];
      x[i][0] = genN(mu[0], sigma[0]);
      x[i][1] = genN(mu[1], sigma[1]);
    }
    Ex = 0;
    Exx = 0;
    Exy = 0;
    Eyy = 0;
    Ey = 0;
    qString = "For the following data,";
    qString += "<ul class=\"exercise\">";
    qString += "<li>compute the product moment correlation coefficient, \\({\\bf r}\\)</li>";
    qString += "<li>find the regression line of \\(y\\) on \\(x\\)$$\\begin{array}{c|c}x&y\\\\";
    for (i$ = 0, to$ = n - 1; i$ <= to$; ++i$) {
      i = i$;
      qString += x[i][0].toFixed(3) + "&" + x[i][1].toFixed(3) + "\\\\";
      Ex += x[i][0];
      Exx += x[i][0] * x[i][0];
      Exy += x[i][0] * x[i][1];
      Eyy += x[i][1] * x[i][1];
      Ey += x[i][1];
    }
    qString += "\\end{array}$$</li></ul>";
    xbar = Ex / n;
    ybar = Ey / n;
    Sxx = Exx - Ex * xbar;
    Syy = Eyy - Ey * ybar;
    Sxy = Exy - Ex * Ey / n;
    r = Sxy / Math.sqrt(Sxx * Syy);
    b = Sxy / Sxx;
    a = ybar - b * xbar;
    aString = "<ul class=\"exercise\">";
    aString += "<li>\\({\\bf r} = " + r.toFixed(3) + "\\)</li><li>\\(y = " + b.toFixed(3) + "x";
    if (a > 0) {
      aString += " + ";
    }
    aString += a.toFixed(3) + "\\).";
    qa = [qString, aString];
    return qa;
  };
  return problems;
};
},{}],"BisjLa":[function(require,module,exports){
module.exports = function(qa){
  require('./manifest')(qa);
  qa.name = 'foo';
  return qa;
};
},{"./manifest":1}],"qalib":[function(require,module,exports){
module.exports=require('BisjLa');
},{}]},{},["BisjLa"])
;