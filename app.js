class MATQuizApp {
    constructor() {
        this.questions = [
  {
    id: 1,
    question: "Rank of an identity matrix of order 4 is___________________",
    options: ["4", "3", "1", "0"],
    correct: 0
  },
  {
    id: 2,
    question: "System of equations AX=B has solutions if",
    options: [
      "Rank[A] = number of unknowns",
      "Rank[A] = Rank[A│B] ≤ number of unknowns",
      "Rank[A] ≠ number of unknowns",
      "Rank[A] ≠ Rank[A│B]"
    ],
    correct: 1
  },
  {
    id: 3,
    question: "System AX=0 has nontrivial solution if and only if",
    options: [
      "Determinant of A = Determinant of X",
      "Determinant of A = 0",
      "Rank[A] ≠ Rank[A│B]",
      "Determinant of A ≠ 0"
    ],
    correct: 1
  },
  {
    id: 4,
    question: "If [A:B] = [[2,3,−1:5],[0,1,3:−1],[0,0,k/3−6:5]] then the value of k for which the system is inconsistent is___________",
    options: ["18", "-18", "6", "-6"],
    correct: 0
  },
  {
    id: 5,
    question: "System of equations AX=B has infinite number of solutions if",
    options: [
      "Rank[A] = Rank[A│B] = number of unknowns",
      "Rank[A] = Rank[A│B] < number of unknowns",
      "Rank[A] ≠ Rank[A│B]",
      "Rank[A] = Rank[A│B] > number of unknowns"
    ],
    correct: 1
  },
  {
    id: 6,
    question: "In the LU factorization of A = [[3,−7,−2],[−3,5,1],[6,−4,0]], the matrix U is",
    options: [
      "U = [[3,7,2],[0,−2,−1],[0,0,−1]]",
      "U = [[3,−7,−2],[0,−2,2],[0,0,−1]]",
      "U = [[3,−7,−2],[0,−2,−1],[0,0,−1]]",
      "U = [[3,−7,−2],[0,5,1],[0,0,0]]"
    ],
    correct: 2
  },
  {
    id: 7,
    question: "The eigen values of A = [[5,6,17],[0,−19,23],[0,0,37]] are",
    options: ["-19, 37, 5", "2, −3, 7", "5, 19, 37", "0, 5, 17"],
    correct: 0
  },
  {
    id: 8,
    question: "Eigen value of a triangular matrix A are",
    options: [
      "diagonal element of A",
      "sum of diagonal element of A",
      "Determinant of A",
      "Trace of A"
    ],
    correct: 0
  },
  {
    id: 9,
    question: "Eigenvectors corresponding to distinct eigenvalues are:",
    options: [
      "Always parallel",
      "Always orthogonal",
      "Linearly independent",
      "Linearly dependent"
    ],
    correct: 2
  },
  {
    id: 10,
    question: "Let A = [[3,10,5],[−2,−3,−4],[3,5,7]], the eigen value λ₁ = 2, λ₂ = 3 and λ₃ = ___________",
    options: ["3", "2", "5", "7"],
    correct: 1
  },
  {
    id: 11,
    question: "If A is a square matrix, then det(A) =",
    options: [
      "sum of the eigen values of A",
      "product of eigen values of A",
      "product of diagonal elements of A",
      "sum of diagonal elements of A"
    ],
    correct: 1
  },
  {
    id: 12,
    question: "For which value of k the system of two equations x + y = 1, 2x + 2y = k has infinite solutions:",
    options: ["k = 0", "k = 1", "k = 2", "any value of k ≠ 1"],
    correct: 2
  },
  {
    id: 13,
    question: "If A is a 3 × 4 matrix the maximum possible value of the rank A is",
    options: ["4", "3", "2", "0"],
    correct: 1
  },
  {
    id: 14,
    question: "If a matrix A is reduced to row echelon form, then rank of the matrix is",
    options: [
      "number of zero rows",
      "number of non-zero rows",
      "total number of rows",
      "total number of columns"
    ],
    correct: 1
  },
  {
    id: 15,
    question: "The characteristic equation of the matrix A = [[2,0],[4,7]] is:",
    options: [
      "λ² − 9λ + 14 = 0",
      "λ² − 14λ + 9 = 0",
      "λ² − 9λ − 14 = 0",
      "λ² − 14λ − 9 = 0"
    ],
    correct: 0
  },
  {
    id: 16,
    question: "If a matrix has distinct eigenvalues, then its minimal polynomial is",
    options: [
      "Product of repeated factors",
      "Product of distinct linear factors",
      "Constant",
      "Quadratic only"
    ],
    correct: 1
  },
  {
    id: 17,
    question: "Eigen values of A = [[4,1],[1,4]] are",
    options: ["3, -3", "-3, -5", "3, 5", "5, 0"],
    correct: 2
  },
  {
    id: 18,
    question: "The minimal polynomial of A = [[3,2],[3,8]] is",
    options: [
      "m(t) = (λ + 2)(λ + 9)",
      "m(t) = (λ − 2)(λ − 9)",
      "m(t) = (λ − 2)(λ + 9)",
      "m(t) = (λ − 3)(λ − 8)"
    ],
    correct: 1
  },
  {
    id: 19,
    question: "Which of the following is not a valid elementary operation?",
    options: [
      "Ri ↔ Rj",
      "Ri → Rj + kRi",
      "Ri → kRi",
      "Ri → 1 + kRi"
    ],
    correct: 3
  },
  {
    id: 20,
    question: "The value of h for which the augmented matrix [[1,−3:−2],[5,h:−7]] of a linear system is inconsistent",
    options: ["h = −15", "h ≠ −15", "h = 5", "h = −1"],
    correct: 0
  },
  {
    id: 21,
    question: "The characteristic equation of a matrix A is obtained from:",
    options: ["|A| = 0", "|A − λI| = 0", "A − λI = 0", "|A + λI| = 0"],
    correct: 1
  },
  {
    id: 22,
    question: "Rayleigh's power method is used to find the",
    options: [
      "all eigenvalues of a matrix",
      "smallest eigenvalue of a matrix",
      "largest eigenvalue of a matrix",
      "complex eigenvalues of a matrix"
    ],
    correct: 2
  },

  // UNIT II - VECTOR SPACES
  {
    id: 23,
    question: "A subset S of vector space V over field F is a basis of V if S is linearly independent and",
    options: ["Span(S) = F", "Span(V) = S", "Span(S) = V", "Span(S) = S"],
    correct: 2
  },
  {
    id: 24,
    question: "If {u₁, u₂, …, uₙ} is linearly independent set, then c₁u₁ + c₂u₂ + ⋯ + cₙuₙ = 0 has",
    options: [
      "infinitely many solutions",
      "unique nonzero solution",
      "only the trivial solution",
      "at least one non-zero solution"
    ],
    correct: 2
  },
  {
    id: 25,
    question: "Let A be an m × n real matrix. The row space of A is a subspace of",
    options: ["Rⁿ", "the set of all m × n matrices", "Rᵐ", "R"],
    correct: 0
  },
  {
    id: 26,
    question: "In two-dimensional Euclidean space ℝ², the identity element with respect to vector addition is",
    options: ["(1,1)", "(0,0)", "(-1,-1)", "does not exist"],
    correct: 1
  },
  {
    id: 27,
    question: "In three-dimensional Euclidean space ℝ³, inverse of (−2, −2, 0) with respect to vector addition is",
    options: ["(0,0,0)", "(2,2,2)", "(2,2,−2)", "(2,2,0)"],
    correct: 3
  },
  {
    id: 28,
    question: "Which of the following sets is linearly dependent?",
    options: [
      "{(0,0,0), (3,0,3)}",
      "{(1,1,0), (0,0,1)}",
      "{(0,0,2), (3,0,0)}",
      "{(1,0,1), (0,1,1)}"
    ],
    correct: 0
  },
  {
    id: 29,
    question: "The dimension of the subspace of ℝ³, spanned by the vectors {(2,0,1), (5,2,1), (1,2,−1)} is:",
    options: ["3", "2", "1", "0"],
    correct: 1
  },
  {
    id: 30,
    question: "Let A be an m × n real matrix. The column space of A is a subspace of",
    options: ["Rᵐ", "Rⁿ", "Rᵐⁿ", "Rᵐ⁺ⁿ"],
    correct: 0
  },
  {
    id: 31,
    question: "The set W = {(a, 0, 0) : a ∈ R} is a subspace of:",
    options: ["R²", "R", "R³", "R⁴"],
    correct: 2
  },
  {
    id: 32,
    question: "If W is a subspace of vector space V then",
    options: [
      "dim(W) ≥ dim(V)",
      "dim(W) ≤ dim(V)",
      "dim(W) ≠ dim(V)",
      "dim(W) > dim(V)"
    ],
    correct: 1
  },
  {
    id: 33,
    question: "If a basis of a vector space contains exactly three vectors, then the dimension of the vector space is:",
    options: ["less than 3", "greater than 3", "3", "0"],
    correct: 2
  },
  {
    id: 34,
    question: "Dimension of the Null space of the matrix A = [[1,0,0],[0,0,0],[0,3,0]] is",
    options: ["0", "1", "2", "3"],
    correct: 1
  },
  {
    id: 35,
    question: "The set H = {(a, a) / a ∈ R}, which of the following is true:",
    options: [
      "H is a subset of R², but not subspace",
      "H is an empty set",
      "H is a subspace of R",
      "H is a subspace of R²"
    ],
    correct: 3
  },
  {
    id: 36,
    question: "The set of all solution to the homogeneous equation system AX = 0, where A be an m × n matrix is",
    options: [
      "Null space of A",
      "Column space of A",
      "Row space of A",
      "Null space of A and column space of A"
    ],
    correct: 0
  },
  {
    id: 37,
    question: "Which of the following is a linear combination of u = (1,1,0) and v = (0,0,1)?",
    options: ["(2,2,3)", "(2,0,1)", "both (a) & (b)", "neither (a) nor (b)"],
    correct: 0
  },
  {
    id: 38,
    question: "If S = {v₁, v₂, ⋯, vₙ} is a set of vectors in a finite dimension vector space V, then S is called a basis for V if",
    options: [
      "S spans V",
      "S is linearly independent",
      "either (a) or (b)",
      "both (a) and (b)"
    ],
    correct: 3
  },
  {
    id: 39,
    question: "If a vector can be expressed as a linear combination of other vectors in a set, then the set is",
    options: ["Linearly independent", "Orthonormal", "Linearly dependent", "A basis"],
    correct: 2
  },
  {
    id: 40,
    question: "A set of vectors which is both linearly independent and spans the vector space is called",
    options: ["Spanning set", "Coordinate system", "Basis", "Subspace"],
    correct: 2
  },
  {
    id: 41,
    question: "Which of the following sets forms a basis for the column space of a matrix A?",
    options: [
      "All columns of A",
      "All non-zero columns of A",
      "The pivot columns of A",
      "The rows of A"
    ],
    correct: 2
  },
  {
    id: 42,
    question: "The vectors (1,0,1), (0,1,0), (2,3,2) are",
    options: [
      "Linearly independent",
      "Linearly dependent",
      "Form a basis of ℝ⁴",
      "Cannot be determined"
    ],
    correct: 1
  },

  // LINEAR TRANSFORMATIONS
  {
    id: 43,
    question: "Let T: R⁴ → R⁴ be the linear transformation defined by T(x₁, x₂, x₃, x₄) = (0, x₁, x₂, x₃). Then null space of T consists of vectors of the form",
    options: [
      "(0, 0, 0, x₄)",
      "(x, 0, 0, 0) where x is a real number",
      "(x₁, x₂, x₃, 0)",
      "(x₁, x₁, x₃, 0)"
    ],
    correct: 0
  },
  {
    id: 44,
    question: "Let T: R³ → R⁴ be the linear transformation defined by T(x₁, x₂, x₃) = (x₁, 0, x₂, x₂). Then basis for null space of T is",
    options: ["(1,0,0)", "(0,0,1)", "(0,1,0,0)", "(1,1,0,0)"],
    correct: 1
  },
  {
    id: 45,
    question: "Which of the following statement is not true if T: U → V is a linear transformation.",
    options: [
      "T(x·y) = T(x)·T(y) ∀x, y ∈ U",
      "T(−x) = −T(x) ∀x ∈ U",
      "T(0) = 0 for 0 ∈ U",
      "T(2x) = 2T(x) ∀x ∈ U"
    ],
    correct: 0
  },
  {
    id: 46,
    question: "Which of the following mappings is not a linear transformation?",
    options: [
      "T(x, y) = (x + y, x − y)",
      "T(x, y) = (2x, 3y)",
      "T(x, y) = (x², y)",
      "T(x, y) = (0, x)"
    ],
    correct: 2
  },
  {
    id: 47,
    question: "Which of the following statement is true if T: U → V is a linear transformation",
    options: [
      "Range space of T is a subspace of V",
      "Null space of T is a subspace of V",
      "V is always the range of T",
      "Range space of T is a subspace of U"
    ],
    correct: 0
  },
  {
    id: 48,
    question: "Which of the following statement is true if T: U → V is a linear transformation (null space)",
    options: [
      "Range space of T is a subspace of U",
      "Null space of T is a subspace of U",
      "V is always the range of T",
      "Null space of T is a subspace of V"
    ],
    correct: 1
  },
  {
    id: 49,
    question: "If u = [1, 2]ᵀ, v = [−5, 7]ᵀ then inner product of u and v is",
    options: ["9", "19", "-3", "3"],
    correct: 2
  },
  {
    id: 50,
    question: "Let T: R² → R² be the linear transformation defined by T(x, y) = (x, 0). Then matrix of linear transformation with respect to standard basis is",
    options: [
      "[[0,1],[0,1]]",
      "[[0,−1],[0,−1]]",
      "[[1,0],[0,0]]",
      "[[−1,0],[0,0]]"
    ],
    correct: 2
  },
  {
    id: 51,
    question: "Let T(x, y) = (x + y, x − y, y) be the linear transformation. Then nullity of T is",
    options: ["0", "1", "2", "3"],
    correct: 0
  },
  {
    id: 52,
    question: "Let T: R³ → R³ be the linear transformation with nullity of T is 2 then rank of T is",
    options: ["0", "1", "2", "3"],
    correct: 1
  },
  {
    id: 53,
    question: "Let T(x, y) = (x + y, x − y, y) be the linear transformation. Then null space of T is",
    options: ["{(x, 0)}", "{(0, y)}", "{(0, 0)}", "{(x, y)}"],
    correct: 2
  },
  {
    id: 54,
    question: "The null space of the linear transformation T(x, y, z) = (x + y, x − y, x + 2z) is",
    options: ["{(x, 0, z)}", "{(0, y, z)}", "{(0, 0, 1)}", "{(0, 0, 0)}"],
    correct: 3
  },
  {
    id: 55,
    question: "The range space of the linear transformation T(x, y, z) = (x + y, x − y, x + 2z) is",
    options: [
      "{(x + y, 0, 2z)}",
      "{(x, y, z)}",
      "{(x + y, x − y, x + 2z)}",
      "{(y, −y, x)}"
    ],
    correct: 2
  },
  {
    id: 56,
    question: "If T: R⁴ → R⁴ is a linear transformation with Nullity 2, then dimension of range space of T is",
    options: ["4", "2", "1", "none of these"],
    correct: 1
  },
  {
    id: 57,
    question: "Range space of linear transformation T: U → V is a subspace of",
    options: ["V", "U", "U and V", "none of these"],
    correct: 0
  },
  {
    id: 58,
    question: "Which of the following set of vectors is not orthogonal",
    options: [
      "{[1,0], [0,1]}",
      "{[1,0], [1,1]}",
      "{[1,−1], [1,1]}",
      "{[−2,2], [1,1]}"
    ],
    correct: 1
  },
  {
    id: 59,
    question: "If T: R⁶ → R⁶ is a linear transformation with Rank of T is 2, nullity of T is",
    options: ["4", "2", "1", "none of these"],
    correct: 0
  },
  {
    id: 60,
    question: "Which of the following statement is true if T: V → W is a linear transformation",
    options: [
      "Range space of T is a subspace of V",
      "Null space of T is a subspace of W",
      "Range of T is a subset of W",
      "cT is not a linear transformation from V to W, where c is any scalar"
    ],
    correct: 2
  },
  {
    id: 61,
    question: "Let T: R⁶ → R⁶ be the linear transformation with nullity of T is 2 then rank of T is",
    options: ["4", "1", "2", "3"],
    correct: 0
  },
  {
    id: 62,
    question: "Two vectors u and v in Rⁿ are orthogonal if",
    options: ["u·v = v·u", "u·v = 1", "u·v ≥ 0", "u·v = 0"],
    correct: 3
  },

  // UNIT IV
  {
    id: 63,
    question: "If a square matrix A is diagonalizable, then for any positive integer k > 2:",
    options: [
      "Aᵏ = PDᵏP⁻¹",
      "Aᵏ = PᵏD P⁻ᵏ",
      "Aᵏ = PᵏDᵏP⁻ᵏ",
      "Aᵏ = PᵏDᵏ"
    ],
    correct: 0
  },
  {
    id: 64,
    question: "Let A be an n × n matrix, then A is diagonalizable if and only if",
    options: [
      "A is zero matrix",
      "A has linearly independent columns",
      "A has n linearly independent eigenvectors",
      "A has only (n − 1) linearly independent vectors"
    ],
    correct: 2
  },
  {
    id: 65,
    question: "If an n × n matrix A has n distinct eigen values, then A is:",
    options: [
      "symmetric matrix",
      "diagonalizable matrix",
      "not diagonalizable matrix",
      "skew symmetric matrix"
    ],
    correct: 1
  },
  {
    id: 66,
    question: "Let A = [[2,1],[0,1]], if A = PDP⁻¹ with P = [[1,−1],[0,1]], then D is:",
    options: [
      "[[2,1],[0,1]]",
      "[[2,0],[0,0]]",
      "[[0,1],[0,1]]",
      "[[2,0],[0,1]]"
    ],
    correct: 3
  },
  {
    id: 67,
    question: "The quadratic form 3x₁² + 5x₂² + 6x₃² is:",
    options: [
      "Positive definite",
      "Negative definite",
      "Indefinite",
      "Negative semi-definite"
    ],
    correct: 0
  },
  {
    id: 68,
    question: "Matrix of the quadratic form 2x₁² − 4x₁x₂ + x₂² is:",
    options: [
      "[[2,−4],[−4,1]]",
      "[[2,−2],[−2,1]]",
      "[[1,−4],[−4,1]]",
      "[[2,−2],[−4,2]]"
    ],
    correct: 1
  },
  {
    id: 69,
    question: "If eigen values of the quadratic form Q(X) are −3, −2 and 0, then the quadratic form Q(X) is:",
    options: [
      "Positive definite",
      "Negative definite",
      "Indefinite",
      "Negative semi-definite"
    ],
    correct: 3
  },
  {
    id: 70,
    question: "Eigen values of the quadratic form x₁² + 2x₁x₂ + x₂² are",
    options: ["0, 2", "1, 1", "1, 2", "1, 0"],
    correct: 0
  },
  {
    id: 71,
    question: "Matrix of the quadratic form x₁² − 2x₂² + 3x₃² − 2x₁x₃ is",
    options: [
      "[[1,0,1],[0,2,0],[1,0,3]]",
      "[[1,0,0],[0,−2,0],[0,0,3]]",
      "[[1,0,−1],[0,−2,0],[−1,0,3]]",
      "[[1,0,−2],[0,2,0],[−2,0,3]]"
    ],
    correct: 2
  },
  {
    id: 72,
    question: "In QR factorization of matrix A, Q is a matrix whose columns form an orthonormal basis for",
    options: [
      "Column space of A",
      "Null space of A",
      "Row space of A",
      "Both null space and row space of A"
    ],
    correct: 0
  },
  {
    id: 73,
    question: "The quadratic form 3x₁² − 4x₁x₂ + 6x₂² is",
    options: [
      "Positive definite",
      "Positive semi-definite",
      "Negative definite",
      "Indefinite"
    ],
    correct: 0
  },
  {
    id: 74,
    question: "In QR factorization of matrix A, R is equal to:",
    options: ["QᵀAᵀ", "AᵀQ", "QA", "QᵀA"],
    correct: 3
  },
  {
    id: 75,
    question: "If A = QR, where A = [[1,1],[0,−1]] and Q = [[1,0],[0,−1]], then R =",
    options: [
      "[[1,1],[0,−1]]",
      "[[1,0],[0,−1]]",
      "[[1,1],[0,1]]",
      "[[1,0],[0,1]]"
    ],
    correct: 2
  },
  {
    id: 76,
    question: "The QR factorization of an m × n matrix A exists, if",
    options: [
      "the columns of A are linearly independent",
      "the rows of A are dependent",
      "A has non-zero columns",
      "rank of A is n − 1"
    ],
    correct: 0
  },
  {
    id: 77,
    question: "The set of least-squares solutions of Ax = b coincides with the nonempty set of solutions of the normal equation:",
    options: ["AAᵀx = Aᵀb", "AᵀAx = Aᵀb", "Aᵀx = Aᵀb", "Aᵀx = b"],
    correct: 1
  },
  {
    id: 78,
    question: "If x̂ is the least square solution of the inconsistent system Ax = b, then",
    options: [
      "b − Ax̂ is orthogonal to rows of A",
      "b − Ax̂ is in the null space of A",
      "b − Ax̂ is in the row space of A",
      "b − Ax̂ is orthogonal to columns of A"
    ],
    correct: 3
  },
  {
    id: 79,
    question: "A matrix A = [[3,0],[4,5]] has the singular value decomposition A = UΣVᵀ with the singular values √5 and √45, then Σ =",
    options: [
      "[[3,0],[0,5]]",
      "[[√45,0],[0,√5]]",
      "[[√5,0],[0,5]]",
      "[[√35,0],[0,5]]"
    ],
    correct: 1
  },
  {
    id: 80,
    question: "Singular values of A = [[1,0],[0,−3]] are",
    options: ["1, −3", "9, 1", "√3, 1", "3, 1"],
    correct: 3
  },
  {
    id: 81,
    question: "Singular value of matrix A are",
    options: [
      "the eigen values of the matrix AᵀA",
      "the eigenvalues of A",
      "the positive square roots of the eigenvalues of AᵀA",
      "the square roots of the eigen values of A"
    ],
    correct: 2
  },
  {
    id: 82,
    question: "If a matrix A is diagonalizable, then the Jordan Canonical Form of A is",
    options: [
      "an upper triangular matrix",
      "a lower triangular matrix",
      "a diagonal matrix",
      "a matrix with only 1s on the super diagonal"
    ],
    correct: 2
  },

  // Fourier Series and Integral
  {
    id: 83,
    question: "If F{f(t)} = F(ω), then F{f(at)} = _____________",
    options: ["F(ω/a)", "a F(aω)", "(1/a) F(ω/a)", "F(aω)"],
    correct: 2
  },
  {
    id: 84,
    question: "The Fourier series expansion of x³ in (−1, 1) with f(x + 2) = f(x) has",
    options: [
      "Only sine terms",
      "Only cosine terms",
      "Both sine and cosine terms",
      "Only sine terms and a non-zero constant"
    ],
    correct: 0
  },
  {
    id: 85,
    question: "The value of a₀ in the Fourier series of the function f(x) = x in the interval (−1, 1) is ______",
    options: [
      "∑(2/n²) cos(nπx/2)",
      "∑(2/n) sin(nπx/2)",
      "0",
      "1"
    ],
    correct: 2
  },
  {
    id: 86,
    question: "If f(x) is a periodic function in (−2, 2), then bₙ = _______________",
    options: [
      "(1/2) ∫₋₂² f(x) dx",
      "(1/2) ∫₋₂² f(x) cos(nx) dx",
      "(1/2) ∫₋₂² f(x) sin(nπx/2) dx",
      "∫₋₂² f(x) sin(nx) dx"
    ],
    correct: 2
  },
  {
    id: 87,
    question: "If f(x) is a periodic function in (−π, π), then a₀ = _______________",
    options: [
      "(1/π) ∫₋π^π f(x) dx",
      "(1/π) ∫₋π^π f(x) cos(nx) dx",
      "(1/π) ∫₋π^π f(x) sin(nx) dx",
      "∫₋π^π f(x) cos(nx) dx"
    ],
    correct: 0
  },
  {
    id: 88,
    question: "Which of the following function is odd",
    options: [
      "f(x) = {1+x, −π<x<0 ; 1−x, 0<x<π}",
      "f(x) = {−x, −π<x<0 ; x, 0<x<π}",
      "f(x) = {−k, −π<x<0 ; k, 0<x<π}",
      "f(x) = {−2x, −π<x<0 ; 2x, 0<x<π}"
    ],
    correct: 2
  },
  {
    id: 89,
    question: "If f(x) = {1, |x|<1 ; 0, |x|>1} then its Fourier transform contains",
    options: [
      "only sine terms",
      "only cosine terms",
      "both sine and cosine terms",
      "neither sine nor cosine terms"
    ],
    correct: 1
  },
  {
    id: 90,
    question: "If f(x) is an even function, the Fourier transform integral reduces to",
    options: [
      "∫₀^∞ f(x) sin(αx) dx",
      "∫₋∞^∞ f(x) e^(−iαx) dx",
      "2 ∫₀^∞ f(x) cos(αx) dx",
      "2 ∫₋∞^0 f(x) cos(αx) dx"
    ],
    correct: 2
  },
  {
    id: 91,
    question: "If f(x) is even, which integral is zero?",
    options: [
      "∫₋∞^∞ f(x) sin(αx) dx",
      "∫₋∞^∞ f(x) cos(αx) dx",
      "∫₀^∞ f(x) cos(αx) dx",
      "∫₀^∞ f(x) sin(αx) dx"
    ],
    correct: 0
  },
  {
    id: 92,
    question: "L{sin(π/4)} is ------------",
    options: ["√2/s", "1/(√2·s)", "1/s", "√2·s"],
    correct: 1
  },
  {
    id: 93,
    question: "L{5ᵗ} is ----------",
    options: ["1/(5s)", "1/(s − log5)", "1/(s − 5)", "1/(s² − 5)"],
    correct: 1
  },
  {
    id: 94,
    question: "If L{f(t)} = f̄(s), then L{t·f(t)} = -----------",
    options: [
      "s·f̄(s)",
      "d/ds (f̄(s))",
      "(−1) d/ds (f̄(s))",
      "(−1)ⁿ dⁿ/dsⁿ (f̄(s))"
    ],
    correct: 2
  },
  {
    id: 95,
    question: "If L{f(t)} = f̄(s), then L{f(t)/t} = -------------",
    options: [
      "(1/s) f̄(s)",
      "∫ₛ^∞ f̄(s) ds",
      "(1/s) ∫ₛ^∞ f̄(s) ds",
      "∫₀^∞ f̄(s) ds"
    ],
    correct: 1
  },
  {
    id: 96,
    question: "L{10t} = -------------",
    options: ["10/s", "10/s²", "20/s²", "10s"],
    correct: 1
  },
  {
    id: 97,
    question: "If L{f(t)} = f̄(s), then L{∫₀ᵗ f(t) dt} = ----------",
    options: [
      "∫ₛ^∞ f̄(s) ds",
      "s·f̄(s)",
      "∫₀^∞ f̄(s) ds",
      "(1/s) f̄(s)"
    ],
    correct: 3
  },
  {
    id: 98,
    question: "If L{f(t)} = 1/s², then L{f(t)/t} is -----------",
    options: ["−2/s³", "2/s³", "1/s", "−1/s"],
    correct: 3
  },
  {
    id: 99,
    question: "L{e^(−2t)} = -----------",
    options: ["1/(s+2)", "1/(s−2)", "s/(s+2)", "s/(s−2)"],
    correct: 0
  },
  {
    id: 100,
    question: "If L{f(t)} = f̄(s), then L{e^(−2t) f(t)} is --------------",
    options: ["f̄(s+2)", "f̄(s−2)", "f̄(s)", "(1/2) f̄(s)"],
    correct: 0
  },
  {
    id: 101,
    question: "L{t sin t} = -----------",
    options: [
      "2s / (s²−1)²",
      "2 / (s²+1)²",
      "2s / (s²+1)",
      "2s / (s²+1)²"
    ],
    correct: 3
  },
  {
    id: 102,
    question: "L{t⁶} = ---------",
    options: ["5!/s⁵", "5!/s⁶", "6!/s⁷", "6!/s⁶"],
    correct: 2
  }      
];


        this.currentQuestions = [];
        this.currentQuestionIndex = 0;
        this.answers = {};
        this.timeRemaining = 15 * 60; 
        this.timer = null;
        this.startTime = null;
        this.studentName = '';

        this.initializeEventListeners();
    }

    initializeEventListeners() {
        const startBtn = document.getElementById('startQuizBtn');
        const adminBtn = document.getElementById('adminLoginBtn');
        
        if (startBtn) {
            startBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.startQuiz();
            });
        }

        if (adminBtn) {
            adminBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.showAdminModal();
            });
        }

        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        const submitBtn = document.getElementById('submitBtn');

        if (prevBtn) prevBtn.addEventListener('click', () => this.previousQuestion());
        if (nextBtn) nextBtn.addEventListener('click', () => this.nextQuestion());
        if (submitBtn) submitBtn.addEventListener('click', () => this.submitQuiz());

        const reviewBtn = document.getElementById('reviewAnswersBtn');
        const newQuizBtn = document.getElementById('newQuizBtn');

        if (reviewBtn) reviewBtn.addEventListener('click', () => this.showReview());
        if (newQuizBtn) newQuizBtn.addEventListener('click', () => this.newQuiz());

        const backBtn = document.getElementById('backToResultsBtn');
        if (backBtn) backBtn.addEventListener('click', () => this.showResults());

        const adminLoginSubmit = document.getElementById('adminLoginSubmit');
        const adminModalClose = document.getElementById('adminModalClose');
        const logoutBtn = document.getElementById('logoutBtn');
        const exportBtn = document.getElementById('exportBtn');

        if (adminLoginSubmit) adminLoginSubmit.addEventListener('click', () => this.adminLogin());
        if (adminModalClose) adminModalClose.addEventListener('click', () => this.hideAdminModal());
        if (logoutBtn) logoutBtn.addEventListener('click', () => this.adminLogout());
        if (exportBtn) exportBtn.addEventListener('click', () => this.exportCSV());

        const nameInput = document.getElementById('studentName');
        if (nameInput) {
            nameInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    this.startQuiz();
                }
            });
            
            nameInput.addEventListener('click', () => {
                nameInput.focus();
            });
        }
    }

    shuffleArray(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }

    shuffleQuestionOptions(question) {
        const shuffled = { ...question };
        const optionsWithIndex = question.options.map((option, index) => ({ option, originalIndex: index }));
        const shuffledOptions = this.shuffleArray(optionsWithIndex);
        
        shuffled.options = shuffledOptions.map(item => item.option);
        shuffled.correct = shuffledOptions.findIndex(item => item.originalIndex === question.correct);
        
        return shuffled;
    }

    prepareRandomQuestions() {
        const shuffledQuestions = this.shuffleArray(this.questions);
        const selectedQuestions = shuffledQuestions.slice(0, 20);
        
        this.currentQuestions = selectedQuestions.map(q => this.shuffleQuestionOptions(q));
        
        this.currentQuestions = this.shuffleArray(this.currentQuestions);
    }

    startQuiz() {
        const nameInput = document.getElementById('studentName');
        
        if (!nameInput || !nameInput.value.trim()) {
            alert('Please enter your name before starting the quiz.');
            if (nameInput) nameInput.focus();
            return;
        }

        this.studentName = nameInput.value.trim();
        this.prepareRandomQuestions();
        this.currentQuestionIndex = 0;
        this.answers = {};
        this.timeRemaining = 15 * 60;
        this.startTime = Date.now();

        this.showScreen('quizScreen');
        this.displayQuestion();
        this.startTimer();
    }

    startTimer() {
        if (this.timer) {
            clearInterval(this.timer);
        }
        
        this.timer = setInterval(() => {
            this.timeRemaining--;
            this.updateTimerDisplay();

            if (this.timeRemaining <= 5 * 60) { // 5 minutes warning
                const timerElement = document.getElementById('timer');
                if (timerElement) {
                    timerElement.classList.add('warning');
                }
            }

            if (this.timeRemaining <= 0) {
                this.submitQuiz();
            }
        }, 1000);
    }

    updateTimerDisplay() {
        const timerElement = document.getElementById('timer');
        if (timerElement) {
            const minutes = Math.floor(this.timeRemaining / 60);
            const seconds = this.timeRemaining % 60;
            timerElement.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
        }
    }

    displayQuestion() {
        const question = this.currentQuestions[this.currentQuestionIndex];
        const questionNumber = this.currentQuestionIndex + 1;

        // Update question counter
        const counterElement = document.getElementById('questionCounter');
        if (counterElement) {
            counterElement.textContent = `Question ${questionNumber} of 20`;
        }

        // Update question text
        const questionTextElement = document.getElementById('questionText');
        if (questionTextElement) {
            questionTextElement.textContent = question.question;
        }

        // Update options
        const optionsContainer = document.getElementById('optionsContainer');
        if (optionsContainer) {
            optionsContainer.innerHTML = '';

            question.options.forEach((option, index) => {
                const optionDiv = document.createElement('div');
                optionDiv.className = 'option';
                
                const radio = document.createElement('input');
                radio.type = 'radio';
                radio.name = 'answer';
                radio.value = index;
                radio.id = `option${index}`;

                const label = document.createElement('label');
                label.htmlFor = `option${index}`;
                label.textContent = option;

                optionDiv.appendChild(radio);
                optionDiv.appendChild(label);

                if (this.answers[question.id] === index) {
                    radio.checked = true;
                    optionDiv.classList.add('selected');
                }

                optionDiv.addEventListener('click', () => {
                    optionsContainer.querySelectorAll('.option').forEach(opt => {
                        opt.classList.remove('selected');
                    });
                    
                    optionDiv.classList.add('selected');
                    radio.checked = true;
                    
                    this.answers[question.id] = index;
                });

                optionsContainer.appendChild(optionDiv);
            });
        }

        const progressBar = document.getElementById('progressBar');
        if (progressBar) {
            const progress = (questionNumber / 20) * 100;
            progressBar.style.width = `${progress}%`;
        }

        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        const submitBtn = document.getElementById('submitBtn');

        if (prevBtn) prevBtn.disabled = questionNumber === 1;
        
        if (nextBtn) {
            nextBtn.style.display = questionNumber === 20 ? 'none' : 'block';
        }
        
        if (submitBtn) {
            submitBtn.style.display = questionNumber === 20 ? 'block' : 'none';
        }
    }

    previousQuestion() {
        if (this.currentQuestionIndex > 0) {
            this.currentQuestionIndex--;
            this.displayQuestion();
        }
    }

    nextQuestion() {
        if (this.currentQuestionIndex < this.currentQuestions.length - 1) {
            this.currentQuestionIndex++;
            this.displayQuestion();
        }
    }

    submitQuiz() {
        if (this.timer) {
            clearInterval(this.timer);
        }

        const endTime = Date.now();
        const timeTaken = Math.floor((endTime - this.startTime) / 1000);

        let correct = 0;
        let wrong = 0;
        let unanswered = 0;

        this.currentQuestions.forEach(question => {
            if (this.answers.hasOwnProperty(question.id)) {
                if (this.answers[question.id] === question.correct) {
                    correct++;
                } else {
                    wrong++;
                }
            } else {
                unanswered++;
            }
        });

        const scorePercentage = Math.round((correct / 20) * 100);

        this.saveResult({
            name: this.studentName,
            score: scorePercentage,
            correct: correct,
            wrong: wrong,
            unanswered: unanswered,
            timeTaken: timeTaken,
            date: new Date().toLocaleDateString(),
            answers: { ...this.answers },
            questions: [...this.currentQuestions]
        });

        this.displayResults(scorePercentage, correct, wrong, unanswered, timeTaken);
    }

    displayResults(scorePercentage, correct, wrong, unanswered, timeTaken) {
        const elements = {
            studentNameDisplay: document.getElementById('studentNameDisplay'),
            scorePercentage: document.getElementById('scorePercentage'),
            correctCount: document.getElementById('correctCount'),
            wrongCount: document.getElementById('wrongCount'),
            unansweredCount: document.getElementById('unansweredCount'),
            timeTaken: document.getElementById('timeTaken')
        };

        if (elements.studentNameDisplay) elements.studentNameDisplay.textContent = this.studentName;
        if (elements.scorePercentage) elements.scorePercentage.textContent = `${scorePercentage}%`;
        if (elements.correctCount) elements.correctCount.textContent = correct;
        if (elements.wrongCount) elements.wrongCount.textContent = wrong;
        if (elements.unansweredCount) elements.unansweredCount.textContent = unanswered;

        if (elements.timeTaken) {
            const minutes = Math.floor(timeTaken / 60);
            const seconds = timeTaken % 60;
            elements.timeTaken.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
        }

        this.showScreen('resultsScreen');
    }

    showReview() {
        const reviewContainer = document.getElementById('reviewQuestions');
        if (!reviewContainer) return;
        
        reviewContainer.innerHTML = '';

        let correct = 0, wrong = 0, unanswered = 0;
        
        this.currentQuestions.forEach((question) => {
            if (this.answers.hasOwnProperty(question.id)) {
                if (this.answers[question.id] === question.correct) {
                    correct++;
                } else {
                    wrong++;
                }
            } else {
                unanswered++;
            }
        });

        const summaryElements = {
            reviewCorrectCount: document.getElementById('reviewCorrectCount'),
            reviewWrongCount: document.getElementById('reviewWrongCount'),
            reviewUnansweredCount: document.getElementById('reviewUnansweredCount')
        };

        if (summaryElements.reviewCorrectCount) summaryElements.reviewCorrectCount.textContent = correct;
        if (summaryElements.reviewWrongCount) summaryElements.reviewWrongCount.textContent = wrong;
        if (summaryElements.reviewUnansweredCount) summaryElements.reviewUnansweredCount.textContent = unanswered;

        this.currentQuestions.forEach((question, index) => {
            const reviewDiv = document.createElement('div');
            reviewDiv.className = 'review-question';

            const userAnswer = this.answers[question.id];
            const isCorrect = userAnswer === question.correct;
            const isAnswered = userAnswer !== undefined;

            if (isAnswered) {
                reviewDiv.classList.add(isCorrect ? 'correct' : 'wrong');
            } else {
                reviewDiv.classList.add('unanswered');
            }

            reviewDiv.innerHTML = `
                <div class="review-question-header">
                    <span class="review-question-number">Question ${index + 1}</span>
                    <span class="review-status">
                        ${isAnswered ? (isCorrect ? '✅' : '❌') : '❓'}
                    </span>
                </div>
                <div class="review-question-text">${question.question}</div>
                <div class="review-options">
                    ${question.options.map((option, optIndex) => {
                        let className = 'review-option';
                        if (optIndex === question.correct) {
                            className += ' correct';
                        } else if (optIndex === userAnswer && !isCorrect) {
                            className += ' selected-wrong';
                        }
                        return `<div class="${className}">${String.fromCharCode(65 + optIndex)}. ${option}</div>`;
                    }).join('')}
                </div>
            `;

            reviewContainer.appendChild(reviewDiv);
        });

        this.showScreen('reviewScreen');
    }

    showResults() {
        this.showScreen('resultsScreen');
    }

    newQuiz() {
        const timerElement = document.getElementById('timer');
        if (timerElement) {
            timerElement.classList.remove('warning');
        }
        
        const nameInput = document.getElementById('studentName');
        if (nameInput) {
            nameInput.value = '';
        }
        
        this.showScreen('welcomeScreen');
    }

    saveResult(result) {
        try {
            let results = JSON.parse(localStorage.getItem('MATQuizResults') || '[]');
            results.push(result);
            localStorage.setItem('MATQuizResults', JSON.stringify(results));
        } catch (error) {
            console.error('Error saving result:', error);
        }
    }

    showAdminModal() {
    const modal = document.getElementById('adminModal');
    if (modal) modal.classList.add('active');
    }

    hideAdminModal() {
    const modal = document.getElementById('adminModal');
    const usernameInput = document.getElementById('adminUsername');
    const passwordInput = document.getElementById('adminPassword');
    if (modal) modal.classList.remove('active');
    if (usernameInput) usernameInput.value = '';
    if (passwordInput) passwordInput.value = '';
    }


    adminLogin() {
        const usernameInput = document.getElementById('adminUsername');
        const passwordInput = document.getElementById('adminPassword');
        
        if (!usernameInput || !passwordInput) return;
        
        const username = usernameInput.value;
        const password = passwordInput.value;

        if (username === 'sam' && password === '2525') {
            this.hideAdminModal();
            this.showAdminDashboard();
        } else {
            alert('Invalid credentials. Please try again.');
        }   

    }

    adminLogout() {
        this.showScreen('welcomeScreen');
    }

    showAdminDashboard() {
        try {
            const results = JSON.parse(localStorage.getItem('MATQuizResults') || '[]');
            
            const elements = {
                totalStudents: document.getElementById('totalStudents'),
                averageScore: document.getElementById('averageScore'),
                completionRate: document.getElementById('completionRate'),
                studentTableBody: document.getElementById('studentTableBody')
            };

            if (elements.totalStudents) {
                elements.totalStudents.textContent = results.length;
            }
            
            if (elements.averageScore) {
                const averageScore = results.length > 0 
                    ? Math.round(results.reduce((sum, r) => sum + r.score, 0) / results.length)
                    : 0;
                elements.averageScore.textContent = `${averageScore}%`;
            }
            
            if (elements.completionRate) {
                const completionRate = results.length > 0 
                    ? Math.round((results.filter(r => r.correct + r.wrong + r.unanswered === 20).length / results.length) * 100)
                    : 0;
                elements.completionRate.textContent = `${completionRate}%`;
            }

            if (elements.studentTableBody) {
                elements.studentTableBody.innerHTML = '';

                results.slice(-20).reverse().forEach(result => {
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td>${result.name}</td>
                        <td>${result.score}%</td>
                        <td>${result.correct}</td>
                        <td>${result.wrong}</td>
                        <td>${result.unanswered}</td>
                        <td>${Math.floor(result.timeTaken / 60)}:${(result.timeTaken % 60).toString().padStart(2, '0')}</td>
                        <td>${result.date}</td>
                    `;
                    elements.studentTableBody.appendChild(row);
                });
            }

            this.showScreen('adminScreen');
        } catch (error) {
            console.error('Error loading admin dashboard:', error);
            alert('Error loading dashboard data.');
        }
    }

    exportCSV() {
        try {
            const results = JSON.parse(localStorage.getItem('MATQuizResults') || '[]');
            
            if (results.length === 0) {
                alert('No data to export.');
                return;
            }

            const headers = ['Name', 'Score (%)', 'Correct', 'Wrong', 'Unanswered', 'Time Taken', 'Date'];
            const csvContent = [
                headers.join(','),
                ...results.map(result => [
                    `"${result.name}"`,
                    result.score,
                    result.correct,
                    result.wrong,
                    result.unanswered,
                    `"${Math.floor(result.timeTaken / 60)}:${(result.timeTaken % 60).toString().padStart(2, '0')}"`,
                    `"${result.date}"`
                ].join(','))
            ].join('\n');

            const blob = new Blob([csvContent], { type: 'text/csv' });
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `MAT_quiz_results_${new Date().toISOString().split('T')[0]}.csv`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
        } catch (error) {
            console.error('Error exporting CSV:', error);
            alert('Error exporting data.');
        }
    }

    showScreen(screenId) {
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });
        
        const targetScreen = document.getElementById(screenId);
        if (targetScreen) {
            targetScreen.classList.add('active');
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new MATQuizApp();
});