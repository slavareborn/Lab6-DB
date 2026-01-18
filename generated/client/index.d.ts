
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model author
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type author = $Result.DefaultSelection<Prisma.$authorPayload>
/**
 * Model book
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type book = $Result.DefaultSelection<Prisma.$bookPayload>
/**
 * Model fine
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type fine = $Result.DefaultSelection<Prisma.$finePayload>
/**
 * Model genre
 * 
 */
export type genre = $Result.DefaultSelection<Prisma.$genrePayload>
/**
 * Model loan
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type loan = $Result.DefaultSelection<Prisma.$loanPayload>
/**
 * Model member
 * 
 */
export type member = $Result.DefaultSelection<Prisma.$memberPayload>
/**
 * Model staff
 * 
 */
export type staff = $Result.DefaultSelection<Prisma.$staffPayload>
/**
 * Model bookauthor
 * 
 */
export type bookauthor = $Result.DefaultSelection<Prisma.$bookauthorPayload>
/**
 * Model bookgenre
 * 
 */
export type bookgenre = $Result.DefaultSelection<Prisma.$bookgenrePayload>
/**
 * Model bookpublisher
 * 
 */
export type bookpublisher = $Result.DefaultSelection<Prisma.$bookpublisherPayload>
/**
 * Model person
 * 
 */
export type person = $Result.DefaultSelection<Prisma.$personPayload>
/**
 * Model publication
 * 
 */
export type publication = $Result.DefaultSelection<Prisma.$publicationPayload>
/**
 * Model Review
 * 
 */
export type Review = $Result.DefaultSelection<Prisma.$ReviewPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Authors
 * const authors = await prisma.author.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Authors
   * const authors = await prisma.author.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.author`: Exposes CRUD operations for the **author** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Authors
    * const authors = await prisma.author.findMany()
    * ```
    */
  get author(): Prisma.authorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.book`: Exposes CRUD operations for the **book** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Books
    * const books = await prisma.book.findMany()
    * ```
    */
  get book(): Prisma.bookDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fine`: Exposes CRUD operations for the **fine** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Fines
    * const fines = await prisma.fine.findMany()
    * ```
    */
  get fine(): Prisma.fineDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.genre`: Exposes CRUD operations for the **genre** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Genres
    * const genres = await prisma.genre.findMany()
    * ```
    */
  get genre(): Prisma.genreDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.loan`: Exposes CRUD operations for the **loan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Loans
    * const loans = await prisma.loan.findMany()
    * ```
    */
  get loan(): Prisma.loanDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.member`: Exposes CRUD operations for the **member** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Members
    * const members = await prisma.member.findMany()
    * ```
    */
  get member(): Prisma.memberDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.staff`: Exposes CRUD operations for the **staff** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Staff
    * const staff = await prisma.staff.findMany()
    * ```
    */
  get staff(): Prisma.staffDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bookauthor`: Exposes CRUD operations for the **bookauthor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bookauthors
    * const bookauthors = await prisma.bookauthor.findMany()
    * ```
    */
  get bookauthor(): Prisma.bookauthorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bookgenre`: Exposes CRUD operations for the **bookgenre** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bookgenres
    * const bookgenres = await prisma.bookgenre.findMany()
    * ```
    */
  get bookgenre(): Prisma.bookgenreDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bookpublisher`: Exposes CRUD operations for the **bookpublisher** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bookpublishers
    * const bookpublishers = await prisma.bookpublisher.findMany()
    * ```
    */
  get bookpublisher(): Prisma.bookpublisherDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.person`: Exposes CRUD operations for the **person** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more People
    * const people = await prisma.person.findMany()
    * ```
    */
  get person(): Prisma.personDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.publication`: Exposes CRUD operations for the **publication** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Publications
    * const publications = await prisma.publication.findMany()
    * ```
    */
  get publication(): Prisma.publicationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.review`: Exposes CRUD operations for the **Review** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.review.findMany()
    * ```
    */
  get review(): Prisma.ReviewDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.2
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    author: 'author',
    book: 'book',
    fine: 'fine',
    genre: 'genre',
    loan: 'loan',
    member: 'member',
    staff: 'staff',
    bookauthor: 'bookauthor',
    bookgenre: 'bookgenre',
    bookpublisher: 'bookpublisher',
    person: 'person',
    publication: 'publication',
    Review: 'Review'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "author" | "book" | "fine" | "genre" | "loan" | "member" | "staff" | "bookauthor" | "bookgenre" | "bookpublisher" | "person" | "publication" | "review"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      author: {
        payload: Prisma.$authorPayload<ExtArgs>
        fields: Prisma.authorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.authorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.authorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authorPayload>
          }
          findFirst: {
            args: Prisma.authorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.authorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authorPayload>
          }
          findMany: {
            args: Prisma.authorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authorPayload>[]
          }
          create: {
            args: Prisma.authorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authorPayload>
          }
          createMany: {
            args: Prisma.authorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.authorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authorPayload>[]
          }
          delete: {
            args: Prisma.authorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authorPayload>
          }
          update: {
            args: Prisma.authorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authorPayload>
          }
          deleteMany: {
            args: Prisma.authorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.authorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.authorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authorPayload>[]
          }
          upsert: {
            args: Prisma.authorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authorPayload>
          }
          aggregate: {
            args: Prisma.AuthorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuthor>
          }
          groupBy: {
            args: Prisma.authorGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuthorGroupByOutputType>[]
          }
          count: {
            args: Prisma.authorCountArgs<ExtArgs>
            result: $Utils.Optional<AuthorCountAggregateOutputType> | number
          }
        }
      }
      book: {
        payload: Prisma.$bookPayload<ExtArgs>
        fields: Prisma.bookFieldRefs
        operations: {
          findUnique: {
            args: Prisma.bookFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.bookFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookPayload>
          }
          findFirst: {
            args: Prisma.bookFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.bookFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookPayload>
          }
          findMany: {
            args: Prisma.bookFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookPayload>[]
          }
          create: {
            args: Prisma.bookCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookPayload>
          }
          createMany: {
            args: Prisma.bookCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.bookCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookPayload>[]
          }
          delete: {
            args: Prisma.bookDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookPayload>
          }
          update: {
            args: Prisma.bookUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookPayload>
          }
          deleteMany: {
            args: Prisma.bookDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.bookUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.bookUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookPayload>[]
          }
          upsert: {
            args: Prisma.bookUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookPayload>
          }
          aggregate: {
            args: Prisma.BookAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBook>
          }
          groupBy: {
            args: Prisma.bookGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookGroupByOutputType>[]
          }
          count: {
            args: Prisma.bookCountArgs<ExtArgs>
            result: $Utils.Optional<BookCountAggregateOutputType> | number
          }
        }
      }
      fine: {
        payload: Prisma.$finePayload<ExtArgs>
        fields: Prisma.fineFieldRefs
        operations: {
          findUnique: {
            args: Prisma.fineFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$finePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.fineFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$finePayload>
          }
          findFirst: {
            args: Prisma.fineFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$finePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.fineFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$finePayload>
          }
          findMany: {
            args: Prisma.fineFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$finePayload>[]
          }
          create: {
            args: Prisma.fineCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$finePayload>
          }
          createMany: {
            args: Prisma.fineCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.fineCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$finePayload>[]
          }
          delete: {
            args: Prisma.fineDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$finePayload>
          }
          update: {
            args: Prisma.fineUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$finePayload>
          }
          deleteMany: {
            args: Prisma.fineDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.fineUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.fineUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$finePayload>[]
          }
          upsert: {
            args: Prisma.fineUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$finePayload>
          }
          aggregate: {
            args: Prisma.FineAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFine>
          }
          groupBy: {
            args: Prisma.fineGroupByArgs<ExtArgs>
            result: $Utils.Optional<FineGroupByOutputType>[]
          }
          count: {
            args: Prisma.fineCountArgs<ExtArgs>
            result: $Utils.Optional<FineCountAggregateOutputType> | number
          }
        }
      }
      genre: {
        payload: Prisma.$genrePayload<ExtArgs>
        fields: Prisma.genreFieldRefs
        operations: {
          findUnique: {
            args: Prisma.genreFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$genrePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.genreFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$genrePayload>
          }
          findFirst: {
            args: Prisma.genreFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$genrePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.genreFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$genrePayload>
          }
          findMany: {
            args: Prisma.genreFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$genrePayload>[]
          }
          create: {
            args: Prisma.genreCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$genrePayload>
          }
          createMany: {
            args: Prisma.genreCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.genreCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$genrePayload>[]
          }
          delete: {
            args: Prisma.genreDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$genrePayload>
          }
          update: {
            args: Prisma.genreUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$genrePayload>
          }
          deleteMany: {
            args: Prisma.genreDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.genreUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.genreUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$genrePayload>[]
          }
          upsert: {
            args: Prisma.genreUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$genrePayload>
          }
          aggregate: {
            args: Prisma.GenreAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGenre>
          }
          groupBy: {
            args: Prisma.genreGroupByArgs<ExtArgs>
            result: $Utils.Optional<GenreGroupByOutputType>[]
          }
          count: {
            args: Prisma.genreCountArgs<ExtArgs>
            result: $Utils.Optional<GenreCountAggregateOutputType> | number
          }
        }
      }
      loan: {
        payload: Prisma.$loanPayload<ExtArgs>
        fields: Prisma.loanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.loanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$loanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.loanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$loanPayload>
          }
          findFirst: {
            args: Prisma.loanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$loanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.loanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$loanPayload>
          }
          findMany: {
            args: Prisma.loanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$loanPayload>[]
          }
          create: {
            args: Prisma.loanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$loanPayload>
          }
          createMany: {
            args: Prisma.loanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.loanCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$loanPayload>[]
          }
          delete: {
            args: Prisma.loanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$loanPayload>
          }
          update: {
            args: Prisma.loanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$loanPayload>
          }
          deleteMany: {
            args: Prisma.loanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.loanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.loanUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$loanPayload>[]
          }
          upsert: {
            args: Prisma.loanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$loanPayload>
          }
          aggregate: {
            args: Prisma.LoanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLoan>
          }
          groupBy: {
            args: Prisma.loanGroupByArgs<ExtArgs>
            result: $Utils.Optional<LoanGroupByOutputType>[]
          }
          count: {
            args: Prisma.loanCountArgs<ExtArgs>
            result: $Utils.Optional<LoanCountAggregateOutputType> | number
          }
        }
      }
      member: {
        payload: Prisma.$memberPayload<ExtArgs>
        fields: Prisma.memberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.memberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$memberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.memberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$memberPayload>
          }
          findFirst: {
            args: Prisma.memberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$memberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.memberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$memberPayload>
          }
          findMany: {
            args: Prisma.memberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$memberPayload>[]
          }
          create: {
            args: Prisma.memberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$memberPayload>
          }
          createMany: {
            args: Prisma.memberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.memberCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$memberPayload>[]
          }
          delete: {
            args: Prisma.memberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$memberPayload>
          }
          update: {
            args: Prisma.memberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$memberPayload>
          }
          deleteMany: {
            args: Prisma.memberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.memberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.memberUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$memberPayload>[]
          }
          upsert: {
            args: Prisma.memberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$memberPayload>
          }
          aggregate: {
            args: Prisma.MemberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMember>
          }
          groupBy: {
            args: Prisma.memberGroupByArgs<ExtArgs>
            result: $Utils.Optional<MemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.memberCountArgs<ExtArgs>
            result: $Utils.Optional<MemberCountAggregateOutputType> | number
          }
        }
      }
      staff: {
        payload: Prisma.$staffPayload<ExtArgs>
        fields: Prisma.staffFieldRefs
        operations: {
          findUnique: {
            args: Prisma.staffFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$staffPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.staffFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$staffPayload>
          }
          findFirst: {
            args: Prisma.staffFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$staffPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.staffFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$staffPayload>
          }
          findMany: {
            args: Prisma.staffFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$staffPayload>[]
          }
          create: {
            args: Prisma.staffCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$staffPayload>
          }
          createMany: {
            args: Prisma.staffCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.staffCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$staffPayload>[]
          }
          delete: {
            args: Prisma.staffDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$staffPayload>
          }
          update: {
            args: Prisma.staffUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$staffPayload>
          }
          deleteMany: {
            args: Prisma.staffDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.staffUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.staffUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$staffPayload>[]
          }
          upsert: {
            args: Prisma.staffUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$staffPayload>
          }
          aggregate: {
            args: Prisma.StaffAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStaff>
          }
          groupBy: {
            args: Prisma.staffGroupByArgs<ExtArgs>
            result: $Utils.Optional<StaffGroupByOutputType>[]
          }
          count: {
            args: Prisma.staffCountArgs<ExtArgs>
            result: $Utils.Optional<StaffCountAggregateOutputType> | number
          }
        }
      }
      bookauthor: {
        payload: Prisma.$bookauthorPayload<ExtArgs>
        fields: Prisma.bookauthorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.bookauthorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookauthorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.bookauthorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookauthorPayload>
          }
          findFirst: {
            args: Prisma.bookauthorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookauthorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.bookauthorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookauthorPayload>
          }
          findMany: {
            args: Prisma.bookauthorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookauthorPayload>[]
          }
          create: {
            args: Prisma.bookauthorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookauthorPayload>
          }
          createMany: {
            args: Prisma.bookauthorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.bookauthorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookauthorPayload>[]
          }
          delete: {
            args: Prisma.bookauthorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookauthorPayload>
          }
          update: {
            args: Prisma.bookauthorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookauthorPayload>
          }
          deleteMany: {
            args: Prisma.bookauthorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.bookauthorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.bookauthorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookauthorPayload>[]
          }
          upsert: {
            args: Prisma.bookauthorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookauthorPayload>
          }
          aggregate: {
            args: Prisma.BookauthorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBookauthor>
          }
          groupBy: {
            args: Prisma.bookauthorGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookauthorGroupByOutputType>[]
          }
          count: {
            args: Prisma.bookauthorCountArgs<ExtArgs>
            result: $Utils.Optional<BookauthorCountAggregateOutputType> | number
          }
        }
      }
      bookgenre: {
        payload: Prisma.$bookgenrePayload<ExtArgs>
        fields: Prisma.bookgenreFieldRefs
        operations: {
          findUnique: {
            args: Prisma.bookgenreFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookgenrePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.bookgenreFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookgenrePayload>
          }
          findFirst: {
            args: Prisma.bookgenreFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookgenrePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.bookgenreFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookgenrePayload>
          }
          findMany: {
            args: Prisma.bookgenreFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookgenrePayload>[]
          }
          create: {
            args: Prisma.bookgenreCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookgenrePayload>
          }
          createMany: {
            args: Prisma.bookgenreCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.bookgenreCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookgenrePayload>[]
          }
          delete: {
            args: Prisma.bookgenreDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookgenrePayload>
          }
          update: {
            args: Prisma.bookgenreUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookgenrePayload>
          }
          deleteMany: {
            args: Prisma.bookgenreDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.bookgenreUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.bookgenreUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookgenrePayload>[]
          }
          upsert: {
            args: Prisma.bookgenreUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookgenrePayload>
          }
          aggregate: {
            args: Prisma.BookgenreAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBookgenre>
          }
          groupBy: {
            args: Prisma.bookgenreGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookgenreGroupByOutputType>[]
          }
          count: {
            args: Prisma.bookgenreCountArgs<ExtArgs>
            result: $Utils.Optional<BookgenreCountAggregateOutputType> | number
          }
        }
      }
      bookpublisher: {
        payload: Prisma.$bookpublisherPayload<ExtArgs>
        fields: Prisma.bookpublisherFieldRefs
        operations: {
          findUnique: {
            args: Prisma.bookpublisherFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookpublisherPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.bookpublisherFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookpublisherPayload>
          }
          findFirst: {
            args: Prisma.bookpublisherFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookpublisherPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.bookpublisherFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookpublisherPayload>
          }
          findMany: {
            args: Prisma.bookpublisherFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookpublisherPayload>[]
          }
          create: {
            args: Prisma.bookpublisherCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookpublisherPayload>
          }
          createMany: {
            args: Prisma.bookpublisherCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.bookpublisherCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookpublisherPayload>[]
          }
          delete: {
            args: Prisma.bookpublisherDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookpublisherPayload>
          }
          update: {
            args: Prisma.bookpublisherUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookpublisherPayload>
          }
          deleteMany: {
            args: Prisma.bookpublisherDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.bookpublisherUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.bookpublisherUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookpublisherPayload>[]
          }
          upsert: {
            args: Prisma.bookpublisherUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookpublisherPayload>
          }
          aggregate: {
            args: Prisma.BookpublisherAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBookpublisher>
          }
          groupBy: {
            args: Prisma.bookpublisherGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookpublisherGroupByOutputType>[]
          }
          count: {
            args: Prisma.bookpublisherCountArgs<ExtArgs>
            result: $Utils.Optional<BookpublisherCountAggregateOutputType> | number
          }
        }
      }
      person: {
        payload: Prisma.$personPayload<ExtArgs>
        fields: Prisma.personFieldRefs
        operations: {
          findUnique: {
            args: Prisma.personFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$personPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.personFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$personPayload>
          }
          findFirst: {
            args: Prisma.personFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$personPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.personFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$personPayload>
          }
          findMany: {
            args: Prisma.personFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$personPayload>[]
          }
          create: {
            args: Prisma.personCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$personPayload>
          }
          createMany: {
            args: Prisma.personCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.personCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$personPayload>[]
          }
          delete: {
            args: Prisma.personDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$personPayload>
          }
          update: {
            args: Prisma.personUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$personPayload>
          }
          deleteMany: {
            args: Prisma.personDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.personUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.personUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$personPayload>[]
          }
          upsert: {
            args: Prisma.personUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$personPayload>
          }
          aggregate: {
            args: Prisma.PersonAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePerson>
          }
          groupBy: {
            args: Prisma.personGroupByArgs<ExtArgs>
            result: $Utils.Optional<PersonGroupByOutputType>[]
          }
          count: {
            args: Prisma.personCountArgs<ExtArgs>
            result: $Utils.Optional<PersonCountAggregateOutputType> | number
          }
        }
      }
      publication: {
        payload: Prisma.$publicationPayload<ExtArgs>
        fields: Prisma.publicationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.publicationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$publicationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.publicationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$publicationPayload>
          }
          findFirst: {
            args: Prisma.publicationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$publicationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.publicationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$publicationPayload>
          }
          findMany: {
            args: Prisma.publicationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$publicationPayload>[]
          }
          create: {
            args: Prisma.publicationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$publicationPayload>
          }
          createMany: {
            args: Prisma.publicationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.publicationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$publicationPayload>[]
          }
          delete: {
            args: Prisma.publicationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$publicationPayload>
          }
          update: {
            args: Prisma.publicationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$publicationPayload>
          }
          deleteMany: {
            args: Prisma.publicationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.publicationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.publicationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$publicationPayload>[]
          }
          upsert: {
            args: Prisma.publicationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$publicationPayload>
          }
          aggregate: {
            args: Prisma.PublicationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePublication>
          }
          groupBy: {
            args: Prisma.publicationGroupByArgs<ExtArgs>
            result: $Utils.Optional<PublicationGroupByOutputType>[]
          }
          count: {
            args: Prisma.publicationCountArgs<ExtArgs>
            result: $Utils.Optional<PublicationCountAggregateOutputType> | number
          }
        }
      }
      Review: {
        payload: Prisma.$ReviewPayload<ExtArgs>
        fields: Prisma.ReviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findFirst: {
            args: Prisma.ReviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findMany: {
            args: Prisma.ReviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          create: {
            args: Prisma.ReviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          createMany: {
            args: Prisma.ReviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReviewCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          delete: {
            args: Prisma.ReviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          update: {
            args: Prisma.ReviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          deleteMany: {
            args: Prisma.ReviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReviewUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          upsert: {
            args: Prisma.ReviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          aggregate: {
            args: Prisma.ReviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReview>
          }
          groupBy: {
            args: Prisma.ReviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReviewCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    author?: authorOmit
    book?: bookOmit
    fine?: fineOmit
    genre?: genreOmit
    loan?: loanOmit
    member?: memberOmit
    staff?: staffOmit
    bookauthor?: bookauthorOmit
    bookgenre?: bookgenreOmit
    bookpublisher?: bookpublisherOmit
    person?: personOmit
    publication?: publicationOmit
    review?: ReviewOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type AuthorCountOutputType
   */

  export type AuthorCountOutputType = {
    bookauthor: number
  }

  export type AuthorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookauthor?: boolean | AuthorCountOutputTypeCountBookauthorArgs
  }

  // Custom InputTypes
  /**
   * AuthorCountOutputType without action
   */
  export type AuthorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthorCountOutputType
     */
    select?: AuthorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AuthorCountOutputType without action
   */
  export type AuthorCountOutputTypeCountBookauthorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: bookauthorWhereInput
  }


  /**
   * Count Type BookCountOutputType
   */

  export type BookCountOutputType = {
    bookauthor: number
    bookgenre: number
    bookpublisher: number
    loan: number
    Review: number
  }

  export type BookCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookauthor?: boolean | BookCountOutputTypeCountBookauthorArgs
    bookgenre?: boolean | BookCountOutputTypeCountBookgenreArgs
    bookpublisher?: boolean | BookCountOutputTypeCountBookpublisherArgs
    loan?: boolean | BookCountOutputTypeCountLoanArgs
    Review?: boolean | BookCountOutputTypeCountReviewArgs
  }

  // Custom InputTypes
  /**
   * BookCountOutputType without action
   */
  export type BookCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookCountOutputType
     */
    select?: BookCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BookCountOutputType without action
   */
  export type BookCountOutputTypeCountBookauthorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: bookauthorWhereInput
  }

  /**
   * BookCountOutputType without action
   */
  export type BookCountOutputTypeCountBookgenreArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: bookgenreWhereInput
  }

  /**
   * BookCountOutputType without action
   */
  export type BookCountOutputTypeCountBookpublisherArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: bookpublisherWhereInput
  }

  /**
   * BookCountOutputType without action
   */
  export type BookCountOutputTypeCountLoanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: loanWhereInput
  }

  /**
   * BookCountOutputType without action
   */
  export type BookCountOutputTypeCountReviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }


  /**
   * Count Type GenreCountOutputType
   */

  export type GenreCountOutputType = {
    bookgenre: number
  }

  export type GenreCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookgenre?: boolean | GenreCountOutputTypeCountBookgenreArgs
  }

  // Custom InputTypes
  /**
   * GenreCountOutputType without action
   */
  export type GenreCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenreCountOutputType
     */
    select?: GenreCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GenreCountOutputType without action
   */
  export type GenreCountOutputTypeCountBookgenreArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: bookgenreWhereInput
  }


  /**
   * Count Type LoanCountOutputType
   */

  export type LoanCountOutputType = {
    fine: number
  }

  export type LoanCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fine?: boolean | LoanCountOutputTypeCountFineArgs
  }

  // Custom InputTypes
  /**
   * LoanCountOutputType without action
   */
  export type LoanCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoanCountOutputType
     */
    select?: LoanCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LoanCountOutputType without action
   */
  export type LoanCountOutputTypeCountFineArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: fineWhereInput
  }


  /**
   * Count Type MemberCountOutputType
   */

  export type MemberCountOutputType = {
    fine: number
    loan: number
  }

  export type MemberCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fine?: boolean | MemberCountOutputTypeCountFineArgs
    loan?: boolean | MemberCountOutputTypeCountLoanArgs
  }

  // Custom InputTypes
  /**
   * MemberCountOutputType without action
   */
  export type MemberCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberCountOutputType
     */
    select?: MemberCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MemberCountOutputType without action
   */
  export type MemberCountOutputTypeCountFineArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: fineWhereInput
  }

  /**
   * MemberCountOutputType without action
   */
  export type MemberCountOutputTypeCountLoanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: loanWhereInput
  }


  /**
   * Count Type StaffCountOutputType
   */

  export type StaffCountOutputType = {
    loan: number
  }

  export type StaffCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    loan?: boolean | StaffCountOutputTypeCountLoanArgs
  }

  // Custom InputTypes
  /**
   * StaffCountOutputType without action
   */
  export type StaffCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffCountOutputType
     */
    select?: StaffCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StaffCountOutputType without action
   */
  export type StaffCountOutputTypeCountLoanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: loanWhereInput
  }


  /**
   * Count Type PersonCountOutputType
   */

  export type PersonCountOutputType = {
    author: number
    member: number
    staff: number
  }

  export type PersonCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | PersonCountOutputTypeCountAuthorArgs
    member?: boolean | PersonCountOutputTypeCountMemberArgs
    staff?: boolean | PersonCountOutputTypeCountStaffArgs
  }

  // Custom InputTypes
  /**
   * PersonCountOutputType without action
   */
  export type PersonCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonCountOutputType
     */
    select?: PersonCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PersonCountOutputType without action
   */
  export type PersonCountOutputTypeCountAuthorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: authorWhereInput
  }

  /**
   * PersonCountOutputType without action
   */
  export type PersonCountOutputTypeCountMemberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: memberWhereInput
  }

  /**
   * PersonCountOutputType without action
   */
  export type PersonCountOutputTypeCountStaffArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: staffWhereInput
  }


  /**
   * Count Type PublicationCountOutputType
   */

  export type PublicationCountOutputType = {
    bookpublisher: number
  }

  export type PublicationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookpublisher?: boolean | PublicationCountOutputTypeCountBookpublisherArgs
  }

  // Custom InputTypes
  /**
   * PublicationCountOutputType without action
   */
  export type PublicationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicationCountOutputType
     */
    select?: PublicationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PublicationCountOutputType without action
   */
  export type PublicationCountOutputTypeCountBookpublisherArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: bookpublisherWhereInput
  }


  /**
   * Models
   */

  /**
   * Model author
   */

  export type AggregateAuthor = {
    _count: AuthorCountAggregateOutputType | null
    _avg: AuthorAvgAggregateOutputType | null
    _sum: AuthorSumAggregateOutputType | null
    _min: AuthorMinAggregateOutputType | null
    _max: AuthorMaxAggregateOutputType | null
  }

  export type AuthorAvgAggregateOutputType = {
    author_id: number | null
    person_id: number | null
  }

  export type AuthorSumAggregateOutputType = {
    author_id: number | null
    person_id: number | null
  }

  export type AuthorMinAggregateOutputType = {
    author_id: number | null
    firstname: string | null
    secondname: string | null
    dateofbirth: Date | null
    dateofdeath: Date | null
    createdat: Date | null
    updatedat: Date | null
    person_id: number | null
  }

  export type AuthorMaxAggregateOutputType = {
    author_id: number | null
    firstname: string | null
    secondname: string | null
    dateofbirth: Date | null
    dateofdeath: Date | null
    createdat: Date | null
    updatedat: Date | null
    person_id: number | null
  }

  export type AuthorCountAggregateOutputType = {
    author_id: number
    firstname: number
    secondname: number
    dateofbirth: number
    dateofdeath: number
    createdat: number
    updatedat: number
    person_id: number
    _all: number
  }


  export type AuthorAvgAggregateInputType = {
    author_id?: true
    person_id?: true
  }

  export type AuthorSumAggregateInputType = {
    author_id?: true
    person_id?: true
  }

  export type AuthorMinAggregateInputType = {
    author_id?: true
    firstname?: true
    secondname?: true
    dateofbirth?: true
    dateofdeath?: true
    createdat?: true
    updatedat?: true
    person_id?: true
  }

  export type AuthorMaxAggregateInputType = {
    author_id?: true
    firstname?: true
    secondname?: true
    dateofbirth?: true
    dateofdeath?: true
    createdat?: true
    updatedat?: true
    person_id?: true
  }

  export type AuthorCountAggregateInputType = {
    author_id?: true
    firstname?: true
    secondname?: true
    dateofbirth?: true
    dateofdeath?: true
    createdat?: true
    updatedat?: true
    person_id?: true
    _all?: true
  }

  export type AuthorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which author to aggregate.
     */
    where?: authorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of authors to fetch.
     */
    orderBy?: authorOrderByWithRelationInput | authorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: authorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` authors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` authors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned authors
    **/
    _count?: true | AuthorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AuthorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AuthorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuthorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuthorMaxAggregateInputType
  }

  export type GetAuthorAggregateType<T extends AuthorAggregateArgs> = {
        [P in keyof T & keyof AggregateAuthor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuthor[P]>
      : GetScalarType<T[P], AggregateAuthor[P]>
  }




  export type authorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: authorWhereInput
    orderBy?: authorOrderByWithAggregationInput | authorOrderByWithAggregationInput[]
    by: AuthorScalarFieldEnum[] | AuthorScalarFieldEnum
    having?: authorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuthorCountAggregateInputType | true
    _avg?: AuthorAvgAggregateInputType
    _sum?: AuthorSumAggregateInputType
    _min?: AuthorMinAggregateInputType
    _max?: AuthorMaxAggregateInputType
  }

  export type AuthorGroupByOutputType = {
    author_id: number
    firstname: string
    secondname: string
    dateofbirth: Date
    dateofdeath: Date | null
    createdat: Date | null
    updatedat: Date | null
    person_id: number | null
    _count: AuthorCountAggregateOutputType | null
    _avg: AuthorAvgAggregateOutputType | null
    _sum: AuthorSumAggregateOutputType | null
    _min: AuthorMinAggregateOutputType | null
    _max: AuthorMaxAggregateOutputType | null
  }

  type GetAuthorGroupByPayload<T extends authorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuthorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuthorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuthorGroupByOutputType[P]>
            : GetScalarType<T[P], AuthorGroupByOutputType[P]>
        }
      >
    >


  export type authorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    author_id?: boolean
    firstname?: boolean
    secondname?: boolean
    dateofbirth?: boolean
    dateofdeath?: boolean
    createdat?: boolean
    updatedat?: boolean
    person_id?: boolean
    person?: boolean | author$personArgs<ExtArgs>
    bookauthor?: boolean | author$bookauthorArgs<ExtArgs>
    _count?: boolean | AuthorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["author"]>

  export type authorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    author_id?: boolean
    firstname?: boolean
    secondname?: boolean
    dateofbirth?: boolean
    dateofdeath?: boolean
    createdat?: boolean
    updatedat?: boolean
    person_id?: boolean
    person?: boolean | author$personArgs<ExtArgs>
  }, ExtArgs["result"]["author"]>

  export type authorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    author_id?: boolean
    firstname?: boolean
    secondname?: boolean
    dateofbirth?: boolean
    dateofdeath?: boolean
    createdat?: boolean
    updatedat?: boolean
    person_id?: boolean
    person?: boolean | author$personArgs<ExtArgs>
  }, ExtArgs["result"]["author"]>

  export type authorSelectScalar = {
    author_id?: boolean
    firstname?: boolean
    secondname?: boolean
    dateofbirth?: boolean
    dateofdeath?: boolean
    createdat?: boolean
    updatedat?: boolean
    person_id?: boolean
  }

  export type authorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"author_id" | "firstname" | "secondname" | "dateofbirth" | "dateofdeath" | "createdat" | "updatedat" | "person_id", ExtArgs["result"]["author"]>
  export type authorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    person?: boolean | author$personArgs<ExtArgs>
    bookauthor?: boolean | author$bookauthorArgs<ExtArgs>
    _count?: boolean | AuthorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type authorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    person?: boolean | author$personArgs<ExtArgs>
  }
  export type authorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    person?: boolean | author$personArgs<ExtArgs>
  }

  export type $authorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "author"
    objects: {
      person: Prisma.$personPayload<ExtArgs> | null
      bookauthor: Prisma.$bookauthorPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      author_id: number
      firstname: string
      secondname: string
      dateofbirth: Date
      dateofdeath: Date | null
      createdat: Date | null
      updatedat: Date | null
      person_id: number | null
    }, ExtArgs["result"]["author"]>
    composites: {}
  }

  type authorGetPayload<S extends boolean | null | undefined | authorDefaultArgs> = $Result.GetResult<Prisma.$authorPayload, S>

  type authorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<authorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuthorCountAggregateInputType | true
    }

  export interface authorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['author'], meta: { name: 'author' } }
    /**
     * Find zero or one Author that matches the filter.
     * @param {authorFindUniqueArgs} args - Arguments to find a Author
     * @example
     * // Get one Author
     * const author = await prisma.author.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends authorFindUniqueArgs>(args: SelectSubset<T, authorFindUniqueArgs<ExtArgs>>): Prisma__authorClient<$Result.GetResult<Prisma.$authorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Author that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {authorFindUniqueOrThrowArgs} args - Arguments to find a Author
     * @example
     * // Get one Author
     * const author = await prisma.author.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends authorFindUniqueOrThrowArgs>(args: SelectSubset<T, authorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__authorClient<$Result.GetResult<Prisma.$authorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Author that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authorFindFirstArgs} args - Arguments to find a Author
     * @example
     * // Get one Author
     * const author = await prisma.author.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends authorFindFirstArgs>(args?: SelectSubset<T, authorFindFirstArgs<ExtArgs>>): Prisma__authorClient<$Result.GetResult<Prisma.$authorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Author that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authorFindFirstOrThrowArgs} args - Arguments to find a Author
     * @example
     * // Get one Author
     * const author = await prisma.author.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends authorFindFirstOrThrowArgs>(args?: SelectSubset<T, authorFindFirstOrThrowArgs<ExtArgs>>): Prisma__authorClient<$Result.GetResult<Prisma.$authorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Authors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Authors
     * const authors = await prisma.author.findMany()
     * 
     * // Get first 10 Authors
     * const authors = await prisma.author.findMany({ take: 10 })
     * 
     * // Only select the `author_id`
     * const authorWithAuthor_idOnly = await prisma.author.findMany({ select: { author_id: true } })
     * 
     */
    findMany<T extends authorFindManyArgs>(args?: SelectSubset<T, authorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$authorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Author.
     * @param {authorCreateArgs} args - Arguments to create a Author.
     * @example
     * // Create one Author
     * const Author = await prisma.author.create({
     *   data: {
     *     // ... data to create a Author
     *   }
     * })
     * 
     */
    create<T extends authorCreateArgs>(args: SelectSubset<T, authorCreateArgs<ExtArgs>>): Prisma__authorClient<$Result.GetResult<Prisma.$authorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Authors.
     * @param {authorCreateManyArgs} args - Arguments to create many Authors.
     * @example
     * // Create many Authors
     * const author = await prisma.author.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends authorCreateManyArgs>(args?: SelectSubset<T, authorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Authors and returns the data saved in the database.
     * @param {authorCreateManyAndReturnArgs} args - Arguments to create many Authors.
     * @example
     * // Create many Authors
     * const author = await prisma.author.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Authors and only return the `author_id`
     * const authorWithAuthor_idOnly = await prisma.author.createManyAndReturn({
     *   select: { author_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends authorCreateManyAndReturnArgs>(args?: SelectSubset<T, authorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$authorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Author.
     * @param {authorDeleteArgs} args - Arguments to delete one Author.
     * @example
     * // Delete one Author
     * const Author = await prisma.author.delete({
     *   where: {
     *     // ... filter to delete one Author
     *   }
     * })
     * 
     */
    delete<T extends authorDeleteArgs>(args: SelectSubset<T, authorDeleteArgs<ExtArgs>>): Prisma__authorClient<$Result.GetResult<Prisma.$authorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Author.
     * @param {authorUpdateArgs} args - Arguments to update one Author.
     * @example
     * // Update one Author
     * const author = await prisma.author.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends authorUpdateArgs>(args: SelectSubset<T, authorUpdateArgs<ExtArgs>>): Prisma__authorClient<$Result.GetResult<Prisma.$authorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Authors.
     * @param {authorDeleteManyArgs} args - Arguments to filter Authors to delete.
     * @example
     * // Delete a few Authors
     * const { count } = await prisma.author.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends authorDeleteManyArgs>(args?: SelectSubset<T, authorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Authors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Authors
     * const author = await prisma.author.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends authorUpdateManyArgs>(args: SelectSubset<T, authorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Authors and returns the data updated in the database.
     * @param {authorUpdateManyAndReturnArgs} args - Arguments to update many Authors.
     * @example
     * // Update many Authors
     * const author = await prisma.author.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Authors and only return the `author_id`
     * const authorWithAuthor_idOnly = await prisma.author.updateManyAndReturn({
     *   select: { author_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends authorUpdateManyAndReturnArgs>(args: SelectSubset<T, authorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$authorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Author.
     * @param {authorUpsertArgs} args - Arguments to update or create a Author.
     * @example
     * // Update or create a Author
     * const author = await prisma.author.upsert({
     *   create: {
     *     // ... data to create a Author
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Author we want to update
     *   }
     * })
     */
    upsert<T extends authorUpsertArgs>(args: SelectSubset<T, authorUpsertArgs<ExtArgs>>): Prisma__authorClient<$Result.GetResult<Prisma.$authorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Authors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authorCountArgs} args - Arguments to filter Authors to count.
     * @example
     * // Count the number of Authors
     * const count = await prisma.author.count({
     *   where: {
     *     // ... the filter for the Authors we want to count
     *   }
     * })
    **/
    count<T extends authorCountArgs>(
      args?: Subset<T, authorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuthorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Author.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AuthorAggregateArgs>(args: Subset<T, AuthorAggregateArgs>): Prisma.PrismaPromise<GetAuthorAggregateType<T>>

    /**
     * Group by Author.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends authorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: authorGroupByArgs['orderBy'] }
        : { orderBy?: authorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, authorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuthorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the author model
   */
  readonly fields: authorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for author.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__authorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    person<T extends author$personArgs<ExtArgs> = {}>(args?: Subset<T, author$personArgs<ExtArgs>>): Prisma__personClient<$Result.GetResult<Prisma.$personPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    bookauthor<T extends author$bookauthorArgs<ExtArgs> = {}>(args?: Subset<T, author$bookauthorArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bookauthorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the author model
   */
  interface authorFieldRefs {
    readonly author_id: FieldRef<"author", 'Int'>
    readonly firstname: FieldRef<"author", 'String'>
    readonly secondname: FieldRef<"author", 'String'>
    readonly dateofbirth: FieldRef<"author", 'DateTime'>
    readonly dateofdeath: FieldRef<"author", 'DateTime'>
    readonly createdat: FieldRef<"author", 'DateTime'>
    readonly updatedat: FieldRef<"author", 'DateTime'>
    readonly person_id: FieldRef<"author", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * author findUnique
   */
  export type authorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the author
     */
    select?: authorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the author
     */
    omit?: authorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authorInclude<ExtArgs> | null
    /**
     * Filter, which author to fetch.
     */
    where: authorWhereUniqueInput
  }

  /**
   * author findUniqueOrThrow
   */
  export type authorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the author
     */
    select?: authorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the author
     */
    omit?: authorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authorInclude<ExtArgs> | null
    /**
     * Filter, which author to fetch.
     */
    where: authorWhereUniqueInput
  }

  /**
   * author findFirst
   */
  export type authorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the author
     */
    select?: authorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the author
     */
    omit?: authorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authorInclude<ExtArgs> | null
    /**
     * Filter, which author to fetch.
     */
    where?: authorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of authors to fetch.
     */
    orderBy?: authorOrderByWithRelationInput | authorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for authors.
     */
    cursor?: authorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` authors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` authors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of authors.
     */
    distinct?: AuthorScalarFieldEnum | AuthorScalarFieldEnum[]
  }

  /**
   * author findFirstOrThrow
   */
  export type authorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the author
     */
    select?: authorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the author
     */
    omit?: authorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authorInclude<ExtArgs> | null
    /**
     * Filter, which author to fetch.
     */
    where?: authorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of authors to fetch.
     */
    orderBy?: authorOrderByWithRelationInput | authorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for authors.
     */
    cursor?: authorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` authors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` authors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of authors.
     */
    distinct?: AuthorScalarFieldEnum | AuthorScalarFieldEnum[]
  }

  /**
   * author findMany
   */
  export type authorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the author
     */
    select?: authorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the author
     */
    omit?: authorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authorInclude<ExtArgs> | null
    /**
     * Filter, which authors to fetch.
     */
    where?: authorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of authors to fetch.
     */
    orderBy?: authorOrderByWithRelationInput | authorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing authors.
     */
    cursor?: authorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` authors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` authors.
     */
    skip?: number
    distinct?: AuthorScalarFieldEnum | AuthorScalarFieldEnum[]
  }

  /**
   * author create
   */
  export type authorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the author
     */
    select?: authorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the author
     */
    omit?: authorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authorInclude<ExtArgs> | null
    /**
     * The data needed to create a author.
     */
    data: XOR<authorCreateInput, authorUncheckedCreateInput>
  }

  /**
   * author createMany
   */
  export type authorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many authors.
     */
    data: authorCreateManyInput | authorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * author createManyAndReturn
   */
  export type authorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the author
     */
    select?: authorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the author
     */
    omit?: authorOmit<ExtArgs> | null
    /**
     * The data used to create many authors.
     */
    data: authorCreateManyInput | authorCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * author update
   */
  export type authorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the author
     */
    select?: authorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the author
     */
    omit?: authorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authorInclude<ExtArgs> | null
    /**
     * The data needed to update a author.
     */
    data: XOR<authorUpdateInput, authorUncheckedUpdateInput>
    /**
     * Choose, which author to update.
     */
    where: authorWhereUniqueInput
  }

  /**
   * author updateMany
   */
  export type authorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update authors.
     */
    data: XOR<authorUpdateManyMutationInput, authorUncheckedUpdateManyInput>
    /**
     * Filter which authors to update
     */
    where?: authorWhereInput
    /**
     * Limit how many authors to update.
     */
    limit?: number
  }

  /**
   * author updateManyAndReturn
   */
  export type authorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the author
     */
    select?: authorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the author
     */
    omit?: authorOmit<ExtArgs> | null
    /**
     * The data used to update authors.
     */
    data: XOR<authorUpdateManyMutationInput, authorUncheckedUpdateManyInput>
    /**
     * Filter which authors to update
     */
    where?: authorWhereInput
    /**
     * Limit how many authors to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authorIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * author upsert
   */
  export type authorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the author
     */
    select?: authorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the author
     */
    omit?: authorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authorInclude<ExtArgs> | null
    /**
     * The filter to search for the author to update in case it exists.
     */
    where: authorWhereUniqueInput
    /**
     * In case the author found by the `where` argument doesn't exist, create a new author with this data.
     */
    create: XOR<authorCreateInput, authorUncheckedCreateInput>
    /**
     * In case the author was found with the provided `where` argument, update it with this data.
     */
    update: XOR<authorUpdateInput, authorUncheckedUpdateInput>
  }

  /**
   * author delete
   */
  export type authorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the author
     */
    select?: authorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the author
     */
    omit?: authorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authorInclude<ExtArgs> | null
    /**
     * Filter which author to delete.
     */
    where: authorWhereUniqueInput
  }

  /**
   * author deleteMany
   */
  export type authorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which authors to delete
     */
    where?: authorWhereInput
    /**
     * Limit how many authors to delete.
     */
    limit?: number
  }

  /**
   * author.person
   */
  export type author$personArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the person
     */
    select?: personSelect<ExtArgs> | null
    /**
     * Omit specific fields from the person
     */
    omit?: personOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: personInclude<ExtArgs> | null
    where?: personWhereInput
  }

  /**
   * author.bookauthor
   */
  export type author$bookauthorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookauthor
     */
    select?: bookauthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookauthor
     */
    omit?: bookauthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookauthorInclude<ExtArgs> | null
    where?: bookauthorWhereInput
    orderBy?: bookauthorOrderByWithRelationInput | bookauthorOrderByWithRelationInput[]
    cursor?: bookauthorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookauthorScalarFieldEnum | BookauthorScalarFieldEnum[]
  }

  /**
   * author without action
   */
  export type authorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the author
     */
    select?: authorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the author
     */
    omit?: authorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authorInclude<ExtArgs> | null
  }


  /**
   * Model book
   */

  export type AggregateBook = {
    _count: BookCountAggregateOutputType | null
    _avg: BookAvgAggregateOutputType | null
    _sum: BookSumAggregateOutputType | null
    _min: BookMinAggregateOutputType | null
    _max: BookMaxAggregateOutputType | null
  }

  export type BookAvgAggregateOutputType = {
    book_id: number | null
    amountofpages: number | null
    cost: Decimal | null
    publisheryear: number | null
    copiesavailable: number | null
  }

  export type BookSumAggregateOutputType = {
    book_id: number | null
    amountofpages: number | null
    cost: Decimal | null
    publisheryear: number | null
    copiesavailable: number | null
  }

  export type BookMinAggregateOutputType = {
    book_id: number | null
    title: string | null
    amountofpages: number | null
    cost: Decimal | null
    publisheryear: number | null
    publication: string | null
    copiesavailable: number | null
    createdat: Date | null
    updatedat: Date | null
    inStock: boolean | null
  }

  export type BookMaxAggregateOutputType = {
    book_id: number | null
    title: string | null
    amountofpages: number | null
    cost: Decimal | null
    publisheryear: number | null
    publication: string | null
    copiesavailable: number | null
    createdat: Date | null
    updatedat: Date | null
    inStock: boolean | null
  }

  export type BookCountAggregateOutputType = {
    book_id: number
    title: number
    amountofpages: number
    cost: number
    publisheryear: number
    publication: number
    copiesavailable: number
    createdat: number
    updatedat: number
    inStock: number
    _all: number
  }


  export type BookAvgAggregateInputType = {
    book_id?: true
    amountofpages?: true
    cost?: true
    publisheryear?: true
    copiesavailable?: true
  }

  export type BookSumAggregateInputType = {
    book_id?: true
    amountofpages?: true
    cost?: true
    publisheryear?: true
    copiesavailable?: true
  }

  export type BookMinAggregateInputType = {
    book_id?: true
    title?: true
    amountofpages?: true
    cost?: true
    publisheryear?: true
    publication?: true
    copiesavailable?: true
    createdat?: true
    updatedat?: true
    inStock?: true
  }

  export type BookMaxAggregateInputType = {
    book_id?: true
    title?: true
    amountofpages?: true
    cost?: true
    publisheryear?: true
    publication?: true
    copiesavailable?: true
    createdat?: true
    updatedat?: true
    inStock?: true
  }

  export type BookCountAggregateInputType = {
    book_id?: true
    title?: true
    amountofpages?: true
    cost?: true
    publisheryear?: true
    publication?: true
    copiesavailable?: true
    createdat?: true
    updatedat?: true
    inStock?: true
    _all?: true
  }

  export type BookAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which book to aggregate.
     */
    where?: bookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of books to fetch.
     */
    orderBy?: bookOrderByWithRelationInput | bookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: bookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` books.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned books
    **/
    _count?: true | BookCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookMaxAggregateInputType
  }

  export type GetBookAggregateType<T extends BookAggregateArgs> = {
        [P in keyof T & keyof AggregateBook]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBook[P]>
      : GetScalarType<T[P], AggregateBook[P]>
  }




  export type bookGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: bookWhereInput
    orderBy?: bookOrderByWithAggregationInput | bookOrderByWithAggregationInput[]
    by: BookScalarFieldEnum[] | BookScalarFieldEnum
    having?: bookScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookCountAggregateInputType | true
    _avg?: BookAvgAggregateInputType
    _sum?: BookSumAggregateInputType
    _min?: BookMinAggregateInputType
    _max?: BookMaxAggregateInputType
  }

  export type BookGroupByOutputType = {
    book_id: number
    title: string
    amountofpages: number
    cost: Decimal
    publisheryear: number
    publication: string
    copiesavailable: number
    createdat: Date | null
    updatedat: Date | null
    inStock: boolean
    _count: BookCountAggregateOutputType | null
    _avg: BookAvgAggregateOutputType | null
    _sum: BookSumAggregateOutputType | null
    _min: BookMinAggregateOutputType | null
    _max: BookMaxAggregateOutputType | null
  }

  type GetBookGroupByPayload<T extends bookGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookGroupByOutputType[P]>
            : GetScalarType<T[P], BookGroupByOutputType[P]>
        }
      >
    >


  export type bookSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    book_id?: boolean
    title?: boolean
    amountofpages?: boolean
    cost?: boolean
    publisheryear?: boolean
    publication?: boolean
    copiesavailable?: boolean
    createdat?: boolean
    updatedat?: boolean
    inStock?: boolean
    bookauthor?: boolean | book$bookauthorArgs<ExtArgs>
    bookgenre?: boolean | book$bookgenreArgs<ExtArgs>
    bookpublisher?: boolean | book$bookpublisherArgs<ExtArgs>
    loan?: boolean | book$loanArgs<ExtArgs>
    Review?: boolean | book$ReviewArgs<ExtArgs>
    _count?: boolean | BookCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["book"]>

  export type bookSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    book_id?: boolean
    title?: boolean
    amountofpages?: boolean
    cost?: boolean
    publisheryear?: boolean
    publication?: boolean
    copiesavailable?: boolean
    createdat?: boolean
    updatedat?: boolean
    inStock?: boolean
  }, ExtArgs["result"]["book"]>

  export type bookSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    book_id?: boolean
    title?: boolean
    amountofpages?: boolean
    cost?: boolean
    publisheryear?: boolean
    publication?: boolean
    copiesavailable?: boolean
    createdat?: boolean
    updatedat?: boolean
    inStock?: boolean
  }, ExtArgs["result"]["book"]>

  export type bookSelectScalar = {
    book_id?: boolean
    title?: boolean
    amountofpages?: boolean
    cost?: boolean
    publisheryear?: boolean
    publication?: boolean
    copiesavailable?: boolean
    createdat?: boolean
    updatedat?: boolean
    inStock?: boolean
  }

  export type bookOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"book_id" | "title" | "amountofpages" | "cost" | "publisheryear" | "publication" | "copiesavailable" | "createdat" | "updatedat" | "inStock", ExtArgs["result"]["book"]>
  export type bookInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookauthor?: boolean | book$bookauthorArgs<ExtArgs>
    bookgenre?: boolean | book$bookgenreArgs<ExtArgs>
    bookpublisher?: boolean | book$bookpublisherArgs<ExtArgs>
    loan?: boolean | book$loanArgs<ExtArgs>
    Review?: boolean | book$ReviewArgs<ExtArgs>
    _count?: boolean | BookCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type bookIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type bookIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $bookPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "book"
    objects: {
      bookauthor: Prisma.$bookauthorPayload<ExtArgs>[]
      bookgenre: Prisma.$bookgenrePayload<ExtArgs>[]
      bookpublisher: Prisma.$bookpublisherPayload<ExtArgs>[]
      loan: Prisma.$loanPayload<ExtArgs>[]
      Review: Prisma.$ReviewPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      book_id: number
      title: string
      amountofpages: number
      cost: Prisma.Decimal
      publisheryear: number
      publication: string
      copiesavailable: number
      createdat: Date | null
      updatedat: Date | null
      inStock: boolean
    }, ExtArgs["result"]["book"]>
    composites: {}
  }

  type bookGetPayload<S extends boolean | null | undefined | bookDefaultArgs> = $Result.GetResult<Prisma.$bookPayload, S>

  type bookCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<bookFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookCountAggregateInputType | true
    }

  export interface bookDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['book'], meta: { name: 'book' } }
    /**
     * Find zero or one Book that matches the filter.
     * @param {bookFindUniqueArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends bookFindUniqueArgs>(args: SelectSubset<T, bookFindUniqueArgs<ExtArgs>>): Prisma__bookClient<$Result.GetResult<Prisma.$bookPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Book that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {bookFindUniqueOrThrowArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends bookFindUniqueOrThrowArgs>(args: SelectSubset<T, bookFindUniqueOrThrowArgs<ExtArgs>>): Prisma__bookClient<$Result.GetResult<Prisma.$bookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Book that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookFindFirstArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends bookFindFirstArgs>(args?: SelectSubset<T, bookFindFirstArgs<ExtArgs>>): Prisma__bookClient<$Result.GetResult<Prisma.$bookPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Book that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookFindFirstOrThrowArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends bookFindFirstOrThrowArgs>(args?: SelectSubset<T, bookFindFirstOrThrowArgs<ExtArgs>>): Prisma__bookClient<$Result.GetResult<Prisma.$bookPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Books that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Books
     * const books = await prisma.book.findMany()
     * 
     * // Get first 10 Books
     * const books = await prisma.book.findMany({ take: 10 })
     * 
     * // Only select the `book_id`
     * const bookWithBook_idOnly = await prisma.book.findMany({ select: { book_id: true } })
     * 
     */
    findMany<T extends bookFindManyArgs>(args?: SelectSubset<T, bookFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bookPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Book.
     * @param {bookCreateArgs} args - Arguments to create a Book.
     * @example
     * // Create one Book
     * const Book = await prisma.book.create({
     *   data: {
     *     // ... data to create a Book
     *   }
     * })
     * 
     */
    create<T extends bookCreateArgs>(args: SelectSubset<T, bookCreateArgs<ExtArgs>>): Prisma__bookClient<$Result.GetResult<Prisma.$bookPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Books.
     * @param {bookCreateManyArgs} args - Arguments to create many Books.
     * @example
     * // Create many Books
     * const book = await prisma.book.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends bookCreateManyArgs>(args?: SelectSubset<T, bookCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Books and returns the data saved in the database.
     * @param {bookCreateManyAndReturnArgs} args - Arguments to create many Books.
     * @example
     * // Create many Books
     * const book = await prisma.book.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Books and only return the `book_id`
     * const bookWithBook_idOnly = await prisma.book.createManyAndReturn({
     *   select: { book_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends bookCreateManyAndReturnArgs>(args?: SelectSubset<T, bookCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bookPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Book.
     * @param {bookDeleteArgs} args - Arguments to delete one Book.
     * @example
     * // Delete one Book
     * const Book = await prisma.book.delete({
     *   where: {
     *     // ... filter to delete one Book
     *   }
     * })
     * 
     */
    delete<T extends bookDeleteArgs>(args: SelectSubset<T, bookDeleteArgs<ExtArgs>>): Prisma__bookClient<$Result.GetResult<Prisma.$bookPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Book.
     * @param {bookUpdateArgs} args - Arguments to update one Book.
     * @example
     * // Update one Book
     * const book = await prisma.book.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends bookUpdateArgs>(args: SelectSubset<T, bookUpdateArgs<ExtArgs>>): Prisma__bookClient<$Result.GetResult<Prisma.$bookPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Books.
     * @param {bookDeleteManyArgs} args - Arguments to filter Books to delete.
     * @example
     * // Delete a few Books
     * const { count } = await prisma.book.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends bookDeleteManyArgs>(args?: SelectSubset<T, bookDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Books.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Books
     * const book = await prisma.book.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends bookUpdateManyArgs>(args: SelectSubset<T, bookUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Books and returns the data updated in the database.
     * @param {bookUpdateManyAndReturnArgs} args - Arguments to update many Books.
     * @example
     * // Update many Books
     * const book = await prisma.book.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Books and only return the `book_id`
     * const bookWithBook_idOnly = await prisma.book.updateManyAndReturn({
     *   select: { book_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends bookUpdateManyAndReturnArgs>(args: SelectSubset<T, bookUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bookPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Book.
     * @param {bookUpsertArgs} args - Arguments to update or create a Book.
     * @example
     * // Update or create a Book
     * const book = await prisma.book.upsert({
     *   create: {
     *     // ... data to create a Book
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Book we want to update
     *   }
     * })
     */
    upsert<T extends bookUpsertArgs>(args: SelectSubset<T, bookUpsertArgs<ExtArgs>>): Prisma__bookClient<$Result.GetResult<Prisma.$bookPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Books.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookCountArgs} args - Arguments to filter Books to count.
     * @example
     * // Count the number of Books
     * const count = await prisma.book.count({
     *   where: {
     *     // ... the filter for the Books we want to count
     *   }
     * })
    **/
    count<T extends bookCountArgs>(
      args?: Subset<T, bookCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Book.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BookAggregateArgs>(args: Subset<T, BookAggregateArgs>): Prisma.PrismaPromise<GetBookAggregateType<T>>

    /**
     * Group by Book.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends bookGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: bookGroupByArgs['orderBy'] }
        : { orderBy?: bookGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, bookGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the book model
   */
  readonly fields: bookFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for book.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__bookClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bookauthor<T extends book$bookauthorArgs<ExtArgs> = {}>(args?: Subset<T, book$bookauthorArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bookauthorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    bookgenre<T extends book$bookgenreArgs<ExtArgs> = {}>(args?: Subset<T, book$bookgenreArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bookgenrePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    bookpublisher<T extends book$bookpublisherArgs<ExtArgs> = {}>(args?: Subset<T, book$bookpublisherArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bookpublisherPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    loan<T extends book$loanArgs<ExtArgs> = {}>(args?: Subset<T, book$loanArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$loanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Review<T extends book$ReviewArgs<ExtArgs> = {}>(args?: Subset<T, book$ReviewArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the book model
   */
  interface bookFieldRefs {
    readonly book_id: FieldRef<"book", 'Int'>
    readonly title: FieldRef<"book", 'String'>
    readonly amountofpages: FieldRef<"book", 'Int'>
    readonly cost: FieldRef<"book", 'Decimal'>
    readonly publisheryear: FieldRef<"book", 'Int'>
    readonly publication: FieldRef<"book", 'String'>
    readonly copiesavailable: FieldRef<"book", 'Int'>
    readonly createdat: FieldRef<"book", 'DateTime'>
    readonly updatedat: FieldRef<"book", 'DateTime'>
    readonly inStock: FieldRef<"book", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * book findUnique
   */
  export type bookFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book
     */
    select?: bookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the book
     */
    omit?: bookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookInclude<ExtArgs> | null
    /**
     * Filter, which book to fetch.
     */
    where: bookWhereUniqueInput
  }

  /**
   * book findUniqueOrThrow
   */
  export type bookFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book
     */
    select?: bookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the book
     */
    omit?: bookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookInclude<ExtArgs> | null
    /**
     * Filter, which book to fetch.
     */
    where: bookWhereUniqueInput
  }

  /**
   * book findFirst
   */
  export type bookFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book
     */
    select?: bookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the book
     */
    omit?: bookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookInclude<ExtArgs> | null
    /**
     * Filter, which book to fetch.
     */
    where?: bookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of books to fetch.
     */
    orderBy?: bookOrderByWithRelationInput | bookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for books.
     */
    cursor?: bookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` books.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of books.
     */
    distinct?: BookScalarFieldEnum | BookScalarFieldEnum[]
  }

  /**
   * book findFirstOrThrow
   */
  export type bookFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book
     */
    select?: bookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the book
     */
    omit?: bookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookInclude<ExtArgs> | null
    /**
     * Filter, which book to fetch.
     */
    where?: bookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of books to fetch.
     */
    orderBy?: bookOrderByWithRelationInput | bookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for books.
     */
    cursor?: bookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` books.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of books.
     */
    distinct?: BookScalarFieldEnum | BookScalarFieldEnum[]
  }

  /**
   * book findMany
   */
  export type bookFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book
     */
    select?: bookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the book
     */
    omit?: bookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookInclude<ExtArgs> | null
    /**
     * Filter, which books to fetch.
     */
    where?: bookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of books to fetch.
     */
    orderBy?: bookOrderByWithRelationInput | bookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing books.
     */
    cursor?: bookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` books.
     */
    skip?: number
    distinct?: BookScalarFieldEnum | BookScalarFieldEnum[]
  }

  /**
   * book create
   */
  export type bookCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book
     */
    select?: bookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the book
     */
    omit?: bookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookInclude<ExtArgs> | null
    /**
     * The data needed to create a book.
     */
    data: XOR<bookCreateInput, bookUncheckedCreateInput>
  }

  /**
   * book createMany
   */
  export type bookCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many books.
     */
    data: bookCreateManyInput | bookCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * book createManyAndReturn
   */
  export type bookCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book
     */
    select?: bookSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the book
     */
    omit?: bookOmit<ExtArgs> | null
    /**
     * The data used to create many books.
     */
    data: bookCreateManyInput | bookCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * book update
   */
  export type bookUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book
     */
    select?: bookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the book
     */
    omit?: bookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookInclude<ExtArgs> | null
    /**
     * The data needed to update a book.
     */
    data: XOR<bookUpdateInput, bookUncheckedUpdateInput>
    /**
     * Choose, which book to update.
     */
    where: bookWhereUniqueInput
  }

  /**
   * book updateMany
   */
  export type bookUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update books.
     */
    data: XOR<bookUpdateManyMutationInput, bookUncheckedUpdateManyInput>
    /**
     * Filter which books to update
     */
    where?: bookWhereInput
    /**
     * Limit how many books to update.
     */
    limit?: number
  }

  /**
   * book updateManyAndReturn
   */
  export type bookUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book
     */
    select?: bookSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the book
     */
    omit?: bookOmit<ExtArgs> | null
    /**
     * The data used to update books.
     */
    data: XOR<bookUpdateManyMutationInput, bookUncheckedUpdateManyInput>
    /**
     * Filter which books to update
     */
    where?: bookWhereInput
    /**
     * Limit how many books to update.
     */
    limit?: number
  }

  /**
   * book upsert
   */
  export type bookUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book
     */
    select?: bookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the book
     */
    omit?: bookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookInclude<ExtArgs> | null
    /**
     * The filter to search for the book to update in case it exists.
     */
    where: bookWhereUniqueInput
    /**
     * In case the book found by the `where` argument doesn't exist, create a new book with this data.
     */
    create: XOR<bookCreateInput, bookUncheckedCreateInput>
    /**
     * In case the book was found with the provided `where` argument, update it with this data.
     */
    update: XOR<bookUpdateInput, bookUncheckedUpdateInput>
  }

  /**
   * book delete
   */
  export type bookDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book
     */
    select?: bookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the book
     */
    omit?: bookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookInclude<ExtArgs> | null
    /**
     * Filter which book to delete.
     */
    where: bookWhereUniqueInput
  }

  /**
   * book deleteMany
   */
  export type bookDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which books to delete
     */
    where?: bookWhereInput
    /**
     * Limit how many books to delete.
     */
    limit?: number
  }

  /**
   * book.bookauthor
   */
  export type book$bookauthorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookauthor
     */
    select?: bookauthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookauthor
     */
    omit?: bookauthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookauthorInclude<ExtArgs> | null
    where?: bookauthorWhereInput
    orderBy?: bookauthorOrderByWithRelationInput | bookauthorOrderByWithRelationInput[]
    cursor?: bookauthorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookauthorScalarFieldEnum | BookauthorScalarFieldEnum[]
  }

  /**
   * book.bookgenre
   */
  export type book$bookgenreArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookgenre
     */
    select?: bookgenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookgenre
     */
    omit?: bookgenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookgenreInclude<ExtArgs> | null
    where?: bookgenreWhereInput
    orderBy?: bookgenreOrderByWithRelationInput | bookgenreOrderByWithRelationInput[]
    cursor?: bookgenreWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookgenreScalarFieldEnum | BookgenreScalarFieldEnum[]
  }

  /**
   * book.bookpublisher
   */
  export type book$bookpublisherArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookpublisher
     */
    select?: bookpublisherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookpublisher
     */
    omit?: bookpublisherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookpublisherInclude<ExtArgs> | null
    where?: bookpublisherWhereInput
    orderBy?: bookpublisherOrderByWithRelationInput | bookpublisherOrderByWithRelationInput[]
    cursor?: bookpublisherWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookpublisherScalarFieldEnum | BookpublisherScalarFieldEnum[]
  }

  /**
   * book.loan
   */
  export type book$loanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loan
     */
    select?: loanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the loan
     */
    omit?: loanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: loanInclude<ExtArgs> | null
    where?: loanWhereInput
    orderBy?: loanOrderByWithRelationInput | loanOrderByWithRelationInput[]
    cursor?: loanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LoanScalarFieldEnum | LoanScalarFieldEnum[]
  }

  /**
   * book.Review
   */
  export type book$ReviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * book without action
   */
  export type bookDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book
     */
    select?: bookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the book
     */
    omit?: bookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookInclude<ExtArgs> | null
  }


  /**
   * Model fine
   */

  export type AggregateFine = {
    _count: FineCountAggregateOutputType | null
    _avg: FineAvgAggregateOutputType | null
    _sum: FineSumAggregateOutputType | null
    _min: FineMinAggregateOutputType | null
    _max: FineMaxAggregateOutputType | null
  }

  export type FineAvgAggregateOutputType = {
    fine_id: number | null
    amount: Decimal | null
    member_id: number | null
    loan_id: number | null
  }

  export type FineSumAggregateOutputType = {
    fine_id: number | null
    amount: Decimal | null
    member_id: number | null
    loan_id: number | null
  }

  export type FineMinAggregateOutputType = {
    fine_id: number | null
    date: Date | null
    amount: Decimal | null
    member_id: number | null
    loan_id: number | null
    createdat: Date | null
    updatedat: Date | null
  }

  export type FineMaxAggregateOutputType = {
    fine_id: number | null
    date: Date | null
    amount: Decimal | null
    member_id: number | null
    loan_id: number | null
    createdat: Date | null
    updatedat: Date | null
  }

  export type FineCountAggregateOutputType = {
    fine_id: number
    date: number
    amount: number
    member_id: number
    loan_id: number
    createdat: number
    updatedat: number
    _all: number
  }


  export type FineAvgAggregateInputType = {
    fine_id?: true
    amount?: true
    member_id?: true
    loan_id?: true
  }

  export type FineSumAggregateInputType = {
    fine_id?: true
    amount?: true
    member_id?: true
    loan_id?: true
  }

  export type FineMinAggregateInputType = {
    fine_id?: true
    date?: true
    amount?: true
    member_id?: true
    loan_id?: true
    createdat?: true
    updatedat?: true
  }

  export type FineMaxAggregateInputType = {
    fine_id?: true
    date?: true
    amount?: true
    member_id?: true
    loan_id?: true
    createdat?: true
    updatedat?: true
  }

  export type FineCountAggregateInputType = {
    fine_id?: true
    date?: true
    amount?: true
    member_id?: true
    loan_id?: true
    createdat?: true
    updatedat?: true
    _all?: true
  }

  export type FineAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which fine to aggregate.
     */
    where?: fineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of fines to fetch.
     */
    orderBy?: fineOrderByWithRelationInput | fineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: fineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` fines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` fines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned fines
    **/
    _count?: true | FineCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FineAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FineSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FineMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FineMaxAggregateInputType
  }

  export type GetFineAggregateType<T extends FineAggregateArgs> = {
        [P in keyof T & keyof AggregateFine]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFine[P]>
      : GetScalarType<T[P], AggregateFine[P]>
  }




  export type fineGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: fineWhereInput
    orderBy?: fineOrderByWithAggregationInput | fineOrderByWithAggregationInput[]
    by: FineScalarFieldEnum[] | FineScalarFieldEnum
    having?: fineScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FineCountAggregateInputType | true
    _avg?: FineAvgAggregateInputType
    _sum?: FineSumAggregateInputType
    _min?: FineMinAggregateInputType
    _max?: FineMaxAggregateInputType
  }

  export type FineGroupByOutputType = {
    fine_id: number
    date: Date
    amount: Decimal
    member_id: number
    loan_id: number
    createdat: Date | null
    updatedat: Date | null
    _count: FineCountAggregateOutputType | null
    _avg: FineAvgAggregateOutputType | null
    _sum: FineSumAggregateOutputType | null
    _min: FineMinAggregateOutputType | null
    _max: FineMaxAggregateOutputType | null
  }

  type GetFineGroupByPayload<T extends fineGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FineGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FineGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FineGroupByOutputType[P]>
            : GetScalarType<T[P], FineGroupByOutputType[P]>
        }
      >
    >


  export type fineSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    fine_id?: boolean
    date?: boolean
    amount?: boolean
    member_id?: boolean
    loan_id?: boolean
    createdat?: boolean
    updatedat?: boolean
    loan?: boolean | loanDefaultArgs<ExtArgs>
    member?: boolean | memberDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fine"]>

  export type fineSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    fine_id?: boolean
    date?: boolean
    amount?: boolean
    member_id?: boolean
    loan_id?: boolean
    createdat?: boolean
    updatedat?: boolean
    loan?: boolean | loanDefaultArgs<ExtArgs>
    member?: boolean | memberDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fine"]>

  export type fineSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    fine_id?: boolean
    date?: boolean
    amount?: boolean
    member_id?: boolean
    loan_id?: boolean
    createdat?: boolean
    updatedat?: boolean
    loan?: boolean | loanDefaultArgs<ExtArgs>
    member?: boolean | memberDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fine"]>

  export type fineSelectScalar = {
    fine_id?: boolean
    date?: boolean
    amount?: boolean
    member_id?: boolean
    loan_id?: boolean
    createdat?: boolean
    updatedat?: boolean
  }

  export type fineOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"fine_id" | "date" | "amount" | "member_id" | "loan_id" | "createdat" | "updatedat", ExtArgs["result"]["fine"]>
  export type fineInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    loan?: boolean | loanDefaultArgs<ExtArgs>
    member?: boolean | memberDefaultArgs<ExtArgs>
  }
  export type fineIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    loan?: boolean | loanDefaultArgs<ExtArgs>
    member?: boolean | memberDefaultArgs<ExtArgs>
  }
  export type fineIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    loan?: boolean | loanDefaultArgs<ExtArgs>
    member?: boolean | memberDefaultArgs<ExtArgs>
  }

  export type $finePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "fine"
    objects: {
      loan: Prisma.$loanPayload<ExtArgs>
      member: Prisma.$memberPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      fine_id: number
      date: Date
      amount: Prisma.Decimal
      member_id: number
      loan_id: number
      createdat: Date | null
      updatedat: Date | null
    }, ExtArgs["result"]["fine"]>
    composites: {}
  }

  type fineGetPayload<S extends boolean | null | undefined | fineDefaultArgs> = $Result.GetResult<Prisma.$finePayload, S>

  type fineCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<fineFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FineCountAggregateInputType | true
    }

  export interface fineDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['fine'], meta: { name: 'fine' } }
    /**
     * Find zero or one Fine that matches the filter.
     * @param {fineFindUniqueArgs} args - Arguments to find a Fine
     * @example
     * // Get one Fine
     * const fine = await prisma.fine.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends fineFindUniqueArgs>(args: SelectSubset<T, fineFindUniqueArgs<ExtArgs>>): Prisma__fineClient<$Result.GetResult<Prisma.$finePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Fine that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {fineFindUniqueOrThrowArgs} args - Arguments to find a Fine
     * @example
     * // Get one Fine
     * const fine = await prisma.fine.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends fineFindUniqueOrThrowArgs>(args: SelectSubset<T, fineFindUniqueOrThrowArgs<ExtArgs>>): Prisma__fineClient<$Result.GetResult<Prisma.$finePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Fine that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fineFindFirstArgs} args - Arguments to find a Fine
     * @example
     * // Get one Fine
     * const fine = await prisma.fine.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends fineFindFirstArgs>(args?: SelectSubset<T, fineFindFirstArgs<ExtArgs>>): Prisma__fineClient<$Result.GetResult<Prisma.$finePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Fine that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fineFindFirstOrThrowArgs} args - Arguments to find a Fine
     * @example
     * // Get one Fine
     * const fine = await prisma.fine.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends fineFindFirstOrThrowArgs>(args?: SelectSubset<T, fineFindFirstOrThrowArgs<ExtArgs>>): Prisma__fineClient<$Result.GetResult<Prisma.$finePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Fines that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fineFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Fines
     * const fines = await prisma.fine.findMany()
     * 
     * // Get first 10 Fines
     * const fines = await prisma.fine.findMany({ take: 10 })
     * 
     * // Only select the `fine_id`
     * const fineWithFine_idOnly = await prisma.fine.findMany({ select: { fine_id: true } })
     * 
     */
    findMany<T extends fineFindManyArgs>(args?: SelectSubset<T, fineFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$finePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Fine.
     * @param {fineCreateArgs} args - Arguments to create a Fine.
     * @example
     * // Create one Fine
     * const Fine = await prisma.fine.create({
     *   data: {
     *     // ... data to create a Fine
     *   }
     * })
     * 
     */
    create<T extends fineCreateArgs>(args: SelectSubset<T, fineCreateArgs<ExtArgs>>): Prisma__fineClient<$Result.GetResult<Prisma.$finePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Fines.
     * @param {fineCreateManyArgs} args - Arguments to create many Fines.
     * @example
     * // Create many Fines
     * const fine = await prisma.fine.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends fineCreateManyArgs>(args?: SelectSubset<T, fineCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Fines and returns the data saved in the database.
     * @param {fineCreateManyAndReturnArgs} args - Arguments to create many Fines.
     * @example
     * // Create many Fines
     * const fine = await prisma.fine.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Fines and only return the `fine_id`
     * const fineWithFine_idOnly = await prisma.fine.createManyAndReturn({
     *   select: { fine_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends fineCreateManyAndReturnArgs>(args?: SelectSubset<T, fineCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$finePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Fine.
     * @param {fineDeleteArgs} args - Arguments to delete one Fine.
     * @example
     * // Delete one Fine
     * const Fine = await prisma.fine.delete({
     *   where: {
     *     // ... filter to delete one Fine
     *   }
     * })
     * 
     */
    delete<T extends fineDeleteArgs>(args: SelectSubset<T, fineDeleteArgs<ExtArgs>>): Prisma__fineClient<$Result.GetResult<Prisma.$finePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Fine.
     * @param {fineUpdateArgs} args - Arguments to update one Fine.
     * @example
     * // Update one Fine
     * const fine = await prisma.fine.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends fineUpdateArgs>(args: SelectSubset<T, fineUpdateArgs<ExtArgs>>): Prisma__fineClient<$Result.GetResult<Prisma.$finePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Fines.
     * @param {fineDeleteManyArgs} args - Arguments to filter Fines to delete.
     * @example
     * // Delete a few Fines
     * const { count } = await prisma.fine.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends fineDeleteManyArgs>(args?: SelectSubset<T, fineDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fineUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Fines
     * const fine = await prisma.fine.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends fineUpdateManyArgs>(args: SelectSubset<T, fineUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fines and returns the data updated in the database.
     * @param {fineUpdateManyAndReturnArgs} args - Arguments to update many Fines.
     * @example
     * // Update many Fines
     * const fine = await prisma.fine.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Fines and only return the `fine_id`
     * const fineWithFine_idOnly = await prisma.fine.updateManyAndReturn({
     *   select: { fine_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends fineUpdateManyAndReturnArgs>(args: SelectSubset<T, fineUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$finePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Fine.
     * @param {fineUpsertArgs} args - Arguments to update or create a Fine.
     * @example
     * // Update or create a Fine
     * const fine = await prisma.fine.upsert({
     *   create: {
     *     // ... data to create a Fine
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Fine we want to update
     *   }
     * })
     */
    upsert<T extends fineUpsertArgs>(args: SelectSubset<T, fineUpsertArgs<ExtArgs>>): Prisma__fineClient<$Result.GetResult<Prisma.$finePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Fines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fineCountArgs} args - Arguments to filter Fines to count.
     * @example
     * // Count the number of Fines
     * const count = await prisma.fine.count({
     *   where: {
     *     // ... the filter for the Fines we want to count
     *   }
     * })
    **/
    count<T extends fineCountArgs>(
      args?: Subset<T, fineCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FineCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Fine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FineAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FineAggregateArgs>(args: Subset<T, FineAggregateArgs>): Prisma.PrismaPromise<GetFineAggregateType<T>>

    /**
     * Group by Fine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fineGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends fineGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: fineGroupByArgs['orderBy'] }
        : { orderBy?: fineGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, fineGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFineGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the fine model
   */
  readonly fields: fineFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for fine.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__fineClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    loan<T extends loanDefaultArgs<ExtArgs> = {}>(args?: Subset<T, loanDefaultArgs<ExtArgs>>): Prisma__loanClient<$Result.GetResult<Prisma.$loanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    member<T extends memberDefaultArgs<ExtArgs> = {}>(args?: Subset<T, memberDefaultArgs<ExtArgs>>): Prisma__memberClient<$Result.GetResult<Prisma.$memberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the fine model
   */
  interface fineFieldRefs {
    readonly fine_id: FieldRef<"fine", 'Int'>
    readonly date: FieldRef<"fine", 'DateTime'>
    readonly amount: FieldRef<"fine", 'Decimal'>
    readonly member_id: FieldRef<"fine", 'Int'>
    readonly loan_id: FieldRef<"fine", 'Int'>
    readonly createdat: FieldRef<"fine", 'DateTime'>
    readonly updatedat: FieldRef<"fine", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * fine findUnique
   */
  export type fineFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fine
     */
    select?: fineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fine
     */
    omit?: fineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fineInclude<ExtArgs> | null
    /**
     * Filter, which fine to fetch.
     */
    where: fineWhereUniqueInput
  }

  /**
   * fine findUniqueOrThrow
   */
  export type fineFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fine
     */
    select?: fineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fine
     */
    omit?: fineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fineInclude<ExtArgs> | null
    /**
     * Filter, which fine to fetch.
     */
    where: fineWhereUniqueInput
  }

  /**
   * fine findFirst
   */
  export type fineFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fine
     */
    select?: fineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fine
     */
    omit?: fineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fineInclude<ExtArgs> | null
    /**
     * Filter, which fine to fetch.
     */
    where?: fineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of fines to fetch.
     */
    orderBy?: fineOrderByWithRelationInput | fineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for fines.
     */
    cursor?: fineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` fines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` fines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of fines.
     */
    distinct?: FineScalarFieldEnum | FineScalarFieldEnum[]
  }

  /**
   * fine findFirstOrThrow
   */
  export type fineFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fine
     */
    select?: fineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fine
     */
    omit?: fineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fineInclude<ExtArgs> | null
    /**
     * Filter, which fine to fetch.
     */
    where?: fineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of fines to fetch.
     */
    orderBy?: fineOrderByWithRelationInput | fineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for fines.
     */
    cursor?: fineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` fines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` fines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of fines.
     */
    distinct?: FineScalarFieldEnum | FineScalarFieldEnum[]
  }

  /**
   * fine findMany
   */
  export type fineFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fine
     */
    select?: fineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fine
     */
    omit?: fineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fineInclude<ExtArgs> | null
    /**
     * Filter, which fines to fetch.
     */
    where?: fineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of fines to fetch.
     */
    orderBy?: fineOrderByWithRelationInput | fineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing fines.
     */
    cursor?: fineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` fines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` fines.
     */
    skip?: number
    distinct?: FineScalarFieldEnum | FineScalarFieldEnum[]
  }

  /**
   * fine create
   */
  export type fineCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fine
     */
    select?: fineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fine
     */
    omit?: fineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fineInclude<ExtArgs> | null
    /**
     * The data needed to create a fine.
     */
    data: XOR<fineCreateInput, fineUncheckedCreateInput>
  }

  /**
   * fine createMany
   */
  export type fineCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many fines.
     */
    data: fineCreateManyInput | fineCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * fine createManyAndReturn
   */
  export type fineCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fine
     */
    select?: fineSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the fine
     */
    omit?: fineOmit<ExtArgs> | null
    /**
     * The data used to create many fines.
     */
    data: fineCreateManyInput | fineCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fineIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * fine update
   */
  export type fineUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fine
     */
    select?: fineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fine
     */
    omit?: fineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fineInclude<ExtArgs> | null
    /**
     * The data needed to update a fine.
     */
    data: XOR<fineUpdateInput, fineUncheckedUpdateInput>
    /**
     * Choose, which fine to update.
     */
    where: fineWhereUniqueInput
  }

  /**
   * fine updateMany
   */
  export type fineUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update fines.
     */
    data: XOR<fineUpdateManyMutationInput, fineUncheckedUpdateManyInput>
    /**
     * Filter which fines to update
     */
    where?: fineWhereInput
    /**
     * Limit how many fines to update.
     */
    limit?: number
  }

  /**
   * fine updateManyAndReturn
   */
  export type fineUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fine
     */
    select?: fineSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the fine
     */
    omit?: fineOmit<ExtArgs> | null
    /**
     * The data used to update fines.
     */
    data: XOR<fineUpdateManyMutationInput, fineUncheckedUpdateManyInput>
    /**
     * Filter which fines to update
     */
    where?: fineWhereInput
    /**
     * Limit how many fines to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fineIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * fine upsert
   */
  export type fineUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fine
     */
    select?: fineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fine
     */
    omit?: fineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fineInclude<ExtArgs> | null
    /**
     * The filter to search for the fine to update in case it exists.
     */
    where: fineWhereUniqueInput
    /**
     * In case the fine found by the `where` argument doesn't exist, create a new fine with this data.
     */
    create: XOR<fineCreateInput, fineUncheckedCreateInput>
    /**
     * In case the fine was found with the provided `where` argument, update it with this data.
     */
    update: XOR<fineUpdateInput, fineUncheckedUpdateInput>
  }

  /**
   * fine delete
   */
  export type fineDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fine
     */
    select?: fineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fine
     */
    omit?: fineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fineInclude<ExtArgs> | null
    /**
     * Filter which fine to delete.
     */
    where: fineWhereUniqueInput
  }

  /**
   * fine deleteMany
   */
  export type fineDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which fines to delete
     */
    where?: fineWhereInput
    /**
     * Limit how many fines to delete.
     */
    limit?: number
  }

  /**
   * fine without action
   */
  export type fineDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fine
     */
    select?: fineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fine
     */
    omit?: fineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fineInclude<ExtArgs> | null
  }


  /**
   * Model genre
   */

  export type AggregateGenre = {
    _count: GenreCountAggregateOutputType | null
    _avg: GenreAvgAggregateOutputType | null
    _sum: GenreSumAggregateOutputType | null
    _min: GenreMinAggregateOutputType | null
    _max: GenreMaxAggregateOutputType | null
  }

  export type GenreAvgAggregateOutputType = {
    genre_id: number | null
  }

  export type GenreSumAggregateOutputType = {
    genre_id: number | null
  }

  export type GenreMinAggregateOutputType = {
    genre_id: number | null
    title: string | null
    createdat: Date | null
    updatedat: Date | null
  }

  export type GenreMaxAggregateOutputType = {
    genre_id: number | null
    title: string | null
    createdat: Date | null
    updatedat: Date | null
  }

  export type GenreCountAggregateOutputType = {
    genre_id: number
    title: number
    createdat: number
    updatedat: number
    _all: number
  }


  export type GenreAvgAggregateInputType = {
    genre_id?: true
  }

  export type GenreSumAggregateInputType = {
    genre_id?: true
  }

  export type GenreMinAggregateInputType = {
    genre_id?: true
    title?: true
    createdat?: true
    updatedat?: true
  }

  export type GenreMaxAggregateInputType = {
    genre_id?: true
    title?: true
    createdat?: true
    updatedat?: true
  }

  export type GenreCountAggregateInputType = {
    genre_id?: true
    title?: true
    createdat?: true
    updatedat?: true
    _all?: true
  }

  export type GenreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which genre to aggregate.
     */
    where?: genreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of genres to fetch.
     */
    orderBy?: genreOrderByWithRelationInput | genreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: genreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` genres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned genres
    **/
    _count?: true | GenreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GenreAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GenreSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GenreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GenreMaxAggregateInputType
  }

  export type GetGenreAggregateType<T extends GenreAggregateArgs> = {
        [P in keyof T & keyof AggregateGenre]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGenre[P]>
      : GetScalarType<T[P], AggregateGenre[P]>
  }




  export type genreGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: genreWhereInput
    orderBy?: genreOrderByWithAggregationInput | genreOrderByWithAggregationInput[]
    by: GenreScalarFieldEnum[] | GenreScalarFieldEnum
    having?: genreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GenreCountAggregateInputType | true
    _avg?: GenreAvgAggregateInputType
    _sum?: GenreSumAggregateInputType
    _min?: GenreMinAggregateInputType
    _max?: GenreMaxAggregateInputType
  }

  export type GenreGroupByOutputType = {
    genre_id: number
    title: string
    createdat: Date | null
    updatedat: Date | null
    _count: GenreCountAggregateOutputType | null
    _avg: GenreAvgAggregateOutputType | null
    _sum: GenreSumAggregateOutputType | null
    _min: GenreMinAggregateOutputType | null
    _max: GenreMaxAggregateOutputType | null
  }

  type GetGenreGroupByPayload<T extends genreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GenreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GenreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GenreGroupByOutputType[P]>
            : GetScalarType<T[P], GenreGroupByOutputType[P]>
        }
      >
    >


  export type genreSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    genre_id?: boolean
    title?: boolean
    createdat?: boolean
    updatedat?: boolean
    bookgenre?: boolean | genre$bookgenreArgs<ExtArgs>
    _count?: boolean | GenreCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["genre"]>

  export type genreSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    genre_id?: boolean
    title?: boolean
    createdat?: boolean
    updatedat?: boolean
  }, ExtArgs["result"]["genre"]>

  export type genreSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    genre_id?: boolean
    title?: boolean
    createdat?: boolean
    updatedat?: boolean
  }, ExtArgs["result"]["genre"]>

  export type genreSelectScalar = {
    genre_id?: boolean
    title?: boolean
    createdat?: boolean
    updatedat?: boolean
  }

  export type genreOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"genre_id" | "title" | "createdat" | "updatedat", ExtArgs["result"]["genre"]>
  export type genreInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookgenre?: boolean | genre$bookgenreArgs<ExtArgs>
    _count?: boolean | GenreCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type genreIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type genreIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $genrePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "genre"
    objects: {
      bookgenre: Prisma.$bookgenrePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      genre_id: number
      title: string
      createdat: Date | null
      updatedat: Date | null
    }, ExtArgs["result"]["genre"]>
    composites: {}
  }

  type genreGetPayload<S extends boolean | null | undefined | genreDefaultArgs> = $Result.GetResult<Prisma.$genrePayload, S>

  type genreCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<genreFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GenreCountAggregateInputType | true
    }

  export interface genreDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['genre'], meta: { name: 'genre' } }
    /**
     * Find zero or one Genre that matches the filter.
     * @param {genreFindUniqueArgs} args - Arguments to find a Genre
     * @example
     * // Get one Genre
     * const genre = await prisma.genre.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends genreFindUniqueArgs>(args: SelectSubset<T, genreFindUniqueArgs<ExtArgs>>): Prisma__genreClient<$Result.GetResult<Prisma.$genrePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Genre that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {genreFindUniqueOrThrowArgs} args - Arguments to find a Genre
     * @example
     * // Get one Genre
     * const genre = await prisma.genre.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends genreFindUniqueOrThrowArgs>(args: SelectSubset<T, genreFindUniqueOrThrowArgs<ExtArgs>>): Prisma__genreClient<$Result.GetResult<Prisma.$genrePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Genre that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {genreFindFirstArgs} args - Arguments to find a Genre
     * @example
     * // Get one Genre
     * const genre = await prisma.genre.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends genreFindFirstArgs>(args?: SelectSubset<T, genreFindFirstArgs<ExtArgs>>): Prisma__genreClient<$Result.GetResult<Prisma.$genrePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Genre that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {genreFindFirstOrThrowArgs} args - Arguments to find a Genre
     * @example
     * // Get one Genre
     * const genre = await prisma.genre.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends genreFindFirstOrThrowArgs>(args?: SelectSubset<T, genreFindFirstOrThrowArgs<ExtArgs>>): Prisma__genreClient<$Result.GetResult<Prisma.$genrePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Genres that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {genreFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Genres
     * const genres = await prisma.genre.findMany()
     * 
     * // Get first 10 Genres
     * const genres = await prisma.genre.findMany({ take: 10 })
     * 
     * // Only select the `genre_id`
     * const genreWithGenre_idOnly = await prisma.genre.findMany({ select: { genre_id: true } })
     * 
     */
    findMany<T extends genreFindManyArgs>(args?: SelectSubset<T, genreFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$genrePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Genre.
     * @param {genreCreateArgs} args - Arguments to create a Genre.
     * @example
     * // Create one Genre
     * const Genre = await prisma.genre.create({
     *   data: {
     *     // ... data to create a Genre
     *   }
     * })
     * 
     */
    create<T extends genreCreateArgs>(args: SelectSubset<T, genreCreateArgs<ExtArgs>>): Prisma__genreClient<$Result.GetResult<Prisma.$genrePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Genres.
     * @param {genreCreateManyArgs} args - Arguments to create many Genres.
     * @example
     * // Create many Genres
     * const genre = await prisma.genre.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends genreCreateManyArgs>(args?: SelectSubset<T, genreCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Genres and returns the data saved in the database.
     * @param {genreCreateManyAndReturnArgs} args - Arguments to create many Genres.
     * @example
     * // Create many Genres
     * const genre = await prisma.genre.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Genres and only return the `genre_id`
     * const genreWithGenre_idOnly = await prisma.genre.createManyAndReturn({
     *   select: { genre_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends genreCreateManyAndReturnArgs>(args?: SelectSubset<T, genreCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$genrePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Genre.
     * @param {genreDeleteArgs} args - Arguments to delete one Genre.
     * @example
     * // Delete one Genre
     * const Genre = await prisma.genre.delete({
     *   where: {
     *     // ... filter to delete one Genre
     *   }
     * })
     * 
     */
    delete<T extends genreDeleteArgs>(args: SelectSubset<T, genreDeleteArgs<ExtArgs>>): Prisma__genreClient<$Result.GetResult<Prisma.$genrePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Genre.
     * @param {genreUpdateArgs} args - Arguments to update one Genre.
     * @example
     * // Update one Genre
     * const genre = await prisma.genre.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends genreUpdateArgs>(args: SelectSubset<T, genreUpdateArgs<ExtArgs>>): Prisma__genreClient<$Result.GetResult<Prisma.$genrePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Genres.
     * @param {genreDeleteManyArgs} args - Arguments to filter Genres to delete.
     * @example
     * // Delete a few Genres
     * const { count } = await prisma.genre.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends genreDeleteManyArgs>(args?: SelectSubset<T, genreDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Genres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {genreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Genres
     * const genre = await prisma.genre.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends genreUpdateManyArgs>(args: SelectSubset<T, genreUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Genres and returns the data updated in the database.
     * @param {genreUpdateManyAndReturnArgs} args - Arguments to update many Genres.
     * @example
     * // Update many Genres
     * const genre = await prisma.genre.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Genres and only return the `genre_id`
     * const genreWithGenre_idOnly = await prisma.genre.updateManyAndReturn({
     *   select: { genre_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends genreUpdateManyAndReturnArgs>(args: SelectSubset<T, genreUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$genrePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Genre.
     * @param {genreUpsertArgs} args - Arguments to update or create a Genre.
     * @example
     * // Update or create a Genre
     * const genre = await prisma.genre.upsert({
     *   create: {
     *     // ... data to create a Genre
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Genre we want to update
     *   }
     * })
     */
    upsert<T extends genreUpsertArgs>(args: SelectSubset<T, genreUpsertArgs<ExtArgs>>): Prisma__genreClient<$Result.GetResult<Prisma.$genrePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Genres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {genreCountArgs} args - Arguments to filter Genres to count.
     * @example
     * // Count the number of Genres
     * const count = await prisma.genre.count({
     *   where: {
     *     // ... the filter for the Genres we want to count
     *   }
     * })
    **/
    count<T extends genreCountArgs>(
      args?: Subset<T, genreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GenreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Genre.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GenreAggregateArgs>(args: Subset<T, GenreAggregateArgs>): Prisma.PrismaPromise<GetGenreAggregateType<T>>

    /**
     * Group by Genre.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {genreGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends genreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: genreGroupByArgs['orderBy'] }
        : { orderBy?: genreGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, genreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGenreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the genre model
   */
  readonly fields: genreFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for genre.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__genreClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bookgenre<T extends genre$bookgenreArgs<ExtArgs> = {}>(args?: Subset<T, genre$bookgenreArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bookgenrePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the genre model
   */
  interface genreFieldRefs {
    readonly genre_id: FieldRef<"genre", 'Int'>
    readonly title: FieldRef<"genre", 'String'>
    readonly createdat: FieldRef<"genre", 'DateTime'>
    readonly updatedat: FieldRef<"genre", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * genre findUnique
   */
  export type genreFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genre
     */
    select?: genreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the genre
     */
    omit?: genreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: genreInclude<ExtArgs> | null
    /**
     * Filter, which genre to fetch.
     */
    where: genreWhereUniqueInput
  }

  /**
   * genre findUniqueOrThrow
   */
  export type genreFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genre
     */
    select?: genreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the genre
     */
    omit?: genreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: genreInclude<ExtArgs> | null
    /**
     * Filter, which genre to fetch.
     */
    where: genreWhereUniqueInput
  }

  /**
   * genre findFirst
   */
  export type genreFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genre
     */
    select?: genreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the genre
     */
    omit?: genreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: genreInclude<ExtArgs> | null
    /**
     * Filter, which genre to fetch.
     */
    where?: genreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of genres to fetch.
     */
    orderBy?: genreOrderByWithRelationInput | genreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for genres.
     */
    cursor?: genreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` genres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of genres.
     */
    distinct?: GenreScalarFieldEnum | GenreScalarFieldEnum[]
  }

  /**
   * genre findFirstOrThrow
   */
  export type genreFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genre
     */
    select?: genreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the genre
     */
    omit?: genreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: genreInclude<ExtArgs> | null
    /**
     * Filter, which genre to fetch.
     */
    where?: genreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of genres to fetch.
     */
    orderBy?: genreOrderByWithRelationInput | genreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for genres.
     */
    cursor?: genreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` genres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of genres.
     */
    distinct?: GenreScalarFieldEnum | GenreScalarFieldEnum[]
  }

  /**
   * genre findMany
   */
  export type genreFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genre
     */
    select?: genreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the genre
     */
    omit?: genreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: genreInclude<ExtArgs> | null
    /**
     * Filter, which genres to fetch.
     */
    where?: genreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of genres to fetch.
     */
    orderBy?: genreOrderByWithRelationInput | genreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing genres.
     */
    cursor?: genreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` genres.
     */
    skip?: number
    distinct?: GenreScalarFieldEnum | GenreScalarFieldEnum[]
  }

  /**
   * genre create
   */
  export type genreCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genre
     */
    select?: genreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the genre
     */
    omit?: genreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: genreInclude<ExtArgs> | null
    /**
     * The data needed to create a genre.
     */
    data: XOR<genreCreateInput, genreUncheckedCreateInput>
  }

  /**
   * genre createMany
   */
  export type genreCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many genres.
     */
    data: genreCreateManyInput | genreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * genre createManyAndReturn
   */
  export type genreCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genre
     */
    select?: genreSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the genre
     */
    omit?: genreOmit<ExtArgs> | null
    /**
     * The data used to create many genres.
     */
    data: genreCreateManyInput | genreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * genre update
   */
  export type genreUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genre
     */
    select?: genreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the genre
     */
    omit?: genreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: genreInclude<ExtArgs> | null
    /**
     * The data needed to update a genre.
     */
    data: XOR<genreUpdateInput, genreUncheckedUpdateInput>
    /**
     * Choose, which genre to update.
     */
    where: genreWhereUniqueInput
  }

  /**
   * genre updateMany
   */
  export type genreUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update genres.
     */
    data: XOR<genreUpdateManyMutationInput, genreUncheckedUpdateManyInput>
    /**
     * Filter which genres to update
     */
    where?: genreWhereInput
    /**
     * Limit how many genres to update.
     */
    limit?: number
  }

  /**
   * genre updateManyAndReturn
   */
  export type genreUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genre
     */
    select?: genreSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the genre
     */
    omit?: genreOmit<ExtArgs> | null
    /**
     * The data used to update genres.
     */
    data: XOR<genreUpdateManyMutationInput, genreUncheckedUpdateManyInput>
    /**
     * Filter which genres to update
     */
    where?: genreWhereInput
    /**
     * Limit how many genres to update.
     */
    limit?: number
  }

  /**
   * genre upsert
   */
  export type genreUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genre
     */
    select?: genreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the genre
     */
    omit?: genreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: genreInclude<ExtArgs> | null
    /**
     * The filter to search for the genre to update in case it exists.
     */
    where: genreWhereUniqueInput
    /**
     * In case the genre found by the `where` argument doesn't exist, create a new genre with this data.
     */
    create: XOR<genreCreateInput, genreUncheckedCreateInput>
    /**
     * In case the genre was found with the provided `where` argument, update it with this data.
     */
    update: XOR<genreUpdateInput, genreUncheckedUpdateInput>
  }

  /**
   * genre delete
   */
  export type genreDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genre
     */
    select?: genreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the genre
     */
    omit?: genreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: genreInclude<ExtArgs> | null
    /**
     * Filter which genre to delete.
     */
    where: genreWhereUniqueInput
  }

  /**
   * genre deleteMany
   */
  export type genreDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which genres to delete
     */
    where?: genreWhereInput
    /**
     * Limit how many genres to delete.
     */
    limit?: number
  }

  /**
   * genre.bookgenre
   */
  export type genre$bookgenreArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookgenre
     */
    select?: bookgenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookgenre
     */
    omit?: bookgenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookgenreInclude<ExtArgs> | null
    where?: bookgenreWhereInput
    orderBy?: bookgenreOrderByWithRelationInput | bookgenreOrderByWithRelationInput[]
    cursor?: bookgenreWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookgenreScalarFieldEnum | BookgenreScalarFieldEnum[]
  }

  /**
   * genre without action
   */
  export type genreDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genre
     */
    select?: genreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the genre
     */
    omit?: genreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: genreInclude<ExtArgs> | null
  }


  /**
   * Model loan
   */

  export type AggregateLoan = {
    _count: LoanCountAggregateOutputType | null
    _avg: LoanAvgAggregateOutputType | null
    _sum: LoanSumAggregateOutputType | null
    _min: LoanMinAggregateOutputType | null
    _max: LoanMaxAggregateOutputType | null
  }

  export type LoanAvgAggregateOutputType = {
    loan_id: number | null
    book_id: number | null
    member_id: number | null
    staff_id: number | null
  }

  export type LoanSumAggregateOutputType = {
    loan_id: number | null
    book_id: number | null
    member_id: number | null
    staff_id: number | null
  }

  export type LoanMinAggregateOutputType = {
    loan_id: number | null
    book_id: number | null
    member_id: number | null
    staff_id: number | null
    loandate: Date | null
    duedate: Date | null
    returndate: Date | null
  }

  export type LoanMaxAggregateOutputType = {
    loan_id: number | null
    book_id: number | null
    member_id: number | null
    staff_id: number | null
    loandate: Date | null
    duedate: Date | null
    returndate: Date | null
  }

  export type LoanCountAggregateOutputType = {
    loan_id: number
    book_id: number
    member_id: number
    staff_id: number
    loandate: number
    duedate: number
    returndate: number
    _all: number
  }


  export type LoanAvgAggregateInputType = {
    loan_id?: true
    book_id?: true
    member_id?: true
    staff_id?: true
  }

  export type LoanSumAggregateInputType = {
    loan_id?: true
    book_id?: true
    member_id?: true
    staff_id?: true
  }

  export type LoanMinAggregateInputType = {
    loan_id?: true
    book_id?: true
    member_id?: true
    staff_id?: true
    loandate?: true
    duedate?: true
    returndate?: true
  }

  export type LoanMaxAggregateInputType = {
    loan_id?: true
    book_id?: true
    member_id?: true
    staff_id?: true
    loandate?: true
    duedate?: true
    returndate?: true
  }

  export type LoanCountAggregateInputType = {
    loan_id?: true
    book_id?: true
    member_id?: true
    staff_id?: true
    loandate?: true
    duedate?: true
    returndate?: true
    _all?: true
  }

  export type LoanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which loan to aggregate.
     */
    where?: loanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of loans to fetch.
     */
    orderBy?: loanOrderByWithRelationInput | loanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: loanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` loans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` loans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned loans
    **/
    _count?: true | LoanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LoanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LoanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LoanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LoanMaxAggregateInputType
  }

  export type GetLoanAggregateType<T extends LoanAggregateArgs> = {
        [P in keyof T & keyof AggregateLoan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLoan[P]>
      : GetScalarType<T[P], AggregateLoan[P]>
  }




  export type loanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: loanWhereInput
    orderBy?: loanOrderByWithAggregationInput | loanOrderByWithAggregationInput[]
    by: LoanScalarFieldEnum[] | LoanScalarFieldEnum
    having?: loanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LoanCountAggregateInputType | true
    _avg?: LoanAvgAggregateInputType
    _sum?: LoanSumAggregateInputType
    _min?: LoanMinAggregateInputType
    _max?: LoanMaxAggregateInputType
  }

  export type LoanGroupByOutputType = {
    loan_id: number
    book_id: number
    member_id: number
    staff_id: number
    loandate: Date
    duedate: Date
    returndate: Date | null
    _count: LoanCountAggregateOutputType | null
    _avg: LoanAvgAggregateOutputType | null
    _sum: LoanSumAggregateOutputType | null
    _min: LoanMinAggregateOutputType | null
    _max: LoanMaxAggregateOutputType | null
  }

  type GetLoanGroupByPayload<T extends loanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LoanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LoanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LoanGroupByOutputType[P]>
            : GetScalarType<T[P], LoanGroupByOutputType[P]>
        }
      >
    >


  export type loanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    loan_id?: boolean
    book_id?: boolean
    member_id?: boolean
    staff_id?: boolean
    loandate?: boolean
    duedate?: boolean
    returndate?: boolean
    fine?: boolean | loan$fineArgs<ExtArgs>
    book?: boolean | bookDefaultArgs<ExtArgs>
    member?: boolean | memberDefaultArgs<ExtArgs>
    staff?: boolean | staffDefaultArgs<ExtArgs>
    _count?: boolean | LoanCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["loan"]>

  export type loanSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    loan_id?: boolean
    book_id?: boolean
    member_id?: boolean
    staff_id?: boolean
    loandate?: boolean
    duedate?: boolean
    returndate?: boolean
    book?: boolean | bookDefaultArgs<ExtArgs>
    member?: boolean | memberDefaultArgs<ExtArgs>
    staff?: boolean | staffDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["loan"]>

  export type loanSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    loan_id?: boolean
    book_id?: boolean
    member_id?: boolean
    staff_id?: boolean
    loandate?: boolean
    duedate?: boolean
    returndate?: boolean
    book?: boolean | bookDefaultArgs<ExtArgs>
    member?: boolean | memberDefaultArgs<ExtArgs>
    staff?: boolean | staffDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["loan"]>

  export type loanSelectScalar = {
    loan_id?: boolean
    book_id?: boolean
    member_id?: boolean
    staff_id?: boolean
    loandate?: boolean
    duedate?: boolean
    returndate?: boolean
  }

  export type loanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"loan_id" | "book_id" | "member_id" | "staff_id" | "loandate" | "duedate" | "returndate", ExtArgs["result"]["loan"]>
  export type loanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fine?: boolean | loan$fineArgs<ExtArgs>
    book?: boolean | bookDefaultArgs<ExtArgs>
    member?: boolean | memberDefaultArgs<ExtArgs>
    staff?: boolean | staffDefaultArgs<ExtArgs>
    _count?: boolean | LoanCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type loanIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book?: boolean | bookDefaultArgs<ExtArgs>
    member?: boolean | memberDefaultArgs<ExtArgs>
    staff?: boolean | staffDefaultArgs<ExtArgs>
  }
  export type loanIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book?: boolean | bookDefaultArgs<ExtArgs>
    member?: boolean | memberDefaultArgs<ExtArgs>
    staff?: boolean | staffDefaultArgs<ExtArgs>
  }

  export type $loanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "loan"
    objects: {
      fine: Prisma.$finePayload<ExtArgs>[]
      book: Prisma.$bookPayload<ExtArgs>
      member: Prisma.$memberPayload<ExtArgs>
      staff: Prisma.$staffPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      loan_id: number
      book_id: number
      member_id: number
      staff_id: number
      loandate: Date
      duedate: Date
      returndate: Date | null
    }, ExtArgs["result"]["loan"]>
    composites: {}
  }

  type loanGetPayload<S extends boolean | null | undefined | loanDefaultArgs> = $Result.GetResult<Prisma.$loanPayload, S>

  type loanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<loanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LoanCountAggregateInputType | true
    }

  export interface loanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['loan'], meta: { name: 'loan' } }
    /**
     * Find zero or one Loan that matches the filter.
     * @param {loanFindUniqueArgs} args - Arguments to find a Loan
     * @example
     * // Get one Loan
     * const loan = await prisma.loan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends loanFindUniqueArgs>(args: SelectSubset<T, loanFindUniqueArgs<ExtArgs>>): Prisma__loanClient<$Result.GetResult<Prisma.$loanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Loan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {loanFindUniqueOrThrowArgs} args - Arguments to find a Loan
     * @example
     * // Get one Loan
     * const loan = await prisma.loan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends loanFindUniqueOrThrowArgs>(args: SelectSubset<T, loanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__loanClient<$Result.GetResult<Prisma.$loanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Loan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {loanFindFirstArgs} args - Arguments to find a Loan
     * @example
     * // Get one Loan
     * const loan = await prisma.loan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends loanFindFirstArgs>(args?: SelectSubset<T, loanFindFirstArgs<ExtArgs>>): Prisma__loanClient<$Result.GetResult<Prisma.$loanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Loan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {loanFindFirstOrThrowArgs} args - Arguments to find a Loan
     * @example
     * // Get one Loan
     * const loan = await prisma.loan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends loanFindFirstOrThrowArgs>(args?: SelectSubset<T, loanFindFirstOrThrowArgs<ExtArgs>>): Prisma__loanClient<$Result.GetResult<Prisma.$loanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Loans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {loanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Loans
     * const loans = await prisma.loan.findMany()
     * 
     * // Get first 10 Loans
     * const loans = await prisma.loan.findMany({ take: 10 })
     * 
     * // Only select the `loan_id`
     * const loanWithLoan_idOnly = await prisma.loan.findMany({ select: { loan_id: true } })
     * 
     */
    findMany<T extends loanFindManyArgs>(args?: SelectSubset<T, loanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$loanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Loan.
     * @param {loanCreateArgs} args - Arguments to create a Loan.
     * @example
     * // Create one Loan
     * const Loan = await prisma.loan.create({
     *   data: {
     *     // ... data to create a Loan
     *   }
     * })
     * 
     */
    create<T extends loanCreateArgs>(args: SelectSubset<T, loanCreateArgs<ExtArgs>>): Prisma__loanClient<$Result.GetResult<Prisma.$loanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Loans.
     * @param {loanCreateManyArgs} args - Arguments to create many Loans.
     * @example
     * // Create many Loans
     * const loan = await prisma.loan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends loanCreateManyArgs>(args?: SelectSubset<T, loanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Loans and returns the data saved in the database.
     * @param {loanCreateManyAndReturnArgs} args - Arguments to create many Loans.
     * @example
     * // Create many Loans
     * const loan = await prisma.loan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Loans and only return the `loan_id`
     * const loanWithLoan_idOnly = await prisma.loan.createManyAndReturn({
     *   select: { loan_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends loanCreateManyAndReturnArgs>(args?: SelectSubset<T, loanCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$loanPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Loan.
     * @param {loanDeleteArgs} args - Arguments to delete one Loan.
     * @example
     * // Delete one Loan
     * const Loan = await prisma.loan.delete({
     *   where: {
     *     // ... filter to delete one Loan
     *   }
     * })
     * 
     */
    delete<T extends loanDeleteArgs>(args: SelectSubset<T, loanDeleteArgs<ExtArgs>>): Prisma__loanClient<$Result.GetResult<Prisma.$loanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Loan.
     * @param {loanUpdateArgs} args - Arguments to update one Loan.
     * @example
     * // Update one Loan
     * const loan = await prisma.loan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends loanUpdateArgs>(args: SelectSubset<T, loanUpdateArgs<ExtArgs>>): Prisma__loanClient<$Result.GetResult<Prisma.$loanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Loans.
     * @param {loanDeleteManyArgs} args - Arguments to filter Loans to delete.
     * @example
     * // Delete a few Loans
     * const { count } = await prisma.loan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends loanDeleteManyArgs>(args?: SelectSubset<T, loanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Loans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {loanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Loans
     * const loan = await prisma.loan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends loanUpdateManyArgs>(args: SelectSubset<T, loanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Loans and returns the data updated in the database.
     * @param {loanUpdateManyAndReturnArgs} args - Arguments to update many Loans.
     * @example
     * // Update many Loans
     * const loan = await prisma.loan.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Loans and only return the `loan_id`
     * const loanWithLoan_idOnly = await prisma.loan.updateManyAndReturn({
     *   select: { loan_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends loanUpdateManyAndReturnArgs>(args: SelectSubset<T, loanUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$loanPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Loan.
     * @param {loanUpsertArgs} args - Arguments to update or create a Loan.
     * @example
     * // Update or create a Loan
     * const loan = await prisma.loan.upsert({
     *   create: {
     *     // ... data to create a Loan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Loan we want to update
     *   }
     * })
     */
    upsert<T extends loanUpsertArgs>(args: SelectSubset<T, loanUpsertArgs<ExtArgs>>): Prisma__loanClient<$Result.GetResult<Prisma.$loanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Loans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {loanCountArgs} args - Arguments to filter Loans to count.
     * @example
     * // Count the number of Loans
     * const count = await prisma.loan.count({
     *   where: {
     *     // ... the filter for the Loans we want to count
     *   }
     * })
    **/
    count<T extends loanCountArgs>(
      args?: Subset<T, loanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LoanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Loan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LoanAggregateArgs>(args: Subset<T, LoanAggregateArgs>): Prisma.PrismaPromise<GetLoanAggregateType<T>>

    /**
     * Group by Loan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {loanGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends loanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: loanGroupByArgs['orderBy'] }
        : { orderBy?: loanGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, loanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLoanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the loan model
   */
  readonly fields: loanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for loan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__loanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    fine<T extends loan$fineArgs<ExtArgs> = {}>(args?: Subset<T, loan$fineArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$finePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    book<T extends bookDefaultArgs<ExtArgs> = {}>(args?: Subset<T, bookDefaultArgs<ExtArgs>>): Prisma__bookClient<$Result.GetResult<Prisma.$bookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    member<T extends memberDefaultArgs<ExtArgs> = {}>(args?: Subset<T, memberDefaultArgs<ExtArgs>>): Prisma__memberClient<$Result.GetResult<Prisma.$memberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    staff<T extends staffDefaultArgs<ExtArgs> = {}>(args?: Subset<T, staffDefaultArgs<ExtArgs>>): Prisma__staffClient<$Result.GetResult<Prisma.$staffPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the loan model
   */
  interface loanFieldRefs {
    readonly loan_id: FieldRef<"loan", 'Int'>
    readonly book_id: FieldRef<"loan", 'Int'>
    readonly member_id: FieldRef<"loan", 'Int'>
    readonly staff_id: FieldRef<"loan", 'Int'>
    readonly loandate: FieldRef<"loan", 'DateTime'>
    readonly duedate: FieldRef<"loan", 'DateTime'>
    readonly returndate: FieldRef<"loan", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * loan findUnique
   */
  export type loanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loan
     */
    select?: loanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the loan
     */
    omit?: loanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: loanInclude<ExtArgs> | null
    /**
     * Filter, which loan to fetch.
     */
    where: loanWhereUniqueInput
  }

  /**
   * loan findUniqueOrThrow
   */
  export type loanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loan
     */
    select?: loanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the loan
     */
    omit?: loanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: loanInclude<ExtArgs> | null
    /**
     * Filter, which loan to fetch.
     */
    where: loanWhereUniqueInput
  }

  /**
   * loan findFirst
   */
  export type loanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loan
     */
    select?: loanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the loan
     */
    omit?: loanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: loanInclude<ExtArgs> | null
    /**
     * Filter, which loan to fetch.
     */
    where?: loanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of loans to fetch.
     */
    orderBy?: loanOrderByWithRelationInput | loanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for loans.
     */
    cursor?: loanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` loans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` loans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of loans.
     */
    distinct?: LoanScalarFieldEnum | LoanScalarFieldEnum[]
  }

  /**
   * loan findFirstOrThrow
   */
  export type loanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loan
     */
    select?: loanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the loan
     */
    omit?: loanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: loanInclude<ExtArgs> | null
    /**
     * Filter, which loan to fetch.
     */
    where?: loanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of loans to fetch.
     */
    orderBy?: loanOrderByWithRelationInput | loanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for loans.
     */
    cursor?: loanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` loans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` loans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of loans.
     */
    distinct?: LoanScalarFieldEnum | LoanScalarFieldEnum[]
  }

  /**
   * loan findMany
   */
  export type loanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loan
     */
    select?: loanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the loan
     */
    omit?: loanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: loanInclude<ExtArgs> | null
    /**
     * Filter, which loans to fetch.
     */
    where?: loanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of loans to fetch.
     */
    orderBy?: loanOrderByWithRelationInput | loanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing loans.
     */
    cursor?: loanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` loans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` loans.
     */
    skip?: number
    distinct?: LoanScalarFieldEnum | LoanScalarFieldEnum[]
  }

  /**
   * loan create
   */
  export type loanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loan
     */
    select?: loanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the loan
     */
    omit?: loanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: loanInclude<ExtArgs> | null
    /**
     * The data needed to create a loan.
     */
    data: XOR<loanCreateInput, loanUncheckedCreateInput>
  }

  /**
   * loan createMany
   */
  export type loanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many loans.
     */
    data: loanCreateManyInput | loanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * loan createManyAndReturn
   */
  export type loanCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loan
     */
    select?: loanSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the loan
     */
    omit?: loanOmit<ExtArgs> | null
    /**
     * The data used to create many loans.
     */
    data: loanCreateManyInput | loanCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: loanIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * loan update
   */
  export type loanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loan
     */
    select?: loanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the loan
     */
    omit?: loanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: loanInclude<ExtArgs> | null
    /**
     * The data needed to update a loan.
     */
    data: XOR<loanUpdateInput, loanUncheckedUpdateInput>
    /**
     * Choose, which loan to update.
     */
    where: loanWhereUniqueInput
  }

  /**
   * loan updateMany
   */
  export type loanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update loans.
     */
    data: XOR<loanUpdateManyMutationInput, loanUncheckedUpdateManyInput>
    /**
     * Filter which loans to update
     */
    where?: loanWhereInput
    /**
     * Limit how many loans to update.
     */
    limit?: number
  }

  /**
   * loan updateManyAndReturn
   */
  export type loanUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loan
     */
    select?: loanSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the loan
     */
    omit?: loanOmit<ExtArgs> | null
    /**
     * The data used to update loans.
     */
    data: XOR<loanUpdateManyMutationInput, loanUncheckedUpdateManyInput>
    /**
     * Filter which loans to update
     */
    where?: loanWhereInput
    /**
     * Limit how many loans to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: loanIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * loan upsert
   */
  export type loanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loan
     */
    select?: loanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the loan
     */
    omit?: loanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: loanInclude<ExtArgs> | null
    /**
     * The filter to search for the loan to update in case it exists.
     */
    where: loanWhereUniqueInput
    /**
     * In case the loan found by the `where` argument doesn't exist, create a new loan with this data.
     */
    create: XOR<loanCreateInput, loanUncheckedCreateInput>
    /**
     * In case the loan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<loanUpdateInput, loanUncheckedUpdateInput>
  }

  /**
   * loan delete
   */
  export type loanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loan
     */
    select?: loanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the loan
     */
    omit?: loanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: loanInclude<ExtArgs> | null
    /**
     * Filter which loan to delete.
     */
    where: loanWhereUniqueInput
  }

  /**
   * loan deleteMany
   */
  export type loanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which loans to delete
     */
    where?: loanWhereInput
    /**
     * Limit how many loans to delete.
     */
    limit?: number
  }

  /**
   * loan.fine
   */
  export type loan$fineArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fine
     */
    select?: fineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fine
     */
    omit?: fineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fineInclude<ExtArgs> | null
    where?: fineWhereInput
    orderBy?: fineOrderByWithRelationInput | fineOrderByWithRelationInput[]
    cursor?: fineWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FineScalarFieldEnum | FineScalarFieldEnum[]
  }

  /**
   * loan without action
   */
  export type loanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loan
     */
    select?: loanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the loan
     */
    omit?: loanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: loanInclude<ExtArgs> | null
  }


  /**
   * Model member
   */

  export type AggregateMember = {
    _count: MemberCountAggregateOutputType | null
    _avg: MemberAvgAggregateOutputType | null
    _sum: MemberSumAggregateOutputType | null
    _min: MemberMinAggregateOutputType | null
    _max: MemberMaxAggregateOutputType | null
  }

  export type MemberAvgAggregateOutputType = {
    member_id: number | null
    person_id: number | null
  }

  export type MemberSumAggregateOutputType = {
    member_id: number | null
    person_id: number | null
  }

  export type MemberMinAggregateOutputType = {
    member_id: number | null
    membershipdate: Date | null
    createdat: Date | null
    updatedat: Date | null
    person_id: number | null
  }

  export type MemberMaxAggregateOutputType = {
    member_id: number | null
    membershipdate: Date | null
    createdat: Date | null
    updatedat: Date | null
    person_id: number | null
  }

  export type MemberCountAggregateOutputType = {
    member_id: number
    membershipdate: number
    createdat: number
    updatedat: number
    person_id: number
    _all: number
  }


  export type MemberAvgAggregateInputType = {
    member_id?: true
    person_id?: true
  }

  export type MemberSumAggregateInputType = {
    member_id?: true
    person_id?: true
  }

  export type MemberMinAggregateInputType = {
    member_id?: true
    membershipdate?: true
    createdat?: true
    updatedat?: true
    person_id?: true
  }

  export type MemberMaxAggregateInputType = {
    member_id?: true
    membershipdate?: true
    createdat?: true
    updatedat?: true
    person_id?: true
  }

  export type MemberCountAggregateInputType = {
    member_id?: true
    membershipdate?: true
    createdat?: true
    updatedat?: true
    person_id?: true
    _all?: true
  }

  export type MemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which member to aggregate.
     */
    where?: memberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of members to fetch.
     */
    orderBy?: memberOrderByWithRelationInput | memberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: memberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned members
    **/
    _count?: true | MemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MemberAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MemberSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MemberMaxAggregateInputType
  }

  export type GetMemberAggregateType<T extends MemberAggregateArgs> = {
        [P in keyof T & keyof AggregateMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMember[P]>
      : GetScalarType<T[P], AggregateMember[P]>
  }




  export type memberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: memberWhereInput
    orderBy?: memberOrderByWithAggregationInput | memberOrderByWithAggregationInput[]
    by: MemberScalarFieldEnum[] | MemberScalarFieldEnum
    having?: memberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MemberCountAggregateInputType | true
    _avg?: MemberAvgAggregateInputType
    _sum?: MemberSumAggregateInputType
    _min?: MemberMinAggregateInputType
    _max?: MemberMaxAggregateInputType
  }

  export type MemberGroupByOutputType = {
    member_id: number
    membershipdate: Date
    createdat: Date | null
    updatedat: Date | null
    person_id: number
    _count: MemberCountAggregateOutputType | null
    _avg: MemberAvgAggregateOutputType | null
    _sum: MemberSumAggregateOutputType | null
    _min: MemberMinAggregateOutputType | null
    _max: MemberMaxAggregateOutputType | null
  }

  type GetMemberGroupByPayload<T extends memberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MemberGroupByOutputType[P]>
            : GetScalarType<T[P], MemberGroupByOutputType[P]>
        }
      >
    >


  export type memberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    member_id?: boolean
    membershipdate?: boolean
    createdat?: boolean
    updatedat?: boolean
    person_id?: boolean
    fine?: boolean | member$fineArgs<ExtArgs>
    loan?: boolean | member$loanArgs<ExtArgs>
    person?: boolean | personDefaultArgs<ExtArgs>
    _count?: boolean | MemberCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["member"]>

  export type memberSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    member_id?: boolean
    membershipdate?: boolean
    createdat?: boolean
    updatedat?: boolean
    person_id?: boolean
    person?: boolean | personDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["member"]>

  export type memberSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    member_id?: boolean
    membershipdate?: boolean
    createdat?: boolean
    updatedat?: boolean
    person_id?: boolean
    person?: boolean | personDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["member"]>

  export type memberSelectScalar = {
    member_id?: boolean
    membershipdate?: boolean
    createdat?: boolean
    updatedat?: boolean
    person_id?: boolean
  }

  export type memberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"member_id" | "membershipdate" | "createdat" | "updatedat" | "person_id", ExtArgs["result"]["member"]>
  export type memberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fine?: boolean | member$fineArgs<ExtArgs>
    loan?: boolean | member$loanArgs<ExtArgs>
    person?: boolean | personDefaultArgs<ExtArgs>
    _count?: boolean | MemberCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type memberIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    person?: boolean | personDefaultArgs<ExtArgs>
  }
  export type memberIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    person?: boolean | personDefaultArgs<ExtArgs>
  }

  export type $memberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "member"
    objects: {
      fine: Prisma.$finePayload<ExtArgs>[]
      loan: Prisma.$loanPayload<ExtArgs>[]
      person: Prisma.$personPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      member_id: number
      membershipdate: Date
      createdat: Date | null
      updatedat: Date | null
      person_id: number
    }, ExtArgs["result"]["member"]>
    composites: {}
  }

  type memberGetPayload<S extends boolean | null | undefined | memberDefaultArgs> = $Result.GetResult<Prisma.$memberPayload, S>

  type memberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<memberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MemberCountAggregateInputType | true
    }

  export interface memberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['member'], meta: { name: 'member' } }
    /**
     * Find zero or one Member that matches the filter.
     * @param {memberFindUniqueArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends memberFindUniqueArgs>(args: SelectSubset<T, memberFindUniqueArgs<ExtArgs>>): Prisma__memberClient<$Result.GetResult<Prisma.$memberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Member that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {memberFindUniqueOrThrowArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends memberFindUniqueOrThrowArgs>(args: SelectSubset<T, memberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__memberClient<$Result.GetResult<Prisma.$memberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Member that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {memberFindFirstArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends memberFindFirstArgs>(args?: SelectSubset<T, memberFindFirstArgs<ExtArgs>>): Prisma__memberClient<$Result.GetResult<Prisma.$memberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Member that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {memberFindFirstOrThrowArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends memberFindFirstOrThrowArgs>(args?: SelectSubset<T, memberFindFirstOrThrowArgs<ExtArgs>>): Prisma__memberClient<$Result.GetResult<Prisma.$memberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Members that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {memberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Members
     * const members = await prisma.member.findMany()
     * 
     * // Get first 10 Members
     * const members = await prisma.member.findMany({ take: 10 })
     * 
     * // Only select the `member_id`
     * const memberWithMember_idOnly = await prisma.member.findMany({ select: { member_id: true } })
     * 
     */
    findMany<T extends memberFindManyArgs>(args?: SelectSubset<T, memberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$memberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Member.
     * @param {memberCreateArgs} args - Arguments to create a Member.
     * @example
     * // Create one Member
     * const Member = await prisma.member.create({
     *   data: {
     *     // ... data to create a Member
     *   }
     * })
     * 
     */
    create<T extends memberCreateArgs>(args: SelectSubset<T, memberCreateArgs<ExtArgs>>): Prisma__memberClient<$Result.GetResult<Prisma.$memberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Members.
     * @param {memberCreateManyArgs} args - Arguments to create many Members.
     * @example
     * // Create many Members
     * const member = await prisma.member.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends memberCreateManyArgs>(args?: SelectSubset<T, memberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Members and returns the data saved in the database.
     * @param {memberCreateManyAndReturnArgs} args - Arguments to create many Members.
     * @example
     * // Create many Members
     * const member = await prisma.member.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Members and only return the `member_id`
     * const memberWithMember_idOnly = await prisma.member.createManyAndReturn({
     *   select: { member_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends memberCreateManyAndReturnArgs>(args?: SelectSubset<T, memberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$memberPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Member.
     * @param {memberDeleteArgs} args - Arguments to delete one Member.
     * @example
     * // Delete one Member
     * const Member = await prisma.member.delete({
     *   where: {
     *     // ... filter to delete one Member
     *   }
     * })
     * 
     */
    delete<T extends memberDeleteArgs>(args: SelectSubset<T, memberDeleteArgs<ExtArgs>>): Prisma__memberClient<$Result.GetResult<Prisma.$memberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Member.
     * @param {memberUpdateArgs} args - Arguments to update one Member.
     * @example
     * // Update one Member
     * const member = await prisma.member.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends memberUpdateArgs>(args: SelectSubset<T, memberUpdateArgs<ExtArgs>>): Prisma__memberClient<$Result.GetResult<Prisma.$memberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Members.
     * @param {memberDeleteManyArgs} args - Arguments to filter Members to delete.
     * @example
     * // Delete a few Members
     * const { count } = await prisma.member.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends memberDeleteManyArgs>(args?: SelectSubset<T, memberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {memberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Members
     * const member = await prisma.member.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends memberUpdateManyArgs>(args: SelectSubset<T, memberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Members and returns the data updated in the database.
     * @param {memberUpdateManyAndReturnArgs} args - Arguments to update many Members.
     * @example
     * // Update many Members
     * const member = await prisma.member.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Members and only return the `member_id`
     * const memberWithMember_idOnly = await prisma.member.updateManyAndReturn({
     *   select: { member_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends memberUpdateManyAndReturnArgs>(args: SelectSubset<T, memberUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$memberPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Member.
     * @param {memberUpsertArgs} args - Arguments to update or create a Member.
     * @example
     * // Update or create a Member
     * const member = await prisma.member.upsert({
     *   create: {
     *     // ... data to create a Member
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Member we want to update
     *   }
     * })
     */
    upsert<T extends memberUpsertArgs>(args: SelectSubset<T, memberUpsertArgs<ExtArgs>>): Prisma__memberClient<$Result.GetResult<Prisma.$memberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {memberCountArgs} args - Arguments to filter Members to count.
     * @example
     * // Count the number of Members
     * const count = await prisma.member.count({
     *   where: {
     *     // ... the filter for the Members we want to count
     *   }
     * })
    **/
    count<T extends memberCountArgs>(
      args?: Subset<T, memberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Member.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MemberAggregateArgs>(args: Subset<T, MemberAggregateArgs>): Prisma.PrismaPromise<GetMemberAggregateType<T>>

    /**
     * Group by Member.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {memberGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends memberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: memberGroupByArgs['orderBy'] }
        : { orderBy?: memberGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, memberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the member model
   */
  readonly fields: memberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for member.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__memberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    fine<T extends member$fineArgs<ExtArgs> = {}>(args?: Subset<T, member$fineArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$finePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    loan<T extends member$loanArgs<ExtArgs> = {}>(args?: Subset<T, member$loanArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$loanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    person<T extends personDefaultArgs<ExtArgs> = {}>(args?: Subset<T, personDefaultArgs<ExtArgs>>): Prisma__personClient<$Result.GetResult<Prisma.$personPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the member model
   */
  interface memberFieldRefs {
    readonly member_id: FieldRef<"member", 'Int'>
    readonly membershipdate: FieldRef<"member", 'DateTime'>
    readonly createdat: FieldRef<"member", 'DateTime'>
    readonly updatedat: FieldRef<"member", 'DateTime'>
    readonly person_id: FieldRef<"member", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * member findUnique
   */
  export type memberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the member
     */
    select?: memberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the member
     */
    omit?: memberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: memberInclude<ExtArgs> | null
    /**
     * Filter, which member to fetch.
     */
    where: memberWhereUniqueInput
  }

  /**
   * member findUniqueOrThrow
   */
  export type memberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the member
     */
    select?: memberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the member
     */
    omit?: memberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: memberInclude<ExtArgs> | null
    /**
     * Filter, which member to fetch.
     */
    where: memberWhereUniqueInput
  }

  /**
   * member findFirst
   */
  export type memberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the member
     */
    select?: memberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the member
     */
    omit?: memberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: memberInclude<ExtArgs> | null
    /**
     * Filter, which member to fetch.
     */
    where?: memberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of members to fetch.
     */
    orderBy?: memberOrderByWithRelationInput | memberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for members.
     */
    cursor?: memberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of members.
     */
    distinct?: MemberScalarFieldEnum | MemberScalarFieldEnum[]
  }

  /**
   * member findFirstOrThrow
   */
  export type memberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the member
     */
    select?: memberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the member
     */
    omit?: memberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: memberInclude<ExtArgs> | null
    /**
     * Filter, which member to fetch.
     */
    where?: memberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of members to fetch.
     */
    orderBy?: memberOrderByWithRelationInput | memberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for members.
     */
    cursor?: memberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of members.
     */
    distinct?: MemberScalarFieldEnum | MemberScalarFieldEnum[]
  }

  /**
   * member findMany
   */
  export type memberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the member
     */
    select?: memberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the member
     */
    omit?: memberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: memberInclude<ExtArgs> | null
    /**
     * Filter, which members to fetch.
     */
    where?: memberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of members to fetch.
     */
    orderBy?: memberOrderByWithRelationInput | memberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing members.
     */
    cursor?: memberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` members.
     */
    skip?: number
    distinct?: MemberScalarFieldEnum | MemberScalarFieldEnum[]
  }

  /**
   * member create
   */
  export type memberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the member
     */
    select?: memberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the member
     */
    omit?: memberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: memberInclude<ExtArgs> | null
    /**
     * The data needed to create a member.
     */
    data: XOR<memberCreateInput, memberUncheckedCreateInput>
  }

  /**
   * member createMany
   */
  export type memberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many members.
     */
    data: memberCreateManyInput | memberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * member createManyAndReturn
   */
  export type memberCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the member
     */
    select?: memberSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the member
     */
    omit?: memberOmit<ExtArgs> | null
    /**
     * The data used to create many members.
     */
    data: memberCreateManyInput | memberCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: memberIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * member update
   */
  export type memberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the member
     */
    select?: memberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the member
     */
    omit?: memberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: memberInclude<ExtArgs> | null
    /**
     * The data needed to update a member.
     */
    data: XOR<memberUpdateInput, memberUncheckedUpdateInput>
    /**
     * Choose, which member to update.
     */
    where: memberWhereUniqueInput
  }

  /**
   * member updateMany
   */
  export type memberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update members.
     */
    data: XOR<memberUpdateManyMutationInput, memberUncheckedUpdateManyInput>
    /**
     * Filter which members to update
     */
    where?: memberWhereInput
    /**
     * Limit how many members to update.
     */
    limit?: number
  }

  /**
   * member updateManyAndReturn
   */
  export type memberUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the member
     */
    select?: memberSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the member
     */
    omit?: memberOmit<ExtArgs> | null
    /**
     * The data used to update members.
     */
    data: XOR<memberUpdateManyMutationInput, memberUncheckedUpdateManyInput>
    /**
     * Filter which members to update
     */
    where?: memberWhereInput
    /**
     * Limit how many members to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: memberIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * member upsert
   */
  export type memberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the member
     */
    select?: memberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the member
     */
    omit?: memberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: memberInclude<ExtArgs> | null
    /**
     * The filter to search for the member to update in case it exists.
     */
    where: memberWhereUniqueInput
    /**
     * In case the member found by the `where` argument doesn't exist, create a new member with this data.
     */
    create: XOR<memberCreateInput, memberUncheckedCreateInput>
    /**
     * In case the member was found with the provided `where` argument, update it with this data.
     */
    update: XOR<memberUpdateInput, memberUncheckedUpdateInput>
  }

  /**
   * member delete
   */
  export type memberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the member
     */
    select?: memberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the member
     */
    omit?: memberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: memberInclude<ExtArgs> | null
    /**
     * Filter which member to delete.
     */
    where: memberWhereUniqueInput
  }

  /**
   * member deleteMany
   */
  export type memberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which members to delete
     */
    where?: memberWhereInput
    /**
     * Limit how many members to delete.
     */
    limit?: number
  }

  /**
   * member.fine
   */
  export type member$fineArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fine
     */
    select?: fineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fine
     */
    omit?: fineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fineInclude<ExtArgs> | null
    where?: fineWhereInput
    orderBy?: fineOrderByWithRelationInput | fineOrderByWithRelationInput[]
    cursor?: fineWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FineScalarFieldEnum | FineScalarFieldEnum[]
  }

  /**
   * member.loan
   */
  export type member$loanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loan
     */
    select?: loanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the loan
     */
    omit?: loanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: loanInclude<ExtArgs> | null
    where?: loanWhereInput
    orderBy?: loanOrderByWithRelationInput | loanOrderByWithRelationInput[]
    cursor?: loanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LoanScalarFieldEnum | LoanScalarFieldEnum[]
  }

  /**
   * member without action
   */
  export type memberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the member
     */
    select?: memberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the member
     */
    omit?: memberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: memberInclude<ExtArgs> | null
  }


  /**
   * Model staff
   */

  export type AggregateStaff = {
    _count: StaffCountAggregateOutputType | null
    _avg: StaffAvgAggregateOutputType | null
    _sum: StaffSumAggregateOutputType | null
    _min: StaffMinAggregateOutputType | null
    _max: StaffMaxAggregateOutputType | null
  }

  export type StaffAvgAggregateOutputType = {
    staff_id: number | null
    person_id: number | null
  }

  export type StaffSumAggregateOutputType = {
    staff_id: number | null
    person_id: number | null
  }

  export type StaffMinAggregateOutputType = {
    staff_id: number | null
    position: string | null
    education: string | null
    createdat: Date | null
    updatedat: Date | null
    person_id: number | null
  }

  export type StaffMaxAggregateOutputType = {
    staff_id: number | null
    position: string | null
    education: string | null
    createdat: Date | null
    updatedat: Date | null
    person_id: number | null
  }

  export type StaffCountAggregateOutputType = {
    staff_id: number
    position: number
    education: number
    createdat: number
    updatedat: number
    person_id: number
    _all: number
  }


  export type StaffAvgAggregateInputType = {
    staff_id?: true
    person_id?: true
  }

  export type StaffSumAggregateInputType = {
    staff_id?: true
    person_id?: true
  }

  export type StaffMinAggregateInputType = {
    staff_id?: true
    position?: true
    education?: true
    createdat?: true
    updatedat?: true
    person_id?: true
  }

  export type StaffMaxAggregateInputType = {
    staff_id?: true
    position?: true
    education?: true
    createdat?: true
    updatedat?: true
    person_id?: true
  }

  export type StaffCountAggregateInputType = {
    staff_id?: true
    position?: true
    education?: true
    createdat?: true
    updatedat?: true
    person_id?: true
    _all?: true
  }

  export type StaffAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which staff to aggregate.
     */
    where?: staffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of staff to fetch.
     */
    orderBy?: staffOrderByWithRelationInput | staffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: staffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` staff from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` staff.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned staff
    **/
    _count?: true | StaffCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StaffAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StaffSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StaffMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StaffMaxAggregateInputType
  }

  export type GetStaffAggregateType<T extends StaffAggregateArgs> = {
        [P in keyof T & keyof AggregateStaff]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStaff[P]>
      : GetScalarType<T[P], AggregateStaff[P]>
  }




  export type staffGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: staffWhereInput
    orderBy?: staffOrderByWithAggregationInput | staffOrderByWithAggregationInput[]
    by: StaffScalarFieldEnum[] | StaffScalarFieldEnum
    having?: staffScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StaffCountAggregateInputType | true
    _avg?: StaffAvgAggregateInputType
    _sum?: StaffSumAggregateInputType
    _min?: StaffMinAggregateInputType
    _max?: StaffMaxAggregateInputType
  }

  export type StaffGroupByOutputType = {
    staff_id: number
    position: string
    education: string
    createdat: Date | null
    updatedat: Date | null
    person_id: number
    _count: StaffCountAggregateOutputType | null
    _avg: StaffAvgAggregateOutputType | null
    _sum: StaffSumAggregateOutputType | null
    _min: StaffMinAggregateOutputType | null
    _max: StaffMaxAggregateOutputType | null
  }

  type GetStaffGroupByPayload<T extends staffGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StaffGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StaffGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StaffGroupByOutputType[P]>
            : GetScalarType<T[P], StaffGroupByOutputType[P]>
        }
      >
    >


  export type staffSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    staff_id?: boolean
    position?: boolean
    education?: boolean
    createdat?: boolean
    updatedat?: boolean
    person_id?: boolean
    loan?: boolean | staff$loanArgs<ExtArgs>
    person?: boolean | personDefaultArgs<ExtArgs>
    _count?: boolean | StaffCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["staff"]>

  export type staffSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    staff_id?: boolean
    position?: boolean
    education?: boolean
    createdat?: boolean
    updatedat?: boolean
    person_id?: boolean
    person?: boolean | personDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["staff"]>

  export type staffSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    staff_id?: boolean
    position?: boolean
    education?: boolean
    createdat?: boolean
    updatedat?: boolean
    person_id?: boolean
    person?: boolean | personDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["staff"]>

  export type staffSelectScalar = {
    staff_id?: boolean
    position?: boolean
    education?: boolean
    createdat?: boolean
    updatedat?: boolean
    person_id?: boolean
  }

  export type staffOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"staff_id" | "position" | "education" | "createdat" | "updatedat" | "person_id", ExtArgs["result"]["staff"]>
  export type staffInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    loan?: boolean | staff$loanArgs<ExtArgs>
    person?: boolean | personDefaultArgs<ExtArgs>
    _count?: boolean | StaffCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type staffIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    person?: boolean | personDefaultArgs<ExtArgs>
  }
  export type staffIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    person?: boolean | personDefaultArgs<ExtArgs>
  }

  export type $staffPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "staff"
    objects: {
      loan: Prisma.$loanPayload<ExtArgs>[]
      person: Prisma.$personPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      staff_id: number
      position: string
      education: string
      createdat: Date | null
      updatedat: Date | null
      person_id: number
    }, ExtArgs["result"]["staff"]>
    composites: {}
  }

  type staffGetPayload<S extends boolean | null | undefined | staffDefaultArgs> = $Result.GetResult<Prisma.$staffPayload, S>

  type staffCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<staffFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StaffCountAggregateInputType | true
    }

  export interface staffDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['staff'], meta: { name: 'staff' } }
    /**
     * Find zero or one Staff that matches the filter.
     * @param {staffFindUniqueArgs} args - Arguments to find a Staff
     * @example
     * // Get one Staff
     * const staff = await prisma.staff.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends staffFindUniqueArgs>(args: SelectSubset<T, staffFindUniqueArgs<ExtArgs>>): Prisma__staffClient<$Result.GetResult<Prisma.$staffPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Staff that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {staffFindUniqueOrThrowArgs} args - Arguments to find a Staff
     * @example
     * // Get one Staff
     * const staff = await prisma.staff.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends staffFindUniqueOrThrowArgs>(args: SelectSubset<T, staffFindUniqueOrThrowArgs<ExtArgs>>): Prisma__staffClient<$Result.GetResult<Prisma.$staffPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Staff that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {staffFindFirstArgs} args - Arguments to find a Staff
     * @example
     * // Get one Staff
     * const staff = await prisma.staff.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends staffFindFirstArgs>(args?: SelectSubset<T, staffFindFirstArgs<ExtArgs>>): Prisma__staffClient<$Result.GetResult<Prisma.$staffPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Staff that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {staffFindFirstOrThrowArgs} args - Arguments to find a Staff
     * @example
     * // Get one Staff
     * const staff = await prisma.staff.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends staffFindFirstOrThrowArgs>(args?: SelectSubset<T, staffFindFirstOrThrowArgs<ExtArgs>>): Prisma__staffClient<$Result.GetResult<Prisma.$staffPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Staff that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {staffFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Staff
     * const staff = await prisma.staff.findMany()
     * 
     * // Get first 10 Staff
     * const staff = await prisma.staff.findMany({ take: 10 })
     * 
     * // Only select the `staff_id`
     * const staffWithStaff_idOnly = await prisma.staff.findMany({ select: { staff_id: true } })
     * 
     */
    findMany<T extends staffFindManyArgs>(args?: SelectSubset<T, staffFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$staffPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Staff.
     * @param {staffCreateArgs} args - Arguments to create a Staff.
     * @example
     * // Create one Staff
     * const Staff = await prisma.staff.create({
     *   data: {
     *     // ... data to create a Staff
     *   }
     * })
     * 
     */
    create<T extends staffCreateArgs>(args: SelectSubset<T, staffCreateArgs<ExtArgs>>): Prisma__staffClient<$Result.GetResult<Prisma.$staffPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Staff.
     * @param {staffCreateManyArgs} args - Arguments to create many Staff.
     * @example
     * // Create many Staff
     * const staff = await prisma.staff.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends staffCreateManyArgs>(args?: SelectSubset<T, staffCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Staff and returns the data saved in the database.
     * @param {staffCreateManyAndReturnArgs} args - Arguments to create many Staff.
     * @example
     * // Create many Staff
     * const staff = await prisma.staff.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Staff and only return the `staff_id`
     * const staffWithStaff_idOnly = await prisma.staff.createManyAndReturn({
     *   select: { staff_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends staffCreateManyAndReturnArgs>(args?: SelectSubset<T, staffCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$staffPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Staff.
     * @param {staffDeleteArgs} args - Arguments to delete one Staff.
     * @example
     * // Delete one Staff
     * const Staff = await prisma.staff.delete({
     *   where: {
     *     // ... filter to delete one Staff
     *   }
     * })
     * 
     */
    delete<T extends staffDeleteArgs>(args: SelectSubset<T, staffDeleteArgs<ExtArgs>>): Prisma__staffClient<$Result.GetResult<Prisma.$staffPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Staff.
     * @param {staffUpdateArgs} args - Arguments to update one Staff.
     * @example
     * // Update one Staff
     * const staff = await prisma.staff.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends staffUpdateArgs>(args: SelectSubset<T, staffUpdateArgs<ExtArgs>>): Prisma__staffClient<$Result.GetResult<Prisma.$staffPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Staff.
     * @param {staffDeleteManyArgs} args - Arguments to filter Staff to delete.
     * @example
     * // Delete a few Staff
     * const { count } = await prisma.staff.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends staffDeleteManyArgs>(args?: SelectSubset<T, staffDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Staff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {staffUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Staff
     * const staff = await prisma.staff.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends staffUpdateManyArgs>(args: SelectSubset<T, staffUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Staff and returns the data updated in the database.
     * @param {staffUpdateManyAndReturnArgs} args - Arguments to update many Staff.
     * @example
     * // Update many Staff
     * const staff = await prisma.staff.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Staff and only return the `staff_id`
     * const staffWithStaff_idOnly = await prisma.staff.updateManyAndReturn({
     *   select: { staff_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends staffUpdateManyAndReturnArgs>(args: SelectSubset<T, staffUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$staffPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Staff.
     * @param {staffUpsertArgs} args - Arguments to update or create a Staff.
     * @example
     * // Update or create a Staff
     * const staff = await prisma.staff.upsert({
     *   create: {
     *     // ... data to create a Staff
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Staff we want to update
     *   }
     * })
     */
    upsert<T extends staffUpsertArgs>(args: SelectSubset<T, staffUpsertArgs<ExtArgs>>): Prisma__staffClient<$Result.GetResult<Prisma.$staffPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Staff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {staffCountArgs} args - Arguments to filter Staff to count.
     * @example
     * // Count the number of Staff
     * const count = await prisma.staff.count({
     *   where: {
     *     // ... the filter for the Staff we want to count
     *   }
     * })
    **/
    count<T extends staffCountArgs>(
      args?: Subset<T, staffCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StaffCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Staff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StaffAggregateArgs>(args: Subset<T, StaffAggregateArgs>): Prisma.PrismaPromise<GetStaffAggregateType<T>>

    /**
     * Group by Staff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {staffGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends staffGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: staffGroupByArgs['orderBy'] }
        : { orderBy?: staffGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, staffGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStaffGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the staff model
   */
  readonly fields: staffFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for staff.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__staffClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    loan<T extends staff$loanArgs<ExtArgs> = {}>(args?: Subset<T, staff$loanArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$loanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    person<T extends personDefaultArgs<ExtArgs> = {}>(args?: Subset<T, personDefaultArgs<ExtArgs>>): Prisma__personClient<$Result.GetResult<Prisma.$personPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the staff model
   */
  interface staffFieldRefs {
    readonly staff_id: FieldRef<"staff", 'Int'>
    readonly position: FieldRef<"staff", 'String'>
    readonly education: FieldRef<"staff", 'String'>
    readonly createdat: FieldRef<"staff", 'DateTime'>
    readonly updatedat: FieldRef<"staff", 'DateTime'>
    readonly person_id: FieldRef<"staff", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * staff findUnique
   */
  export type staffFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staff
     */
    select?: staffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the staff
     */
    omit?: staffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: staffInclude<ExtArgs> | null
    /**
     * Filter, which staff to fetch.
     */
    where: staffWhereUniqueInput
  }

  /**
   * staff findUniqueOrThrow
   */
  export type staffFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staff
     */
    select?: staffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the staff
     */
    omit?: staffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: staffInclude<ExtArgs> | null
    /**
     * Filter, which staff to fetch.
     */
    where: staffWhereUniqueInput
  }

  /**
   * staff findFirst
   */
  export type staffFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staff
     */
    select?: staffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the staff
     */
    omit?: staffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: staffInclude<ExtArgs> | null
    /**
     * Filter, which staff to fetch.
     */
    where?: staffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of staff to fetch.
     */
    orderBy?: staffOrderByWithRelationInput | staffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for staff.
     */
    cursor?: staffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` staff from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` staff.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of staff.
     */
    distinct?: StaffScalarFieldEnum | StaffScalarFieldEnum[]
  }

  /**
   * staff findFirstOrThrow
   */
  export type staffFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staff
     */
    select?: staffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the staff
     */
    omit?: staffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: staffInclude<ExtArgs> | null
    /**
     * Filter, which staff to fetch.
     */
    where?: staffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of staff to fetch.
     */
    orderBy?: staffOrderByWithRelationInput | staffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for staff.
     */
    cursor?: staffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` staff from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` staff.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of staff.
     */
    distinct?: StaffScalarFieldEnum | StaffScalarFieldEnum[]
  }

  /**
   * staff findMany
   */
  export type staffFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staff
     */
    select?: staffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the staff
     */
    omit?: staffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: staffInclude<ExtArgs> | null
    /**
     * Filter, which staff to fetch.
     */
    where?: staffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of staff to fetch.
     */
    orderBy?: staffOrderByWithRelationInput | staffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing staff.
     */
    cursor?: staffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` staff from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` staff.
     */
    skip?: number
    distinct?: StaffScalarFieldEnum | StaffScalarFieldEnum[]
  }

  /**
   * staff create
   */
  export type staffCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staff
     */
    select?: staffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the staff
     */
    omit?: staffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: staffInclude<ExtArgs> | null
    /**
     * The data needed to create a staff.
     */
    data: XOR<staffCreateInput, staffUncheckedCreateInput>
  }

  /**
   * staff createMany
   */
  export type staffCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many staff.
     */
    data: staffCreateManyInput | staffCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * staff createManyAndReturn
   */
  export type staffCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staff
     */
    select?: staffSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the staff
     */
    omit?: staffOmit<ExtArgs> | null
    /**
     * The data used to create many staff.
     */
    data: staffCreateManyInput | staffCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: staffIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * staff update
   */
  export type staffUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staff
     */
    select?: staffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the staff
     */
    omit?: staffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: staffInclude<ExtArgs> | null
    /**
     * The data needed to update a staff.
     */
    data: XOR<staffUpdateInput, staffUncheckedUpdateInput>
    /**
     * Choose, which staff to update.
     */
    where: staffWhereUniqueInput
  }

  /**
   * staff updateMany
   */
  export type staffUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update staff.
     */
    data: XOR<staffUpdateManyMutationInput, staffUncheckedUpdateManyInput>
    /**
     * Filter which staff to update
     */
    where?: staffWhereInput
    /**
     * Limit how many staff to update.
     */
    limit?: number
  }

  /**
   * staff updateManyAndReturn
   */
  export type staffUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staff
     */
    select?: staffSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the staff
     */
    omit?: staffOmit<ExtArgs> | null
    /**
     * The data used to update staff.
     */
    data: XOR<staffUpdateManyMutationInput, staffUncheckedUpdateManyInput>
    /**
     * Filter which staff to update
     */
    where?: staffWhereInput
    /**
     * Limit how many staff to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: staffIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * staff upsert
   */
  export type staffUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staff
     */
    select?: staffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the staff
     */
    omit?: staffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: staffInclude<ExtArgs> | null
    /**
     * The filter to search for the staff to update in case it exists.
     */
    where: staffWhereUniqueInput
    /**
     * In case the staff found by the `where` argument doesn't exist, create a new staff with this data.
     */
    create: XOR<staffCreateInput, staffUncheckedCreateInput>
    /**
     * In case the staff was found with the provided `where` argument, update it with this data.
     */
    update: XOR<staffUpdateInput, staffUncheckedUpdateInput>
  }

  /**
   * staff delete
   */
  export type staffDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staff
     */
    select?: staffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the staff
     */
    omit?: staffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: staffInclude<ExtArgs> | null
    /**
     * Filter which staff to delete.
     */
    where: staffWhereUniqueInput
  }

  /**
   * staff deleteMany
   */
  export type staffDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which staff to delete
     */
    where?: staffWhereInput
    /**
     * Limit how many staff to delete.
     */
    limit?: number
  }

  /**
   * staff.loan
   */
  export type staff$loanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loan
     */
    select?: loanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the loan
     */
    omit?: loanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: loanInclude<ExtArgs> | null
    where?: loanWhereInput
    orderBy?: loanOrderByWithRelationInput | loanOrderByWithRelationInput[]
    cursor?: loanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LoanScalarFieldEnum | LoanScalarFieldEnum[]
  }

  /**
   * staff without action
   */
  export type staffDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staff
     */
    select?: staffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the staff
     */
    omit?: staffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: staffInclude<ExtArgs> | null
  }


  /**
   * Model bookauthor
   */

  export type AggregateBookauthor = {
    _count: BookauthorCountAggregateOutputType | null
    _avg: BookauthorAvgAggregateOutputType | null
    _sum: BookauthorSumAggregateOutputType | null
    _min: BookauthorMinAggregateOutputType | null
    _max: BookauthorMaxAggregateOutputType | null
  }

  export type BookauthorAvgAggregateOutputType = {
    bookauthor_id: number | null
    book_id: number | null
    author_id: number | null
  }

  export type BookauthorSumAggregateOutputType = {
    bookauthor_id: number | null
    book_id: number | null
    author_id: number | null
  }

  export type BookauthorMinAggregateOutputType = {
    bookauthor_id: number | null
    book_id: number | null
    author_id: number | null
    createdat: Date | null
    updatedat: Date | null
  }

  export type BookauthorMaxAggregateOutputType = {
    bookauthor_id: number | null
    book_id: number | null
    author_id: number | null
    createdat: Date | null
    updatedat: Date | null
  }

  export type BookauthorCountAggregateOutputType = {
    bookauthor_id: number
    book_id: number
    author_id: number
    createdat: number
    updatedat: number
    _all: number
  }


  export type BookauthorAvgAggregateInputType = {
    bookauthor_id?: true
    book_id?: true
    author_id?: true
  }

  export type BookauthorSumAggregateInputType = {
    bookauthor_id?: true
    book_id?: true
    author_id?: true
  }

  export type BookauthorMinAggregateInputType = {
    bookauthor_id?: true
    book_id?: true
    author_id?: true
    createdat?: true
    updatedat?: true
  }

  export type BookauthorMaxAggregateInputType = {
    bookauthor_id?: true
    book_id?: true
    author_id?: true
    createdat?: true
    updatedat?: true
  }

  export type BookauthorCountAggregateInputType = {
    bookauthor_id?: true
    book_id?: true
    author_id?: true
    createdat?: true
    updatedat?: true
    _all?: true
  }

  export type BookauthorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which bookauthor to aggregate.
     */
    where?: bookauthorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bookauthors to fetch.
     */
    orderBy?: bookauthorOrderByWithRelationInput | bookauthorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: bookauthorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bookauthors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bookauthors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned bookauthors
    **/
    _count?: true | BookauthorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookauthorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookauthorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookauthorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookauthorMaxAggregateInputType
  }

  export type GetBookauthorAggregateType<T extends BookauthorAggregateArgs> = {
        [P in keyof T & keyof AggregateBookauthor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBookauthor[P]>
      : GetScalarType<T[P], AggregateBookauthor[P]>
  }




  export type bookauthorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: bookauthorWhereInput
    orderBy?: bookauthorOrderByWithAggregationInput | bookauthorOrderByWithAggregationInput[]
    by: BookauthorScalarFieldEnum[] | BookauthorScalarFieldEnum
    having?: bookauthorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookauthorCountAggregateInputType | true
    _avg?: BookauthorAvgAggregateInputType
    _sum?: BookauthorSumAggregateInputType
    _min?: BookauthorMinAggregateInputType
    _max?: BookauthorMaxAggregateInputType
  }

  export type BookauthorGroupByOutputType = {
    bookauthor_id: number
    book_id: number
    author_id: number
    createdat: Date
    updatedat: Date
    _count: BookauthorCountAggregateOutputType | null
    _avg: BookauthorAvgAggregateOutputType | null
    _sum: BookauthorSumAggregateOutputType | null
    _min: BookauthorMinAggregateOutputType | null
    _max: BookauthorMaxAggregateOutputType | null
  }

  type GetBookauthorGroupByPayload<T extends bookauthorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookauthorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookauthorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookauthorGroupByOutputType[P]>
            : GetScalarType<T[P], BookauthorGroupByOutputType[P]>
        }
      >
    >


  export type bookauthorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    bookauthor_id?: boolean
    book_id?: boolean
    author_id?: boolean
    createdat?: boolean
    updatedat?: boolean
    author?: boolean | authorDefaultArgs<ExtArgs>
    book?: boolean | bookDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookauthor"]>

  export type bookauthorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    bookauthor_id?: boolean
    book_id?: boolean
    author_id?: boolean
    createdat?: boolean
    updatedat?: boolean
    author?: boolean | authorDefaultArgs<ExtArgs>
    book?: boolean | bookDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookauthor"]>

  export type bookauthorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    bookauthor_id?: boolean
    book_id?: boolean
    author_id?: boolean
    createdat?: boolean
    updatedat?: boolean
    author?: boolean | authorDefaultArgs<ExtArgs>
    book?: boolean | bookDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookauthor"]>

  export type bookauthorSelectScalar = {
    bookauthor_id?: boolean
    book_id?: boolean
    author_id?: boolean
    createdat?: boolean
    updatedat?: boolean
  }

  export type bookauthorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"bookauthor_id" | "book_id" | "author_id" | "createdat" | "updatedat", ExtArgs["result"]["bookauthor"]>
  export type bookauthorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | authorDefaultArgs<ExtArgs>
    book?: boolean | bookDefaultArgs<ExtArgs>
  }
  export type bookauthorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | authorDefaultArgs<ExtArgs>
    book?: boolean | bookDefaultArgs<ExtArgs>
  }
  export type bookauthorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | authorDefaultArgs<ExtArgs>
    book?: boolean | bookDefaultArgs<ExtArgs>
  }

  export type $bookauthorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "bookauthor"
    objects: {
      author: Prisma.$authorPayload<ExtArgs>
      book: Prisma.$bookPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      bookauthor_id: number
      book_id: number
      author_id: number
      createdat: Date
      updatedat: Date
    }, ExtArgs["result"]["bookauthor"]>
    composites: {}
  }

  type bookauthorGetPayload<S extends boolean | null | undefined | bookauthorDefaultArgs> = $Result.GetResult<Prisma.$bookauthorPayload, S>

  type bookauthorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<bookauthorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookauthorCountAggregateInputType | true
    }

  export interface bookauthorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['bookauthor'], meta: { name: 'bookauthor' } }
    /**
     * Find zero or one Bookauthor that matches the filter.
     * @param {bookauthorFindUniqueArgs} args - Arguments to find a Bookauthor
     * @example
     * // Get one Bookauthor
     * const bookauthor = await prisma.bookauthor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends bookauthorFindUniqueArgs>(args: SelectSubset<T, bookauthorFindUniqueArgs<ExtArgs>>): Prisma__bookauthorClient<$Result.GetResult<Prisma.$bookauthorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Bookauthor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {bookauthorFindUniqueOrThrowArgs} args - Arguments to find a Bookauthor
     * @example
     * // Get one Bookauthor
     * const bookauthor = await prisma.bookauthor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends bookauthorFindUniqueOrThrowArgs>(args: SelectSubset<T, bookauthorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__bookauthorClient<$Result.GetResult<Prisma.$bookauthorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bookauthor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookauthorFindFirstArgs} args - Arguments to find a Bookauthor
     * @example
     * // Get one Bookauthor
     * const bookauthor = await prisma.bookauthor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends bookauthorFindFirstArgs>(args?: SelectSubset<T, bookauthorFindFirstArgs<ExtArgs>>): Prisma__bookauthorClient<$Result.GetResult<Prisma.$bookauthorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bookauthor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookauthorFindFirstOrThrowArgs} args - Arguments to find a Bookauthor
     * @example
     * // Get one Bookauthor
     * const bookauthor = await prisma.bookauthor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends bookauthorFindFirstOrThrowArgs>(args?: SelectSubset<T, bookauthorFindFirstOrThrowArgs<ExtArgs>>): Prisma__bookauthorClient<$Result.GetResult<Prisma.$bookauthorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bookauthors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookauthorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bookauthors
     * const bookauthors = await prisma.bookauthor.findMany()
     * 
     * // Get first 10 Bookauthors
     * const bookauthors = await prisma.bookauthor.findMany({ take: 10 })
     * 
     * // Only select the `bookauthor_id`
     * const bookauthorWithBookauthor_idOnly = await prisma.bookauthor.findMany({ select: { bookauthor_id: true } })
     * 
     */
    findMany<T extends bookauthorFindManyArgs>(args?: SelectSubset<T, bookauthorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bookauthorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Bookauthor.
     * @param {bookauthorCreateArgs} args - Arguments to create a Bookauthor.
     * @example
     * // Create one Bookauthor
     * const Bookauthor = await prisma.bookauthor.create({
     *   data: {
     *     // ... data to create a Bookauthor
     *   }
     * })
     * 
     */
    create<T extends bookauthorCreateArgs>(args: SelectSubset<T, bookauthorCreateArgs<ExtArgs>>): Prisma__bookauthorClient<$Result.GetResult<Prisma.$bookauthorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bookauthors.
     * @param {bookauthorCreateManyArgs} args - Arguments to create many Bookauthors.
     * @example
     * // Create many Bookauthors
     * const bookauthor = await prisma.bookauthor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends bookauthorCreateManyArgs>(args?: SelectSubset<T, bookauthorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bookauthors and returns the data saved in the database.
     * @param {bookauthorCreateManyAndReturnArgs} args - Arguments to create many Bookauthors.
     * @example
     * // Create many Bookauthors
     * const bookauthor = await prisma.bookauthor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bookauthors and only return the `bookauthor_id`
     * const bookauthorWithBookauthor_idOnly = await prisma.bookauthor.createManyAndReturn({
     *   select: { bookauthor_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends bookauthorCreateManyAndReturnArgs>(args?: SelectSubset<T, bookauthorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bookauthorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Bookauthor.
     * @param {bookauthorDeleteArgs} args - Arguments to delete one Bookauthor.
     * @example
     * // Delete one Bookauthor
     * const Bookauthor = await prisma.bookauthor.delete({
     *   where: {
     *     // ... filter to delete one Bookauthor
     *   }
     * })
     * 
     */
    delete<T extends bookauthorDeleteArgs>(args: SelectSubset<T, bookauthorDeleteArgs<ExtArgs>>): Prisma__bookauthorClient<$Result.GetResult<Prisma.$bookauthorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Bookauthor.
     * @param {bookauthorUpdateArgs} args - Arguments to update one Bookauthor.
     * @example
     * // Update one Bookauthor
     * const bookauthor = await prisma.bookauthor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends bookauthorUpdateArgs>(args: SelectSubset<T, bookauthorUpdateArgs<ExtArgs>>): Prisma__bookauthorClient<$Result.GetResult<Prisma.$bookauthorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bookauthors.
     * @param {bookauthorDeleteManyArgs} args - Arguments to filter Bookauthors to delete.
     * @example
     * // Delete a few Bookauthors
     * const { count } = await prisma.bookauthor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends bookauthorDeleteManyArgs>(args?: SelectSubset<T, bookauthorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookauthors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookauthorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bookauthors
     * const bookauthor = await prisma.bookauthor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends bookauthorUpdateManyArgs>(args: SelectSubset<T, bookauthorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookauthors and returns the data updated in the database.
     * @param {bookauthorUpdateManyAndReturnArgs} args - Arguments to update many Bookauthors.
     * @example
     * // Update many Bookauthors
     * const bookauthor = await prisma.bookauthor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Bookauthors and only return the `bookauthor_id`
     * const bookauthorWithBookauthor_idOnly = await prisma.bookauthor.updateManyAndReturn({
     *   select: { bookauthor_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends bookauthorUpdateManyAndReturnArgs>(args: SelectSubset<T, bookauthorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bookauthorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Bookauthor.
     * @param {bookauthorUpsertArgs} args - Arguments to update or create a Bookauthor.
     * @example
     * // Update or create a Bookauthor
     * const bookauthor = await prisma.bookauthor.upsert({
     *   create: {
     *     // ... data to create a Bookauthor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bookauthor we want to update
     *   }
     * })
     */
    upsert<T extends bookauthorUpsertArgs>(args: SelectSubset<T, bookauthorUpsertArgs<ExtArgs>>): Prisma__bookauthorClient<$Result.GetResult<Prisma.$bookauthorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bookauthors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookauthorCountArgs} args - Arguments to filter Bookauthors to count.
     * @example
     * // Count the number of Bookauthors
     * const count = await prisma.bookauthor.count({
     *   where: {
     *     // ... the filter for the Bookauthors we want to count
     *   }
     * })
    **/
    count<T extends bookauthorCountArgs>(
      args?: Subset<T, bookauthorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookauthorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bookauthor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookauthorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BookauthorAggregateArgs>(args: Subset<T, BookauthorAggregateArgs>): Prisma.PrismaPromise<GetBookauthorAggregateType<T>>

    /**
     * Group by Bookauthor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookauthorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends bookauthorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: bookauthorGroupByArgs['orderBy'] }
        : { orderBy?: bookauthorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, bookauthorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookauthorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the bookauthor model
   */
  readonly fields: bookauthorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for bookauthor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__bookauthorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    author<T extends authorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, authorDefaultArgs<ExtArgs>>): Prisma__authorClient<$Result.GetResult<Prisma.$authorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    book<T extends bookDefaultArgs<ExtArgs> = {}>(args?: Subset<T, bookDefaultArgs<ExtArgs>>): Prisma__bookClient<$Result.GetResult<Prisma.$bookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the bookauthor model
   */
  interface bookauthorFieldRefs {
    readonly bookauthor_id: FieldRef<"bookauthor", 'Int'>
    readonly book_id: FieldRef<"bookauthor", 'Int'>
    readonly author_id: FieldRef<"bookauthor", 'Int'>
    readonly createdat: FieldRef<"bookauthor", 'DateTime'>
    readonly updatedat: FieldRef<"bookauthor", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * bookauthor findUnique
   */
  export type bookauthorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookauthor
     */
    select?: bookauthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookauthor
     */
    omit?: bookauthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookauthorInclude<ExtArgs> | null
    /**
     * Filter, which bookauthor to fetch.
     */
    where: bookauthorWhereUniqueInput
  }

  /**
   * bookauthor findUniqueOrThrow
   */
  export type bookauthorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookauthor
     */
    select?: bookauthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookauthor
     */
    omit?: bookauthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookauthorInclude<ExtArgs> | null
    /**
     * Filter, which bookauthor to fetch.
     */
    where: bookauthorWhereUniqueInput
  }

  /**
   * bookauthor findFirst
   */
  export type bookauthorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookauthor
     */
    select?: bookauthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookauthor
     */
    omit?: bookauthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookauthorInclude<ExtArgs> | null
    /**
     * Filter, which bookauthor to fetch.
     */
    where?: bookauthorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bookauthors to fetch.
     */
    orderBy?: bookauthorOrderByWithRelationInput | bookauthorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for bookauthors.
     */
    cursor?: bookauthorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bookauthors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bookauthors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of bookauthors.
     */
    distinct?: BookauthorScalarFieldEnum | BookauthorScalarFieldEnum[]
  }

  /**
   * bookauthor findFirstOrThrow
   */
  export type bookauthorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookauthor
     */
    select?: bookauthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookauthor
     */
    omit?: bookauthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookauthorInclude<ExtArgs> | null
    /**
     * Filter, which bookauthor to fetch.
     */
    where?: bookauthorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bookauthors to fetch.
     */
    orderBy?: bookauthorOrderByWithRelationInput | bookauthorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for bookauthors.
     */
    cursor?: bookauthorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bookauthors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bookauthors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of bookauthors.
     */
    distinct?: BookauthorScalarFieldEnum | BookauthorScalarFieldEnum[]
  }

  /**
   * bookauthor findMany
   */
  export type bookauthorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookauthor
     */
    select?: bookauthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookauthor
     */
    omit?: bookauthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookauthorInclude<ExtArgs> | null
    /**
     * Filter, which bookauthors to fetch.
     */
    where?: bookauthorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bookauthors to fetch.
     */
    orderBy?: bookauthorOrderByWithRelationInput | bookauthorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing bookauthors.
     */
    cursor?: bookauthorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bookauthors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bookauthors.
     */
    skip?: number
    distinct?: BookauthorScalarFieldEnum | BookauthorScalarFieldEnum[]
  }

  /**
   * bookauthor create
   */
  export type bookauthorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookauthor
     */
    select?: bookauthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookauthor
     */
    omit?: bookauthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookauthorInclude<ExtArgs> | null
    /**
     * The data needed to create a bookauthor.
     */
    data: XOR<bookauthorCreateInput, bookauthorUncheckedCreateInput>
  }

  /**
   * bookauthor createMany
   */
  export type bookauthorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many bookauthors.
     */
    data: bookauthorCreateManyInput | bookauthorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * bookauthor createManyAndReturn
   */
  export type bookauthorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookauthor
     */
    select?: bookauthorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the bookauthor
     */
    omit?: bookauthorOmit<ExtArgs> | null
    /**
     * The data used to create many bookauthors.
     */
    data: bookauthorCreateManyInput | bookauthorCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookauthorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * bookauthor update
   */
  export type bookauthorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookauthor
     */
    select?: bookauthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookauthor
     */
    omit?: bookauthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookauthorInclude<ExtArgs> | null
    /**
     * The data needed to update a bookauthor.
     */
    data: XOR<bookauthorUpdateInput, bookauthorUncheckedUpdateInput>
    /**
     * Choose, which bookauthor to update.
     */
    where: bookauthorWhereUniqueInput
  }

  /**
   * bookauthor updateMany
   */
  export type bookauthorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update bookauthors.
     */
    data: XOR<bookauthorUpdateManyMutationInput, bookauthorUncheckedUpdateManyInput>
    /**
     * Filter which bookauthors to update
     */
    where?: bookauthorWhereInput
    /**
     * Limit how many bookauthors to update.
     */
    limit?: number
  }

  /**
   * bookauthor updateManyAndReturn
   */
  export type bookauthorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookauthor
     */
    select?: bookauthorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the bookauthor
     */
    omit?: bookauthorOmit<ExtArgs> | null
    /**
     * The data used to update bookauthors.
     */
    data: XOR<bookauthorUpdateManyMutationInput, bookauthorUncheckedUpdateManyInput>
    /**
     * Filter which bookauthors to update
     */
    where?: bookauthorWhereInput
    /**
     * Limit how many bookauthors to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookauthorIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * bookauthor upsert
   */
  export type bookauthorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookauthor
     */
    select?: bookauthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookauthor
     */
    omit?: bookauthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookauthorInclude<ExtArgs> | null
    /**
     * The filter to search for the bookauthor to update in case it exists.
     */
    where: bookauthorWhereUniqueInput
    /**
     * In case the bookauthor found by the `where` argument doesn't exist, create a new bookauthor with this data.
     */
    create: XOR<bookauthorCreateInput, bookauthorUncheckedCreateInput>
    /**
     * In case the bookauthor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<bookauthorUpdateInput, bookauthorUncheckedUpdateInput>
  }

  /**
   * bookauthor delete
   */
  export type bookauthorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookauthor
     */
    select?: bookauthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookauthor
     */
    omit?: bookauthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookauthorInclude<ExtArgs> | null
    /**
     * Filter which bookauthor to delete.
     */
    where: bookauthorWhereUniqueInput
  }

  /**
   * bookauthor deleteMany
   */
  export type bookauthorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which bookauthors to delete
     */
    where?: bookauthorWhereInput
    /**
     * Limit how many bookauthors to delete.
     */
    limit?: number
  }

  /**
   * bookauthor without action
   */
  export type bookauthorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookauthor
     */
    select?: bookauthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookauthor
     */
    omit?: bookauthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookauthorInclude<ExtArgs> | null
  }


  /**
   * Model bookgenre
   */

  export type AggregateBookgenre = {
    _count: BookgenreCountAggregateOutputType | null
    _avg: BookgenreAvgAggregateOutputType | null
    _sum: BookgenreSumAggregateOutputType | null
    _min: BookgenreMinAggregateOutputType | null
    _max: BookgenreMaxAggregateOutputType | null
  }

  export type BookgenreAvgAggregateOutputType = {
    bookgenre_id: number | null
    book_id: number | null
    genre_id: number | null
  }

  export type BookgenreSumAggregateOutputType = {
    bookgenre_id: number | null
    book_id: number | null
    genre_id: number | null
  }

  export type BookgenreMinAggregateOutputType = {
    bookgenre_id: number | null
    book_id: number | null
    genre_id: number | null
    createdat: Date | null
    updatedat: Date | null
  }

  export type BookgenreMaxAggregateOutputType = {
    bookgenre_id: number | null
    book_id: number | null
    genre_id: number | null
    createdat: Date | null
    updatedat: Date | null
  }

  export type BookgenreCountAggregateOutputType = {
    bookgenre_id: number
    book_id: number
    genre_id: number
    createdat: number
    updatedat: number
    _all: number
  }


  export type BookgenreAvgAggregateInputType = {
    bookgenre_id?: true
    book_id?: true
    genre_id?: true
  }

  export type BookgenreSumAggregateInputType = {
    bookgenre_id?: true
    book_id?: true
    genre_id?: true
  }

  export type BookgenreMinAggregateInputType = {
    bookgenre_id?: true
    book_id?: true
    genre_id?: true
    createdat?: true
    updatedat?: true
  }

  export type BookgenreMaxAggregateInputType = {
    bookgenre_id?: true
    book_id?: true
    genre_id?: true
    createdat?: true
    updatedat?: true
  }

  export type BookgenreCountAggregateInputType = {
    bookgenre_id?: true
    book_id?: true
    genre_id?: true
    createdat?: true
    updatedat?: true
    _all?: true
  }

  export type BookgenreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which bookgenre to aggregate.
     */
    where?: bookgenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bookgenres to fetch.
     */
    orderBy?: bookgenreOrderByWithRelationInput | bookgenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: bookgenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bookgenres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bookgenres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned bookgenres
    **/
    _count?: true | BookgenreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookgenreAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookgenreSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookgenreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookgenreMaxAggregateInputType
  }

  export type GetBookgenreAggregateType<T extends BookgenreAggregateArgs> = {
        [P in keyof T & keyof AggregateBookgenre]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBookgenre[P]>
      : GetScalarType<T[P], AggregateBookgenre[P]>
  }




  export type bookgenreGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: bookgenreWhereInput
    orderBy?: bookgenreOrderByWithAggregationInput | bookgenreOrderByWithAggregationInput[]
    by: BookgenreScalarFieldEnum[] | BookgenreScalarFieldEnum
    having?: bookgenreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookgenreCountAggregateInputType | true
    _avg?: BookgenreAvgAggregateInputType
    _sum?: BookgenreSumAggregateInputType
    _min?: BookgenreMinAggregateInputType
    _max?: BookgenreMaxAggregateInputType
  }

  export type BookgenreGroupByOutputType = {
    bookgenre_id: number
    book_id: number
    genre_id: number
    createdat: Date
    updatedat: Date
    _count: BookgenreCountAggregateOutputType | null
    _avg: BookgenreAvgAggregateOutputType | null
    _sum: BookgenreSumAggregateOutputType | null
    _min: BookgenreMinAggregateOutputType | null
    _max: BookgenreMaxAggregateOutputType | null
  }

  type GetBookgenreGroupByPayload<T extends bookgenreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookgenreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookgenreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookgenreGroupByOutputType[P]>
            : GetScalarType<T[P], BookgenreGroupByOutputType[P]>
        }
      >
    >


  export type bookgenreSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    bookgenre_id?: boolean
    book_id?: boolean
    genre_id?: boolean
    createdat?: boolean
    updatedat?: boolean
    book?: boolean | bookDefaultArgs<ExtArgs>
    genre?: boolean | genreDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookgenre"]>

  export type bookgenreSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    bookgenre_id?: boolean
    book_id?: boolean
    genre_id?: boolean
    createdat?: boolean
    updatedat?: boolean
    book?: boolean | bookDefaultArgs<ExtArgs>
    genre?: boolean | genreDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookgenre"]>

  export type bookgenreSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    bookgenre_id?: boolean
    book_id?: boolean
    genre_id?: boolean
    createdat?: boolean
    updatedat?: boolean
    book?: boolean | bookDefaultArgs<ExtArgs>
    genre?: boolean | genreDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookgenre"]>

  export type bookgenreSelectScalar = {
    bookgenre_id?: boolean
    book_id?: boolean
    genre_id?: boolean
    createdat?: boolean
    updatedat?: boolean
  }

  export type bookgenreOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"bookgenre_id" | "book_id" | "genre_id" | "createdat" | "updatedat", ExtArgs["result"]["bookgenre"]>
  export type bookgenreInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book?: boolean | bookDefaultArgs<ExtArgs>
    genre?: boolean | genreDefaultArgs<ExtArgs>
  }
  export type bookgenreIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book?: boolean | bookDefaultArgs<ExtArgs>
    genre?: boolean | genreDefaultArgs<ExtArgs>
  }
  export type bookgenreIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book?: boolean | bookDefaultArgs<ExtArgs>
    genre?: boolean | genreDefaultArgs<ExtArgs>
  }

  export type $bookgenrePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "bookgenre"
    objects: {
      book: Prisma.$bookPayload<ExtArgs>
      genre: Prisma.$genrePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      bookgenre_id: number
      book_id: number
      genre_id: number
      createdat: Date
      updatedat: Date
    }, ExtArgs["result"]["bookgenre"]>
    composites: {}
  }

  type bookgenreGetPayload<S extends boolean | null | undefined | bookgenreDefaultArgs> = $Result.GetResult<Prisma.$bookgenrePayload, S>

  type bookgenreCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<bookgenreFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookgenreCountAggregateInputType | true
    }

  export interface bookgenreDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['bookgenre'], meta: { name: 'bookgenre' } }
    /**
     * Find zero or one Bookgenre that matches the filter.
     * @param {bookgenreFindUniqueArgs} args - Arguments to find a Bookgenre
     * @example
     * // Get one Bookgenre
     * const bookgenre = await prisma.bookgenre.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends bookgenreFindUniqueArgs>(args: SelectSubset<T, bookgenreFindUniqueArgs<ExtArgs>>): Prisma__bookgenreClient<$Result.GetResult<Prisma.$bookgenrePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Bookgenre that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {bookgenreFindUniqueOrThrowArgs} args - Arguments to find a Bookgenre
     * @example
     * // Get one Bookgenre
     * const bookgenre = await prisma.bookgenre.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends bookgenreFindUniqueOrThrowArgs>(args: SelectSubset<T, bookgenreFindUniqueOrThrowArgs<ExtArgs>>): Prisma__bookgenreClient<$Result.GetResult<Prisma.$bookgenrePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bookgenre that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookgenreFindFirstArgs} args - Arguments to find a Bookgenre
     * @example
     * // Get one Bookgenre
     * const bookgenre = await prisma.bookgenre.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends bookgenreFindFirstArgs>(args?: SelectSubset<T, bookgenreFindFirstArgs<ExtArgs>>): Prisma__bookgenreClient<$Result.GetResult<Prisma.$bookgenrePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bookgenre that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookgenreFindFirstOrThrowArgs} args - Arguments to find a Bookgenre
     * @example
     * // Get one Bookgenre
     * const bookgenre = await prisma.bookgenre.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends bookgenreFindFirstOrThrowArgs>(args?: SelectSubset<T, bookgenreFindFirstOrThrowArgs<ExtArgs>>): Prisma__bookgenreClient<$Result.GetResult<Prisma.$bookgenrePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bookgenres that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookgenreFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bookgenres
     * const bookgenres = await prisma.bookgenre.findMany()
     * 
     * // Get first 10 Bookgenres
     * const bookgenres = await prisma.bookgenre.findMany({ take: 10 })
     * 
     * // Only select the `bookgenre_id`
     * const bookgenreWithBookgenre_idOnly = await prisma.bookgenre.findMany({ select: { bookgenre_id: true } })
     * 
     */
    findMany<T extends bookgenreFindManyArgs>(args?: SelectSubset<T, bookgenreFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bookgenrePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Bookgenre.
     * @param {bookgenreCreateArgs} args - Arguments to create a Bookgenre.
     * @example
     * // Create one Bookgenre
     * const Bookgenre = await prisma.bookgenre.create({
     *   data: {
     *     // ... data to create a Bookgenre
     *   }
     * })
     * 
     */
    create<T extends bookgenreCreateArgs>(args: SelectSubset<T, bookgenreCreateArgs<ExtArgs>>): Prisma__bookgenreClient<$Result.GetResult<Prisma.$bookgenrePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bookgenres.
     * @param {bookgenreCreateManyArgs} args - Arguments to create many Bookgenres.
     * @example
     * // Create many Bookgenres
     * const bookgenre = await prisma.bookgenre.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends bookgenreCreateManyArgs>(args?: SelectSubset<T, bookgenreCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bookgenres and returns the data saved in the database.
     * @param {bookgenreCreateManyAndReturnArgs} args - Arguments to create many Bookgenres.
     * @example
     * // Create many Bookgenres
     * const bookgenre = await prisma.bookgenre.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bookgenres and only return the `bookgenre_id`
     * const bookgenreWithBookgenre_idOnly = await prisma.bookgenre.createManyAndReturn({
     *   select: { bookgenre_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends bookgenreCreateManyAndReturnArgs>(args?: SelectSubset<T, bookgenreCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bookgenrePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Bookgenre.
     * @param {bookgenreDeleteArgs} args - Arguments to delete one Bookgenre.
     * @example
     * // Delete one Bookgenre
     * const Bookgenre = await prisma.bookgenre.delete({
     *   where: {
     *     // ... filter to delete one Bookgenre
     *   }
     * })
     * 
     */
    delete<T extends bookgenreDeleteArgs>(args: SelectSubset<T, bookgenreDeleteArgs<ExtArgs>>): Prisma__bookgenreClient<$Result.GetResult<Prisma.$bookgenrePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Bookgenre.
     * @param {bookgenreUpdateArgs} args - Arguments to update one Bookgenre.
     * @example
     * // Update one Bookgenre
     * const bookgenre = await prisma.bookgenre.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends bookgenreUpdateArgs>(args: SelectSubset<T, bookgenreUpdateArgs<ExtArgs>>): Prisma__bookgenreClient<$Result.GetResult<Prisma.$bookgenrePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bookgenres.
     * @param {bookgenreDeleteManyArgs} args - Arguments to filter Bookgenres to delete.
     * @example
     * // Delete a few Bookgenres
     * const { count } = await prisma.bookgenre.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends bookgenreDeleteManyArgs>(args?: SelectSubset<T, bookgenreDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookgenres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookgenreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bookgenres
     * const bookgenre = await prisma.bookgenre.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends bookgenreUpdateManyArgs>(args: SelectSubset<T, bookgenreUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookgenres and returns the data updated in the database.
     * @param {bookgenreUpdateManyAndReturnArgs} args - Arguments to update many Bookgenres.
     * @example
     * // Update many Bookgenres
     * const bookgenre = await prisma.bookgenre.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Bookgenres and only return the `bookgenre_id`
     * const bookgenreWithBookgenre_idOnly = await prisma.bookgenre.updateManyAndReturn({
     *   select: { bookgenre_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends bookgenreUpdateManyAndReturnArgs>(args: SelectSubset<T, bookgenreUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bookgenrePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Bookgenre.
     * @param {bookgenreUpsertArgs} args - Arguments to update or create a Bookgenre.
     * @example
     * // Update or create a Bookgenre
     * const bookgenre = await prisma.bookgenre.upsert({
     *   create: {
     *     // ... data to create a Bookgenre
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bookgenre we want to update
     *   }
     * })
     */
    upsert<T extends bookgenreUpsertArgs>(args: SelectSubset<T, bookgenreUpsertArgs<ExtArgs>>): Prisma__bookgenreClient<$Result.GetResult<Prisma.$bookgenrePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bookgenres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookgenreCountArgs} args - Arguments to filter Bookgenres to count.
     * @example
     * // Count the number of Bookgenres
     * const count = await prisma.bookgenre.count({
     *   where: {
     *     // ... the filter for the Bookgenres we want to count
     *   }
     * })
    **/
    count<T extends bookgenreCountArgs>(
      args?: Subset<T, bookgenreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookgenreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bookgenre.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookgenreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BookgenreAggregateArgs>(args: Subset<T, BookgenreAggregateArgs>): Prisma.PrismaPromise<GetBookgenreAggregateType<T>>

    /**
     * Group by Bookgenre.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookgenreGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends bookgenreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: bookgenreGroupByArgs['orderBy'] }
        : { orderBy?: bookgenreGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, bookgenreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookgenreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the bookgenre model
   */
  readonly fields: bookgenreFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for bookgenre.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__bookgenreClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    book<T extends bookDefaultArgs<ExtArgs> = {}>(args?: Subset<T, bookDefaultArgs<ExtArgs>>): Prisma__bookClient<$Result.GetResult<Prisma.$bookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    genre<T extends genreDefaultArgs<ExtArgs> = {}>(args?: Subset<T, genreDefaultArgs<ExtArgs>>): Prisma__genreClient<$Result.GetResult<Prisma.$genrePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the bookgenre model
   */
  interface bookgenreFieldRefs {
    readonly bookgenre_id: FieldRef<"bookgenre", 'Int'>
    readonly book_id: FieldRef<"bookgenre", 'Int'>
    readonly genre_id: FieldRef<"bookgenre", 'Int'>
    readonly createdat: FieldRef<"bookgenre", 'DateTime'>
    readonly updatedat: FieldRef<"bookgenre", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * bookgenre findUnique
   */
  export type bookgenreFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookgenre
     */
    select?: bookgenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookgenre
     */
    omit?: bookgenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookgenreInclude<ExtArgs> | null
    /**
     * Filter, which bookgenre to fetch.
     */
    where: bookgenreWhereUniqueInput
  }

  /**
   * bookgenre findUniqueOrThrow
   */
  export type bookgenreFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookgenre
     */
    select?: bookgenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookgenre
     */
    omit?: bookgenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookgenreInclude<ExtArgs> | null
    /**
     * Filter, which bookgenre to fetch.
     */
    where: bookgenreWhereUniqueInput
  }

  /**
   * bookgenre findFirst
   */
  export type bookgenreFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookgenre
     */
    select?: bookgenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookgenre
     */
    omit?: bookgenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookgenreInclude<ExtArgs> | null
    /**
     * Filter, which bookgenre to fetch.
     */
    where?: bookgenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bookgenres to fetch.
     */
    orderBy?: bookgenreOrderByWithRelationInput | bookgenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for bookgenres.
     */
    cursor?: bookgenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bookgenres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bookgenres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of bookgenres.
     */
    distinct?: BookgenreScalarFieldEnum | BookgenreScalarFieldEnum[]
  }

  /**
   * bookgenre findFirstOrThrow
   */
  export type bookgenreFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookgenre
     */
    select?: bookgenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookgenre
     */
    omit?: bookgenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookgenreInclude<ExtArgs> | null
    /**
     * Filter, which bookgenre to fetch.
     */
    where?: bookgenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bookgenres to fetch.
     */
    orderBy?: bookgenreOrderByWithRelationInput | bookgenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for bookgenres.
     */
    cursor?: bookgenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bookgenres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bookgenres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of bookgenres.
     */
    distinct?: BookgenreScalarFieldEnum | BookgenreScalarFieldEnum[]
  }

  /**
   * bookgenre findMany
   */
  export type bookgenreFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookgenre
     */
    select?: bookgenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookgenre
     */
    omit?: bookgenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookgenreInclude<ExtArgs> | null
    /**
     * Filter, which bookgenres to fetch.
     */
    where?: bookgenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bookgenres to fetch.
     */
    orderBy?: bookgenreOrderByWithRelationInput | bookgenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing bookgenres.
     */
    cursor?: bookgenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bookgenres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bookgenres.
     */
    skip?: number
    distinct?: BookgenreScalarFieldEnum | BookgenreScalarFieldEnum[]
  }

  /**
   * bookgenre create
   */
  export type bookgenreCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookgenre
     */
    select?: bookgenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookgenre
     */
    omit?: bookgenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookgenreInclude<ExtArgs> | null
    /**
     * The data needed to create a bookgenre.
     */
    data: XOR<bookgenreCreateInput, bookgenreUncheckedCreateInput>
  }

  /**
   * bookgenre createMany
   */
  export type bookgenreCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many bookgenres.
     */
    data: bookgenreCreateManyInput | bookgenreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * bookgenre createManyAndReturn
   */
  export type bookgenreCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookgenre
     */
    select?: bookgenreSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the bookgenre
     */
    omit?: bookgenreOmit<ExtArgs> | null
    /**
     * The data used to create many bookgenres.
     */
    data: bookgenreCreateManyInput | bookgenreCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookgenreIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * bookgenre update
   */
  export type bookgenreUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookgenre
     */
    select?: bookgenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookgenre
     */
    omit?: bookgenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookgenreInclude<ExtArgs> | null
    /**
     * The data needed to update a bookgenre.
     */
    data: XOR<bookgenreUpdateInput, bookgenreUncheckedUpdateInput>
    /**
     * Choose, which bookgenre to update.
     */
    where: bookgenreWhereUniqueInput
  }

  /**
   * bookgenre updateMany
   */
  export type bookgenreUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update bookgenres.
     */
    data: XOR<bookgenreUpdateManyMutationInput, bookgenreUncheckedUpdateManyInput>
    /**
     * Filter which bookgenres to update
     */
    where?: bookgenreWhereInput
    /**
     * Limit how many bookgenres to update.
     */
    limit?: number
  }

  /**
   * bookgenre updateManyAndReturn
   */
  export type bookgenreUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookgenre
     */
    select?: bookgenreSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the bookgenre
     */
    omit?: bookgenreOmit<ExtArgs> | null
    /**
     * The data used to update bookgenres.
     */
    data: XOR<bookgenreUpdateManyMutationInput, bookgenreUncheckedUpdateManyInput>
    /**
     * Filter which bookgenres to update
     */
    where?: bookgenreWhereInput
    /**
     * Limit how many bookgenres to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookgenreIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * bookgenre upsert
   */
  export type bookgenreUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookgenre
     */
    select?: bookgenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookgenre
     */
    omit?: bookgenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookgenreInclude<ExtArgs> | null
    /**
     * The filter to search for the bookgenre to update in case it exists.
     */
    where: bookgenreWhereUniqueInput
    /**
     * In case the bookgenre found by the `where` argument doesn't exist, create a new bookgenre with this data.
     */
    create: XOR<bookgenreCreateInput, bookgenreUncheckedCreateInput>
    /**
     * In case the bookgenre was found with the provided `where` argument, update it with this data.
     */
    update: XOR<bookgenreUpdateInput, bookgenreUncheckedUpdateInput>
  }

  /**
   * bookgenre delete
   */
  export type bookgenreDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookgenre
     */
    select?: bookgenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookgenre
     */
    omit?: bookgenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookgenreInclude<ExtArgs> | null
    /**
     * Filter which bookgenre to delete.
     */
    where: bookgenreWhereUniqueInput
  }

  /**
   * bookgenre deleteMany
   */
  export type bookgenreDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which bookgenres to delete
     */
    where?: bookgenreWhereInput
    /**
     * Limit how many bookgenres to delete.
     */
    limit?: number
  }

  /**
   * bookgenre without action
   */
  export type bookgenreDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookgenre
     */
    select?: bookgenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookgenre
     */
    omit?: bookgenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookgenreInclude<ExtArgs> | null
  }


  /**
   * Model bookpublisher
   */

  export type AggregateBookpublisher = {
    _count: BookpublisherCountAggregateOutputType | null
    _avg: BookpublisherAvgAggregateOutputType | null
    _sum: BookpublisherSumAggregateOutputType | null
    _min: BookpublisherMinAggregateOutputType | null
    _max: BookpublisherMaxAggregateOutputType | null
  }

  export type BookpublisherAvgAggregateOutputType = {
    bookpublisher_id: number | null
    book_id: number | null
    publisher_id: number | null
  }

  export type BookpublisherSumAggregateOutputType = {
    bookpublisher_id: number | null
    book_id: number | null
    publisher_id: number | null
  }

  export type BookpublisherMinAggregateOutputType = {
    bookpublisher_id: number | null
    book_id: number | null
    publisher_id: number | null
    dayofarrivaltolibrary: Date | null
    createdat: Date | null
    updatedat: Date | null
  }

  export type BookpublisherMaxAggregateOutputType = {
    bookpublisher_id: number | null
    book_id: number | null
    publisher_id: number | null
    dayofarrivaltolibrary: Date | null
    createdat: Date | null
    updatedat: Date | null
  }

  export type BookpublisherCountAggregateOutputType = {
    bookpublisher_id: number
    book_id: number
    publisher_id: number
    dayofarrivaltolibrary: number
    createdat: number
    updatedat: number
    _all: number
  }


  export type BookpublisherAvgAggregateInputType = {
    bookpublisher_id?: true
    book_id?: true
    publisher_id?: true
  }

  export type BookpublisherSumAggregateInputType = {
    bookpublisher_id?: true
    book_id?: true
    publisher_id?: true
  }

  export type BookpublisherMinAggregateInputType = {
    bookpublisher_id?: true
    book_id?: true
    publisher_id?: true
    dayofarrivaltolibrary?: true
    createdat?: true
    updatedat?: true
  }

  export type BookpublisherMaxAggregateInputType = {
    bookpublisher_id?: true
    book_id?: true
    publisher_id?: true
    dayofarrivaltolibrary?: true
    createdat?: true
    updatedat?: true
  }

  export type BookpublisherCountAggregateInputType = {
    bookpublisher_id?: true
    book_id?: true
    publisher_id?: true
    dayofarrivaltolibrary?: true
    createdat?: true
    updatedat?: true
    _all?: true
  }

  export type BookpublisherAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which bookpublisher to aggregate.
     */
    where?: bookpublisherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bookpublishers to fetch.
     */
    orderBy?: bookpublisherOrderByWithRelationInput | bookpublisherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: bookpublisherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bookpublishers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bookpublishers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned bookpublishers
    **/
    _count?: true | BookpublisherCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookpublisherAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookpublisherSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookpublisherMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookpublisherMaxAggregateInputType
  }

  export type GetBookpublisherAggregateType<T extends BookpublisherAggregateArgs> = {
        [P in keyof T & keyof AggregateBookpublisher]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBookpublisher[P]>
      : GetScalarType<T[P], AggregateBookpublisher[P]>
  }




  export type bookpublisherGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: bookpublisherWhereInput
    orderBy?: bookpublisherOrderByWithAggregationInput | bookpublisherOrderByWithAggregationInput[]
    by: BookpublisherScalarFieldEnum[] | BookpublisherScalarFieldEnum
    having?: bookpublisherScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookpublisherCountAggregateInputType | true
    _avg?: BookpublisherAvgAggregateInputType
    _sum?: BookpublisherSumAggregateInputType
    _min?: BookpublisherMinAggregateInputType
    _max?: BookpublisherMaxAggregateInputType
  }

  export type BookpublisherGroupByOutputType = {
    bookpublisher_id: number
    book_id: number
    publisher_id: number
    dayofarrivaltolibrary: Date
    createdat: Date
    updatedat: Date
    _count: BookpublisherCountAggregateOutputType | null
    _avg: BookpublisherAvgAggregateOutputType | null
    _sum: BookpublisherSumAggregateOutputType | null
    _min: BookpublisherMinAggregateOutputType | null
    _max: BookpublisherMaxAggregateOutputType | null
  }

  type GetBookpublisherGroupByPayload<T extends bookpublisherGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookpublisherGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookpublisherGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookpublisherGroupByOutputType[P]>
            : GetScalarType<T[P], BookpublisherGroupByOutputType[P]>
        }
      >
    >


  export type bookpublisherSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    bookpublisher_id?: boolean
    book_id?: boolean
    publisher_id?: boolean
    dayofarrivaltolibrary?: boolean
    createdat?: boolean
    updatedat?: boolean
    book?: boolean | bookDefaultArgs<ExtArgs>
    publication?: boolean | publicationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookpublisher"]>

  export type bookpublisherSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    bookpublisher_id?: boolean
    book_id?: boolean
    publisher_id?: boolean
    dayofarrivaltolibrary?: boolean
    createdat?: boolean
    updatedat?: boolean
    book?: boolean | bookDefaultArgs<ExtArgs>
    publication?: boolean | publicationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookpublisher"]>

  export type bookpublisherSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    bookpublisher_id?: boolean
    book_id?: boolean
    publisher_id?: boolean
    dayofarrivaltolibrary?: boolean
    createdat?: boolean
    updatedat?: boolean
    book?: boolean | bookDefaultArgs<ExtArgs>
    publication?: boolean | publicationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookpublisher"]>

  export type bookpublisherSelectScalar = {
    bookpublisher_id?: boolean
    book_id?: boolean
    publisher_id?: boolean
    dayofarrivaltolibrary?: boolean
    createdat?: boolean
    updatedat?: boolean
  }

  export type bookpublisherOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"bookpublisher_id" | "book_id" | "publisher_id" | "dayofarrivaltolibrary" | "createdat" | "updatedat", ExtArgs["result"]["bookpublisher"]>
  export type bookpublisherInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book?: boolean | bookDefaultArgs<ExtArgs>
    publication?: boolean | publicationDefaultArgs<ExtArgs>
  }
  export type bookpublisherIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book?: boolean | bookDefaultArgs<ExtArgs>
    publication?: boolean | publicationDefaultArgs<ExtArgs>
  }
  export type bookpublisherIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book?: boolean | bookDefaultArgs<ExtArgs>
    publication?: boolean | publicationDefaultArgs<ExtArgs>
  }

  export type $bookpublisherPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "bookpublisher"
    objects: {
      book: Prisma.$bookPayload<ExtArgs>
      publication: Prisma.$publicationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      bookpublisher_id: number
      book_id: number
      publisher_id: number
      dayofarrivaltolibrary: Date
      createdat: Date
      updatedat: Date
    }, ExtArgs["result"]["bookpublisher"]>
    composites: {}
  }

  type bookpublisherGetPayload<S extends boolean | null | undefined | bookpublisherDefaultArgs> = $Result.GetResult<Prisma.$bookpublisherPayload, S>

  type bookpublisherCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<bookpublisherFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookpublisherCountAggregateInputType | true
    }

  export interface bookpublisherDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['bookpublisher'], meta: { name: 'bookpublisher' } }
    /**
     * Find zero or one Bookpublisher that matches the filter.
     * @param {bookpublisherFindUniqueArgs} args - Arguments to find a Bookpublisher
     * @example
     * // Get one Bookpublisher
     * const bookpublisher = await prisma.bookpublisher.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends bookpublisherFindUniqueArgs>(args: SelectSubset<T, bookpublisherFindUniqueArgs<ExtArgs>>): Prisma__bookpublisherClient<$Result.GetResult<Prisma.$bookpublisherPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Bookpublisher that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {bookpublisherFindUniqueOrThrowArgs} args - Arguments to find a Bookpublisher
     * @example
     * // Get one Bookpublisher
     * const bookpublisher = await prisma.bookpublisher.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends bookpublisherFindUniqueOrThrowArgs>(args: SelectSubset<T, bookpublisherFindUniqueOrThrowArgs<ExtArgs>>): Prisma__bookpublisherClient<$Result.GetResult<Prisma.$bookpublisherPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bookpublisher that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookpublisherFindFirstArgs} args - Arguments to find a Bookpublisher
     * @example
     * // Get one Bookpublisher
     * const bookpublisher = await prisma.bookpublisher.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends bookpublisherFindFirstArgs>(args?: SelectSubset<T, bookpublisherFindFirstArgs<ExtArgs>>): Prisma__bookpublisherClient<$Result.GetResult<Prisma.$bookpublisherPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bookpublisher that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookpublisherFindFirstOrThrowArgs} args - Arguments to find a Bookpublisher
     * @example
     * // Get one Bookpublisher
     * const bookpublisher = await prisma.bookpublisher.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends bookpublisherFindFirstOrThrowArgs>(args?: SelectSubset<T, bookpublisherFindFirstOrThrowArgs<ExtArgs>>): Prisma__bookpublisherClient<$Result.GetResult<Prisma.$bookpublisherPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bookpublishers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookpublisherFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bookpublishers
     * const bookpublishers = await prisma.bookpublisher.findMany()
     * 
     * // Get first 10 Bookpublishers
     * const bookpublishers = await prisma.bookpublisher.findMany({ take: 10 })
     * 
     * // Only select the `bookpublisher_id`
     * const bookpublisherWithBookpublisher_idOnly = await prisma.bookpublisher.findMany({ select: { bookpublisher_id: true } })
     * 
     */
    findMany<T extends bookpublisherFindManyArgs>(args?: SelectSubset<T, bookpublisherFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bookpublisherPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Bookpublisher.
     * @param {bookpublisherCreateArgs} args - Arguments to create a Bookpublisher.
     * @example
     * // Create one Bookpublisher
     * const Bookpublisher = await prisma.bookpublisher.create({
     *   data: {
     *     // ... data to create a Bookpublisher
     *   }
     * })
     * 
     */
    create<T extends bookpublisherCreateArgs>(args: SelectSubset<T, bookpublisherCreateArgs<ExtArgs>>): Prisma__bookpublisherClient<$Result.GetResult<Prisma.$bookpublisherPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bookpublishers.
     * @param {bookpublisherCreateManyArgs} args - Arguments to create many Bookpublishers.
     * @example
     * // Create many Bookpublishers
     * const bookpublisher = await prisma.bookpublisher.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends bookpublisherCreateManyArgs>(args?: SelectSubset<T, bookpublisherCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bookpublishers and returns the data saved in the database.
     * @param {bookpublisherCreateManyAndReturnArgs} args - Arguments to create many Bookpublishers.
     * @example
     * // Create many Bookpublishers
     * const bookpublisher = await prisma.bookpublisher.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bookpublishers and only return the `bookpublisher_id`
     * const bookpublisherWithBookpublisher_idOnly = await prisma.bookpublisher.createManyAndReturn({
     *   select: { bookpublisher_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends bookpublisherCreateManyAndReturnArgs>(args?: SelectSubset<T, bookpublisherCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bookpublisherPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Bookpublisher.
     * @param {bookpublisherDeleteArgs} args - Arguments to delete one Bookpublisher.
     * @example
     * // Delete one Bookpublisher
     * const Bookpublisher = await prisma.bookpublisher.delete({
     *   where: {
     *     // ... filter to delete one Bookpublisher
     *   }
     * })
     * 
     */
    delete<T extends bookpublisherDeleteArgs>(args: SelectSubset<T, bookpublisherDeleteArgs<ExtArgs>>): Prisma__bookpublisherClient<$Result.GetResult<Prisma.$bookpublisherPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Bookpublisher.
     * @param {bookpublisherUpdateArgs} args - Arguments to update one Bookpublisher.
     * @example
     * // Update one Bookpublisher
     * const bookpublisher = await prisma.bookpublisher.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends bookpublisherUpdateArgs>(args: SelectSubset<T, bookpublisherUpdateArgs<ExtArgs>>): Prisma__bookpublisherClient<$Result.GetResult<Prisma.$bookpublisherPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bookpublishers.
     * @param {bookpublisherDeleteManyArgs} args - Arguments to filter Bookpublishers to delete.
     * @example
     * // Delete a few Bookpublishers
     * const { count } = await prisma.bookpublisher.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends bookpublisherDeleteManyArgs>(args?: SelectSubset<T, bookpublisherDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookpublishers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookpublisherUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bookpublishers
     * const bookpublisher = await prisma.bookpublisher.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends bookpublisherUpdateManyArgs>(args: SelectSubset<T, bookpublisherUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookpublishers and returns the data updated in the database.
     * @param {bookpublisherUpdateManyAndReturnArgs} args - Arguments to update many Bookpublishers.
     * @example
     * // Update many Bookpublishers
     * const bookpublisher = await prisma.bookpublisher.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Bookpublishers and only return the `bookpublisher_id`
     * const bookpublisherWithBookpublisher_idOnly = await prisma.bookpublisher.updateManyAndReturn({
     *   select: { bookpublisher_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends bookpublisherUpdateManyAndReturnArgs>(args: SelectSubset<T, bookpublisherUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bookpublisherPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Bookpublisher.
     * @param {bookpublisherUpsertArgs} args - Arguments to update or create a Bookpublisher.
     * @example
     * // Update or create a Bookpublisher
     * const bookpublisher = await prisma.bookpublisher.upsert({
     *   create: {
     *     // ... data to create a Bookpublisher
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bookpublisher we want to update
     *   }
     * })
     */
    upsert<T extends bookpublisherUpsertArgs>(args: SelectSubset<T, bookpublisherUpsertArgs<ExtArgs>>): Prisma__bookpublisherClient<$Result.GetResult<Prisma.$bookpublisherPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bookpublishers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookpublisherCountArgs} args - Arguments to filter Bookpublishers to count.
     * @example
     * // Count the number of Bookpublishers
     * const count = await prisma.bookpublisher.count({
     *   where: {
     *     // ... the filter for the Bookpublishers we want to count
     *   }
     * })
    **/
    count<T extends bookpublisherCountArgs>(
      args?: Subset<T, bookpublisherCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookpublisherCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bookpublisher.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookpublisherAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BookpublisherAggregateArgs>(args: Subset<T, BookpublisherAggregateArgs>): Prisma.PrismaPromise<GetBookpublisherAggregateType<T>>

    /**
     * Group by Bookpublisher.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookpublisherGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends bookpublisherGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: bookpublisherGroupByArgs['orderBy'] }
        : { orderBy?: bookpublisherGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, bookpublisherGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookpublisherGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the bookpublisher model
   */
  readonly fields: bookpublisherFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for bookpublisher.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__bookpublisherClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    book<T extends bookDefaultArgs<ExtArgs> = {}>(args?: Subset<T, bookDefaultArgs<ExtArgs>>): Prisma__bookClient<$Result.GetResult<Prisma.$bookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    publication<T extends publicationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, publicationDefaultArgs<ExtArgs>>): Prisma__publicationClient<$Result.GetResult<Prisma.$publicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the bookpublisher model
   */
  interface bookpublisherFieldRefs {
    readonly bookpublisher_id: FieldRef<"bookpublisher", 'Int'>
    readonly book_id: FieldRef<"bookpublisher", 'Int'>
    readonly publisher_id: FieldRef<"bookpublisher", 'Int'>
    readonly dayofarrivaltolibrary: FieldRef<"bookpublisher", 'DateTime'>
    readonly createdat: FieldRef<"bookpublisher", 'DateTime'>
    readonly updatedat: FieldRef<"bookpublisher", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * bookpublisher findUnique
   */
  export type bookpublisherFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookpublisher
     */
    select?: bookpublisherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookpublisher
     */
    omit?: bookpublisherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookpublisherInclude<ExtArgs> | null
    /**
     * Filter, which bookpublisher to fetch.
     */
    where: bookpublisherWhereUniqueInput
  }

  /**
   * bookpublisher findUniqueOrThrow
   */
  export type bookpublisherFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookpublisher
     */
    select?: bookpublisherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookpublisher
     */
    omit?: bookpublisherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookpublisherInclude<ExtArgs> | null
    /**
     * Filter, which bookpublisher to fetch.
     */
    where: bookpublisherWhereUniqueInput
  }

  /**
   * bookpublisher findFirst
   */
  export type bookpublisherFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookpublisher
     */
    select?: bookpublisherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookpublisher
     */
    omit?: bookpublisherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookpublisherInclude<ExtArgs> | null
    /**
     * Filter, which bookpublisher to fetch.
     */
    where?: bookpublisherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bookpublishers to fetch.
     */
    orderBy?: bookpublisherOrderByWithRelationInput | bookpublisherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for bookpublishers.
     */
    cursor?: bookpublisherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bookpublishers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bookpublishers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of bookpublishers.
     */
    distinct?: BookpublisherScalarFieldEnum | BookpublisherScalarFieldEnum[]
  }

  /**
   * bookpublisher findFirstOrThrow
   */
  export type bookpublisherFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookpublisher
     */
    select?: bookpublisherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookpublisher
     */
    omit?: bookpublisherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookpublisherInclude<ExtArgs> | null
    /**
     * Filter, which bookpublisher to fetch.
     */
    where?: bookpublisherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bookpublishers to fetch.
     */
    orderBy?: bookpublisherOrderByWithRelationInput | bookpublisherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for bookpublishers.
     */
    cursor?: bookpublisherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bookpublishers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bookpublishers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of bookpublishers.
     */
    distinct?: BookpublisherScalarFieldEnum | BookpublisherScalarFieldEnum[]
  }

  /**
   * bookpublisher findMany
   */
  export type bookpublisherFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookpublisher
     */
    select?: bookpublisherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookpublisher
     */
    omit?: bookpublisherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookpublisherInclude<ExtArgs> | null
    /**
     * Filter, which bookpublishers to fetch.
     */
    where?: bookpublisherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bookpublishers to fetch.
     */
    orderBy?: bookpublisherOrderByWithRelationInput | bookpublisherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing bookpublishers.
     */
    cursor?: bookpublisherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bookpublishers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bookpublishers.
     */
    skip?: number
    distinct?: BookpublisherScalarFieldEnum | BookpublisherScalarFieldEnum[]
  }

  /**
   * bookpublisher create
   */
  export type bookpublisherCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookpublisher
     */
    select?: bookpublisherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookpublisher
     */
    omit?: bookpublisherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookpublisherInclude<ExtArgs> | null
    /**
     * The data needed to create a bookpublisher.
     */
    data: XOR<bookpublisherCreateInput, bookpublisherUncheckedCreateInput>
  }

  /**
   * bookpublisher createMany
   */
  export type bookpublisherCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many bookpublishers.
     */
    data: bookpublisherCreateManyInput | bookpublisherCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * bookpublisher createManyAndReturn
   */
  export type bookpublisherCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookpublisher
     */
    select?: bookpublisherSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the bookpublisher
     */
    omit?: bookpublisherOmit<ExtArgs> | null
    /**
     * The data used to create many bookpublishers.
     */
    data: bookpublisherCreateManyInput | bookpublisherCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookpublisherIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * bookpublisher update
   */
  export type bookpublisherUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookpublisher
     */
    select?: bookpublisherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookpublisher
     */
    omit?: bookpublisherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookpublisherInclude<ExtArgs> | null
    /**
     * The data needed to update a bookpublisher.
     */
    data: XOR<bookpublisherUpdateInput, bookpublisherUncheckedUpdateInput>
    /**
     * Choose, which bookpublisher to update.
     */
    where: bookpublisherWhereUniqueInput
  }

  /**
   * bookpublisher updateMany
   */
  export type bookpublisherUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update bookpublishers.
     */
    data: XOR<bookpublisherUpdateManyMutationInput, bookpublisherUncheckedUpdateManyInput>
    /**
     * Filter which bookpublishers to update
     */
    where?: bookpublisherWhereInput
    /**
     * Limit how many bookpublishers to update.
     */
    limit?: number
  }

  /**
   * bookpublisher updateManyAndReturn
   */
  export type bookpublisherUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookpublisher
     */
    select?: bookpublisherSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the bookpublisher
     */
    omit?: bookpublisherOmit<ExtArgs> | null
    /**
     * The data used to update bookpublishers.
     */
    data: XOR<bookpublisherUpdateManyMutationInput, bookpublisherUncheckedUpdateManyInput>
    /**
     * Filter which bookpublishers to update
     */
    where?: bookpublisherWhereInput
    /**
     * Limit how many bookpublishers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookpublisherIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * bookpublisher upsert
   */
  export type bookpublisherUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookpublisher
     */
    select?: bookpublisherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookpublisher
     */
    omit?: bookpublisherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookpublisherInclude<ExtArgs> | null
    /**
     * The filter to search for the bookpublisher to update in case it exists.
     */
    where: bookpublisherWhereUniqueInput
    /**
     * In case the bookpublisher found by the `where` argument doesn't exist, create a new bookpublisher with this data.
     */
    create: XOR<bookpublisherCreateInput, bookpublisherUncheckedCreateInput>
    /**
     * In case the bookpublisher was found with the provided `where` argument, update it with this data.
     */
    update: XOR<bookpublisherUpdateInput, bookpublisherUncheckedUpdateInput>
  }

  /**
   * bookpublisher delete
   */
  export type bookpublisherDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookpublisher
     */
    select?: bookpublisherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookpublisher
     */
    omit?: bookpublisherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookpublisherInclude<ExtArgs> | null
    /**
     * Filter which bookpublisher to delete.
     */
    where: bookpublisherWhereUniqueInput
  }

  /**
   * bookpublisher deleteMany
   */
  export type bookpublisherDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which bookpublishers to delete
     */
    where?: bookpublisherWhereInput
    /**
     * Limit how many bookpublishers to delete.
     */
    limit?: number
  }

  /**
   * bookpublisher without action
   */
  export type bookpublisherDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookpublisher
     */
    select?: bookpublisherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookpublisher
     */
    omit?: bookpublisherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookpublisherInclude<ExtArgs> | null
  }


  /**
   * Model person
   */

  export type AggregatePerson = {
    _count: PersonCountAggregateOutputType | null
    _avg: PersonAvgAggregateOutputType | null
    _sum: PersonSumAggregateOutputType | null
    _min: PersonMinAggregateOutputType | null
    _max: PersonMaxAggregateOutputType | null
  }

  export type PersonAvgAggregateOutputType = {
    person_id: number | null
  }

  export type PersonSumAggregateOutputType = {
    person_id: number | null
  }

  export type PersonMinAggregateOutputType = {
    person_id: number | null
    fullname: string | null
    phone: string | null
    email: string | null
    address: string | null
    createdat: Date | null
    updatedat: Date | null
  }

  export type PersonMaxAggregateOutputType = {
    person_id: number | null
    fullname: string | null
    phone: string | null
    email: string | null
    address: string | null
    createdat: Date | null
    updatedat: Date | null
  }

  export type PersonCountAggregateOutputType = {
    person_id: number
    fullname: number
    phone: number
    email: number
    address: number
    createdat: number
    updatedat: number
    _all: number
  }


  export type PersonAvgAggregateInputType = {
    person_id?: true
  }

  export type PersonSumAggregateInputType = {
    person_id?: true
  }

  export type PersonMinAggregateInputType = {
    person_id?: true
    fullname?: true
    phone?: true
    email?: true
    address?: true
    createdat?: true
    updatedat?: true
  }

  export type PersonMaxAggregateInputType = {
    person_id?: true
    fullname?: true
    phone?: true
    email?: true
    address?: true
    createdat?: true
    updatedat?: true
  }

  export type PersonCountAggregateInputType = {
    person_id?: true
    fullname?: true
    phone?: true
    email?: true
    address?: true
    createdat?: true
    updatedat?: true
    _all?: true
  }

  export type PersonAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which person to aggregate.
     */
    where?: personWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of people to fetch.
     */
    orderBy?: personOrderByWithRelationInput | personOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: personWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` people from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` people.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned people
    **/
    _count?: true | PersonCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PersonAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PersonSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PersonMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PersonMaxAggregateInputType
  }

  export type GetPersonAggregateType<T extends PersonAggregateArgs> = {
        [P in keyof T & keyof AggregatePerson]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePerson[P]>
      : GetScalarType<T[P], AggregatePerson[P]>
  }




  export type personGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: personWhereInput
    orderBy?: personOrderByWithAggregationInput | personOrderByWithAggregationInput[]
    by: PersonScalarFieldEnum[] | PersonScalarFieldEnum
    having?: personScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PersonCountAggregateInputType | true
    _avg?: PersonAvgAggregateInputType
    _sum?: PersonSumAggregateInputType
    _min?: PersonMinAggregateInputType
    _max?: PersonMaxAggregateInputType
  }

  export type PersonGroupByOutputType = {
    person_id: number
    fullname: string
    phone: string
    email: string
    address: string
    createdat: Date
    updatedat: Date
    _count: PersonCountAggregateOutputType | null
    _avg: PersonAvgAggregateOutputType | null
    _sum: PersonSumAggregateOutputType | null
    _min: PersonMinAggregateOutputType | null
    _max: PersonMaxAggregateOutputType | null
  }

  type GetPersonGroupByPayload<T extends personGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PersonGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PersonGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PersonGroupByOutputType[P]>
            : GetScalarType<T[P], PersonGroupByOutputType[P]>
        }
      >
    >


  export type personSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    person_id?: boolean
    fullname?: boolean
    phone?: boolean
    email?: boolean
    address?: boolean
    createdat?: boolean
    updatedat?: boolean
    author?: boolean | person$authorArgs<ExtArgs>
    member?: boolean | person$memberArgs<ExtArgs>
    staff?: boolean | person$staffArgs<ExtArgs>
    _count?: boolean | PersonCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["person"]>

  export type personSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    person_id?: boolean
    fullname?: boolean
    phone?: boolean
    email?: boolean
    address?: boolean
    createdat?: boolean
    updatedat?: boolean
  }, ExtArgs["result"]["person"]>

  export type personSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    person_id?: boolean
    fullname?: boolean
    phone?: boolean
    email?: boolean
    address?: boolean
    createdat?: boolean
    updatedat?: boolean
  }, ExtArgs["result"]["person"]>

  export type personSelectScalar = {
    person_id?: boolean
    fullname?: boolean
    phone?: boolean
    email?: boolean
    address?: boolean
    createdat?: boolean
    updatedat?: boolean
  }

  export type personOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"person_id" | "fullname" | "phone" | "email" | "address" | "createdat" | "updatedat", ExtArgs["result"]["person"]>
  export type personInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | person$authorArgs<ExtArgs>
    member?: boolean | person$memberArgs<ExtArgs>
    staff?: boolean | person$staffArgs<ExtArgs>
    _count?: boolean | PersonCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type personIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type personIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $personPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "person"
    objects: {
      author: Prisma.$authorPayload<ExtArgs>[]
      member: Prisma.$memberPayload<ExtArgs>[]
      staff: Prisma.$staffPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      person_id: number
      fullname: string
      phone: string
      email: string
      address: string
      createdat: Date
      updatedat: Date
    }, ExtArgs["result"]["person"]>
    composites: {}
  }

  type personGetPayload<S extends boolean | null | undefined | personDefaultArgs> = $Result.GetResult<Prisma.$personPayload, S>

  type personCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<personFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PersonCountAggregateInputType | true
    }

  export interface personDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['person'], meta: { name: 'person' } }
    /**
     * Find zero or one Person that matches the filter.
     * @param {personFindUniqueArgs} args - Arguments to find a Person
     * @example
     * // Get one Person
     * const person = await prisma.person.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends personFindUniqueArgs>(args: SelectSubset<T, personFindUniqueArgs<ExtArgs>>): Prisma__personClient<$Result.GetResult<Prisma.$personPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Person that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {personFindUniqueOrThrowArgs} args - Arguments to find a Person
     * @example
     * // Get one Person
     * const person = await prisma.person.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends personFindUniqueOrThrowArgs>(args: SelectSubset<T, personFindUniqueOrThrowArgs<ExtArgs>>): Prisma__personClient<$Result.GetResult<Prisma.$personPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Person that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {personFindFirstArgs} args - Arguments to find a Person
     * @example
     * // Get one Person
     * const person = await prisma.person.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends personFindFirstArgs>(args?: SelectSubset<T, personFindFirstArgs<ExtArgs>>): Prisma__personClient<$Result.GetResult<Prisma.$personPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Person that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {personFindFirstOrThrowArgs} args - Arguments to find a Person
     * @example
     * // Get one Person
     * const person = await prisma.person.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends personFindFirstOrThrowArgs>(args?: SelectSubset<T, personFindFirstOrThrowArgs<ExtArgs>>): Prisma__personClient<$Result.GetResult<Prisma.$personPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more People that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {personFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all People
     * const people = await prisma.person.findMany()
     * 
     * // Get first 10 People
     * const people = await prisma.person.findMany({ take: 10 })
     * 
     * // Only select the `person_id`
     * const personWithPerson_idOnly = await prisma.person.findMany({ select: { person_id: true } })
     * 
     */
    findMany<T extends personFindManyArgs>(args?: SelectSubset<T, personFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$personPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Person.
     * @param {personCreateArgs} args - Arguments to create a Person.
     * @example
     * // Create one Person
     * const Person = await prisma.person.create({
     *   data: {
     *     // ... data to create a Person
     *   }
     * })
     * 
     */
    create<T extends personCreateArgs>(args: SelectSubset<T, personCreateArgs<ExtArgs>>): Prisma__personClient<$Result.GetResult<Prisma.$personPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many People.
     * @param {personCreateManyArgs} args - Arguments to create many People.
     * @example
     * // Create many People
     * const person = await prisma.person.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends personCreateManyArgs>(args?: SelectSubset<T, personCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many People and returns the data saved in the database.
     * @param {personCreateManyAndReturnArgs} args - Arguments to create many People.
     * @example
     * // Create many People
     * const person = await prisma.person.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many People and only return the `person_id`
     * const personWithPerson_idOnly = await prisma.person.createManyAndReturn({
     *   select: { person_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends personCreateManyAndReturnArgs>(args?: SelectSubset<T, personCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$personPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Person.
     * @param {personDeleteArgs} args - Arguments to delete one Person.
     * @example
     * // Delete one Person
     * const Person = await prisma.person.delete({
     *   where: {
     *     // ... filter to delete one Person
     *   }
     * })
     * 
     */
    delete<T extends personDeleteArgs>(args: SelectSubset<T, personDeleteArgs<ExtArgs>>): Prisma__personClient<$Result.GetResult<Prisma.$personPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Person.
     * @param {personUpdateArgs} args - Arguments to update one Person.
     * @example
     * // Update one Person
     * const person = await prisma.person.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends personUpdateArgs>(args: SelectSubset<T, personUpdateArgs<ExtArgs>>): Prisma__personClient<$Result.GetResult<Prisma.$personPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more People.
     * @param {personDeleteManyArgs} args - Arguments to filter People to delete.
     * @example
     * // Delete a few People
     * const { count } = await prisma.person.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends personDeleteManyArgs>(args?: SelectSubset<T, personDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more People.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {personUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many People
     * const person = await prisma.person.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends personUpdateManyArgs>(args: SelectSubset<T, personUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more People and returns the data updated in the database.
     * @param {personUpdateManyAndReturnArgs} args - Arguments to update many People.
     * @example
     * // Update many People
     * const person = await prisma.person.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more People and only return the `person_id`
     * const personWithPerson_idOnly = await prisma.person.updateManyAndReturn({
     *   select: { person_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends personUpdateManyAndReturnArgs>(args: SelectSubset<T, personUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$personPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Person.
     * @param {personUpsertArgs} args - Arguments to update or create a Person.
     * @example
     * // Update or create a Person
     * const person = await prisma.person.upsert({
     *   create: {
     *     // ... data to create a Person
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Person we want to update
     *   }
     * })
     */
    upsert<T extends personUpsertArgs>(args: SelectSubset<T, personUpsertArgs<ExtArgs>>): Prisma__personClient<$Result.GetResult<Prisma.$personPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of People.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {personCountArgs} args - Arguments to filter People to count.
     * @example
     * // Count the number of People
     * const count = await prisma.person.count({
     *   where: {
     *     // ... the filter for the People we want to count
     *   }
     * })
    **/
    count<T extends personCountArgs>(
      args?: Subset<T, personCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PersonCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Person.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PersonAggregateArgs>(args: Subset<T, PersonAggregateArgs>): Prisma.PrismaPromise<GetPersonAggregateType<T>>

    /**
     * Group by Person.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {personGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends personGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: personGroupByArgs['orderBy'] }
        : { orderBy?: personGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, personGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPersonGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the person model
   */
  readonly fields: personFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for person.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__personClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    author<T extends person$authorArgs<ExtArgs> = {}>(args?: Subset<T, person$authorArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$authorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    member<T extends person$memberArgs<ExtArgs> = {}>(args?: Subset<T, person$memberArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$memberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    staff<T extends person$staffArgs<ExtArgs> = {}>(args?: Subset<T, person$staffArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$staffPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the person model
   */
  interface personFieldRefs {
    readonly person_id: FieldRef<"person", 'Int'>
    readonly fullname: FieldRef<"person", 'String'>
    readonly phone: FieldRef<"person", 'String'>
    readonly email: FieldRef<"person", 'String'>
    readonly address: FieldRef<"person", 'String'>
    readonly createdat: FieldRef<"person", 'DateTime'>
    readonly updatedat: FieldRef<"person", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * person findUnique
   */
  export type personFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the person
     */
    select?: personSelect<ExtArgs> | null
    /**
     * Omit specific fields from the person
     */
    omit?: personOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: personInclude<ExtArgs> | null
    /**
     * Filter, which person to fetch.
     */
    where: personWhereUniqueInput
  }

  /**
   * person findUniqueOrThrow
   */
  export type personFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the person
     */
    select?: personSelect<ExtArgs> | null
    /**
     * Omit specific fields from the person
     */
    omit?: personOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: personInclude<ExtArgs> | null
    /**
     * Filter, which person to fetch.
     */
    where: personWhereUniqueInput
  }

  /**
   * person findFirst
   */
  export type personFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the person
     */
    select?: personSelect<ExtArgs> | null
    /**
     * Omit specific fields from the person
     */
    omit?: personOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: personInclude<ExtArgs> | null
    /**
     * Filter, which person to fetch.
     */
    where?: personWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of people to fetch.
     */
    orderBy?: personOrderByWithRelationInput | personOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for people.
     */
    cursor?: personWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` people from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` people.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of people.
     */
    distinct?: PersonScalarFieldEnum | PersonScalarFieldEnum[]
  }

  /**
   * person findFirstOrThrow
   */
  export type personFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the person
     */
    select?: personSelect<ExtArgs> | null
    /**
     * Omit specific fields from the person
     */
    omit?: personOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: personInclude<ExtArgs> | null
    /**
     * Filter, which person to fetch.
     */
    where?: personWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of people to fetch.
     */
    orderBy?: personOrderByWithRelationInput | personOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for people.
     */
    cursor?: personWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` people from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` people.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of people.
     */
    distinct?: PersonScalarFieldEnum | PersonScalarFieldEnum[]
  }

  /**
   * person findMany
   */
  export type personFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the person
     */
    select?: personSelect<ExtArgs> | null
    /**
     * Omit specific fields from the person
     */
    omit?: personOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: personInclude<ExtArgs> | null
    /**
     * Filter, which people to fetch.
     */
    where?: personWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of people to fetch.
     */
    orderBy?: personOrderByWithRelationInput | personOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing people.
     */
    cursor?: personWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` people from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` people.
     */
    skip?: number
    distinct?: PersonScalarFieldEnum | PersonScalarFieldEnum[]
  }

  /**
   * person create
   */
  export type personCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the person
     */
    select?: personSelect<ExtArgs> | null
    /**
     * Omit specific fields from the person
     */
    omit?: personOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: personInclude<ExtArgs> | null
    /**
     * The data needed to create a person.
     */
    data: XOR<personCreateInput, personUncheckedCreateInput>
  }

  /**
   * person createMany
   */
  export type personCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many people.
     */
    data: personCreateManyInput | personCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * person createManyAndReturn
   */
  export type personCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the person
     */
    select?: personSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the person
     */
    omit?: personOmit<ExtArgs> | null
    /**
     * The data used to create many people.
     */
    data: personCreateManyInput | personCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * person update
   */
  export type personUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the person
     */
    select?: personSelect<ExtArgs> | null
    /**
     * Omit specific fields from the person
     */
    omit?: personOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: personInclude<ExtArgs> | null
    /**
     * The data needed to update a person.
     */
    data: XOR<personUpdateInput, personUncheckedUpdateInput>
    /**
     * Choose, which person to update.
     */
    where: personWhereUniqueInput
  }

  /**
   * person updateMany
   */
  export type personUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update people.
     */
    data: XOR<personUpdateManyMutationInput, personUncheckedUpdateManyInput>
    /**
     * Filter which people to update
     */
    where?: personWhereInput
    /**
     * Limit how many people to update.
     */
    limit?: number
  }

  /**
   * person updateManyAndReturn
   */
  export type personUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the person
     */
    select?: personSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the person
     */
    omit?: personOmit<ExtArgs> | null
    /**
     * The data used to update people.
     */
    data: XOR<personUpdateManyMutationInput, personUncheckedUpdateManyInput>
    /**
     * Filter which people to update
     */
    where?: personWhereInput
    /**
     * Limit how many people to update.
     */
    limit?: number
  }

  /**
   * person upsert
   */
  export type personUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the person
     */
    select?: personSelect<ExtArgs> | null
    /**
     * Omit specific fields from the person
     */
    omit?: personOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: personInclude<ExtArgs> | null
    /**
     * The filter to search for the person to update in case it exists.
     */
    where: personWhereUniqueInput
    /**
     * In case the person found by the `where` argument doesn't exist, create a new person with this data.
     */
    create: XOR<personCreateInput, personUncheckedCreateInput>
    /**
     * In case the person was found with the provided `where` argument, update it with this data.
     */
    update: XOR<personUpdateInput, personUncheckedUpdateInput>
  }

  /**
   * person delete
   */
  export type personDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the person
     */
    select?: personSelect<ExtArgs> | null
    /**
     * Omit specific fields from the person
     */
    omit?: personOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: personInclude<ExtArgs> | null
    /**
     * Filter which person to delete.
     */
    where: personWhereUniqueInput
  }

  /**
   * person deleteMany
   */
  export type personDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which people to delete
     */
    where?: personWhereInput
    /**
     * Limit how many people to delete.
     */
    limit?: number
  }

  /**
   * person.author
   */
  export type person$authorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the author
     */
    select?: authorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the author
     */
    omit?: authorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authorInclude<ExtArgs> | null
    where?: authorWhereInput
    orderBy?: authorOrderByWithRelationInput | authorOrderByWithRelationInput[]
    cursor?: authorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuthorScalarFieldEnum | AuthorScalarFieldEnum[]
  }

  /**
   * person.member
   */
  export type person$memberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the member
     */
    select?: memberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the member
     */
    omit?: memberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: memberInclude<ExtArgs> | null
    where?: memberWhereInput
    orderBy?: memberOrderByWithRelationInput | memberOrderByWithRelationInput[]
    cursor?: memberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MemberScalarFieldEnum | MemberScalarFieldEnum[]
  }

  /**
   * person.staff
   */
  export type person$staffArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staff
     */
    select?: staffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the staff
     */
    omit?: staffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: staffInclude<ExtArgs> | null
    where?: staffWhereInput
    orderBy?: staffOrderByWithRelationInput | staffOrderByWithRelationInput[]
    cursor?: staffWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StaffScalarFieldEnum | StaffScalarFieldEnum[]
  }

  /**
   * person without action
   */
  export type personDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the person
     */
    select?: personSelect<ExtArgs> | null
    /**
     * Omit specific fields from the person
     */
    omit?: personOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: personInclude<ExtArgs> | null
  }


  /**
   * Model publication
   */

  export type AggregatePublication = {
    _count: PublicationCountAggregateOutputType | null
    _avg: PublicationAvgAggregateOutputType | null
    _sum: PublicationSumAggregateOutputType | null
    _min: PublicationMinAggregateOutputType | null
    _max: PublicationMaxAggregateOutputType | null
  }

  export type PublicationAvgAggregateOutputType = {
    publication_id: number | null
  }

  export type PublicationSumAggregateOutputType = {
    publication_id: number | null
  }

  export type PublicationMinAggregateOutputType = {
    publication_id: number | null
    title: string | null
    dateofestablishment: Date | null
    createdat: Date | null
    updatedat: Date | null
  }

  export type PublicationMaxAggregateOutputType = {
    publication_id: number | null
    title: string | null
    dateofestablishment: Date | null
    createdat: Date | null
    updatedat: Date | null
  }

  export type PublicationCountAggregateOutputType = {
    publication_id: number
    title: number
    dateofestablishment: number
    createdat: number
    updatedat: number
    _all: number
  }


  export type PublicationAvgAggregateInputType = {
    publication_id?: true
  }

  export type PublicationSumAggregateInputType = {
    publication_id?: true
  }

  export type PublicationMinAggregateInputType = {
    publication_id?: true
    title?: true
    dateofestablishment?: true
    createdat?: true
    updatedat?: true
  }

  export type PublicationMaxAggregateInputType = {
    publication_id?: true
    title?: true
    dateofestablishment?: true
    createdat?: true
    updatedat?: true
  }

  export type PublicationCountAggregateInputType = {
    publication_id?: true
    title?: true
    dateofestablishment?: true
    createdat?: true
    updatedat?: true
    _all?: true
  }

  export type PublicationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which publication to aggregate.
     */
    where?: publicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of publications to fetch.
     */
    orderBy?: publicationOrderByWithRelationInput | publicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: publicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` publications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` publications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned publications
    **/
    _count?: true | PublicationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PublicationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PublicationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PublicationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PublicationMaxAggregateInputType
  }

  export type GetPublicationAggregateType<T extends PublicationAggregateArgs> = {
        [P in keyof T & keyof AggregatePublication]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePublication[P]>
      : GetScalarType<T[P], AggregatePublication[P]>
  }




  export type publicationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: publicationWhereInput
    orderBy?: publicationOrderByWithAggregationInput | publicationOrderByWithAggregationInput[]
    by: PublicationScalarFieldEnum[] | PublicationScalarFieldEnum
    having?: publicationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PublicationCountAggregateInputType | true
    _avg?: PublicationAvgAggregateInputType
    _sum?: PublicationSumAggregateInputType
    _min?: PublicationMinAggregateInputType
    _max?: PublicationMaxAggregateInputType
  }

  export type PublicationGroupByOutputType = {
    publication_id: number
    title: string
    dateofestablishment: Date
    createdat: Date
    updatedat: Date
    _count: PublicationCountAggregateOutputType | null
    _avg: PublicationAvgAggregateOutputType | null
    _sum: PublicationSumAggregateOutputType | null
    _min: PublicationMinAggregateOutputType | null
    _max: PublicationMaxAggregateOutputType | null
  }

  type GetPublicationGroupByPayload<T extends publicationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PublicationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PublicationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PublicationGroupByOutputType[P]>
            : GetScalarType<T[P], PublicationGroupByOutputType[P]>
        }
      >
    >


  export type publicationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    publication_id?: boolean
    title?: boolean
    dateofestablishment?: boolean
    createdat?: boolean
    updatedat?: boolean
    bookpublisher?: boolean | publication$bookpublisherArgs<ExtArgs>
    _count?: boolean | PublicationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["publication"]>

  export type publicationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    publication_id?: boolean
    title?: boolean
    dateofestablishment?: boolean
    createdat?: boolean
    updatedat?: boolean
  }, ExtArgs["result"]["publication"]>

  export type publicationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    publication_id?: boolean
    title?: boolean
    dateofestablishment?: boolean
    createdat?: boolean
    updatedat?: boolean
  }, ExtArgs["result"]["publication"]>

  export type publicationSelectScalar = {
    publication_id?: boolean
    title?: boolean
    dateofestablishment?: boolean
    createdat?: boolean
    updatedat?: boolean
  }

  export type publicationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"publication_id" | "title" | "dateofestablishment" | "createdat" | "updatedat", ExtArgs["result"]["publication"]>
  export type publicationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookpublisher?: boolean | publication$bookpublisherArgs<ExtArgs>
    _count?: boolean | PublicationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type publicationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type publicationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $publicationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "publication"
    objects: {
      bookpublisher: Prisma.$bookpublisherPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      publication_id: number
      title: string
      dateofestablishment: Date
      createdat: Date
      updatedat: Date
    }, ExtArgs["result"]["publication"]>
    composites: {}
  }

  type publicationGetPayload<S extends boolean | null | undefined | publicationDefaultArgs> = $Result.GetResult<Prisma.$publicationPayload, S>

  type publicationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<publicationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PublicationCountAggregateInputType | true
    }

  export interface publicationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['publication'], meta: { name: 'publication' } }
    /**
     * Find zero or one Publication that matches the filter.
     * @param {publicationFindUniqueArgs} args - Arguments to find a Publication
     * @example
     * // Get one Publication
     * const publication = await prisma.publication.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends publicationFindUniqueArgs>(args: SelectSubset<T, publicationFindUniqueArgs<ExtArgs>>): Prisma__publicationClient<$Result.GetResult<Prisma.$publicationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Publication that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {publicationFindUniqueOrThrowArgs} args - Arguments to find a Publication
     * @example
     * // Get one Publication
     * const publication = await prisma.publication.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends publicationFindUniqueOrThrowArgs>(args: SelectSubset<T, publicationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__publicationClient<$Result.GetResult<Prisma.$publicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Publication that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {publicationFindFirstArgs} args - Arguments to find a Publication
     * @example
     * // Get one Publication
     * const publication = await prisma.publication.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends publicationFindFirstArgs>(args?: SelectSubset<T, publicationFindFirstArgs<ExtArgs>>): Prisma__publicationClient<$Result.GetResult<Prisma.$publicationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Publication that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {publicationFindFirstOrThrowArgs} args - Arguments to find a Publication
     * @example
     * // Get one Publication
     * const publication = await prisma.publication.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends publicationFindFirstOrThrowArgs>(args?: SelectSubset<T, publicationFindFirstOrThrowArgs<ExtArgs>>): Prisma__publicationClient<$Result.GetResult<Prisma.$publicationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Publications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {publicationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Publications
     * const publications = await prisma.publication.findMany()
     * 
     * // Get first 10 Publications
     * const publications = await prisma.publication.findMany({ take: 10 })
     * 
     * // Only select the `publication_id`
     * const publicationWithPublication_idOnly = await prisma.publication.findMany({ select: { publication_id: true } })
     * 
     */
    findMany<T extends publicationFindManyArgs>(args?: SelectSubset<T, publicationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$publicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Publication.
     * @param {publicationCreateArgs} args - Arguments to create a Publication.
     * @example
     * // Create one Publication
     * const Publication = await prisma.publication.create({
     *   data: {
     *     // ... data to create a Publication
     *   }
     * })
     * 
     */
    create<T extends publicationCreateArgs>(args: SelectSubset<T, publicationCreateArgs<ExtArgs>>): Prisma__publicationClient<$Result.GetResult<Prisma.$publicationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Publications.
     * @param {publicationCreateManyArgs} args - Arguments to create many Publications.
     * @example
     * // Create many Publications
     * const publication = await prisma.publication.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends publicationCreateManyArgs>(args?: SelectSubset<T, publicationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Publications and returns the data saved in the database.
     * @param {publicationCreateManyAndReturnArgs} args - Arguments to create many Publications.
     * @example
     * // Create many Publications
     * const publication = await prisma.publication.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Publications and only return the `publication_id`
     * const publicationWithPublication_idOnly = await prisma.publication.createManyAndReturn({
     *   select: { publication_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends publicationCreateManyAndReturnArgs>(args?: SelectSubset<T, publicationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$publicationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Publication.
     * @param {publicationDeleteArgs} args - Arguments to delete one Publication.
     * @example
     * // Delete one Publication
     * const Publication = await prisma.publication.delete({
     *   where: {
     *     // ... filter to delete one Publication
     *   }
     * })
     * 
     */
    delete<T extends publicationDeleteArgs>(args: SelectSubset<T, publicationDeleteArgs<ExtArgs>>): Prisma__publicationClient<$Result.GetResult<Prisma.$publicationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Publication.
     * @param {publicationUpdateArgs} args - Arguments to update one Publication.
     * @example
     * // Update one Publication
     * const publication = await prisma.publication.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends publicationUpdateArgs>(args: SelectSubset<T, publicationUpdateArgs<ExtArgs>>): Prisma__publicationClient<$Result.GetResult<Prisma.$publicationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Publications.
     * @param {publicationDeleteManyArgs} args - Arguments to filter Publications to delete.
     * @example
     * // Delete a few Publications
     * const { count } = await prisma.publication.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends publicationDeleteManyArgs>(args?: SelectSubset<T, publicationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Publications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {publicationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Publications
     * const publication = await prisma.publication.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends publicationUpdateManyArgs>(args: SelectSubset<T, publicationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Publications and returns the data updated in the database.
     * @param {publicationUpdateManyAndReturnArgs} args - Arguments to update many Publications.
     * @example
     * // Update many Publications
     * const publication = await prisma.publication.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Publications and only return the `publication_id`
     * const publicationWithPublication_idOnly = await prisma.publication.updateManyAndReturn({
     *   select: { publication_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends publicationUpdateManyAndReturnArgs>(args: SelectSubset<T, publicationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$publicationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Publication.
     * @param {publicationUpsertArgs} args - Arguments to update or create a Publication.
     * @example
     * // Update or create a Publication
     * const publication = await prisma.publication.upsert({
     *   create: {
     *     // ... data to create a Publication
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Publication we want to update
     *   }
     * })
     */
    upsert<T extends publicationUpsertArgs>(args: SelectSubset<T, publicationUpsertArgs<ExtArgs>>): Prisma__publicationClient<$Result.GetResult<Prisma.$publicationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Publications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {publicationCountArgs} args - Arguments to filter Publications to count.
     * @example
     * // Count the number of Publications
     * const count = await prisma.publication.count({
     *   where: {
     *     // ... the filter for the Publications we want to count
     *   }
     * })
    **/
    count<T extends publicationCountArgs>(
      args?: Subset<T, publicationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PublicationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Publication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PublicationAggregateArgs>(args: Subset<T, PublicationAggregateArgs>): Prisma.PrismaPromise<GetPublicationAggregateType<T>>

    /**
     * Group by Publication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {publicationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends publicationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: publicationGroupByArgs['orderBy'] }
        : { orderBy?: publicationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, publicationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPublicationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the publication model
   */
  readonly fields: publicationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for publication.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__publicationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bookpublisher<T extends publication$bookpublisherArgs<ExtArgs> = {}>(args?: Subset<T, publication$bookpublisherArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bookpublisherPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the publication model
   */
  interface publicationFieldRefs {
    readonly publication_id: FieldRef<"publication", 'Int'>
    readonly title: FieldRef<"publication", 'String'>
    readonly dateofestablishment: FieldRef<"publication", 'DateTime'>
    readonly createdat: FieldRef<"publication", 'DateTime'>
    readonly updatedat: FieldRef<"publication", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * publication findUnique
   */
  export type publicationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the publication
     */
    select?: publicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the publication
     */
    omit?: publicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: publicationInclude<ExtArgs> | null
    /**
     * Filter, which publication to fetch.
     */
    where: publicationWhereUniqueInput
  }

  /**
   * publication findUniqueOrThrow
   */
  export type publicationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the publication
     */
    select?: publicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the publication
     */
    omit?: publicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: publicationInclude<ExtArgs> | null
    /**
     * Filter, which publication to fetch.
     */
    where: publicationWhereUniqueInput
  }

  /**
   * publication findFirst
   */
  export type publicationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the publication
     */
    select?: publicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the publication
     */
    omit?: publicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: publicationInclude<ExtArgs> | null
    /**
     * Filter, which publication to fetch.
     */
    where?: publicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of publications to fetch.
     */
    orderBy?: publicationOrderByWithRelationInput | publicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for publications.
     */
    cursor?: publicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` publications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` publications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of publications.
     */
    distinct?: PublicationScalarFieldEnum | PublicationScalarFieldEnum[]
  }

  /**
   * publication findFirstOrThrow
   */
  export type publicationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the publication
     */
    select?: publicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the publication
     */
    omit?: publicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: publicationInclude<ExtArgs> | null
    /**
     * Filter, which publication to fetch.
     */
    where?: publicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of publications to fetch.
     */
    orderBy?: publicationOrderByWithRelationInput | publicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for publications.
     */
    cursor?: publicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` publications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` publications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of publications.
     */
    distinct?: PublicationScalarFieldEnum | PublicationScalarFieldEnum[]
  }

  /**
   * publication findMany
   */
  export type publicationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the publication
     */
    select?: publicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the publication
     */
    omit?: publicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: publicationInclude<ExtArgs> | null
    /**
     * Filter, which publications to fetch.
     */
    where?: publicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of publications to fetch.
     */
    orderBy?: publicationOrderByWithRelationInput | publicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing publications.
     */
    cursor?: publicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` publications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` publications.
     */
    skip?: number
    distinct?: PublicationScalarFieldEnum | PublicationScalarFieldEnum[]
  }

  /**
   * publication create
   */
  export type publicationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the publication
     */
    select?: publicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the publication
     */
    omit?: publicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: publicationInclude<ExtArgs> | null
    /**
     * The data needed to create a publication.
     */
    data: XOR<publicationCreateInput, publicationUncheckedCreateInput>
  }

  /**
   * publication createMany
   */
  export type publicationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many publications.
     */
    data: publicationCreateManyInput | publicationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * publication createManyAndReturn
   */
  export type publicationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the publication
     */
    select?: publicationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the publication
     */
    omit?: publicationOmit<ExtArgs> | null
    /**
     * The data used to create many publications.
     */
    data: publicationCreateManyInput | publicationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * publication update
   */
  export type publicationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the publication
     */
    select?: publicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the publication
     */
    omit?: publicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: publicationInclude<ExtArgs> | null
    /**
     * The data needed to update a publication.
     */
    data: XOR<publicationUpdateInput, publicationUncheckedUpdateInput>
    /**
     * Choose, which publication to update.
     */
    where: publicationWhereUniqueInput
  }

  /**
   * publication updateMany
   */
  export type publicationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update publications.
     */
    data: XOR<publicationUpdateManyMutationInput, publicationUncheckedUpdateManyInput>
    /**
     * Filter which publications to update
     */
    where?: publicationWhereInput
    /**
     * Limit how many publications to update.
     */
    limit?: number
  }

  /**
   * publication updateManyAndReturn
   */
  export type publicationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the publication
     */
    select?: publicationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the publication
     */
    omit?: publicationOmit<ExtArgs> | null
    /**
     * The data used to update publications.
     */
    data: XOR<publicationUpdateManyMutationInput, publicationUncheckedUpdateManyInput>
    /**
     * Filter which publications to update
     */
    where?: publicationWhereInput
    /**
     * Limit how many publications to update.
     */
    limit?: number
  }

  /**
   * publication upsert
   */
  export type publicationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the publication
     */
    select?: publicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the publication
     */
    omit?: publicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: publicationInclude<ExtArgs> | null
    /**
     * The filter to search for the publication to update in case it exists.
     */
    where: publicationWhereUniqueInput
    /**
     * In case the publication found by the `where` argument doesn't exist, create a new publication with this data.
     */
    create: XOR<publicationCreateInput, publicationUncheckedCreateInput>
    /**
     * In case the publication was found with the provided `where` argument, update it with this data.
     */
    update: XOR<publicationUpdateInput, publicationUncheckedUpdateInput>
  }

  /**
   * publication delete
   */
  export type publicationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the publication
     */
    select?: publicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the publication
     */
    omit?: publicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: publicationInclude<ExtArgs> | null
    /**
     * Filter which publication to delete.
     */
    where: publicationWhereUniqueInput
  }

  /**
   * publication deleteMany
   */
  export type publicationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which publications to delete
     */
    where?: publicationWhereInput
    /**
     * Limit how many publications to delete.
     */
    limit?: number
  }

  /**
   * publication.bookpublisher
   */
  export type publication$bookpublisherArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookpublisher
     */
    select?: bookpublisherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookpublisher
     */
    omit?: bookpublisherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookpublisherInclude<ExtArgs> | null
    where?: bookpublisherWhereInput
    orderBy?: bookpublisherOrderByWithRelationInput | bookpublisherOrderByWithRelationInput[]
    cursor?: bookpublisherWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookpublisherScalarFieldEnum | BookpublisherScalarFieldEnum[]
  }

  /**
   * publication without action
   */
  export type publicationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the publication
     */
    select?: publicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the publication
     */
    omit?: publicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: publicationInclude<ExtArgs> | null
  }


  /**
   * Model Review
   */

  export type AggregateReview = {
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  export type ReviewAvgAggregateOutputType = {
    id: number | null
    rating: number | null
    book_id: number | null
  }

  export type ReviewSumAggregateOutputType = {
    id: number | null
    rating: number | null
    book_id: number | null
  }

  export type ReviewMinAggregateOutputType = {
    id: number | null
    rating: number | null
    comment: string | null
    book_id: number | null
  }

  export type ReviewMaxAggregateOutputType = {
    id: number | null
    rating: number | null
    comment: string | null
    book_id: number | null
  }

  export type ReviewCountAggregateOutputType = {
    id: number
    rating: number
    comment: number
    book_id: number
    _all: number
  }


  export type ReviewAvgAggregateInputType = {
    id?: true
    rating?: true
    book_id?: true
  }

  export type ReviewSumAggregateInputType = {
    id?: true
    rating?: true
    book_id?: true
  }

  export type ReviewMinAggregateInputType = {
    id?: true
    rating?: true
    comment?: true
    book_id?: true
  }

  export type ReviewMaxAggregateInputType = {
    id?: true
    rating?: true
    comment?: true
    book_id?: true
  }

  export type ReviewCountAggregateInputType = {
    id?: true
    rating?: true
    comment?: true
    book_id?: true
    _all?: true
  }

  export type ReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Review to aggregate.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reviews
    **/
    _count?: true | ReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewMaxAggregateInputType
  }

  export type GetReviewAggregateType<T extends ReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReview[P]>
      : GetScalarType<T[P], AggregateReview[P]>
  }




  export type ReviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithAggregationInput | ReviewOrderByWithAggregationInput[]
    by: ReviewScalarFieldEnum[] | ReviewScalarFieldEnum
    having?: ReviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewCountAggregateInputType | true
    _avg?: ReviewAvgAggregateInputType
    _sum?: ReviewSumAggregateInputType
    _min?: ReviewMinAggregateInputType
    _max?: ReviewMaxAggregateInputType
  }

  export type ReviewGroupByOutputType = {
    id: number
    rating: number
    comment: string | null
    book_id: number
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  type GetReviewGroupByPayload<T extends ReviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewGroupByOutputType[P]>
        }
      >
    >


  export type ReviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rating?: boolean
    comment?: boolean
    book_id?: boolean
    book?: boolean | bookDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rating?: boolean
    comment?: boolean
    book_id?: boolean
    book?: boolean | bookDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rating?: boolean
    comment?: boolean
    book_id?: boolean
    book?: boolean | bookDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectScalar = {
    id?: boolean
    rating?: boolean
    comment?: boolean
    book_id?: boolean
  }

  export type ReviewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "rating" | "comment" | "book_id", ExtArgs["result"]["review"]>
  export type ReviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book?: boolean | bookDefaultArgs<ExtArgs>
  }
  export type ReviewIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book?: boolean | bookDefaultArgs<ExtArgs>
  }
  export type ReviewIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book?: boolean | bookDefaultArgs<ExtArgs>
  }

  export type $ReviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Review"
    objects: {
      book: Prisma.$bookPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      rating: number
      comment: string | null
      book_id: number
    }, ExtArgs["result"]["review"]>
    composites: {}
  }

  type ReviewGetPayload<S extends boolean | null | undefined | ReviewDefaultArgs> = $Result.GetResult<Prisma.$ReviewPayload, S>

  type ReviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReviewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReviewCountAggregateInputType | true
    }

  export interface ReviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Review'], meta: { name: 'Review' } }
    /**
     * Find zero or one Review that matches the filter.
     * @param {ReviewFindUniqueArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewFindUniqueArgs>(args: SelectSubset<T, ReviewFindUniqueArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Review that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReviewFindUniqueOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewFindUniqueOrThrowArgs>(args: SelectSubset<T, ReviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewFindFirstArgs>(args?: SelectSubset<T, ReviewFindFirstArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewFindFirstOrThrowArgs>(args?: SelectSubset<T, ReviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.review.findMany()
     * 
     * // Get first 10 Reviews
     * const reviews = await prisma.review.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewWithIdOnly = await prisma.review.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReviewFindManyArgs>(args?: SelectSubset<T, ReviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Review.
     * @param {ReviewCreateArgs} args - Arguments to create a Review.
     * @example
     * // Create one Review
     * const Review = await prisma.review.create({
     *   data: {
     *     // ... data to create a Review
     *   }
     * })
     * 
     */
    create<T extends ReviewCreateArgs>(args: SelectSubset<T, ReviewCreateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reviews.
     * @param {ReviewCreateManyArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReviewCreateManyArgs>(args?: SelectSubset<T, ReviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reviews and returns the data saved in the database.
     * @param {ReviewCreateManyAndReturnArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reviews and only return the `id`
     * const reviewWithIdOnly = await prisma.review.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReviewCreateManyAndReturnArgs>(args?: SelectSubset<T, ReviewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Review.
     * @param {ReviewDeleteArgs} args - Arguments to delete one Review.
     * @example
     * // Delete one Review
     * const Review = await prisma.review.delete({
     *   where: {
     *     // ... filter to delete one Review
     *   }
     * })
     * 
     */
    delete<T extends ReviewDeleteArgs>(args: SelectSubset<T, ReviewDeleteArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Review.
     * @param {ReviewUpdateArgs} args - Arguments to update one Review.
     * @example
     * // Update one Review
     * const review = await prisma.review.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReviewUpdateArgs>(args: SelectSubset<T, ReviewUpdateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reviews.
     * @param {ReviewDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.review.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReviewDeleteManyArgs>(args?: SelectSubset<T, ReviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReviewUpdateManyArgs>(args: SelectSubset<T, ReviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews and returns the data updated in the database.
     * @param {ReviewUpdateManyAndReturnArgs} args - Arguments to update many Reviews.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reviews and only return the `id`
     * const reviewWithIdOnly = await prisma.review.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReviewUpdateManyAndReturnArgs>(args: SelectSubset<T, ReviewUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Review.
     * @param {ReviewUpsertArgs} args - Arguments to update or create a Review.
     * @example
     * // Update or create a Review
     * const review = await prisma.review.upsert({
     *   create: {
     *     // ... data to create a Review
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Review we want to update
     *   }
     * })
     */
    upsert<T extends ReviewUpsertArgs>(args: SelectSubset<T, ReviewUpsertArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.review.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
    **/
    count<T extends ReviewCountArgs>(
      args?: Subset<T, ReviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReviewAggregateArgs>(args: Subset<T, ReviewAggregateArgs>): Prisma.PrismaPromise<GetReviewAggregateType<T>>

    /**
     * Group by Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewGroupByArgs['orderBy'] }
        : { orderBy?: ReviewGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Review model
   */
  readonly fields: ReviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Review.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    book<T extends bookDefaultArgs<ExtArgs> = {}>(args?: Subset<T, bookDefaultArgs<ExtArgs>>): Prisma__bookClient<$Result.GetResult<Prisma.$bookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Review model
   */
  interface ReviewFieldRefs {
    readonly id: FieldRef<"Review", 'Int'>
    readonly rating: FieldRef<"Review", 'Int'>
    readonly comment: FieldRef<"Review", 'String'>
    readonly book_id: FieldRef<"Review", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Review findUnique
   */
  export type ReviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findUniqueOrThrow
   */
  export type ReviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findFirst
   */
  export type ReviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findFirstOrThrow
   */
  export type ReviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findMany
   */
  export type ReviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review create
   */
  export type ReviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to create a Review.
     */
    data: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
  }

  /**
   * Review createMany
   */
  export type ReviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Review createManyAndReturn
   */
  export type ReviewCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Review update
   */
  export type ReviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to update a Review.
     */
    data: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
    /**
     * Choose, which Review to update.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review updateMany
   */
  export type ReviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
  }

  /**
   * Review updateManyAndReturn
   */
  export type ReviewUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Review upsert
   */
  export type ReviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The filter to search for the Review to update in case it exists.
     */
    where: ReviewWhereUniqueInput
    /**
     * In case the Review found by the `where` argument doesn't exist, create a new Review with this data.
     */
    create: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
    /**
     * In case the Review was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
  }

  /**
   * Review delete
   */
  export type ReviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter which Review to delete.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review deleteMany
   */
  export type ReviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reviews to delete
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to delete.
     */
    limit?: number
  }

  /**
   * Review without action
   */
  export type ReviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AuthorScalarFieldEnum: {
    author_id: 'author_id',
    firstname: 'firstname',
    secondname: 'secondname',
    dateofbirth: 'dateofbirth',
    dateofdeath: 'dateofdeath',
    createdat: 'createdat',
    updatedat: 'updatedat',
    person_id: 'person_id'
  };

  export type AuthorScalarFieldEnum = (typeof AuthorScalarFieldEnum)[keyof typeof AuthorScalarFieldEnum]


  export const BookScalarFieldEnum: {
    book_id: 'book_id',
    title: 'title',
    amountofpages: 'amountofpages',
    cost: 'cost',
    publisheryear: 'publisheryear',
    publication: 'publication',
    copiesavailable: 'copiesavailable',
    createdat: 'createdat',
    updatedat: 'updatedat',
    inStock: 'inStock'
  };

  export type BookScalarFieldEnum = (typeof BookScalarFieldEnum)[keyof typeof BookScalarFieldEnum]


  export const FineScalarFieldEnum: {
    fine_id: 'fine_id',
    date: 'date',
    amount: 'amount',
    member_id: 'member_id',
    loan_id: 'loan_id',
    createdat: 'createdat',
    updatedat: 'updatedat'
  };

  export type FineScalarFieldEnum = (typeof FineScalarFieldEnum)[keyof typeof FineScalarFieldEnum]


  export const GenreScalarFieldEnum: {
    genre_id: 'genre_id',
    title: 'title',
    createdat: 'createdat',
    updatedat: 'updatedat'
  };

  export type GenreScalarFieldEnum = (typeof GenreScalarFieldEnum)[keyof typeof GenreScalarFieldEnum]


  export const LoanScalarFieldEnum: {
    loan_id: 'loan_id',
    book_id: 'book_id',
    member_id: 'member_id',
    staff_id: 'staff_id',
    loandate: 'loandate',
    duedate: 'duedate',
    returndate: 'returndate'
  };

  export type LoanScalarFieldEnum = (typeof LoanScalarFieldEnum)[keyof typeof LoanScalarFieldEnum]


  export const MemberScalarFieldEnum: {
    member_id: 'member_id',
    membershipdate: 'membershipdate',
    createdat: 'createdat',
    updatedat: 'updatedat',
    person_id: 'person_id'
  };

  export type MemberScalarFieldEnum = (typeof MemberScalarFieldEnum)[keyof typeof MemberScalarFieldEnum]


  export const StaffScalarFieldEnum: {
    staff_id: 'staff_id',
    position: 'position',
    education: 'education',
    createdat: 'createdat',
    updatedat: 'updatedat',
    person_id: 'person_id'
  };

  export type StaffScalarFieldEnum = (typeof StaffScalarFieldEnum)[keyof typeof StaffScalarFieldEnum]


  export const BookauthorScalarFieldEnum: {
    bookauthor_id: 'bookauthor_id',
    book_id: 'book_id',
    author_id: 'author_id',
    createdat: 'createdat',
    updatedat: 'updatedat'
  };

  export type BookauthorScalarFieldEnum = (typeof BookauthorScalarFieldEnum)[keyof typeof BookauthorScalarFieldEnum]


  export const BookgenreScalarFieldEnum: {
    bookgenre_id: 'bookgenre_id',
    book_id: 'book_id',
    genre_id: 'genre_id',
    createdat: 'createdat',
    updatedat: 'updatedat'
  };

  export type BookgenreScalarFieldEnum = (typeof BookgenreScalarFieldEnum)[keyof typeof BookgenreScalarFieldEnum]


  export const BookpublisherScalarFieldEnum: {
    bookpublisher_id: 'bookpublisher_id',
    book_id: 'book_id',
    publisher_id: 'publisher_id',
    dayofarrivaltolibrary: 'dayofarrivaltolibrary',
    createdat: 'createdat',
    updatedat: 'updatedat'
  };

  export type BookpublisherScalarFieldEnum = (typeof BookpublisherScalarFieldEnum)[keyof typeof BookpublisherScalarFieldEnum]


  export const PersonScalarFieldEnum: {
    person_id: 'person_id',
    fullname: 'fullname',
    phone: 'phone',
    email: 'email',
    address: 'address',
    createdat: 'createdat',
    updatedat: 'updatedat'
  };

  export type PersonScalarFieldEnum = (typeof PersonScalarFieldEnum)[keyof typeof PersonScalarFieldEnum]


  export const PublicationScalarFieldEnum: {
    publication_id: 'publication_id',
    title: 'title',
    dateofestablishment: 'dateofestablishment',
    createdat: 'createdat',
    updatedat: 'updatedat'
  };

  export type PublicationScalarFieldEnum = (typeof PublicationScalarFieldEnum)[keyof typeof PublicationScalarFieldEnum]


  export const ReviewScalarFieldEnum: {
    id: 'id',
    rating: 'rating',
    comment: 'comment',
    book_id: 'book_id'
  };

  export type ReviewScalarFieldEnum = (typeof ReviewScalarFieldEnum)[keyof typeof ReviewScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type authorWhereInput = {
    AND?: authorWhereInput | authorWhereInput[]
    OR?: authorWhereInput[]
    NOT?: authorWhereInput | authorWhereInput[]
    author_id?: IntFilter<"author"> | number
    firstname?: StringFilter<"author"> | string
    secondname?: StringFilter<"author"> | string
    dateofbirth?: DateTimeFilter<"author"> | Date | string
    dateofdeath?: DateTimeNullableFilter<"author"> | Date | string | null
    createdat?: DateTimeNullableFilter<"author"> | Date | string | null
    updatedat?: DateTimeNullableFilter<"author"> | Date | string | null
    person_id?: IntNullableFilter<"author"> | number | null
    person?: XOR<PersonNullableScalarRelationFilter, personWhereInput> | null
    bookauthor?: BookauthorListRelationFilter
  }

  export type authorOrderByWithRelationInput = {
    author_id?: SortOrder
    firstname?: SortOrder
    secondname?: SortOrder
    dateofbirth?: SortOrder
    dateofdeath?: SortOrderInput | SortOrder
    createdat?: SortOrderInput | SortOrder
    updatedat?: SortOrderInput | SortOrder
    person_id?: SortOrderInput | SortOrder
    person?: personOrderByWithRelationInput
    bookauthor?: bookauthorOrderByRelationAggregateInput
  }

  export type authorWhereUniqueInput = Prisma.AtLeast<{
    author_id?: number
    AND?: authorWhereInput | authorWhereInput[]
    OR?: authorWhereInput[]
    NOT?: authorWhereInput | authorWhereInput[]
    firstname?: StringFilter<"author"> | string
    secondname?: StringFilter<"author"> | string
    dateofbirth?: DateTimeFilter<"author"> | Date | string
    dateofdeath?: DateTimeNullableFilter<"author"> | Date | string | null
    createdat?: DateTimeNullableFilter<"author"> | Date | string | null
    updatedat?: DateTimeNullableFilter<"author"> | Date | string | null
    person_id?: IntNullableFilter<"author"> | number | null
    person?: XOR<PersonNullableScalarRelationFilter, personWhereInput> | null
    bookauthor?: BookauthorListRelationFilter
  }, "author_id">

  export type authorOrderByWithAggregationInput = {
    author_id?: SortOrder
    firstname?: SortOrder
    secondname?: SortOrder
    dateofbirth?: SortOrder
    dateofdeath?: SortOrderInput | SortOrder
    createdat?: SortOrderInput | SortOrder
    updatedat?: SortOrderInput | SortOrder
    person_id?: SortOrderInput | SortOrder
    _count?: authorCountOrderByAggregateInput
    _avg?: authorAvgOrderByAggregateInput
    _max?: authorMaxOrderByAggregateInput
    _min?: authorMinOrderByAggregateInput
    _sum?: authorSumOrderByAggregateInput
  }

  export type authorScalarWhereWithAggregatesInput = {
    AND?: authorScalarWhereWithAggregatesInput | authorScalarWhereWithAggregatesInput[]
    OR?: authorScalarWhereWithAggregatesInput[]
    NOT?: authorScalarWhereWithAggregatesInput | authorScalarWhereWithAggregatesInput[]
    author_id?: IntWithAggregatesFilter<"author"> | number
    firstname?: StringWithAggregatesFilter<"author"> | string
    secondname?: StringWithAggregatesFilter<"author"> | string
    dateofbirth?: DateTimeWithAggregatesFilter<"author"> | Date | string
    dateofdeath?: DateTimeNullableWithAggregatesFilter<"author"> | Date | string | null
    createdat?: DateTimeNullableWithAggregatesFilter<"author"> | Date | string | null
    updatedat?: DateTimeNullableWithAggregatesFilter<"author"> | Date | string | null
    person_id?: IntNullableWithAggregatesFilter<"author"> | number | null
  }

  export type bookWhereInput = {
    AND?: bookWhereInput | bookWhereInput[]
    OR?: bookWhereInput[]
    NOT?: bookWhereInput | bookWhereInput[]
    book_id?: IntFilter<"book"> | number
    title?: StringFilter<"book"> | string
    amountofpages?: IntFilter<"book"> | number
    cost?: DecimalFilter<"book"> | Decimal | DecimalJsLike | number | string
    publisheryear?: IntFilter<"book"> | number
    publication?: StringFilter<"book"> | string
    copiesavailable?: IntFilter<"book"> | number
    createdat?: DateTimeNullableFilter<"book"> | Date | string | null
    updatedat?: DateTimeNullableFilter<"book"> | Date | string | null
    inStock?: BoolFilter<"book"> | boolean
    bookauthor?: BookauthorListRelationFilter
    bookgenre?: BookgenreListRelationFilter
    bookpublisher?: BookpublisherListRelationFilter
    loan?: LoanListRelationFilter
    Review?: ReviewListRelationFilter
  }

  export type bookOrderByWithRelationInput = {
    book_id?: SortOrder
    title?: SortOrder
    amountofpages?: SortOrder
    cost?: SortOrder
    publisheryear?: SortOrder
    publication?: SortOrder
    copiesavailable?: SortOrder
    createdat?: SortOrderInput | SortOrder
    updatedat?: SortOrderInput | SortOrder
    inStock?: SortOrder
    bookauthor?: bookauthorOrderByRelationAggregateInput
    bookgenre?: bookgenreOrderByRelationAggregateInput
    bookpublisher?: bookpublisherOrderByRelationAggregateInput
    loan?: loanOrderByRelationAggregateInput
    Review?: ReviewOrderByRelationAggregateInput
  }

  export type bookWhereUniqueInput = Prisma.AtLeast<{
    book_id?: number
    AND?: bookWhereInput | bookWhereInput[]
    OR?: bookWhereInput[]
    NOT?: bookWhereInput | bookWhereInput[]
    title?: StringFilter<"book"> | string
    amountofpages?: IntFilter<"book"> | number
    cost?: DecimalFilter<"book"> | Decimal | DecimalJsLike | number | string
    publisheryear?: IntFilter<"book"> | number
    publication?: StringFilter<"book"> | string
    copiesavailable?: IntFilter<"book"> | number
    createdat?: DateTimeNullableFilter<"book"> | Date | string | null
    updatedat?: DateTimeNullableFilter<"book"> | Date | string | null
    inStock?: BoolFilter<"book"> | boolean
    bookauthor?: BookauthorListRelationFilter
    bookgenre?: BookgenreListRelationFilter
    bookpublisher?: BookpublisherListRelationFilter
    loan?: LoanListRelationFilter
    Review?: ReviewListRelationFilter
  }, "book_id">

  export type bookOrderByWithAggregationInput = {
    book_id?: SortOrder
    title?: SortOrder
    amountofpages?: SortOrder
    cost?: SortOrder
    publisheryear?: SortOrder
    publication?: SortOrder
    copiesavailable?: SortOrder
    createdat?: SortOrderInput | SortOrder
    updatedat?: SortOrderInput | SortOrder
    inStock?: SortOrder
    _count?: bookCountOrderByAggregateInput
    _avg?: bookAvgOrderByAggregateInput
    _max?: bookMaxOrderByAggregateInput
    _min?: bookMinOrderByAggregateInput
    _sum?: bookSumOrderByAggregateInput
  }

  export type bookScalarWhereWithAggregatesInput = {
    AND?: bookScalarWhereWithAggregatesInput | bookScalarWhereWithAggregatesInput[]
    OR?: bookScalarWhereWithAggregatesInput[]
    NOT?: bookScalarWhereWithAggregatesInput | bookScalarWhereWithAggregatesInput[]
    book_id?: IntWithAggregatesFilter<"book"> | number
    title?: StringWithAggregatesFilter<"book"> | string
    amountofpages?: IntWithAggregatesFilter<"book"> | number
    cost?: DecimalWithAggregatesFilter<"book"> | Decimal | DecimalJsLike | number | string
    publisheryear?: IntWithAggregatesFilter<"book"> | number
    publication?: StringWithAggregatesFilter<"book"> | string
    copiesavailable?: IntWithAggregatesFilter<"book"> | number
    createdat?: DateTimeNullableWithAggregatesFilter<"book"> | Date | string | null
    updatedat?: DateTimeNullableWithAggregatesFilter<"book"> | Date | string | null
    inStock?: BoolWithAggregatesFilter<"book"> | boolean
  }

  export type fineWhereInput = {
    AND?: fineWhereInput | fineWhereInput[]
    OR?: fineWhereInput[]
    NOT?: fineWhereInput | fineWhereInput[]
    fine_id?: IntFilter<"fine"> | number
    date?: DateTimeFilter<"fine"> | Date | string
    amount?: DecimalFilter<"fine"> | Decimal | DecimalJsLike | number | string
    member_id?: IntFilter<"fine"> | number
    loan_id?: IntFilter<"fine"> | number
    createdat?: DateTimeNullableFilter<"fine"> | Date | string | null
    updatedat?: DateTimeNullableFilter<"fine"> | Date | string | null
    loan?: XOR<LoanScalarRelationFilter, loanWhereInput>
    member?: XOR<MemberScalarRelationFilter, memberWhereInput>
  }

  export type fineOrderByWithRelationInput = {
    fine_id?: SortOrder
    date?: SortOrder
    amount?: SortOrder
    member_id?: SortOrder
    loan_id?: SortOrder
    createdat?: SortOrderInput | SortOrder
    updatedat?: SortOrderInput | SortOrder
    loan?: loanOrderByWithRelationInput
    member?: memberOrderByWithRelationInput
  }

  export type fineWhereUniqueInput = Prisma.AtLeast<{
    fine_id?: number
    AND?: fineWhereInput | fineWhereInput[]
    OR?: fineWhereInput[]
    NOT?: fineWhereInput | fineWhereInput[]
    date?: DateTimeFilter<"fine"> | Date | string
    amount?: DecimalFilter<"fine"> | Decimal | DecimalJsLike | number | string
    member_id?: IntFilter<"fine"> | number
    loan_id?: IntFilter<"fine"> | number
    createdat?: DateTimeNullableFilter<"fine"> | Date | string | null
    updatedat?: DateTimeNullableFilter<"fine"> | Date | string | null
    loan?: XOR<LoanScalarRelationFilter, loanWhereInput>
    member?: XOR<MemberScalarRelationFilter, memberWhereInput>
  }, "fine_id">

  export type fineOrderByWithAggregationInput = {
    fine_id?: SortOrder
    date?: SortOrder
    amount?: SortOrder
    member_id?: SortOrder
    loan_id?: SortOrder
    createdat?: SortOrderInput | SortOrder
    updatedat?: SortOrderInput | SortOrder
    _count?: fineCountOrderByAggregateInput
    _avg?: fineAvgOrderByAggregateInput
    _max?: fineMaxOrderByAggregateInput
    _min?: fineMinOrderByAggregateInput
    _sum?: fineSumOrderByAggregateInput
  }

  export type fineScalarWhereWithAggregatesInput = {
    AND?: fineScalarWhereWithAggregatesInput | fineScalarWhereWithAggregatesInput[]
    OR?: fineScalarWhereWithAggregatesInput[]
    NOT?: fineScalarWhereWithAggregatesInput | fineScalarWhereWithAggregatesInput[]
    fine_id?: IntWithAggregatesFilter<"fine"> | number
    date?: DateTimeWithAggregatesFilter<"fine"> | Date | string
    amount?: DecimalWithAggregatesFilter<"fine"> | Decimal | DecimalJsLike | number | string
    member_id?: IntWithAggregatesFilter<"fine"> | number
    loan_id?: IntWithAggregatesFilter<"fine"> | number
    createdat?: DateTimeNullableWithAggregatesFilter<"fine"> | Date | string | null
    updatedat?: DateTimeNullableWithAggregatesFilter<"fine"> | Date | string | null
  }

  export type genreWhereInput = {
    AND?: genreWhereInput | genreWhereInput[]
    OR?: genreWhereInput[]
    NOT?: genreWhereInput | genreWhereInput[]
    genre_id?: IntFilter<"genre"> | number
    title?: StringFilter<"genre"> | string
    createdat?: DateTimeNullableFilter<"genre"> | Date | string | null
    updatedat?: DateTimeNullableFilter<"genre"> | Date | string | null
    bookgenre?: BookgenreListRelationFilter
  }

  export type genreOrderByWithRelationInput = {
    genre_id?: SortOrder
    title?: SortOrder
    createdat?: SortOrderInput | SortOrder
    updatedat?: SortOrderInput | SortOrder
    bookgenre?: bookgenreOrderByRelationAggregateInput
  }

  export type genreWhereUniqueInput = Prisma.AtLeast<{
    genre_id?: number
    title?: string
    AND?: genreWhereInput | genreWhereInput[]
    OR?: genreWhereInput[]
    NOT?: genreWhereInput | genreWhereInput[]
    createdat?: DateTimeNullableFilter<"genre"> | Date | string | null
    updatedat?: DateTimeNullableFilter<"genre"> | Date | string | null
    bookgenre?: BookgenreListRelationFilter
  }, "genre_id" | "title">

  export type genreOrderByWithAggregationInput = {
    genre_id?: SortOrder
    title?: SortOrder
    createdat?: SortOrderInput | SortOrder
    updatedat?: SortOrderInput | SortOrder
    _count?: genreCountOrderByAggregateInput
    _avg?: genreAvgOrderByAggregateInput
    _max?: genreMaxOrderByAggregateInput
    _min?: genreMinOrderByAggregateInput
    _sum?: genreSumOrderByAggregateInput
  }

  export type genreScalarWhereWithAggregatesInput = {
    AND?: genreScalarWhereWithAggregatesInput | genreScalarWhereWithAggregatesInput[]
    OR?: genreScalarWhereWithAggregatesInput[]
    NOT?: genreScalarWhereWithAggregatesInput | genreScalarWhereWithAggregatesInput[]
    genre_id?: IntWithAggregatesFilter<"genre"> | number
    title?: StringWithAggregatesFilter<"genre"> | string
    createdat?: DateTimeNullableWithAggregatesFilter<"genre"> | Date | string | null
    updatedat?: DateTimeNullableWithAggregatesFilter<"genre"> | Date | string | null
  }

  export type loanWhereInput = {
    AND?: loanWhereInput | loanWhereInput[]
    OR?: loanWhereInput[]
    NOT?: loanWhereInput | loanWhereInput[]
    loan_id?: IntFilter<"loan"> | number
    book_id?: IntFilter<"loan"> | number
    member_id?: IntFilter<"loan"> | number
    staff_id?: IntFilter<"loan"> | number
    loandate?: DateTimeFilter<"loan"> | Date | string
    duedate?: DateTimeFilter<"loan"> | Date | string
    returndate?: DateTimeNullableFilter<"loan"> | Date | string | null
    fine?: FineListRelationFilter
    book?: XOR<BookScalarRelationFilter, bookWhereInput>
    member?: XOR<MemberScalarRelationFilter, memberWhereInput>
    staff?: XOR<StaffScalarRelationFilter, staffWhereInput>
  }

  export type loanOrderByWithRelationInput = {
    loan_id?: SortOrder
    book_id?: SortOrder
    member_id?: SortOrder
    staff_id?: SortOrder
    loandate?: SortOrder
    duedate?: SortOrder
    returndate?: SortOrderInput | SortOrder
    fine?: fineOrderByRelationAggregateInput
    book?: bookOrderByWithRelationInput
    member?: memberOrderByWithRelationInput
    staff?: staffOrderByWithRelationInput
  }

  export type loanWhereUniqueInput = Prisma.AtLeast<{
    loan_id?: number
    AND?: loanWhereInput | loanWhereInput[]
    OR?: loanWhereInput[]
    NOT?: loanWhereInput | loanWhereInput[]
    book_id?: IntFilter<"loan"> | number
    member_id?: IntFilter<"loan"> | number
    staff_id?: IntFilter<"loan"> | number
    loandate?: DateTimeFilter<"loan"> | Date | string
    duedate?: DateTimeFilter<"loan"> | Date | string
    returndate?: DateTimeNullableFilter<"loan"> | Date | string | null
    fine?: FineListRelationFilter
    book?: XOR<BookScalarRelationFilter, bookWhereInput>
    member?: XOR<MemberScalarRelationFilter, memberWhereInput>
    staff?: XOR<StaffScalarRelationFilter, staffWhereInput>
  }, "loan_id">

  export type loanOrderByWithAggregationInput = {
    loan_id?: SortOrder
    book_id?: SortOrder
    member_id?: SortOrder
    staff_id?: SortOrder
    loandate?: SortOrder
    duedate?: SortOrder
    returndate?: SortOrderInput | SortOrder
    _count?: loanCountOrderByAggregateInput
    _avg?: loanAvgOrderByAggregateInput
    _max?: loanMaxOrderByAggregateInput
    _min?: loanMinOrderByAggregateInput
    _sum?: loanSumOrderByAggregateInput
  }

  export type loanScalarWhereWithAggregatesInput = {
    AND?: loanScalarWhereWithAggregatesInput | loanScalarWhereWithAggregatesInput[]
    OR?: loanScalarWhereWithAggregatesInput[]
    NOT?: loanScalarWhereWithAggregatesInput | loanScalarWhereWithAggregatesInput[]
    loan_id?: IntWithAggregatesFilter<"loan"> | number
    book_id?: IntWithAggregatesFilter<"loan"> | number
    member_id?: IntWithAggregatesFilter<"loan"> | number
    staff_id?: IntWithAggregatesFilter<"loan"> | number
    loandate?: DateTimeWithAggregatesFilter<"loan"> | Date | string
    duedate?: DateTimeWithAggregatesFilter<"loan"> | Date | string
    returndate?: DateTimeNullableWithAggregatesFilter<"loan"> | Date | string | null
  }

  export type memberWhereInput = {
    AND?: memberWhereInput | memberWhereInput[]
    OR?: memberWhereInput[]
    NOT?: memberWhereInput | memberWhereInput[]
    member_id?: IntFilter<"member"> | number
    membershipdate?: DateTimeFilter<"member"> | Date | string
    createdat?: DateTimeNullableFilter<"member"> | Date | string | null
    updatedat?: DateTimeNullableFilter<"member"> | Date | string | null
    person_id?: IntFilter<"member"> | number
    fine?: FineListRelationFilter
    loan?: LoanListRelationFilter
    person?: XOR<PersonScalarRelationFilter, personWhereInput>
  }

  export type memberOrderByWithRelationInput = {
    member_id?: SortOrder
    membershipdate?: SortOrder
    createdat?: SortOrderInput | SortOrder
    updatedat?: SortOrderInput | SortOrder
    person_id?: SortOrder
    fine?: fineOrderByRelationAggregateInput
    loan?: loanOrderByRelationAggregateInput
    person?: personOrderByWithRelationInput
  }

  export type memberWhereUniqueInput = Prisma.AtLeast<{
    member_id?: number
    AND?: memberWhereInput | memberWhereInput[]
    OR?: memberWhereInput[]
    NOT?: memberWhereInput | memberWhereInput[]
    membershipdate?: DateTimeFilter<"member"> | Date | string
    createdat?: DateTimeNullableFilter<"member"> | Date | string | null
    updatedat?: DateTimeNullableFilter<"member"> | Date | string | null
    person_id?: IntFilter<"member"> | number
    fine?: FineListRelationFilter
    loan?: LoanListRelationFilter
    person?: XOR<PersonScalarRelationFilter, personWhereInput>
  }, "member_id">

  export type memberOrderByWithAggregationInput = {
    member_id?: SortOrder
    membershipdate?: SortOrder
    createdat?: SortOrderInput | SortOrder
    updatedat?: SortOrderInput | SortOrder
    person_id?: SortOrder
    _count?: memberCountOrderByAggregateInput
    _avg?: memberAvgOrderByAggregateInput
    _max?: memberMaxOrderByAggregateInput
    _min?: memberMinOrderByAggregateInput
    _sum?: memberSumOrderByAggregateInput
  }

  export type memberScalarWhereWithAggregatesInput = {
    AND?: memberScalarWhereWithAggregatesInput | memberScalarWhereWithAggregatesInput[]
    OR?: memberScalarWhereWithAggregatesInput[]
    NOT?: memberScalarWhereWithAggregatesInput | memberScalarWhereWithAggregatesInput[]
    member_id?: IntWithAggregatesFilter<"member"> | number
    membershipdate?: DateTimeWithAggregatesFilter<"member"> | Date | string
    createdat?: DateTimeNullableWithAggregatesFilter<"member"> | Date | string | null
    updatedat?: DateTimeNullableWithAggregatesFilter<"member"> | Date | string | null
    person_id?: IntWithAggregatesFilter<"member"> | number
  }

  export type staffWhereInput = {
    AND?: staffWhereInput | staffWhereInput[]
    OR?: staffWhereInput[]
    NOT?: staffWhereInput | staffWhereInput[]
    staff_id?: IntFilter<"staff"> | number
    position?: StringFilter<"staff"> | string
    education?: StringFilter<"staff"> | string
    createdat?: DateTimeNullableFilter<"staff"> | Date | string | null
    updatedat?: DateTimeNullableFilter<"staff"> | Date | string | null
    person_id?: IntFilter<"staff"> | number
    loan?: LoanListRelationFilter
    person?: XOR<PersonScalarRelationFilter, personWhereInput>
  }

  export type staffOrderByWithRelationInput = {
    staff_id?: SortOrder
    position?: SortOrder
    education?: SortOrder
    createdat?: SortOrderInput | SortOrder
    updatedat?: SortOrderInput | SortOrder
    person_id?: SortOrder
    loan?: loanOrderByRelationAggregateInput
    person?: personOrderByWithRelationInput
  }

  export type staffWhereUniqueInput = Prisma.AtLeast<{
    staff_id?: number
    AND?: staffWhereInput | staffWhereInput[]
    OR?: staffWhereInput[]
    NOT?: staffWhereInput | staffWhereInput[]
    position?: StringFilter<"staff"> | string
    education?: StringFilter<"staff"> | string
    createdat?: DateTimeNullableFilter<"staff"> | Date | string | null
    updatedat?: DateTimeNullableFilter<"staff"> | Date | string | null
    person_id?: IntFilter<"staff"> | number
    loan?: LoanListRelationFilter
    person?: XOR<PersonScalarRelationFilter, personWhereInput>
  }, "staff_id">

  export type staffOrderByWithAggregationInput = {
    staff_id?: SortOrder
    position?: SortOrder
    education?: SortOrder
    createdat?: SortOrderInput | SortOrder
    updatedat?: SortOrderInput | SortOrder
    person_id?: SortOrder
    _count?: staffCountOrderByAggregateInput
    _avg?: staffAvgOrderByAggregateInput
    _max?: staffMaxOrderByAggregateInput
    _min?: staffMinOrderByAggregateInput
    _sum?: staffSumOrderByAggregateInput
  }

  export type staffScalarWhereWithAggregatesInput = {
    AND?: staffScalarWhereWithAggregatesInput | staffScalarWhereWithAggregatesInput[]
    OR?: staffScalarWhereWithAggregatesInput[]
    NOT?: staffScalarWhereWithAggregatesInput | staffScalarWhereWithAggregatesInput[]
    staff_id?: IntWithAggregatesFilter<"staff"> | number
    position?: StringWithAggregatesFilter<"staff"> | string
    education?: StringWithAggregatesFilter<"staff"> | string
    createdat?: DateTimeNullableWithAggregatesFilter<"staff"> | Date | string | null
    updatedat?: DateTimeNullableWithAggregatesFilter<"staff"> | Date | string | null
    person_id?: IntWithAggregatesFilter<"staff"> | number
  }

  export type bookauthorWhereInput = {
    AND?: bookauthorWhereInput | bookauthorWhereInput[]
    OR?: bookauthorWhereInput[]
    NOT?: bookauthorWhereInput | bookauthorWhereInput[]
    bookauthor_id?: IntFilter<"bookauthor"> | number
    book_id?: IntFilter<"bookauthor"> | number
    author_id?: IntFilter<"bookauthor"> | number
    createdat?: DateTimeFilter<"bookauthor"> | Date | string
    updatedat?: DateTimeFilter<"bookauthor"> | Date | string
    author?: XOR<AuthorScalarRelationFilter, authorWhereInput>
    book?: XOR<BookScalarRelationFilter, bookWhereInput>
  }

  export type bookauthorOrderByWithRelationInput = {
    bookauthor_id?: SortOrder
    book_id?: SortOrder
    author_id?: SortOrder
    createdat?: SortOrder
    updatedat?: SortOrder
    author?: authorOrderByWithRelationInput
    book?: bookOrderByWithRelationInput
  }

  export type bookauthorWhereUniqueInput = Prisma.AtLeast<{
    bookauthor_id?: number
    AND?: bookauthorWhereInput | bookauthorWhereInput[]
    OR?: bookauthorWhereInput[]
    NOT?: bookauthorWhereInput | bookauthorWhereInput[]
    book_id?: IntFilter<"bookauthor"> | number
    author_id?: IntFilter<"bookauthor"> | number
    createdat?: DateTimeFilter<"bookauthor"> | Date | string
    updatedat?: DateTimeFilter<"bookauthor"> | Date | string
    author?: XOR<AuthorScalarRelationFilter, authorWhereInput>
    book?: XOR<BookScalarRelationFilter, bookWhereInput>
  }, "bookauthor_id">

  export type bookauthorOrderByWithAggregationInput = {
    bookauthor_id?: SortOrder
    book_id?: SortOrder
    author_id?: SortOrder
    createdat?: SortOrder
    updatedat?: SortOrder
    _count?: bookauthorCountOrderByAggregateInput
    _avg?: bookauthorAvgOrderByAggregateInput
    _max?: bookauthorMaxOrderByAggregateInput
    _min?: bookauthorMinOrderByAggregateInput
    _sum?: bookauthorSumOrderByAggregateInput
  }

  export type bookauthorScalarWhereWithAggregatesInput = {
    AND?: bookauthorScalarWhereWithAggregatesInput | bookauthorScalarWhereWithAggregatesInput[]
    OR?: bookauthorScalarWhereWithAggregatesInput[]
    NOT?: bookauthorScalarWhereWithAggregatesInput | bookauthorScalarWhereWithAggregatesInput[]
    bookauthor_id?: IntWithAggregatesFilter<"bookauthor"> | number
    book_id?: IntWithAggregatesFilter<"bookauthor"> | number
    author_id?: IntWithAggregatesFilter<"bookauthor"> | number
    createdat?: DateTimeWithAggregatesFilter<"bookauthor"> | Date | string
    updatedat?: DateTimeWithAggregatesFilter<"bookauthor"> | Date | string
  }

  export type bookgenreWhereInput = {
    AND?: bookgenreWhereInput | bookgenreWhereInput[]
    OR?: bookgenreWhereInput[]
    NOT?: bookgenreWhereInput | bookgenreWhereInput[]
    bookgenre_id?: IntFilter<"bookgenre"> | number
    book_id?: IntFilter<"bookgenre"> | number
    genre_id?: IntFilter<"bookgenre"> | number
    createdat?: DateTimeFilter<"bookgenre"> | Date | string
    updatedat?: DateTimeFilter<"bookgenre"> | Date | string
    book?: XOR<BookScalarRelationFilter, bookWhereInput>
    genre?: XOR<GenreScalarRelationFilter, genreWhereInput>
  }

  export type bookgenreOrderByWithRelationInput = {
    bookgenre_id?: SortOrder
    book_id?: SortOrder
    genre_id?: SortOrder
    createdat?: SortOrder
    updatedat?: SortOrder
    book?: bookOrderByWithRelationInput
    genre?: genreOrderByWithRelationInput
  }

  export type bookgenreWhereUniqueInput = Prisma.AtLeast<{
    bookgenre_id?: number
    AND?: bookgenreWhereInput | bookgenreWhereInput[]
    OR?: bookgenreWhereInput[]
    NOT?: bookgenreWhereInput | bookgenreWhereInput[]
    book_id?: IntFilter<"bookgenre"> | number
    genre_id?: IntFilter<"bookgenre"> | number
    createdat?: DateTimeFilter<"bookgenre"> | Date | string
    updatedat?: DateTimeFilter<"bookgenre"> | Date | string
    book?: XOR<BookScalarRelationFilter, bookWhereInput>
    genre?: XOR<GenreScalarRelationFilter, genreWhereInput>
  }, "bookgenre_id">

  export type bookgenreOrderByWithAggregationInput = {
    bookgenre_id?: SortOrder
    book_id?: SortOrder
    genre_id?: SortOrder
    createdat?: SortOrder
    updatedat?: SortOrder
    _count?: bookgenreCountOrderByAggregateInput
    _avg?: bookgenreAvgOrderByAggregateInput
    _max?: bookgenreMaxOrderByAggregateInput
    _min?: bookgenreMinOrderByAggregateInput
    _sum?: bookgenreSumOrderByAggregateInput
  }

  export type bookgenreScalarWhereWithAggregatesInput = {
    AND?: bookgenreScalarWhereWithAggregatesInput | bookgenreScalarWhereWithAggregatesInput[]
    OR?: bookgenreScalarWhereWithAggregatesInput[]
    NOT?: bookgenreScalarWhereWithAggregatesInput | bookgenreScalarWhereWithAggregatesInput[]
    bookgenre_id?: IntWithAggregatesFilter<"bookgenre"> | number
    book_id?: IntWithAggregatesFilter<"bookgenre"> | number
    genre_id?: IntWithAggregatesFilter<"bookgenre"> | number
    createdat?: DateTimeWithAggregatesFilter<"bookgenre"> | Date | string
    updatedat?: DateTimeWithAggregatesFilter<"bookgenre"> | Date | string
  }

  export type bookpublisherWhereInput = {
    AND?: bookpublisherWhereInput | bookpublisherWhereInput[]
    OR?: bookpublisherWhereInput[]
    NOT?: bookpublisherWhereInput | bookpublisherWhereInput[]
    bookpublisher_id?: IntFilter<"bookpublisher"> | number
    book_id?: IntFilter<"bookpublisher"> | number
    publisher_id?: IntFilter<"bookpublisher"> | number
    dayofarrivaltolibrary?: DateTimeFilter<"bookpublisher"> | Date | string
    createdat?: DateTimeFilter<"bookpublisher"> | Date | string
    updatedat?: DateTimeFilter<"bookpublisher"> | Date | string
    book?: XOR<BookScalarRelationFilter, bookWhereInput>
    publication?: XOR<PublicationScalarRelationFilter, publicationWhereInput>
  }

  export type bookpublisherOrderByWithRelationInput = {
    bookpublisher_id?: SortOrder
    book_id?: SortOrder
    publisher_id?: SortOrder
    dayofarrivaltolibrary?: SortOrder
    createdat?: SortOrder
    updatedat?: SortOrder
    book?: bookOrderByWithRelationInput
    publication?: publicationOrderByWithRelationInput
  }

  export type bookpublisherWhereUniqueInput = Prisma.AtLeast<{
    bookpublisher_id?: number
    AND?: bookpublisherWhereInput | bookpublisherWhereInput[]
    OR?: bookpublisherWhereInput[]
    NOT?: bookpublisherWhereInput | bookpublisherWhereInput[]
    book_id?: IntFilter<"bookpublisher"> | number
    publisher_id?: IntFilter<"bookpublisher"> | number
    dayofarrivaltolibrary?: DateTimeFilter<"bookpublisher"> | Date | string
    createdat?: DateTimeFilter<"bookpublisher"> | Date | string
    updatedat?: DateTimeFilter<"bookpublisher"> | Date | string
    book?: XOR<BookScalarRelationFilter, bookWhereInput>
    publication?: XOR<PublicationScalarRelationFilter, publicationWhereInput>
  }, "bookpublisher_id">

  export type bookpublisherOrderByWithAggregationInput = {
    bookpublisher_id?: SortOrder
    book_id?: SortOrder
    publisher_id?: SortOrder
    dayofarrivaltolibrary?: SortOrder
    createdat?: SortOrder
    updatedat?: SortOrder
    _count?: bookpublisherCountOrderByAggregateInput
    _avg?: bookpublisherAvgOrderByAggregateInput
    _max?: bookpublisherMaxOrderByAggregateInput
    _min?: bookpublisherMinOrderByAggregateInput
    _sum?: bookpublisherSumOrderByAggregateInput
  }

  export type bookpublisherScalarWhereWithAggregatesInput = {
    AND?: bookpublisherScalarWhereWithAggregatesInput | bookpublisherScalarWhereWithAggregatesInput[]
    OR?: bookpublisherScalarWhereWithAggregatesInput[]
    NOT?: bookpublisherScalarWhereWithAggregatesInput | bookpublisherScalarWhereWithAggregatesInput[]
    bookpublisher_id?: IntWithAggregatesFilter<"bookpublisher"> | number
    book_id?: IntWithAggregatesFilter<"bookpublisher"> | number
    publisher_id?: IntWithAggregatesFilter<"bookpublisher"> | number
    dayofarrivaltolibrary?: DateTimeWithAggregatesFilter<"bookpublisher"> | Date | string
    createdat?: DateTimeWithAggregatesFilter<"bookpublisher"> | Date | string
    updatedat?: DateTimeWithAggregatesFilter<"bookpublisher"> | Date | string
  }

  export type personWhereInput = {
    AND?: personWhereInput | personWhereInput[]
    OR?: personWhereInput[]
    NOT?: personWhereInput | personWhereInput[]
    person_id?: IntFilter<"person"> | number
    fullname?: StringFilter<"person"> | string
    phone?: StringFilter<"person"> | string
    email?: StringFilter<"person"> | string
    address?: StringFilter<"person"> | string
    createdat?: DateTimeFilter<"person"> | Date | string
    updatedat?: DateTimeFilter<"person"> | Date | string
    author?: AuthorListRelationFilter
    member?: MemberListRelationFilter
    staff?: StaffListRelationFilter
  }

  export type personOrderByWithRelationInput = {
    person_id?: SortOrder
    fullname?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    address?: SortOrder
    createdat?: SortOrder
    updatedat?: SortOrder
    author?: authorOrderByRelationAggregateInput
    member?: memberOrderByRelationAggregateInput
    staff?: staffOrderByRelationAggregateInput
  }

  export type personWhereUniqueInput = Prisma.AtLeast<{
    person_id?: number
    AND?: personWhereInput | personWhereInput[]
    OR?: personWhereInput[]
    NOT?: personWhereInput | personWhereInput[]
    fullname?: StringFilter<"person"> | string
    phone?: StringFilter<"person"> | string
    email?: StringFilter<"person"> | string
    address?: StringFilter<"person"> | string
    createdat?: DateTimeFilter<"person"> | Date | string
    updatedat?: DateTimeFilter<"person"> | Date | string
    author?: AuthorListRelationFilter
    member?: MemberListRelationFilter
    staff?: StaffListRelationFilter
  }, "person_id">

  export type personOrderByWithAggregationInput = {
    person_id?: SortOrder
    fullname?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    address?: SortOrder
    createdat?: SortOrder
    updatedat?: SortOrder
    _count?: personCountOrderByAggregateInput
    _avg?: personAvgOrderByAggregateInput
    _max?: personMaxOrderByAggregateInput
    _min?: personMinOrderByAggregateInput
    _sum?: personSumOrderByAggregateInput
  }

  export type personScalarWhereWithAggregatesInput = {
    AND?: personScalarWhereWithAggregatesInput | personScalarWhereWithAggregatesInput[]
    OR?: personScalarWhereWithAggregatesInput[]
    NOT?: personScalarWhereWithAggregatesInput | personScalarWhereWithAggregatesInput[]
    person_id?: IntWithAggregatesFilter<"person"> | number
    fullname?: StringWithAggregatesFilter<"person"> | string
    phone?: StringWithAggregatesFilter<"person"> | string
    email?: StringWithAggregatesFilter<"person"> | string
    address?: StringWithAggregatesFilter<"person"> | string
    createdat?: DateTimeWithAggregatesFilter<"person"> | Date | string
    updatedat?: DateTimeWithAggregatesFilter<"person"> | Date | string
  }

  export type publicationWhereInput = {
    AND?: publicationWhereInput | publicationWhereInput[]
    OR?: publicationWhereInput[]
    NOT?: publicationWhereInput | publicationWhereInput[]
    publication_id?: IntFilter<"publication"> | number
    title?: StringFilter<"publication"> | string
    dateofestablishment?: DateTimeFilter<"publication"> | Date | string
    createdat?: DateTimeFilter<"publication"> | Date | string
    updatedat?: DateTimeFilter<"publication"> | Date | string
    bookpublisher?: BookpublisherListRelationFilter
  }

  export type publicationOrderByWithRelationInput = {
    publication_id?: SortOrder
    title?: SortOrder
    dateofestablishment?: SortOrder
    createdat?: SortOrder
    updatedat?: SortOrder
    bookpublisher?: bookpublisherOrderByRelationAggregateInput
  }

  export type publicationWhereUniqueInput = Prisma.AtLeast<{
    publication_id?: number
    AND?: publicationWhereInput | publicationWhereInput[]
    OR?: publicationWhereInput[]
    NOT?: publicationWhereInput | publicationWhereInput[]
    title?: StringFilter<"publication"> | string
    dateofestablishment?: DateTimeFilter<"publication"> | Date | string
    createdat?: DateTimeFilter<"publication"> | Date | string
    updatedat?: DateTimeFilter<"publication"> | Date | string
    bookpublisher?: BookpublisherListRelationFilter
  }, "publication_id">

  export type publicationOrderByWithAggregationInput = {
    publication_id?: SortOrder
    title?: SortOrder
    dateofestablishment?: SortOrder
    createdat?: SortOrder
    updatedat?: SortOrder
    _count?: publicationCountOrderByAggregateInput
    _avg?: publicationAvgOrderByAggregateInput
    _max?: publicationMaxOrderByAggregateInput
    _min?: publicationMinOrderByAggregateInput
    _sum?: publicationSumOrderByAggregateInput
  }

  export type publicationScalarWhereWithAggregatesInput = {
    AND?: publicationScalarWhereWithAggregatesInput | publicationScalarWhereWithAggregatesInput[]
    OR?: publicationScalarWhereWithAggregatesInput[]
    NOT?: publicationScalarWhereWithAggregatesInput | publicationScalarWhereWithAggregatesInput[]
    publication_id?: IntWithAggregatesFilter<"publication"> | number
    title?: StringWithAggregatesFilter<"publication"> | string
    dateofestablishment?: DateTimeWithAggregatesFilter<"publication"> | Date | string
    createdat?: DateTimeWithAggregatesFilter<"publication"> | Date | string
    updatedat?: DateTimeWithAggregatesFilter<"publication"> | Date | string
  }

  export type ReviewWhereInput = {
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    id?: IntFilter<"Review"> | number
    rating?: IntFilter<"Review"> | number
    comment?: StringNullableFilter<"Review"> | string | null
    book_id?: IntFilter<"Review"> | number
    book?: XOR<BookScalarRelationFilter, bookWhereInput>
  }

  export type ReviewOrderByWithRelationInput = {
    id?: SortOrder
    rating?: SortOrder
    comment?: SortOrderInput | SortOrder
    book_id?: SortOrder
    book?: bookOrderByWithRelationInput
  }

  export type ReviewWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    rating?: IntFilter<"Review"> | number
    comment?: StringNullableFilter<"Review"> | string | null
    book_id?: IntFilter<"Review"> | number
    book?: XOR<BookScalarRelationFilter, bookWhereInput>
  }, "id">

  export type ReviewOrderByWithAggregationInput = {
    id?: SortOrder
    rating?: SortOrder
    comment?: SortOrderInput | SortOrder
    book_id?: SortOrder
    _count?: ReviewCountOrderByAggregateInput
    _avg?: ReviewAvgOrderByAggregateInput
    _max?: ReviewMaxOrderByAggregateInput
    _min?: ReviewMinOrderByAggregateInput
    _sum?: ReviewSumOrderByAggregateInput
  }

  export type ReviewScalarWhereWithAggregatesInput = {
    AND?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    OR?: ReviewScalarWhereWithAggregatesInput[]
    NOT?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Review"> | number
    rating?: IntWithAggregatesFilter<"Review"> | number
    comment?: StringNullableWithAggregatesFilter<"Review"> | string | null
    book_id?: IntWithAggregatesFilter<"Review"> | number
  }

  export type authorCreateInput = {
    firstname: string
    secondname: string
    dateofbirth: Date | string
    dateofdeath?: Date | string | null
    createdat?: Date | string | null
    updatedat?: Date | string | null
    person?: personCreateNestedOneWithoutAuthorInput
    bookauthor?: bookauthorCreateNestedManyWithoutAuthorInput
  }

  export type authorUncheckedCreateInput = {
    author_id?: number
    firstname: string
    secondname: string
    dateofbirth: Date | string
    dateofdeath?: Date | string | null
    createdat?: Date | string | null
    updatedat?: Date | string | null
    person_id?: number | null
    bookauthor?: bookauthorUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type authorUpdateInput = {
    firstname?: StringFieldUpdateOperationsInput | string
    secondname?: StringFieldUpdateOperationsInput | string
    dateofbirth?: DateTimeFieldUpdateOperationsInput | Date | string
    dateofdeath?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    person?: personUpdateOneWithoutAuthorNestedInput
    bookauthor?: bookauthorUpdateManyWithoutAuthorNestedInput
  }

  export type authorUncheckedUpdateInput = {
    author_id?: IntFieldUpdateOperationsInput | number
    firstname?: StringFieldUpdateOperationsInput | string
    secondname?: StringFieldUpdateOperationsInput | string
    dateofbirth?: DateTimeFieldUpdateOperationsInput | Date | string
    dateofdeath?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    person_id?: NullableIntFieldUpdateOperationsInput | number | null
    bookauthor?: bookauthorUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type authorCreateManyInput = {
    author_id?: number
    firstname: string
    secondname: string
    dateofbirth: Date | string
    dateofdeath?: Date | string | null
    createdat?: Date | string | null
    updatedat?: Date | string | null
    person_id?: number | null
  }

  export type authorUpdateManyMutationInput = {
    firstname?: StringFieldUpdateOperationsInput | string
    secondname?: StringFieldUpdateOperationsInput | string
    dateofbirth?: DateTimeFieldUpdateOperationsInput | Date | string
    dateofdeath?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type authorUncheckedUpdateManyInput = {
    author_id?: IntFieldUpdateOperationsInput | number
    firstname?: StringFieldUpdateOperationsInput | string
    secondname?: StringFieldUpdateOperationsInput | string
    dateofbirth?: DateTimeFieldUpdateOperationsInput | Date | string
    dateofdeath?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    person_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type bookCreateInput = {
    title: string
    amountofpages: number
    cost: Decimal | DecimalJsLike | number | string
    publisheryear: number
    publication: string
    copiesavailable?: number
    createdat?: Date | string | null
    updatedat?: Date | string | null
    inStock?: boolean
    bookauthor?: bookauthorCreateNestedManyWithoutBookInput
    bookgenre?: bookgenreCreateNestedManyWithoutBookInput
    bookpublisher?: bookpublisherCreateNestedManyWithoutBookInput
    loan?: loanCreateNestedManyWithoutBookInput
    Review?: ReviewCreateNestedManyWithoutBookInput
  }

  export type bookUncheckedCreateInput = {
    book_id?: number
    title: string
    amountofpages: number
    cost: Decimal | DecimalJsLike | number | string
    publisheryear: number
    publication: string
    copiesavailable?: number
    createdat?: Date | string | null
    updatedat?: Date | string | null
    inStock?: boolean
    bookauthor?: bookauthorUncheckedCreateNestedManyWithoutBookInput
    bookgenre?: bookgenreUncheckedCreateNestedManyWithoutBookInput
    bookpublisher?: bookpublisherUncheckedCreateNestedManyWithoutBookInput
    loan?: loanUncheckedCreateNestedManyWithoutBookInput
    Review?: ReviewUncheckedCreateNestedManyWithoutBookInput
  }

  export type bookUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    amountofpages?: IntFieldUpdateOperationsInput | number
    cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    publisheryear?: IntFieldUpdateOperationsInput | number
    publication?: StringFieldUpdateOperationsInput | string
    copiesavailable?: IntFieldUpdateOperationsInput | number
    createdat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inStock?: BoolFieldUpdateOperationsInput | boolean
    bookauthor?: bookauthorUpdateManyWithoutBookNestedInput
    bookgenre?: bookgenreUpdateManyWithoutBookNestedInput
    bookpublisher?: bookpublisherUpdateManyWithoutBookNestedInput
    loan?: loanUpdateManyWithoutBookNestedInput
    Review?: ReviewUpdateManyWithoutBookNestedInput
  }

  export type bookUncheckedUpdateInput = {
    book_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    amountofpages?: IntFieldUpdateOperationsInput | number
    cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    publisheryear?: IntFieldUpdateOperationsInput | number
    publication?: StringFieldUpdateOperationsInput | string
    copiesavailable?: IntFieldUpdateOperationsInput | number
    createdat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inStock?: BoolFieldUpdateOperationsInput | boolean
    bookauthor?: bookauthorUncheckedUpdateManyWithoutBookNestedInput
    bookgenre?: bookgenreUncheckedUpdateManyWithoutBookNestedInput
    bookpublisher?: bookpublisherUncheckedUpdateManyWithoutBookNestedInput
    loan?: loanUncheckedUpdateManyWithoutBookNestedInput
    Review?: ReviewUncheckedUpdateManyWithoutBookNestedInput
  }

  export type bookCreateManyInput = {
    book_id?: number
    title: string
    amountofpages: number
    cost: Decimal | DecimalJsLike | number | string
    publisheryear: number
    publication: string
    copiesavailable?: number
    createdat?: Date | string | null
    updatedat?: Date | string | null
    inStock?: boolean
  }

  export type bookUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    amountofpages?: IntFieldUpdateOperationsInput | number
    cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    publisheryear?: IntFieldUpdateOperationsInput | number
    publication?: StringFieldUpdateOperationsInput | string
    copiesavailable?: IntFieldUpdateOperationsInput | number
    createdat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inStock?: BoolFieldUpdateOperationsInput | boolean
  }

  export type bookUncheckedUpdateManyInput = {
    book_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    amountofpages?: IntFieldUpdateOperationsInput | number
    cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    publisheryear?: IntFieldUpdateOperationsInput | number
    publication?: StringFieldUpdateOperationsInput | string
    copiesavailable?: IntFieldUpdateOperationsInput | number
    createdat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inStock?: BoolFieldUpdateOperationsInput | boolean
  }

  export type fineCreateInput = {
    date?: Date | string
    amount: Decimal | DecimalJsLike | number | string
    createdat?: Date | string | null
    updatedat?: Date | string | null
    loan: loanCreateNestedOneWithoutFineInput
    member: memberCreateNestedOneWithoutFineInput
  }

  export type fineUncheckedCreateInput = {
    fine_id?: number
    date?: Date | string
    amount: Decimal | DecimalJsLike | number | string
    member_id: number
    loan_id: number
    createdat?: Date | string | null
    updatedat?: Date | string | null
  }

  export type fineUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    loan?: loanUpdateOneRequiredWithoutFineNestedInput
    member?: memberUpdateOneRequiredWithoutFineNestedInput
  }

  export type fineUncheckedUpdateInput = {
    fine_id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    member_id?: IntFieldUpdateOperationsInput | number
    loan_id?: IntFieldUpdateOperationsInput | number
    createdat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type fineCreateManyInput = {
    fine_id?: number
    date?: Date | string
    amount: Decimal | DecimalJsLike | number | string
    member_id: number
    loan_id: number
    createdat?: Date | string | null
    updatedat?: Date | string | null
  }

  export type fineUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type fineUncheckedUpdateManyInput = {
    fine_id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    member_id?: IntFieldUpdateOperationsInput | number
    loan_id?: IntFieldUpdateOperationsInput | number
    createdat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type genreCreateInput = {
    title: string
    createdat?: Date | string | null
    updatedat?: Date | string | null
    bookgenre?: bookgenreCreateNestedManyWithoutGenreInput
  }

  export type genreUncheckedCreateInput = {
    genre_id?: number
    title: string
    createdat?: Date | string | null
    updatedat?: Date | string | null
    bookgenre?: bookgenreUncheckedCreateNestedManyWithoutGenreInput
  }

  export type genreUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    createdat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bookgenre?: bookgenreUpdateManyWithoutGenreNestedInput
  }

  export type genreUncheckedUpdateInput = {
    genre_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    createdat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bookgenre?: bookgenreUncheckedUpdateManyWithoutGenreNestedInput
  }

  export type genreCreateManyInput = {
    genre_id?: number
    title: string
    createdat?: Date | string | null
    updatedat?: Date | string | null
  }

  export type genreUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    createdat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type genreUncheckedUpdateManyInput = {
    genre_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    createdat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type loanCreateInput = {
    loandate?: Date | string
    duedate: Date | string
    returndate?: Date | string | null
    fine?: fineCreateNestedManyWithoutLoanInput
    book: bookCreateNestedOneWithoutLoanInput
    member: memberCreateNestedOneWithoutLoanInput
    staff: staffCreateNestedOneWithoutLoanInput
  }

  export type loanUncheckedCreateInput = {
    loan_id?: number
    book_id: number
    member_id: number
    staff_id: number
    loandate?: Date | string
    duedate: Date | string
    returndate?: Date | string | null
    fine?: fineUncheckedCreateNestedManyWithoutLoanInput
  }

  export type loanUpdateInput = {
    loandate?: DateTimeFieldUpdateOperationsInput | Date | string
    duedate?: DateTimeFieldUpdateOperationsInput | Date | string
    returndate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fine?: fineUpdateManyWithoutLoanNestedInput
    book?: bookUpdateOneRequiredWithoutLoanNestedInput
    member?: memberUpdateOneRequiredWithoutLoanNestedInput
    staff?: staffUpdateOneRequiredWithoutLoanNestedInput
  }

  export type loanUncheckedUpdateInput = {
    loan_id?: IntFieldUpdateOperationsInput | number
    book_id?: IntFieldUpdateOperationsInput | number
    member_id?: IntFieldUpdateOperationsInput | number
    staff_id?: IntFieldUpdateOperationsInput | number
    loandate?: DateTimeFieldUpdateOperationsInput | Date | string
    duedate?: DateTimeFieldUpdateOperationsInput | Date | string
    returndate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fine?: fineUncheckedUpdateManyWithoutLoanNestedInput
  }

  export type loanCreateManyInput = {
    loan_id?: number
    book_id: number
    member_id: number
    staff_id: number
    loandate?: Date | string
    duedate: Date | string
    returndate?: Date | string | null
  }

  export type loanUpdateManyMutationInput = {
    loandate?: DateTimeFieldUpdateOperationsInput | Date | string
    duedate?: DateTimeFieldUpdateOperationsInput | Date | string
    returndate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type loanUncheckedUpdateManyInput = {
    loan_id?: IntFieldUpdateOperationsInput | number
    book_id?: IntFieldUpdateOperationsInput | number
    member_id?: IntFieldUpdateOperationsInput | number
    staff_id?: IntFieldUpdateOperationsInput | number
    loandate?: DateTimeFieldUpdateOperationsInput | Date | string
    duedate?: DateTimeFieldUpdateOperationsInput | Date | string
    returndate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type memberCreateInput = {
    membershipdate?: Date | string
    createdat?: Date | string | null
    updatedat?: Date | string | null
    fine?: fineCreateNestedManyWithoutMemberInput
    loan?: loanCreateNestedManyWithoutMemberInput
    person: personCreateNestedOneWithoutMemberInput
  }

  export type memberUncheckedCreateInput = {
    member_id?: number
    membershipdate?: Date | string
    createdat?: Date | string | null
    updatedat?: Date | string | null
    person_id: number
    fine?: fineUncheckedCreateNestedManyWithoutMemberInput
    loan?: loanUncheckedCreateNestedManyWithoutMemberInput
  }

  export type memberUpdateInput = {
    membershipdate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fine?: fineUpdateManyWithoutMemberNestedInput
    loan?: loanUpdateManyWithoutMemberNestedInput
    person?: personUpdateOneRequiredWithoutMemberNestedInput
  }

  export type memberUncheckedUpdateInput = {
    member_id?: IntFieldUpdateOperationsInput | number
    membershipdate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    person_id?: IntFieldUpdateOperationsInput | number
    fine?: fineUncheckedUpdateManyWithoutMemberNestedInput
    loan?: loanUncheckedUpdateManyWithoutMemberNestedInput
  }

  export type memberCreateManyInput = {
    member_id?: number
    membershipdate?: Date | string
    createdat?: Date | string | null
    updatedat?: Date | string | null
    person_id: number
  }

  export type memberUpdateManyMutationInput = {
    membershipdate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type memberUncheckedUpdateManyInput = {
    member_id?: IntFieldUpdateOperationsInput | number
    membershipdate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    person_id?: IntFieldUpdateOperationsInput | number
  }

  export type staffCreateInput = {
    position: string
    education: string
    createdat?: Date | string | null
    updatedat?: Date | string | null
    loan?: loanCreateNestedManyWithoutStaffInput
    person: personCreateNestedOneWithoutStaffInput
  }

  export type staffUncheckedCreateInput = {
    staff_id?: number
    position: string
    education: string
    createdat?: Date | string | null
    updatedat?: Date | string | null
    person_id: number
    loan?: loanUncheckedCreateNestedManyWithoutStaffInput
  }

  export type staffUpdateInput = {
    position?: StringFieldUpdateOperationsInput | string
    education?: StringFieldUpdateOperationsInput | string
    createdat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    loan?: loanUpdateManyWithoutStaffNestedInput
    person?: personUpdateOneRequiredWithoutStaffNestedInput
  }

  export type staffUncheckedUpdateInput = {
    staff_id?: IntFieldUpdateOperationsInput | number
    position?: StringFieldUpdateOperationsInput | string
    education?: StringFieldUpdateOperationsInput | string
    createdat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    person_id?: IntFieldUpdateOperationsInput | number
    loan?: loanUncheckedUpdateManyWithoutStaffNestedInput
  }

  export type staffCreateManyInput = {
    staff_id?: number
    position: string
    education: string
    createdat?: Date | string | null
    updatedat?: Date | string | null
    person_id: number
  }

  export type staffUpdateManyMutationInput = {
    position?: StringFieldUpdateOperationsInput | string
    education?: StringFieldUpdateOperationsInput | string
    createdat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type staffUncheckedUpdateManyInput = {
    staff_id?: IntFieldUpdateOperationsInput | number
    position?: StringFieldUpdateOperationsInput | string
    education?: StringFieldUpdateOperationsInput | string
    createdat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    person_id?: IntFieldUpdateOperationsInput | number
  }

  export type bookauthorCreateInput = {
    createdat?: Date | string
    updatedat?: Date | string
    author: authorCreateNestedOneWithoutBookauthorInput
    book: bookCreateNestedOneWithoutBookauthorInput
  }

  export type bookauthorUncheckedCreateInput = {
    bookauthor_id?: number
    book_id: number
    author_id: number
    createdat?: Date | string
    updatedat?: Date | string
  }

  export type bookauthorUpdateInput = {
    createdat?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedat?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: authorUpdateOneRequiredWithoutBookauthorNestedInput
    book?: bookUpdateOneRequiredWithoutBookauthorNestedInput
  }

  export type bookauthorUncheckedUpdateInput = {
    bookauthor_id?: IntFieldUpdateOperationsInput | number
    book_id?: IntFieldUpdateOperationsInput | number
    author_id?: IntFieldUpdateOperationsInput | number
    createdat?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedat?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type bookauthorCreateManyInput = {
    bookauthor_id?: number
    book_id: number
    author_id: number
    createdat?: Date | string
    updatedat?: Date | string
  }

  export type bookauthorUpdateManyMutationInput = {
    createdat?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedat?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type bookauthorUncheckedUpdateManyInput = {
    bookauthor_id?: IntFieldUpdateOperationsInput | number
    book_id?: IntFieldUpdateOperationsInput | number
    author_id?: IntFieldUpdateOperationsInput | number
    createdat?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedat?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type bookgenreCreateInput = {
    createdat?: Date | string
    updatedat?: Date | string
    book: bookCreateNestedOneWithoutBookgenreInput
    genre: genreCreateNestedOneWithoutBookgenreInput
  }

  export type bookgenreUncheckedCreateInput = {
    bookgenre_id?: number
    book_id: number
    genre_id: number
    createdat?: Date | string
    updatedat?: Date | string
  }

  export type bookgenreUpdateInput = {
    createdat?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedat?: DateTimeFieldUpdateOperationsInput | Date | string
    book?: bookUpdateOneRequiredWithoutBookgenreNestedInput
    genre?: genreUpdateOneRequiredWithoutBookgenreNestedInput
  }

  export type bookgenreUncheckedUpdateInput = {
    bookgenre_id?: IntFieldUpdateOperationsInput | number
    book_id?: IntFieldUpdateOperationsInput | number
    genre_id?: IntFieldUpdateOperationsInput | number
    createdat?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedat?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type bookgenreCreateManyInput = {
    bookgenre_id?: number
    book_id: number
    genre_id: number
    createdat?: Date | string
    updatedat?: Date | string
  }

  export type bookgenreUpdateManyMutationInput = {
    createdat?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedat?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type bookgenreUncheckedUpdateManyInput = {
    bookgenre_id?: IntFieldUpdateOperationsInput | number
    book_id?: IntFieldUpdateOperationsInput | number
    genre_id?: IntFieldUpdateOperationsInput | number
    createdat?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedat?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type bookpublisherCreateInput = {
    dayofarrivaltolibrary: Date | string
    createdat?: Date | string
    updatedat?: Date | string
    book: bookCreateNestedOneWithoutBookpublisherInput
    publication: publicationCreateNestedOneWithoutBookpublisherInput
  }

  export type bookpublisherUncheckedCreateInput = {
    bookpublisher_id?: number
    book_id: number
    publisher_id: number
    dayofarrivaltolibrary: Date | string
    createdat?: Date | string
    updatedat?: Date | string
  }

  export type bookpublisherUpdateInput = {
    dayofarrivaltolibrary?: DateTimeFieldUpdateOperationsInput | Date | string
    createdat?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedat?: DateTimeFieldUpdateOperationsInput | Date | string
    book?: bookUpdateOneRequiredWithoutBookpublisherNestedInput
    publication?: publicationUpdateOneRequiredWithoutBookpublisherNestedInput
  }

  export type bookpublisherUncheckedUpdateInput = {
    bookpublisher_id?: IntFieldUpdateOperationsInput | number
    book_id?: IntFieldUpdateOperationsInput | number
    publisher_id?: IntFieldUpdateOperationsInput | number
    dayofarrivaltolibrary?: DateTimeFieldUpdateOperationsInput | Date | string
    createdat?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedat?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type bookpublisherCreateManyInput = {
    bookpublisher_id?: number
    book_id: number
    publisher_id: number
    dayofarrivaltolibrary: Date | string
    createdat?: Date | string
    updatedat?: Date | string
  }

  export type bookpublisherUpdateManyMutationInput = {
    dayofarrivaltolibrary?: DateTimeFieldUpdateOperationsInput | Date | string
    createdat?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedat?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type bookpublisherUncheckedUpdateManyInput = {
    bookpublisher_id?: IntFieldUpdateOperationsInput | number
    book_id?: IntFieldUpdateOperationsInput | number
    publisher_id?: IntFieldUpdateOperationsInput | number
    dayofarrivaltolibrary?: DateTimeFieldUpdateOperationsInput | Date | string
    createdat?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedat?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type personCreateInput = {
    fullname: string
    phone: string
    email: string
    address: string
    createdat?: Date | string
    updatedat?: Date | string
    author?: authorCreateNestedManyWithoutPersonInput
    member?: memberCreateNestedManyWithoutPersonInput
    staff?: staffCreateNestedManyWithoutPersonInput
  }

  export type personUncheckedCreateInput = {
    person_id?: number
    fullname: string
    phone: string
    email: string
    address: string
    createdat?: Date | string
    updatedat?: Date | string
    author?: authorUncheckedCreateNestedManyWithoutPersonInput
    member?: memberUncheckedCreateNestedManyWithoutPersonInput
    staff?: staffUncheckedCreateNestedManyWithoutPersonInput
  }

  export type personUpdateInput = {
    fullname?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdat?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedat?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: authorUpdateManyWithoutPersonNestedInput
    member?: memberUpdateManyWithoutPersonNestedInput
    staff?: staffUpdateManyWithoutPersonNestedInput
  }

  export type personUncheckedUpdateInput = {
    person_id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdat?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedat?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: authorUncheckedUpdateManyWithoutPersonNestedInput
    member?: memberUncheckedUpdateManyWithoutPersonNestedInput
    staff?: staffUncheckedUpdateManyWithoutPersonNestedInput
  }

  export type personCreateManyInput = {
    person_id?: number
    fullname: string
    phone: string
    email: string
    address: string
    createdat?: Date | string
    updatedat?: Date | string
  }

  export type personUpdateManyMutationInput = {
    fullname?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdat?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedat?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type personUncheckedUpdateManyInput = {
    person_id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdat?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedat?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type publicationCreateInput = {
    title: string
    dateofestablishment: Date | string
    createdat?: Date | string
    updatedat?: Date | string
    bookpublisher?: bookpublisherCreateNestedManyWithoutPublicationInput
  }

  export type publicationUncheckedCreateInput = {
    publication_id?: number
    title: string
    dateofestablishment: Date | string
    createdat?: Date | string
    updatedat?: Date | string
    bookpublisher?: bookpublisherUncheckedCreateNestedManyWithoutPublicationInput
  }

  export type publicationUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    dateofestablishment?: DateTimeFieldUpdateOperationsInput | Date | string
    createdat?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedat?: DateTimeFieldUpdateOperationsInput | Date | string
    bookpublisher?: bookpublisherUpdateManyWithoutPublicationNestedInput
  }

  export type publicationUncheckedUpdateInput = {
    publication_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    dateofestablishment?: DateTimeFieldUpdateOperationsInput | Date | string
    createdat?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedat?: DateTimeFieldUpdateOperationsInput | Date | string
    bookpublisher?: bookpublisherUncheckedUpdateManyWithoutPublicationNestedInput
  }

  export type publicationCreateManyInput = {
    publication_id?: number
    title: string
    dateofestablishment: Date | string
    createdat?: Date | string
    updatedat?: Date | string
  }

  export type publicationUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    dateofestablishment?: DateTimeFieldUpdateOperationsInput | Date | string
    createdat?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedat?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type publicationUncheckedUpdateManyInput = {
    publication_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    dateofestablishment?: DateTimeFieldUpdateOperationsInput | Date | string
    createdat?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedat?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewCreateInput = {
    rating: number
    comment?: string | null
    book: bookCreateNestedOneWithoutReviewInput
  }

  export type ReviewUncheckedCreateInput = {
    id?: number
    rating: number
    comment?: string | null
    book_id: number
  }

  export type ReviewUpdateInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    book?: bookUpdateOneRequiredWithoutReviewNestedInput
  }

  export type ReviewUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    book_id?: IntFieldUpdateOperationsInput | number
  }

  export type ReviewCreateManyInput = {
    id?: number
    rating: number
    comment?: string | null
    book_id: number
  }

  export type ReviewUpdateManyMutationInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReviewUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    book_id?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type PersonNullableScalarRelationFilter = {
    is?: personWhereInput | null
    isNot?: personWhereInput | null
  }

  export type BookauthorListRelationFilter = {
    every?: bookauthorWhereInput
    some?: bookauthorWhereInput
    none?: bookauthorWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type bookauthorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type authorCountOrderByAggregateInput = {
    author_id?: SortOrder
    firstname?: SortOrder
    secondname?: SortOrder
    dateofbirth?: SortOrder
    dateofdeath?: SortOrder
    createdat?: SortOrder
    updatedat?: SortOrder
    person_id?: SortOrder
  }

  export type authorAvgOrderByAggregateInput = {
    author_id?: SortOrder
    person_id?: SortOrder
  }

  export type authorMaxOrderByAggregateInput = {
    author_id?: SortOrder
    firstname?: SortOrder
    secondname?: SortOrder
    dateofbirth?: SortOrder
    dateofdeath?: SortOrder
    createdat?: SortOrder
    updatedat?: SortOrder
    person_id?: SortOrder
  }

  export type authorMinOrderByAggregateInput = {
    author_id?: SortOrder
    firstname?: SortOrder
    secondname?: SortOrder
    dateofbirth?: SortOrder
    dateofdeath?: SortOrder
    createdat?: SortOrder
    updatedat?: SortOrder
    person_id?: SortOrder
  }

  export type authorSumOrderByAggregateInput = {
    author_id?: SortOrder
    person_id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type BookgenreListRelationFilter = {
    every?: bookgenreWhereInput
    some?: bookgenreWhereInput
    none?: bookgenreWhereInput
  }

  export type BookpublisherListRelationFilter = {
    every?: bookpublisherWhereInput
    some?: bookpublisherWhereInput
    none?: bookpublisherWhereInput
  }

  export type LoanListRelationFilter = {
    every?: loanWhereInput
    some?: loanWhereInput
    none?: loanWhereInput
  }

  export type ReviewListRelationFilter = {
    every?: ReviewWhereInput
    some?: ReviewWhereInput
    none?: ReviewWhereInput
  }

  export type bookgenreOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type bookpublisherOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type loanOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type bookCountOrderByAggregateInput = {
    book_id?: SortOrder
    title?: SortOrder
    amountofpages?: SortOrder
    cost?: SortOrder
    publisheryear?: SortOrder
    publication?: SortOrder
    copiesavailable?: SortOrder
    createdat?: SortOrder
    updatedat?: SortOrder
    inStock?: SortOrder
  }

  export type bookAvgOrderByAggregateInput = {
    book_id?: SortOrder
    amountofpages?: SortOrder
    cost?: SortOrder
    publisheryear?: SortOrder
    copiesavailable?: SortOrder
  }

  export type bookMaxOrderByAggregateInput = {
    book_id?: SortOrder
    title?: SortOrder
    amountofpages?: SortOrder
    cost?: SortOrder
    publisheryear?: SortOrder
    publication?: SortOrder
    copiesavailable?: SortOrder
    createdat?: SortOrder
    updatedat?: SortOrder
    inStock?: SortOrder
  }

  export type bookMinOrderByAggregateInput = {
    book_id?: SortOrder
    title?: SortOrder
    amountofpages?: SortOrder
    cost?: SortOrder
    publisheryear?: SortOrder
    publication?: SortOrder
    copiesavailable?: SortOrder
    createdat?: SortOrder
    updatedat?: SortOrder
    inStock?: SortOrder
  }

  export type bookSumOrderByAggregateInput = {
    book_id?: SortOrder
    amountofpages?: SortOrder
    cost?: SortOrder
    publisheryear?: SortOrder
    copiesavailable?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type LoanScalarRelationFilter = {
    is?: loanWhereInput
    isNot?: loanWhereInput
  }

  export type MemberScalarRelationFilter = {
    is?: memberWhereInput
    isNot?: memberWhereInput
  }

  export type fineCountOrderByAggregateInput = {
    fine_id?: SortOrder
    date?: SortOrder
    amount?: SortOrder
    member_id?: SortOrder
    loan_id?: SortOrder
    createdat?: SortOrder
    updatedat?: SortOrder
  }

  export type fineAvgOrderByAggregateInput = {
    fine_id?: SortOrder
    amount?: SortOrder
    member_id?: SortOrder
    loan_id?: SortOrder
  }

  export type fineMaxOrderByAggregateInput = {
    fine_id?: SortOrder
    date?: SortOrder
    amount?: SortOrder
    member_id?: SortOrder
    loan_id?: SortOrder
    createdat?: SortOrder
    updatedat?: SortOrder
  }

  export type fineMinOrderByAggregateInput = {
    fine_id?: SortOrder
    date?: SortOrder
    amount?: SortOrder
    member_id?: SortOrder
    loan_id?: SortOrder
    createdat?: SortOrder
    updatedat?: SortOrder
  }

  export type fineSumOrderByAggregateInput = {
    fine_id?: SortOrder
    amount?: SortOrder
    member_id?: SortOrder
    loan_id?: SortOrder
  }

  export type genreCountOrderByAggregateInput = {
    genre_id?: SortOrder
    title?: SortOrder
    createdat?: SortOrder
    updatedat?: SortOrder
  }

  export type genreAvgOrderByAggregateInput = {
    genre_id?: SortOrder
  }

  export type genreMaxOrderByAggregateInput = {
    genre_id?: SortOrder
    title?: SortOrder
    createdat?: SortOrder
    updatedat?: SortOrder
  }

  export type genreMinOrderByAggregateInput = {
    genre_id?: SortOrder
    title?: SortOrder
    createdat?: SortOrder
    updatedat?: SortOrder
  }

  export type genreSumOrderByAggregateInput = {
    genre_id?: SortOrder
  }

  export type FineListRelationFilter = {
    every?: fineWhereInput
    some?: fineWhereInput
    none?: fineWhereInput
  }

  export type BookScalarRelationFilter = {
    is?: bookWhereInput
    isNot?: bookWhereInput
  }

  export type StaffScalarRelationFilter = {
    is?: staffWhereInput
    isNot?: staffWhereInput
  }

  export type fineOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type loanCountOrderByAggregateInput = {
    loan_id?: SortOrder
    book_id?: SortOrder
    member_id?: SortOrder
    staff_id?: SortOrder
    loandate?: SortOrder
    duedate?: SortOrder
    returndate?: SortOrder
  }

  export type loanAvgOrderByAggregateInput = {
    loan_id?: SortOrder
    book_id?: SortOrder
    member_id?: SortOrder
    staff_id?: SortOrder
  }

  export type loanMaxOrderByAggregateInput = {
    loan_id?: SortOrder
    book_id?: SortOrder
    member_id?: SortOrder
    staff_id?: SortOrder
    loandate?: SortOrder
    duedate?: SortOrder
    returndate?: SortOrder
  }

  export type loanMinOrderByAggregateInput = {
    loan_id?: SortOrder
    book_id?: SortOrder
    member_id?: SortOrder
    staff_id?: SortOrder
    loandate?: SortOrder
    duedate?: SortOrder
    returndate?: SortOrder
  }

  export type loanSumOrderByAggregateInput = {
    loan_id?: SortOrder
    book_id?: SortOrder
    member_id?: SortOrder
    staff_id?: SortOrder
  }

  export type PersonScalarRelationFilter = {
    is?: personWhereInput
    isNot?: personWhereInput
  }

  export type memberCountOrderByAggregateInput = {
    member_id?: SortOrder
    membershipdate?: SortOrder
    createdat?: SortOrder
    updatedat?: SortOrder
    person_id?: SortOrder
  }

  export type memberAvgOrderByAggregateInput = {
    member_id?: SortOrder
    person_id?: SortOrder
  }

  export type memberMaxOrderByAggregateInput = {
    member_id?: SortOrder
    membershipdate?: SortOrder
    createdat?: SortOrder
    updatedat?: SortOrder
    person_id?: SortOrder
  }

  export type memberMinOrderByAggregateInput = {
    member_id?: SortOrder
    membershipdate?: SortOrder
    createdat?: SortOrder
    updatedat?: SortOrder
    person_id?: SortOrder
  }

  export type memberSumOrderByAggregateInput = {
    member_id?: SortOrder
    person_id?: SortOrder
  }

  export type staffCountOrderByAggregateInput = {
    staff_id?: SortOrder
    position?: SortOrder
    education?: SortOrder
    createdat?: SortOrder
    updatedat?: SortOrder
    person_id?: SortOrder
  }

  export type staffAvgOrderByAggregateInput = {
    staff_id?: SortOrder
    person_id?: SortOrder
  }

  export type staffMaxOrderByAggregateInput = {
    staff_id?: SortOrder
    position?: SortOrder
    education?: SortOrder
    createdat?: SortOrder
    updatedat?: SortOrder
    person_id?: SortOrder
  }

  export type staffMinOrderByAggregateInput = {
    staff_id?: SortOrder
    position?: SortOrder
    education?: SortOrder
    createdat?: SortOrder
    updatedat?: SortOrder
    person_id?: SortOrder
  }

  export type staffSumOrderByAggregateInput = {
    staff_id?: SortOrder
    person_id?: SortOrder
  }

  export type AuthorScalarRelationFilter = {
    is?: authorWhereInput
    isNot?: authorWhereInput
  }

  export type bookauthorCountOrderByAggregateInput = {
    bookauthor_id?: SortOrder
    book_id?: SortOrder
    author_id?: SortOrder
    createdat?: SortOrder
    updatedat?: SortOrder
  }

  export type bookauthorAvgOrderByAggregateInput = {
    bookauthor_id?: SortOrder
    book_id?: SortOrder
    author_id?: SortOrder
  }

  export type bookauthorMaxOrderByAggregateInput = {
    bookauthor_id?: SortOrder
    book_id?: SortOrder
    author_id?: SortOrder
    createdat?: SortOrder
    updatedat?: SortOrder
  }

  export type bookauthorMinOrderByAggregateInput = {
    bookauthor_id?: SortOrder
    book_id?: SortOrder
    author_id?: SortOrder
    createdat?: SortOrder
    updatedat?: SortOrder
  }

  export type bookauthorSumOrderByAggregateInput = {
    bookauthor_id?: SortOrder
    book_id?: SortOrder
    author_id?: SortOrder
  }

  export type GenreScalarRelationFilter = {
    is?: genreWhereInput
    isNot?: genreWhereInput
  }

  export type bookgenreCountOrderByAggregateInput = {
    bookgenre_id?: SortOrder
    book_id?: SortOrder
    genre_id?: SortOrder
    createdat?: SortOrder
    updatedat?: SortOrder
  }

  export type bookgenreAvgOrderByAggregateInput = {
    bookgenre_id?: SortOrder
    book_id?: SortOrder
    genre_id?: SortOrder
  }

  export type bookgenreMaxOrderByAggregateInput = {
    bookgenre_id?: SortOrder
    book_id?: SortOrder
    genre_id?: SortOrder
    createdat?: SortOrder
    updatedat?: SortOrder
  }

  export type bookgenreMinOrderByAggregateInput = {
    bookgenre_id?: SortOrder
    book_id?: SortOrder
    genre_id?: SortOrder
    createdat?: SortOrder
    updatedat?: SortOrder
  }

  export type bookgenreSumOrderByAggregateInput = {
    bookgenre_id?: SortOrder
    book_id?: SortOrder
    genre_id?: SortOrder
  }

  export type PublicationScalarRelationFilter = {
    is?: publicationWhereInput
    isNot?: publicationWhereInput
  }

  export type bookpublisherCountOrderByAggregateInput = {
    bookpublisher_id?: SortOrder
    book_id?: SortOrder
    publisher_id?: SortOrder
    dayofarrivaltolibrary?: SortOrder
    createdat?: SortOrder
    updatedat?: SortOrder
  }

  export type bookpublisherAvgOrderByAggregateInput = {
    bookpublisher_id?: SortOrder
    book_id?: SortOrder
    publisher_id?: SortOrder
  }

  export type bookpublisherMaxOrderByAggregateInput = {
    bookpublisher_id?: SortOrder
    book_id?: SortOrder
    publisher_id?: SortOrder
    dayofarrivaltolibrary?: SortOrder
    createdat?: SortOrder
    updatedat?: SortOrder
  }

  export type bookpublisherMinOrderByAggregateInput = {
    bookpublisher_id?: SortOrder
    book_id?: SortOrder
    publisher_id?: SortOrder
    dayofarrivaltolibrary?: SortOrder
    createdat?: SortOrder
    updatedat?: SortOrder
  }

  export type bookpublisherSumOrderByAggregateInput = {
    bookpublisher_id?: SortOrder
    book_id?: SortOrder
    publisher_id?: SortOrder
  }

  export type AuthorListRelationFilter = {
    every?: authorWhereInput
    some?: authorWhereInput
    none?: authorWhereInput
  }

  export type MemberListRelationFilter = {
    every?: memberWhereInput
    some?: memberWhereInput
    none?: memberWhereInput
  }

  export type StaffListRelationFilter = {
    every?: staffWhereInput
    some?: staffWhereInput
    none?: staffWhereInput
  }

  export type authorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type memberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type staffOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type personCountOrderByAggregateInput = {
    person_id?: SortOrder
    fullname?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    address?: SortOrder
    createdat?: SortOrder
    updatedat?: SortOrder
  }

  export type personAvgOrderByAggregateInput = {
    person_id?: SortOrder
  }

  export type personMaxOrderByAggregateInput = {
    person_id?: SortOrder
    fullname?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    address?: SortOrder
    createdat?: SortOrder
    updatedat?: SortOrder
  }

  export type personMinOrderByAggregateInput = {
    person_id?: SortOrder
    fullname?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    address?: SortOrder
    createdat?: SortOrder
    updatedat?: SortOrder
  }

  export type personSumOrderByAggregateInput = {
    person_id?: SortOrder
  }

  export type publicationCountOrderByAggregateInput = {
    publication_id?: SortOrder
    title?: SortOrder
    dateofestablishment?: SortOrder
    createdat?: SortOrder
    updatedat?: SortOrder
  }

  export type publicationAvgOrderByAggregateInput = {
    publication_id?: SortOrder
  }

  export type publicationMaxOrderByAggregateInput = {
    publication_id?: SortOrder
    title?: SortOrder
    dateofestablishment?: SortOrder
    createdat?: SortOrder
    updatedat?: SortOrder
  }

  export type publicationMinOrderByAggregateInput = {
    publication_id?: SortOrder
    title?: SortOrder
    dateofestablishment?: SortOrder
    createdat?: SortOrder
    updatedat?: SortOrder
  }

  export type publicationSumOrderByAggregateInput = {
    publication_id?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type ReviewCountOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    book_id?: SortOrder
  }

  export type ReviewAvgOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    book_id?: SortOrder
  }

  export type ReviewMaxOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    book_id?: SortOrder
  }

  export type ReviewMinOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    book_id?: SortOrder
  }

  export type ReviewSumOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    book_id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type personCreateNestedOneWithoutAuthorInput = {
    create?: XOR<personCreateWithoutAuthorInput, personUncheckedCreateWithoutAuthorInput>
    connectOrCreate?: personCreateOrConnectWithoutAuthorInput
    connect?: personWhereUniqueInput
  }

  export type bookauthorCreateNestedManyWithoutAuthorInput = {
    create?: XOR<bookauthorCreateWithoutAuthorInput, bookauthorUncheckedCreateWithoutAuthorInput> | bookauthorCreateWithoutAuthorInput[] | bookauthorUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: bookauthorCreateOrConnectWithoutAuthorInput | bookauthorCreateOrConnectWithoutAuthorInput[]
    createMany?: bookauthorCreateManyAuthorInputEnvelope
    connect?: bookauthorWhereUniqueInput | bookauthorWhereUniqueInput[]
  }

  export type bookauthorUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<bookauthorCreateWithoutAuthorInput, bookauthorUncheckedCreateWithoutAuthorInput> | bookauthorCreateWithoutAuthorInput[] | bookauthorUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: bookauthorCreateOrConnectWithoutAuthorInput | bookauthorCreateOrConnectWithoutAuthorInput[]
    createMany?: bookauthorCreateManyAuthorInputEnvelope
    connect?: bookauthorWhereUniqueInput | bookauthorWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type personUpdateOneWithoutAuthorNestedInput = {
    create?: XOR<personCreateWithoutAuthorInput, personUncheckedCreateWithoutAuthorInput>
    connectOrCreate?: personCreateOrConnectWithoutAuthorInput
    upsert?: personUpsertWithoutAuthorInput
    disconnect?: personWhereInput | boolean
    delete?: personWhereInput | boolean
    connect?: personWhereUniqueInput
    update?: XOR<XOR<personUpdateToOneWithWhereWithoutAuthorInput, personUpdateWithoutAuthorInput>, personUncheckedUpdateWithoutAuthorInput>
  }

  export type bookauthorUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<bookauthorCreateWithoutAuthorInput, bookauthorUncheckedCreateWithoutAuthorInput> | bookauthorCreateWithoutAuthorInput[] | bookauthorUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: bookauthorCreateOrConnectWithoutAuthorInput | bookauthorCreateOrConnectWithoutAuthorInput[]
    upsert?: bookauthorUpsertWithWhereUniqueWithoutAuthorInput | bookauthorUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: bookauthorCreateManyAuthorInputEnvelope
    set?: bookauthorWhereUniqueInput | bookauthorWhereUniqueInput[]
    disconnect?: bookauthorWhereUniqueInput | bookauthorWhereUniqueInput[]
    delete?: bookauthorWhereUniqueInput | bookauthorWhereUniqueInput[]
    connect?: bookauthorWhereUniqueInput | bookauthorWhereUniqueInput[]
    update?: bookauthorUpdateWithWhereUniqueWithoutAuthorInput | bookauthorUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: bookauthorUpdateManyWithWhereWithoutAuthorInput | bookauthorUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: bookauthorScalarWhereInput | bookauthorScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type bookauthorUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<bookauthorCreateWithoutAuthorInput, bookauthorUncheckedCreateWithoutAuthorInput> | bookauthorCreateWithoutAuthorInput[] | bookauthorUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: bookauthorCreateOrConnectWithoutAuthorInput | bookauthorCreateOrConnectWithoutAuthorInput[]
    upsert?: bookauthorUpsertWithWhereUniqueWithoutAuthorInput | bookauthorUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: bookauthorCreateManyAuthorInputEnvelope
    set?: bookauthorWhereUniqueInput | bookauthorWhereUniqueInput[]
    disconnect?: bookauthorWhereUniqueInput | bookauthorWhereUniqueInput[]
    delete?: bookauthorWhereUniqueInput | bookauthorWhereUniqueInput[]
    connect?: bookauthorWhereUniqueInput | bookauthorWhereUniqueInput[]
    update?: bookauthorUpdateWithWhereUniqueWithoutAuthorInput | bookauthorUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: bookauthorUpdateManyWithWhereWithoutAuthorInput | bookauthorUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: bookauthorScalarWhereInput | bookauthorScalarWhereInput[]
  }

  export type bookauthorCreateNestedManyWithoutBookInput = {
    create?: XOR<bookauthorCreateWithoutBookInput, bookauthorUncheckedCreateWithoutBookInput> | bookauthorCreateWithoutBookInput[] | bookauthorUncheckedCreateWithoutBookInput[]
    connectOrCreate?: bookauthorCreateOrConnectWithoutBookInput | bookauthorCreateOrConnectWithoutBookInput[]
    createMany?: bookauthorCreateManyBookInputEnvelope
    connect?: bookauthorWhereUniqueInput | bookauthorWhereUniqueInput[]
  }

  export type bookgenreCreateNestedManyWithoutBookInput = {
    create?: XOR<bookgenreCreateWithoutBookInput, bookgenreUncheckedCreateWithoutBookInput> | bookgenreCreateWithoutBookInput[] | bookgenreUncheckedCreateWithoutBookInput[]
    connectOrCreate?: bookgenreCreateOrConnectWithoutBookInput | bookgenreCreateOrConnectWithoutBookInput[]
    createMany?: bookgenreCreateManyBookInputEnvelope
    connect?: bookgenreWhereUniqueInput | bookgenreWhereUniqueInput[]
  }

  export type bookpublisherCreateNestedManyWithoutBookInput = {
    create?: XOR<bookpublisherCreateWithoutBookInput, bookpublisherUncheckedCreateWithoutBookInput> | bookpublisherCreateWithoutBookInput[] | bookpublisherUncheckedCreateWithoutBookInput[]
    connectOrCreate?: bookpublisherCreateOrConnectWithoutBookInput | bookpublisherCreateOrConnectWithoutBookInput[]
    createMany?: bookpublisherCreateManyBookInputEnvelope
    connect?: bookpublisherWhereUniqueInput | bookpublisherWhereUniqueInput[]
  }

  export type loanCreateNestedManyWithoutBookInput = {
    create?: XOR<loanCreateWithoutBookInput, loanUncheckedCreateWithoutBookInput> | loanCreateWithoutBookInput[] | loanUncheckedCreateWithoutBookInput[]
    connectOrCreate?: loanCreateOrConnectWithoutBookInput | loanCreateOrConnectWithoutBookInput[]
    createMany?: loanCreateManyBookInputEnvelope
    connect?: loanWhereUniqueInput | loanWhereUniqueInput[]
  }

  export type ReviewCreateNestedManyWithoutBookInput = {
    create?: XOR<ReviewCreateWithoutBookInput, ReviewUncheckedCreateWithoutBookInput> | ReviewCreateWithoutBookInput[] | ReviewUncheckedCreateWithoutBookInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutBookInput | ReviewCreateOrConnectWithoutBookInput[]
    createMany?: ReviewCreateManyBookInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type bookauthorUncheckedCreateNestedManyWithoutBookInput = {
    create?: XOR<bookauthorCreateWithoutBookInput, bookauthorUncheckedCreateWithoutBookInput> | bookauthorCreateWithoutBookInput[] | bookauthorUncheckedCreateWithoutBookInput[]
    connectOrCreate?: bookauthorCreateOrConnectWithoutBookInput | bookauthorCreateOrConnectWithoutBookInput[]
    createMany?: bookauthorCreateManyBookInputEnvelope
    connect?: bookauthorWhereUniqueInput | bookauthorWhereUniqueInput[]
  }

  export type bookgenreUncheckedCreateNestedManyWithoutBookInput = {
    create?: XOR<bookgenreCreateWithoutBookInput, bookgenreUncheckedCreateWithoutBookInput> | bookgenreCreateWithoutBookInput[] | bookgenreUncheckedCreateWithoutBookInput[]
    connectOrCreate?: bookgenreCreateOrConnectWithoutBookInput | bookgenreCreateOrConnectWithoutBookInput[]
    createMany?: bookgenreCreateManyBookInputEnvelope
    connect?: bookgenreWhereUniqueInput | bookgenreWhereUniqueInput[]
  }

  export type bookpublisherUncheckedCreateNestedManyWithoutBookInput = {
    create?: XOR<bookpublisherCreateWithoutBookInput, bookpublisherUncheckedCreateWithoutBookInput> | bookpublisherCreateWithoutBookInput[] | bookpublisherUncheckedCreateWithoutBookInput[]
    connectOrCreate?: bookpublisherCreateOrConnectWithoutBookInput | bookpublisherCreateOrConnectWithoutBookInput[]
    createMany?: bookpublisherCreateManyBookInputEnvelope
    connect?: bookpublisherWhereUniqueInput | bookpublisherWhereUniqueInput[]
  }

  export type loanUncheckedCreateNestedManyWithoutBookInput = {
    create?: XOR<loanCreateWithoutBookInput, loanUncheckedCreateWithoutBookInput> | loanCreateWithoutBookInput[] | loanUncheckedCreateWithoutBookInput[]
    connectOrCreate?: loanCreateOrConnectWithoutBookInput | loanCreateOrConnectWithoutBookInput[]
    createMany?: loanCreateManyBookInputEnvelope
    connect?: loanWhereUniqueInput | loanWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutBookInput = {
    create?: XOR<ReviewCreateWithoutBookInput, ReviewUncheckedCreateWithoutBookInput> | ReviewCreateWithoutBookInput[] | ReviewUncheckedCreateWithoutBookInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutBookInput | ReviewCreateOrConnectWithoutBookInput[]
    createMany?: ReviewCreateManyBookInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type bookauthorUpdateManyWithoutBookNestedInput = {
    create?: XOR<bookauthorCreateWithoutBookInput, bookauthorUncheckedCreateWithoutBookInput> | bookauthorCreateWithoutBookInput[] | bookauthorUncheckedCreateWithoutBookInput[]
    connectOrCreate?: bookauthorCreateOrConnectWithoutBookInput | bookauthorCreateOrConnectWithoutBookInput[]
    upsert?: bookauthorUpsertWithWhereUniqueWithoutBookInput | bookauthorUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: bookauthorCreateManyBookInputEnvelope
    set?: bookauthorWhereUniqueInput | bookauthorWhereUniqueInput[]
    disconnect?: bookauthorWhereUniqueInput | bookauthorWhereUniqueInput[]
    delete?: bookauthorWhereUniqueInput | bookauthorWhereUniqueInput[]
    connect?: bookauthorWhereUniqueInput | bookauthorWhereUniqueInput[]
    update?: bookauthorUpdateWithWhereUniqueWithoutBookInput | bookauthorUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: bookauthorUpdateManyWithWhereWithoutBookInput | bookauthorUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: bookauthorScalarWhereInput | bookauthorScalarWhereInput[]
  }

  export type bookgenreUpdateManyWithoutBookNestedInput = {
    create?: XOR<bookgenreCreateWithoutBookInput, bookgenreUncheckedCreateWithoutBookInput> | bookgenreCreateWithoutBookInput[] | bookgenreUncheckedCreateWithoutBookInput[]
    connectOrCreate?: bookgenreCreateOrConnectWithoutBookInput | bookgenreCreateOrConnectWithoutBookInput[]
    upsert?: bookgenreUpsertWithWhereUniqueWithoutBookInput | bookgenreUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: bookgenreCreateManyBookInputEnvelope
    set?: bookgenreWhereUniqueInput | bookgenreWhereUniqueInput[]
    disconnect?: bookgenreWhereUniqueInput | bookgenreWhereUniqueInput[]
    delete?: bookgenreWhereUniqueInput | bookgenreWhereUniqueInput[]
    connect?: bookgenreWhereUniqueInput | bookgenreWhereUniqueInput[]
    update?: bookgenreUpdateWithWhereUniqueWithoutBookInput | bookgenreUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: bookgenreUpdateManyWithWhereWithoutBookInput | bookgenreUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: bookgenreScalarWhereInput | bookgenreScalarWhereInput[]
  }

  export type bookpublisherUpdateManyWithoutBookNestedInput = {
    create?: XOR<bookpublisherCreateWithoutBookInput, bookpublisherUncheckedCreateWithoutBookInput> | bookpublisherCreateWithoutBookInput[] | bookpublisherUncheckedCreateWithoutBookInput[]
    connectOrCreate?: bookpublisherCreateOrConnectWithoutBookInput | bookpublisherCreateOrConnectWithoutBookInput[]
    upsert?: bookpublisherUpsertWithWhereUniqueWithoutBookInput | bookpublisherUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: bookpublisherCreateManyBookInputEnvelope
    set?: bookpublisherWhereUniqueInput | bookpublisherWhereUniqueInput[]
    disconnect?: bookpublisherWhereUniqueInput | bookpublisherWhereUniqueInput[]
    delete?: bookpublisherWhereUniqueInput | bookpublisherWhereUniqueInput[]
    connect?: bookpublisherWhereUniqueInput | bookpublisherWhereUniqueInput[]
    update?: bookpublisherUpdateWithWhereUniqueWithoutBookInput | bookpublisherUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: bookpublisherUpdateManyWithWhereWithoutBookInput | bookpublisherUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: bookpublisherScalarWhereInput | bookpublisherScalarWhereInput[]
  }

  export type loanUpdateManyWithoutBookNestedInput = {
    create?: XOR<loanCreateWithoutBookInput, loanUncheckedCreateWithoutBookInput> | loanCreateWithoutBookInput[] | loanUncheckedCreateWithoutBookInput[]
    connectOrCreate?: loanCreateOrConnectWithoutBookInput | loanCreateOrConnectWithoutBookInput[]
    upsert?: loanUpsertWithWhereUniqueWithoutBookInput | loanUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: loanCreateManyBookInputEnvelope
    set?: loanWhereUniqueInput | loanWhereUniqueInput[]
    disconnect?: loanWhereUniqueInput | loanWhereUniqueInput[]
    delete?: loanWhereUniqueInput | loanWhereUniqueInput[]
    connect?: loanWhereUniqueInput | loanWhereUniqueInput[]
    update?: loanUpdateWithWhereUniqueWithoutBookInput | loanUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: loanUpdateManyWithWhereWithoutBookInput | loanUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: loanScalarWhereInput | loanScalarWhereInput[]
  }

  export type ReviewUpdateManyWithoutBookNestedInput = {
    create?: XOR<ReviewCreateWithoutBookInput, ReviewUncheckedCreateWithoutBookInput> | ReviewCreateWithoutBookInput[] | ReviewUncheckedCreateWithoutBookInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutBookInput | ReviewCreateOrConnectWithoutBookInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutBookInput | ReviewUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: ReviewCreateManyBookInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutBookInput | ReviewUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutBookInput | ReviewUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type bookauthorUncheckedUpdateManyWithoutBookNestedInput = {
    create?: XOR<bookauthorCreateWithoutBookInput, bookauthorUncheckedCreateWithoutBookInput> | bookauthorCreateWithoutBookInput[] | bookauthorUncheckedCreateWithoutBookInput[]
    connectOrCreate?: bookauthorCreateOrConnectWithoutBookInput | bookauthorCreateOrConnectWithoutBookInput[]
    upsert?: bookauthorUpsertWithWhereUniqueWithoutBookInput | bookauthorUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: bookauthorCreateManyBookInputEnvelope
    set?: bookauthorWhereUniqueInput | bookauthorWhereUniqueInput[]
    disconnect?: bookauthorWhereUniqueInput | bookauthorWhereUniqueInput[]
    delete?: bookauthorWhereUniqueInput | bookauthorWhereUniqueInput[]
    connect?: bookauthorWhereUniqueInput | bookauthorWhereUniqueInput[]
    update?: bookauthorUpdateWithWhereUniqueWithoutBookInput | bookauthorUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: bookauthorUpdateManyWithWhereWithoutBookInput | bookauthorUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: bookauthorScalarWhereInput | bookauthorScalarWhereInput[]
  }

  export type bookgenreUncheckedUpdateManyWithoutBookNestedInput = {
    create?: XOR<bookgenreCreateWithoutBookInput, bookgenreUncheckedCreateWithoutBookInput> | bookgenreCreateWithoutBookInput[] | bookgenreUncheckedCreateWithoutBookInput[]
    connectOrCreate?: bookgenreCreateOrConnectWithoutBookInput | bookgenreCreateOrConnectWithoutBookInput[]
    upsert?: bookgenreUpsertWithWhereUniqueWithoutBookInput | bookgenreUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: bookgenreCreateManyBookInputEnvelope
    set?: bookgenreWhereUniqueInput | bookgenreWhereUniqueInput[]
    disconnect?: bookgenreWhereUniqueInput | bookgenreWhereUniqueInput[]
    delete?: bookgenreWhereUniqueInput | bookgenreWhereUniqueInput[]
    connect?: bookgenreWhereUniqueInput | bookgenreWhereUniqueInput[]
    update?: bookgenreUpdateWithWhereUniqueWithoutBookInput | bookgenreUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: bookgenreUpdateManyWithWhereWithoutBookInput | bookgenreUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: bookgenreScalarWhereInput | bookgenreScalarWhereInput[]
  }

  export type bookpublisherUncheckedUpdateManyWithoutBookNestedInput = {
    create?: XOR<bookpublisherCreateWithoutBookInput, bookpublisherUncheckedCreateWithoutBookInput> | bookpublisherCreateWithoutBookInput[] | bookpublisherUncheckedCreateWithoutBookInput[]
    connectOrCreate?: bookpublisherCreateOrConnectWithoutBookInput | bookpublisherCreateOrConnectWithoutBookInput[]
    upsert?: bookpublisherUpsertWithWhereUniqueWithoutBookInput | bookpublisherUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: bookpublisherCreateManyBookInputEnvelope
    set?: bookpublisherWhereUniqueInput | bookpublisherWhereUniqueInput[]
    disconnect?: bookpublisherWhereUniqueInput | bookpublisherWhereUniqueInput[]
    delete?: bookpublisherWhereUniqueInput | bookpublisherWhereUniqueInput[]
    connect?: bookpublisherWhereUniqueInput | bookpublisherWhereUniqueInput[]
    update?: bookpublisherUpdateWithWhereUniqueWithoutBookInput | bookpublisherUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: bookpublisherUpdateManyWithWhereWithoutBookInput | bookpublisherUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: bookpublisherScalarWhereInput | bookpublisherScalarWhereInput[]
  }

  export type loanUncheckedUpdateManyWithoutBookNestedInput = {
    create?: XOR<loanCreateWithoutBookInput, loanUncheckedCreateWithoutBookInput> | loanCreateWithoutBookInput[] | loanUncheckedCreateWithoutBookInput[]
    connectOrCreate?: loanCreateOrConnectWithoutBookInput | loanCreateOrConnectWithoutBookInput[]
    upsert?: loanUpsertWithWhereUniqueWithoutBookInput | loanUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: loanCreateManyBookInputEnvelope
    set?: loanWhereUniqueInput | loanWhereUniqueInput[]
    disconnect?: loanWhereUniqueInput | loanWhereUniqueInput[]
    delete?: loanWhereUniqueInput | loanWhereUniqueInput[]
    connect?: loanWhereUniqueInput | loanWhereUniqueInput[]
    update?: loanUpdateWithWhereUniqueWithoutBookInput | loanUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: loanUpdateManyWithWhereWithoutBookInput | loanUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: loanScalarWhereInput | loanScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutBookNestedInput = {
    create?: XOR<ReviewCreateWithoutBookInput, ReviewUncheckedCreateWithoutBookInput> | ReviewCreateWithoutBookInput[] | ReviewUncheckedCreateWithoutBookInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutBookInput | ReviewCreateOrConnectWithoutBookInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutBookInput | ReviewUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: ReviewCreateManyBookInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutBookInput | ReviewUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutBookInput | ReviewUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type loanCreateNestedOneWithoutFineInput = {
    create?: XOR<loanCreateWithoutFineInput, loanUncheckedCreateWithoutFineInput>
    connectOrCreate?: loanCreateOrConnectWithoutFineInput
    connect?: loanWhereUniqueInput
  }

  export type memberCreateNestedOneWithoutFineInput = {
    create?: XOR<memberCreateWithoutFineInput, memberUncheckedCreateWithoutFineInput>
    connectOrCreate?: memberCreateOrConnectWithoutFineInput
    connect?: memberWhereUniqueInput
  }

  export type loanUpdateOneRequiredWithoutFineNestedInput = {
    create?: XOR<loanCreateWithoutFineInput, loanUncheckedCreateWithoutFineInput>
    connectOrCreate?: loanCreateOrConnectWithoutFineInput
    upsert?: loanUpsertWithoutFineInput
    connect?: loanWhereUniqueInput
    update?: XOR<XOR<loanUpdateToOneWithWhereWithoutFineInput, loanUpdateWithoutFineInput>, loanUncheckedUpdateWithoutFineInput>
  }

  export type memberUpdateOneRequiredWithoutFineNestedInput = {
    create?: XOR<memberCreateWithoutFineInput, memberUncheckedCreateWithoutFineInput>
    connectOrCreate?: memberCreateOrConnectWithoutFineInput
    upsert?: memberUpsertWithoutFineInput
    connect?: memberWhereUniqueInput
    update?: XOR<XOR<memberUpdateToOneWithWhereWithoutFineInput, memberUpdateWithoutFineInput>, memberUncheckedUpdateWithoutFineInput>
  }

  export type bookgenreCreateNestedManyWithoutGenreInput = {
    create?: XOR<bookgenreCreateWithoutGenreInput, bookgenreUncheckedCreateWithoutGenreInput> | bookgenreCreateWithoutGenreInput[] | bookgenreUncheckedCreateWithoutGenreInput[]
    connectOrCreate?: bookgenreCreateOrConnectWithoutGenreInput | bookgenreCreateOrConnectWithoutGenreInput[]
    createMany?: bookgenreCreateManyGenreInputEnvelope
    connect?: bookgenreWhereUniqueInput | bookgenreWhereUniqueInput[]
  }

  export type bookgenreUncheckedCreateNestedManyWithoutGenreInput = {
    create?: XOR<bookgenreCreateWithoutGenreInput, bookgenreUncheckedCreateWithoutGenreInput> | bookgenreCreateWithoutGenreInput[] | bookgenreUncheckedCreateWithoutGenreInput[]
    connectOrCreate?: bookgenreCreateOrConnectWithoutGenreInput | bookgenreCreateOrConnectWithoutGenreInput[]
    createMany?: bookgenreCreateManyGenreInputEnvelope
    connect?: bookgenreWhereUniqueInput | bookgenreWhereUniqueInput[]
  }

  export type bookgenreUpdateManyWithoutGenreNestedInput = {
    create?: XOR<bookgenreCreateWithoutGenreInput, bookgenreUncheckedCreateWithoutGenreInput> | bookgenreCreateWithoutGenreInput[] | bookgenreUncheckedCreateWithoutGenreInput[]
    connectOrCreate?: bookgenreCreateOrConnectWithoutGenreInput | bookgenreCreateOrConnectWithoutGenreInput[]
    upsert?: bookgenreUpsertWithWhereUniqueWithoutGenreInput | bookgenreUpsertWithWhereUniqueWithoutGenreInput[]
    createMany?: bookgenreCreateManyGenreInputEnvelope
    set?: bookgenreWhereUniqueInput | bookgenreWhereUniqueInput[]
    disconnect?: bookgenreWhereUniqueInput | bookgenreWhereUniqueInput[]
    delete?: bookgenreWhereUniqueInput | bookgenreWhereUniqueInput[]
    connect?: bookgenreWhereUniqueInput | bookgenreWhereUniqueInput[]
    update?: bookgenreUpdateWithWhereUniqueWithoutGenreInput | bookgenreUpdateWithWhereUniqueWithoutGenreInput[]
    updateMany?: bookgenreUpdateManyWithWhereWithoutGenreInput | bookgenreUpdateManyWithWhereWithoutGenreInput[]
    deleteMany?: bookgenreScalarWhereInput | bookgenreScalarWhereInput[]
  }

  export type bookgenreUncheckedUpdateManyWithoutGenreNestedInput = {
    create?: XOR<bookgenreCreateWithoutGenreInput, bookgenreUncheckedCreateWithoutGenreInput> | bookgenreCreateWithoutGenreInput[] | bookgenreUncheckedCreateWithoutGenreInput[]
    connectOrCreate?: bookgenreCreateOrConnectWithoutGenreInput | bookgenreCreateOrConnectWithoutGenreInput[]
    upsert?: bookgenreUpsertWithWhereUniqueWithoutGenreInput | bookgenreUpsertWithWhereUniqueWithoutGenreInput[]
    createMany?: bookgenreCreateManyGenreInputEnvelope
    set?: bookgenreWhereUniqueInput | bookgenreWhereUniqueInput[]
    disconnect?: bookgenreWhereUniqueInput | bookgenreWhereUniqueInput[]
    delete?: bookgenreWhereUniqueInput | bookgenreWhereUniqueInput[]
    connect?: bookgenreWhereUniqueInput | bookgenreWhereUniqueInput[]
    update?: bookgenreUpdateWithWhereUniqueWithoutGenreInput | bookgenreUpdateWithWhereUniqueWithoutGenreInput[]
    updateMany?: bookgenreUpdateManyWithWhereWithoutGenreInput | bookgenreUpdateManyWithWhereWithoutGenreInput[]
    deleteMany?: bookgenreScalarWhereInput | bookgenreScalarWhereInput[]
  }

  export type fineCreateNestedManyWithoutLoanInput = {
    create?: XOR<fineCreateWithoutLoanInput, fineUncheckedCreateWithoutLoanInput> | fineCreateWithoutLoanInput[] | fineUncheckedCreateWithoutLoanInput[]
    connectOrCreate?: fineCreateOrConnectWithoutLoanInput | fineCreateOrConnectWithoutLoanInput[]
    createMany?: fineCreateManyLoanInputEnvelope
    connect?: fineWhereUniqueInput | fineWhereUniqueInput[]
  }

  export type bookCreateNestedOneWithoutLoanInput = {
    create?: XOR<bookCreateWithoutLoanInput, bookUncheckedCreateWithoutLoanInput>
    connectOrCreate?: bookCreateOrConnectWithoutLoanInput
    connect?: bookWhereUniqueInput
  }

  export type memberCreateNestedOneWithoutLoanInput = {
    create?: XOR<memberCreateWithoutLoanInput, memberUncheckedCreateWithoutLoanInput>
    connectOrCreate?: memberCreateOrConnectWithoutLoanInput
    connect?: memberWhereUniqueInput
  }

  export type staffCreateNestedOneWithoutLoanInput = {
    create?: XOR<staffCreateWithoutLoanInput, staffUncheckedCreateWithoutLoanInput>
    connectOrCreate?: staffCreateOrConnectWithoutLoanInput
    connect?: staffWhereUniqueInput
  }

  export type fineUncheckedCreateNestedManyWithoutLoanInput = {
    create?: XOR<fineCreateWithoutLoanInput, fineUncheckedCreateWithoutLoanInput> | fineCreateWithoutLoanInput[] | fineUncheckedCreateWithoutLoanInput[]
    connectOrCreate?: fineCreateOrConnectWithoutLoanInput | fineCreateOrConnectWithoutLoanInput[]
    createMany?: fineCreateManyLoanInputEnvelope
    connect?: fineWhereUniqueInput | fineWhereUniqueInput[]
  }

  export type fineUpdateManyWithoutLoanNestedInput = {
    create?: XOR<fineCreateWithoutLoanInput, fineUncheckedCreateWithoutLoanInput> | fineCreateWithoutLoanInput[] | fineUncheckedCreateWithoutLoanInput[]
    connectOrCreate?: fineCreateOrConnectWithoutLoanInput | fineCreateOrConnectWithoutLoanInput[]
    upsert?: fineUpsertWithWhereUniqueWithoutLoanInput | fineUpsertWithWhereUniqueWithoutLoanInput[]
    createMany?: fineCreateManyLoanInputEnvelope
    set?: fineWhereUniqueInput | fineWhereUniqueInput[]
    disconnect?: fineWhereUniqueInput | fineWhereUniqueInput[]
    delete?: fineWhereUniqueInput | fineWhereUniqueInput[]
    connect?: fineWhereUniqueInput | fineWhereUniqueInput[]
    update?: fineUpdateWithWhereUniqueWithoutLoanInput | fineUpdateWithWhereUniqueWithoutLoanInput[]
    updateMany?: fineUpdateManyWithWhereWithoutLoanInput | fineUpdateManyWithWhereWithoutLoanInput[]
    deleteMany?: fineScalarWhereInput | fineScalarWhereInput[]
  }

  export type bookUpdateOneRequiredWithoutLoanNestedInput = {
    create?: XOR<bookCreateWithoutLoanInput, bookUncheckedCreateWithoutLoanInput>
    connectOrCreate?: bookCreateOrConnectWithoutLoanInput
    upsert?: bookUpsertWithoutLoanInput
    connect?: bookWhereUniqueInput
    update?: XOR<XOR<bookUpdateToOneWithWhereWithoutLoanInput, bookUpdateWithoutLoanInput>, bookUncheckedUpdateWithoutLoanInput>
  }

  export type memberUpdateOneRequiredWithoutLoanNestedInput = {
    create?: XOR<memberCreateWithoutLoanInput, memberUncheckedCreateWithoutLoanInput>
    connectOrCreate?: memberCreateOrConnectWithoutLoanInput
    upsert?: memberUpsertWithoutLoanInput
    connect?: memberWhereUniqueInput
    update?: XOR<XOR<memberUpdateToOneWithWhereWithoutLoanInput, memberUpdateWithoutLoanInput>, memberUncheckedUpdateWithoutLoanInput>
  }

  export type staffUpdateOneRequiredWithoutLoanNestedInput = {
    create?: XOR<staffCreateWithoutLoanInput, staffUncheckedCreateWithoutLoanInput>
    connectOrCreate?: staffCreateOrConnectWithoutLoanInput
    upsert?: staffUpsertWithoutLoanInput
    connect?: staffWhereUniqueInput
    update?: XOR<XOR<staffUpdateToOneWithWhereWithoutLoanInput, staffUpdateWithoutLoanInput>, staffUncheckedUpdateWithoutLoanInput>
  }

  export type fineUncheckedUpdateManyWithoutLoanNestedInput = {
    create?: XOR<fineCreateWithoutLoanInput, fineUncheckedCreateWithoutLoanInput> | fineCreateWithoutLoanInput[] | fineUncheckedCreateWithoutLoanInput[]
    connectOrCreate?: fineCreateOrConnectWithoutLoanInput | fineCreateOrConnectWithoutLoanInput[]
    upsert?: fineUpsertWithWhereUniqueWithoutLoanInput | fineUpsertWithWhereUniqueWithoutLoanInput[]
    createMany?: fineCreateManyLoanInputEnvelope
    set?: fineWhereUniqueInput | fineWhereUniqueInput[]
    disconnect?: fineWhereUniqueInput | fineWhereUniqueInput[]
    delete?: fineWhereUniqueInput | fineWhereUniqueInput[]
    connect?: fineWhereUniqueInput | fineWhereUniqueInput[]
    update?: fineUpdateWithWhereUniqueWithoutLoanInput | fineUpdateWithWhereUniqueWithoutLoanInput[]
    updateMany?: fineUpdateManyWithWhereWithoutLoanInput | fineUpdateManyWithWhereWithoutLoanInput[]
    deleteMany?: fineScalarWhereInput | fineScalarWhereInput[]
  }

  export type fineCreateNestedManyWithoutMemberInput = {
    create?: XOR<fineCreateWithoutMemberInput, fineUncheckedCreateWithoutMemberInput> | fineCreateWithoutMemberInput[] | fineUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: fineCreateOrConnectWithoutMemberInput | fineCreateOrConnectWithoutMemberInput[]
    createMany?: fineCreateManyMemberInputEnvelope
    connect?: fineWhereUniqueInput | fineWhereUniqueInput[]
  }

  export type loanCreateNestedManyWithoutMemberInput = {
    create?: XOR<loanCreateWithoutMemberInput, loanUncheckedCreateWithoutMemberInput> | loanCreateWithoutMemberInput[] | loanUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: loanCreateOrConnectWithoutMemberInput | loanCreateOrConnectWithoutMemberInput[]
    createMany?: loanCreateManyMemberInputEnvelope
    connect?: loanWhereUniqueInput | loanWhereUniqueInput[]
  }

  export type personCreateNestedOneWithoutMemberInput = {
    create?: XOR<personCreateWithoutMemberInput, personUncheckedCreateWithoutMemberInput>
    connectOrCreate?: personCreateOrConnectWithoutMemberInput
    connect?: personWhereUniqueInput
  }

  export type fineUncheckedCreateNestedManyWithoutMemberInput = {
    create?: XOR<fineCreateWithoutMemberInput, fineUncheckedCreateWithoutMemberInput> | fineCreateWithoutMemberInput[] | fineUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: fineCreateOrConnectWithoutMemberInput | fineCreateOrConnectWithoutMemberInput[]
    createMany?: fineCreateManyMemberInputEnvelope
    connect?: fineWhereUniqueInput | fineWhereUniqueInput[]
  }

  export type loanUncheckedCreateNestedManyWithoutMemberInput = {
    create?: XOR<loanCreateWithoutMemberInput, loanUncheckedCreateWithoutMemberInput> | loanCreateWithoutMemberInput[] | loanUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: loanCreateOrConnectWithoutMemberInput | loanCreateOrConnectWithoutMemberInput[]
    createMany?: loanCreateManyMemberInputEnvelope
    connect?: loanWhereUniqueInput | loanWhereUniqueInput[]
  }

  export type fineUpdateManyWithoutMemberNestedInput = {
    create?: XOR<fineCreateWithoutMemberInput, fineUncheckedCreateWithoutMemberInput> | fineCreateWithoutMemberInput[] | fineUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: fineCreateOrConnectWithoutMemberInput | fineCreateOrConnectWithoutMemberInput[]
    upsert?: fineUpsertWithWhereUniqueWithoutMemberInput | fineUpsertWithWhereUniqueWithoutMemberInput[]
    createMany?: fineCreateManyMemberInputEnvelope
    set?: fineWhereUniqueInput | fineWhereUniqueInput[]
    disconnect?: fineWhereUniqueInput | fineWhereUniqueInput[]
    delete?: fineWhereUniqueInput | fineWhereUniqueInput[]
    connect?: fineWhereUniqueInput | fineWhereUniqueInput[]
    update?: fineUpdateWithWhereUniqueWithoutMemberInput | fineUpdateWithWhereUniqueWithoutMemberInput[]
    updateMany?: fineUpdateManyWithWhereWithoutMemberInput | fineUpdateManyWithWhereWithoutMemberInput[]
    deleteMany?: fineScalarWhereInput | fineScalarWhereInput[]
  }

  export type loanUpdateManyWithoutMemberNestedInput = {
    create?: XOR<loanCreateWithoutMemberInput, loanUncheckedCreateWithoutMemberInput> | loanCreateWithoutMemberInput[] | loanUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: loanCreateOrConnectWithoutMemberInput | loanCreateOrConnectWithoutMemberInput[]
    upsert?: loanUpsertWithWhereUniqueWithoutMemberInput | loanUpsertWithWhereUniqueWithoutMemberInput[]
    createMany?: loanCreateManyMemberInputEnvelope
    set?: loanWhereUniqueInput | loanWhereUniqueInput[]
    disconnect?: loanWhereUniqueInput | loanWhereUniqueInput[]
    delete?: loanWhereUniqueInput | loanWhereUniqueInput[]
    connect?: loanWhereUniqueInput | loanWhereUniqueInput[]
    update?: loanUpdateWithWhereUniqueWithoutMemberInput | loanUpdateWithWhereUniqueWithoutMemberInput[]
    updateMany?: loanUpdateManyWithWhereWithoutMemberInput | loanUpdateManyWithWhereWithoutMemberInput[]
    deleteMany?: loanScalarWhereInput | loanScalarWhereInput[]
  }

  export type personUpdateOneRequiredWithoutMemberNestedInput = {
    create?: XOR<personCreateWithoutMemberInput, personUncheckedCreateWithoutMemberInput>
    connectOrCreate?: personCreateOrConnectWithoutMemberInput
    upsert?: personUpsertWithoutMemberInput
    connect?: personWhereUniqueInput
    update?: XOR<XOR<personUpdateToOneWithWhereWithoutMemberInput, personUpdateWithoutMemberInput>, personUncheckedUpdateWithoutMemberInput>
  }

  export type fineUncheckedUpdateManyWithoutMemberNestedInput = {
    create?: XOR<fineCreateWithoutMemberInput, fineUncheckedCreateWithoutMemberInput> | fineCreateWithoutMemberInput[] | fineUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: fineCreateOrConnectWithoutMemberInput | fineCreateOrConnectWithoutMemberInput[]
    upsert?: fineUpsertWithWhereUniqueWithoutMemberInput | fineUpsertWithWhereUniqueWithoutMemberInput[]
    createMany?: fineCreateManyMemberInputEnvelope
    set?: fineWhereUniqueInput | fineWhereUniqueInput[]
    disconnect?: fineWhereUniqueInput | fineWhereUniqueInput[]
    delete?: fineWhereUniqueInput | fineWhereUniqueInput[]
    connect?: fineWhereUniqueInput | fineWhereUniqueInput[]
    update?: fineUpdateWithWhereUniqueWithoutMemberInput | fineUpdateWithWhereUniqueWithoutMemberInput[]
    updateMany?: fineUpdateManyWithWhereWithoutMemberInput | fineUpdateManyWithWhereWithoutMemberInput[]
    deleteMany?: fineScalarWhereInput | fineScalarWhereInput[]
  }

  export type loanUncheckedUpdateManyWithoutMemberNestedInput = {
    create?: XOR<loanCreateWithoutMemberInput, loanUncheckedCreateWithoutMemberInput> | loanCreateWithoutMemberInput[] | loanUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: loanCreateOrConnectWithoutMemberInput | loanCreateOrConnectWithoutMemberInput[]
    upsert?: loanUpsertWithWhereUniqueWithoutMemberInput | loanUpsertWithWhereUniqueWithoutMemberInput[]
    createMany?: loanCreateManyMemberInputEnvelope
    set?: loanWhereUniqueInput | loanWhereUniqueInput[]
    disconnect?: loanWhereUniqueInput | loanWhereUniqueInput[]
    delete?: loanWhereUniqueInput | loanWhereUniqueInput[]
    connect?: loanWhereUniqueInput | loanWhereUniqueInput[]
    update?: loanUpdateWithWhereUniqueWithoutMemberInput | loanUpdateWithWhereUniqueWithoutMemberInput[]
    updateMany?: loanUpdateManyWithWhereWithoutMemberInput | loanUpdateManyWithWhereWithoutMemberInput[]
    deleteMany?: loanScalarWhereInput | loanScalarWhereInput[]
  }

  export type loanCreateNestedManyWithoutStaffInput = {
    create?: XOR<loanCreateWithoutStaffInput, loanUncheckedCreateWithoutStaffInput> | loanCreateWithoutStaffInput[] | loanUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: loanCreateOrConnectWithoutStaffInput | loanCreateOrConnectWithoutStaffInput[]
    createMany?: loanCreateManyStaffInputEnvelope
    connect?: loanWhereUniqueInput | loanWhereUniqueInput[]
  }

  export type personCreateNestedOneWithoutStaffInput = {
    create?: XOR<personCreateWithoutStaffInput, personUncheckedCreateWithoutStaffInput>
    connectOrCreate?: personCreateOrConnectWithoutStaffInput
    connect?: personWhereUniqueInput
  }

  export type loanUncheckedCreateNestedManyWithoutStaffInput = {
    create?: XOR<loanCreateWithoutStaffInput, loanUncheckedCreateWithoutStaffInput> | loanCreateWithoutStaffInput[] | loanUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: loanCreateOrConnectWithoutStaffInput | loanCreateOrConnectWithoutStaffInput[]
    createMany?: loanCreateManyStaffInputEnvelope
    connect?: loanWhereUniqueInput | loanWhereUniqueInput[]
  }

  export type loanUpdateManyWithoutStaffNestedInput = {
    create?: XOR<loanCreateWithoutStaffInput, loanUncheckedCreateWithoutStaffInput> | loanCreateWithoutStaffInput[] | loanUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: loanCreateOrConnectWithoutStaffInput | loanCreateOrConnectWithoutStaffInput[]
    upsert?: loanUpsertWithWhereUniqueWithoutStaffInput | loanUpsertWithWhereUniqueWithoutStaffInput[]
    createMany?: loanCreateManyStaffInputEnvelope
    set?: loanWhereUniqueInput | loanWhereUniqueInput[]
    disconnect?: loanWhereUniqueInput | loanWhereUniqueInput[]
    delete?: loanWhereUniqueInput | loanWhereUniqueInput[]
    connect?: loanWhereUniqueInput | loanWhereUniqueInput[]
    update?: loanUpdateWithWhereUniqueWithoutStaffInput | loanUpdateWithWhereUniqueWithoutStaffInput[]
    updateMany?: loanUpdateManyWithWhereWithoutStaffInput | loanUpdateManyWithWhereWithoutStaffInput[]
    deleteMany?: loanScalarWhereInput | loanScalarWhereInput[]
  }

  export type personUpdateOneRequiredWithoutStaffNestedInput = {
    create?: XOR<personCreateWithoutStaffInput, personUncheckedCreateWithoutStaffInput>
    connectOrCreate?: personCreateOrConnectWithoutStaffInput
    upsert?: personUpsertWithoutStaffInput
    connect?: personWhereUniqueInput
    update?: XOR<XOR<personUpdateToOneWithWhereWithoutStaffInput, personUpdateWithoutStaffInput>, personUncheckedUpdateWithoutStaffInput>
  }

  export type loanUncheckedUpdateManyWithoutStaffNestedInput = {
    create?: XOR<loanCreateWithoutStaffInput, loanUncheckedCreateWithoutStaffInput> | loanCreateWithoutStaffInput[] | loanUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: loanCreateOrConnectWithoutStaffInput | loanCreateOrConnectWithoutStaffInput[]
    upsert?: loanUpsertWithWhereUniqueWithoutStaffInput | loanUpsertWithWhereUniqueWithoutStaffInput[]
    createMany?: loanCreateManyStaffInputEnvelope
    set?: loanWhereUniqueInput | loanWhereUniqueInput[]
    disconnect?: loanWhereUniqueInput | loanWhereUniqueInput[]
    delete?: loanWhereUniqueInput | loanWhereUniqueInput[]
    connect?: loanWhereUniqueInput | loanWhereUniqueInput[]
    update?: loanUpdateWithWhereUniqueWithoutStaffInput | loanUpdateWithWhereUniqueWithoutStaffInput[]
    updateMany?: loanUpdateManyWithWhereWithoutStaffInput | loanUpdateManyWithWhereWithoutStaffInput[]
    deleteMany?: loanScalarWhereInput | loanScalarWhereInput[]
  }

  export type authorCreateNestedOneWithoutBookauthorInput = {
    create?: XOR<authorCreateWithoutBookauthorInput, authorUncheckedCreateWithoutBookauthorInput>
    connectOrCreate?: authorCreateOrConnectWithoutBookauthorInput
    connect?: authorWhereUniqueInput
  }

  export type bookCreateNestedOneWithoutBookauthorInput = {
    create?: XOR<bookCreateWithoutBookauthorInput, bookUncheckedCreateWithoutBookauthorInput>
    connectOrCreate?: bookCreateOrConnectWithoutBookauthorInput
    connect?: bookWhereUniqueInput
  }

  export type authorUpdateOneRequiredWithoutBookauthorNestedInput = {
    create?: XOR<authorCreateWithoutBookauthorInput, authorUncheckedCreateWithoutBookauthorInput>
    connectOrCreate?: authorCreateOrConnectWithoutBookauthorInput
    upsert?: authorUpsertWithoutBookauthorInput
    connect?: authorWhereUniqueInput
    update?: XOR<XOR<authorUpdateToOneWithWhereWithoutBookauthorInput, authorUpdateWithoutBookauthorInput>, authorUncheckedUpdateWithoutBookauthorInput>
  }

  export type bookUpdateOneRequiredWithoutBookauthorNestedInput = {
    create?: XOR<bookCreateWithoutBookauthorInput, bookUncheckedCreateWithoutBookauthorInput>
    connectOrCreate?: bookCreateOrConnectWithoutBookauthorInput
    upsert?: bookUpsertWithoutBookauthorInput
    connect?: bookWhereUniqueInput
    update?: XOR<XOR<bookUpdateToOneWithWhereWithoutBookauthorInput, bookUpdateWithoutBookauthorInput>, bookUncheckedUpdateWithoutBookauthorInput>
  }

  export type bookCreateNestedOneWithoutBookgenreInput = {
    create?: XOR<bookCreateWithoutBookgenreInput, bookUncheckedCreateWithoutBookgenreInput>
    connectOrCreate?: bookCreateOrConnectWithoutBookgenreInput
    connect?: bookWhereUniqueInput
  }

  export type genreCreateNestedOneWithoutBookgenreInput = {
    create?: XOR<genreCreateWithoutBookgenreInput, genreUncheckedCreateWithoutBookgenreInput>
    connectOrCreate?: genreCreateOrConnectWithoutBookgenreInput
    connect?: genreWhereUniqueInput
  }

  export type bookUpdateOneRequiredWithoutBookgenreNestedInput = {
    create?: XOR<bookCreateWithoutBookgenreInput, bookUncheckedCreateWithoutBookgenreInput>
    connectOrCreate?: bookCreateOrConnectWithoutBookgenreInput
    upsert?: bookUpsertWithoutBookgenreInput
    connect?: bookWhereUniqueInput
    update?: XOR<XOR<bookUpdateToOneWithWhereWithoutBookgenreInput, bookUpdateWithoutBookgenreInput>, bookUncheckedUpdateWithoutBookgenreInput>
  }

  export type genreUpdateOneRequiredWithoutBookgenreNestedInput = {
    create?: XOR<genreCreateWithoutBookgenreInput, genreUncheckedCreateWithoutBookgenreInput>
    connectOrCreate?: genreCreateOrConnectWithoutBookgenreInput
    upsert?: genreUpsertWithoutBookgenreInput
    connect?: genreWhereUniqueInput
    update?: XOR<XOR<genreUpdateToOneWithWhereWithoutBookgenreInput, genreUpdateWithoutBookgenreInput>, genreUncheckedUpdateWithoutBookgenreInput>
  }

  export type bookCreateNestedOneWithoutBookpublisherInput = {
    create?: XOR<bookCreateWithoutBookpublisherInput, bookUncheckedCreateWithoutBookpublisherInput>
    connectOrCreate?: bookCreateOrConnectWithoutBookpublisherInput
    connect?: bookWhereUniqueInput
  }

  export type publicationCreateNestedOneWithoutBookpublisherInput = {
    create?: XOR<publicationCreateWithoutBookpublisherInput, publicationUncheckedCreateWithoutBookpublisherInput>
    connectOrCreate?: publicationCreateOrConnectWithoutBookpublisherInput
    connect?: publicationWhereUniqueInput
  }

  export type bookUpdateOneRequiredWithoutBookpublisherNestedInput = {
    create?: XOR<bookCreateWithoutBookpublisherInput, bookUncheckedCreateWithoutBookpublisherInput>
    connectOrCreate?: bookCreateOrConnectWithoutBookpublisherInput
    upsert?: bookUpsertWithoutBookpublisherInput
    connect?: bookWhereUniqueInput
    update?: XOR<XOR<bookUpdateToOneWithWhereWithoutBookpublisherInput, bookUpdateWithoutBookpublisherInput>, bookUncheckedUpdateWithoutBookpublisherInput>
  }

  export type publicationUpdateOneRequiredWithoutBookpublisherNestedInput = {
    create?: XOR<publicationCreateWithoutBookpublisherInput, publicationUncheckedCreateWithoutBookpublisherInput>
    connectOrCreate?: publicationCreateOrConnectWithoutBookpublisherInput
    upsert?: publicationUpsertWithoutBookpublisherInput
    connect?: publicationWhereUniqueInput
    update?: XOR<XOR<publicationUpdateToOneWithWhereWithoutBookpublisherInput, publicationUpdateWithoutBookpublisherInput>, publicationUncheckedUpdateWithoutBookpublisherInput>
  }

  export type authorCreateNestedManyWithoutPersonInput = {
    create?: XOR<authorCreateWithoutPersonInput, authorUncheckedCreateWithoutPersonInput> | authorCreateWithoutPersonInput[] | authorUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: authorCreateOrConnectWithoutPersonInput | authorCreateOrConnectWithoutPersonInput[]
    createMany?: authorCreateManyPersonInputEnvelope
    connect?: authorWhereUniqueInput | authorWhereUniqueInput[]
  }

  export type memberCreateNestedManyWithoutPersonInput = {
    create?: XOR<memberCreateWithoutPersonInput, memberUncheckedCreateWithoutPersonInput> | memberCreateWithoutPersonInput[] | memberUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: memberCreateOrConnectWithoutPersonInput | memberCreateOrConnectWithoutPersonInput[]
    createMany?: memberCreateManyPersonInputEnvelope
    connect?: memberWhereUniqueInput | memberWhereUniqueInput[]
  }

  export type staffCreateNestedManyWithoutPersonInput = {
    create?: XOR<staffCreateWithoutPersonInput, staffUncheckedCreateWithoutPersonInput> | staffCreateWithoutPersonInput[] | staffUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: staffCreateOrConnectWithoutPersonInput | staffCreateOrConnectWithoutPersonInput[]
    createMany?: staffCreateManyPersonInputEnvelope
    connect?: staffWhereUniqueInput | staffWhereUniqueInput[]
  }

  export type authorUncheckedCreateNestedManyWithoutPersonInput = {
    create?: XOR<authorCreateWithoutPersonInput, authorUncheckedCreateWithoutPersonInput> | authorCreateWithoutPersonInput[] | authorUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: authorCreateOrConnectWithoutPersonInput | authorCreateOrConnectWithoutPersonInput[]
    createMany?: authorCreateManyPersonInputEnvelope
    connect?: authorWhereUniqueInput | authorWhereUniqueInput[]
  }

  export type memberUncheckedCreateNestedManyWithoutPersonInput = {
    create?: XOR<memberCreateWithoutPersonInput, memberUncheckedCreateWithoutPersonInput> | memberCreateWithoutPersonInput[] | memberUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: memberCreateOrConnectWithoutPersonInput | memberCreateOrConnectWithoutPersonInput[]
    createMany?: memberCreateManyPersonInputEnvelope
    connect?: memberWhereUniqueInput | memberWhereUniqueInput[]
  }

  export type staffUncheckedCreateNestedManyWithoutPersonInput = {
    create?: XOR<staffCreateWithoutPersonInput, staffUncheckedCreateWithoutPersonInput> | staffCreateWithoutPersonInput[] | staffUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: staffCreateOrConnectWithoutPersonInput | staffCreateOrConnectWithoutPersonInput[]
    createMany?: staffCreateManyPersonInputEnvelope
    connect?: staffWhereUniqueInput | staffWhereUniqueInput[]
  }

  export type authorUpdateManyWithoutPersonNestedInput = {
    create?: XOR<authorCreateWithoutPersonInput, authorUncheckedCreateWithoutPersonInput> | authorCreateWithoutPersonInput[] | authorUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: authorCreateOrConnectWithoutPersonInput | authorCreateOrConnectWithoutPersonInput[]
    upsert?: authorUpsertWithWhereUniqueWithoutPersonInput | authorUpsertWithWhereUniqueWithoutPersonInput[]
    createMany?: authorCreateManyPersonInputEnvelope
    set?: authorWhereUniqueInput | authorWhereUniqueInput[]
    disconnect?: authorWhereUniqueInput | authorWhereUniqueInput[]
    delete?: authorWhereUniqueInput | authorWhereUniqueInput[]
    connect?: authorWhereUniqueInput | authorWhereUniqueInput[]
    update?: authorUpdateWithWhereUniqueWithoutPersonInput | authorUpdateWithWhereUniqueWithoutPersonInput[]
    updateMany?: authorUpdateManyWithWhereWithoutPersonInput | authorUpdateManyWithWhereWithoutPersonInput[]
    deleteMany?: authorScalarWhereInput | authorScalarWhereInput[]
  }

  export type memberUpdateManyWithoutPersonNestedInput = {
    create?: XOR<memberCreateWithoutPersonInput, memberUncheckedCreateWithoutPersonInput> | memberCreateWithoutPersonInput[] | memberUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: memberCreateOrConnectWithoutPersonInput | memberCreateOrConnectWithoutPersonInput[]
    upsert?: memberUpsertWithWhereUniqueWithoutPersonInput | memberUpsertWithWhereUniqueWithoutPersonInput[]
    createMany?: memberCreateManyPersonInputEnvelope
    set?: memberWhereUniqueInput | memberWhereUniqueInput[]
    disconnect?: memberWhereUniqueInput | memberWhereUniqueInput[]
    delete?: memberWhereUniqueInput | memberWhereUniqueInput[]
    connect?: memberWhereUniqueInput | memberWhereUniqueInput[]
    update?: memberUpdateWithWhereUniqueWithoutPersonInput | memberUpdateWithWhereUniqueWithoutPersonInput[]
    updateMany?: memberUpdateManyWithWhereWithoutPersonInput | memberUpdateManyWithWhereWithoutPersonInput[]
    deleteMany?: memberScalarWhereInput | memberScalarWhereInput[]
  }

  export type staffUpdateManyWithoutPersonNestedInput = {
    create?: XOR<staffCreateWithoutPersonInput, staffUncheckedCreateWithoutPersonInput> | staffCreateWithoutPersonInput[] | staffUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: staffCreateOrConnectWithoutPersonInput | staffCreateOrConnectWithoutPersonInput[]
    upsert?: staffUpsertWithWhereUniqueWithoutPersonInput | staffUpsertWithWhereUniqueWithoutPersonInput[]
    createMany?: staffCreateManyPersonInputEnvelope
    set?: staffWhereUniqueInput | staffWhereUniqueInput[]
    disconnect?: staffWhereUniqueInput | staffWhereUniqueInput[]
    delete?: staffWhereUniqueInput | staffWhereUniqueInput[]
    connect?: staffWhereUniqueInput | staffWhereUniqueInput[]
    update?: staffUpdateWithWhereUniqueWithoutPersonInput | staffUpdateWithWhereUniqueWithoutPersonInput[]
    updateMany?: staffUpdateManyWithWhereWithoutPersonInput | staffUpdateManyWithWhereWithoutPersonInput[]
    deleteMany?: staffScalarWhereInput | staffScalarWhereInput[]
  }

  export type authorUncheckedUpdateManyWithoutPersonNestedInput = {
    create?: XOR<authorCreateWithoutPersonInput, authorUncheckedCreateWithoutPersonInput> | authorCreateWithoutPersonInput[] | authorUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: authorCreateOrConnectWithoutPersonInput | authorCreateOrConnectWithoutPersonInput[]
    upsert?: authorUpsertWithWhereUniqueWithoutPersonInput | authorUpsertWithWhereUniqueWithoutPersonInput[]
    createMany?: authorCreateManyPersonInputEnvelope
    set?: authorWhereUniqueInput | authorWhereUniqueInput[]
    disconnect?: authorWhereUniqueInput | authorWhereUniqueInput[]
    delete?: authorWhereUniqueInput | authorWhereUniqueInput[]
    connect?: authorWhereUniqueInput | authorWhereUniqueInput[]
    update?: authorUpdateWithWhereUniqueWithoutPersonInput | authorUpdateWithWhereUniqueWithoutPersonInput[]
    updateMany?: authorUpdateManyWithWhereWithoutPersonInput | authorUpdateManyWithWhereWithoutPersonInput[]
    deleteMany?: authorScalarWhereInput | authorScalarWhereInput[]
  }

  export type memberUncheckedUpdateManyWithoutPersonNestedInput = {
    create?: XOR<memberCreateWithoutPersonInput, memberUncheckedCreateWithoutPersonInput> | memberCreateWithoutPersonInput[] | memberUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: memberCreateOrConnectWithoutPersonInput | memberCreateOrConnectWithoutPersonInput[]
    upsert?: memberUpsertWithWhereUniqueWithoutPersonInput | memberUpsertWithWhereUniqueWithoutPersonInput[]
    createMany?: memberCreateManyPersonInputEnvelope
    set?: memberWhereUniqueInput | memberWhereUniqueInput[]
    disconnect?: memberWhereUniqueInput | memberWhereUniqueInput[]
    delete?: memberWhereUniqueInput | memberWhereUniqueInput[]
    connect?: memberWhereUniqueInput | memberWhereUniqueInput[]
    update?: memberUpdateWithWhereUniqueWithoutPersonInput | memberUpdateWithWhereUniqueWithoutPersonInput[]
    updateMany?: memberUpdateManyWithWhereWithoutPersonInput | memberUpdateManyWithWhereWithoutPersonInput[]
    deleteMany?: memberScalarWhereInput | memberScalarWhereInput[]
  }

  export type staffUncheckedUpdateManyWithoutPersonNestedInput = {
    create?: XOR<staffCreateWithoutPersonInput, staffUncheckedCreateWithoutPersonInput> | staffCreateWithoutPersonInput[] | staffUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: staffCreateOrConnectWithoutPersonInput | staffCreateOrConnectWithoutPersonInput[]
    upsert?: staffUpsertWithWhereUniqueWithoutPersonInput | staffUpsertWithWhereUniqueWithoutPersonInput[]
    createMany?: staffCreateManyPersonInputEnvelope
    set?: staffWhereUniqueInput | staffWhereUniqueInput[]
    disconnect?: staffWhereUniqueInput | staffWhereUniqueInput[]
    delete?: staffWhereUniqueInput | staffWhereUniqueInput[]
    connect?: staffWhereUniqueInput | staffWhereUniqueInput[]
    update?: staffUpdateWithWhereUniqueWithoutPersonInput | staffUpdateWithWhereUniqueWithoutPersonInput[]
    updateMany?: staffUpdateManyWithWhereWithoutPersonInput | staffUpdateManyWithWhereWithoutPersonInput[]
    deleteMany?: staffScalarWhereInput | staffScalarWhereInput[]
  }

  export type bookpublisherCreateNestedManyWithoutPublicationInput = {
    create?: XOR<bookpublisherCreateWithoutPublicationInput, bookpublisherUncheckedCreateWithoutPublicationInput> | bookpublisherCreateWithoutPublicationInput[] | bookpublisherUncheckedCreateWithoutPublicationInput[]
    connectOrCreate?: bookpublisherCreateOrConnectWithoutPublicationInput | bookpublisherCreateOrConnectWithoutPublicationInput[]
    createMany?: bookpublisherCreateManyPublicationInputEnvelope
    connect?: bookpublisherWhereUniqueInput | bookpublisherWhereUniqueInput[]
  }

  export type bookpublisherUncheckedCreateNestedManyWithoutPublicationInput = {
    create?: XOR<bookpublisherCreateWithoutPublicationInput, bookpublisherUncheckedCreateWithoutPublicationInput> | bookpublisherCreateWithoutPublicationInput[] | bookpublisherUncheckedCreateWithoutPublicationInput[]
    connectOrCreate?: bookpublisherCreateOrConnectWithoutPublicationInput | bookpublisherCreateOrConnectWithoutPublicationInput[]
    createMany?: bookpublisherCreateManyPublicationInputEnvelope
    connect?: bookpublisherWhereUniqueInput | bookpublisherWhereUniqueInput[]
  }

  export type bookpublisherUpdateManyWithoutPublicationNestedInput = {
    create?: XOR<bookpublisherCreateWithoutPublicationInput, bookpublisherUncheckedCreateWithoutPublicationInput> | bookpublisherCreateWithoutPublicationInput[] | bookpublisherUncheckedCreateWithoutPublicationInput[]
    connectOrCreate?: bookpublisherCreateOrConnectWithoutPublicationInput | bookpublisherCreateOrConnectWithoutPublicationInput[]
    upsert?: bookpublisherUpsertWithWhereUniqueWithoutPublicationInput | bookpublisherUpsertWithWhereUniqueWithoutPublicationInput[]
    createMany?: bookpublisherCreateManyPublicationInputEnvelope
    set?: bookpublisherWhereUniqueInput | bookpublisherWhereUniqueInput[]
    disconnect?: bookpublisherWhereUniqueInput | bookpublisherWhereUniqueInput[]
    delete?: bookpublisherWhereUniqueInput | bookpublisherWhereUniqueInput[]
    connect?: bookpublisherWhereUniqueInput | bookpublisherWhereUniqueInput[]
    update?: bookpublisherUpdateWithWhereUniqueWithoutPublicationInput | bookpublisherUpdateWithWhereUniqueWithoutPublicationInput[]
    updateMany?: bookpublisherUpdateManyWithWhereWithoutPublicationInput | bookpublisherUpdateManyWithWhereWithoutPublicationInput[]
    deleteMany?: bookpublisherScalarWhereInput | bookpublisherScalarWhereInput[]
  }

  export type bookpublisherUncheckedUpdateManyWithoutPublicationNestedInput = {
    create?: XOR<bookpublisherCreateWithoutPublicationInput, bookpublisherUncheckedCreateWithoutPublicationInput> | bookpublisherCreateWithoutPublicationInput[] | bookpublisherUncheckedCreateWithoutPublicationInput[]
    connectOrCreate?: bookpublisherCreateOrConnectWithoutPublicationInput | bookpublisherCreateOrConnectWithoutPublicationInput[]
    upsert?: bookpublisherUpsertWithWhereUniqueWithoutPublicationInput | bookpublisherUpsertWithWhereUniqueWithoutPublicationInput[]
    createMany?: bookpublisherCreateManyPublicationInputEnvelope
    set?: bookpublisherWhereUniqueInput | bookpublisherWhereUniqueInput[]
    disconnect?: bookpublisherWhereUniqueInput | bookpublisherWhereUniqueInput[]
    delete?: bookpublisherWhereUniqueInput | bookpublisherWhereUniqueInput[]
    connect?: bookpublisherWhereUniqueInput | bookpublisherWhereUniqueInput[]
    update?: bookpublisherUpdateWithWhereUniqueWithoutPublicationInput | bookpublisherUpdateWithWhereUniqueWithoutPublicationInput[]
    updateMany?: bookpublisherUpdateManyWithWhereWithoutPublicationInput | bookpublisherUpdateManyWithWhereWithoutPublicationInput[]
    deleteMany?: bookpublisherScalarWhereInput | bookpublisherScalarWhereInput[]
  }

  export type bookCreateNestedOneWithoutReviewInput = {
    create?: XOR<bookCreateWithoutReviewInput, bookUncheckedCreateWithoutReviewInput>
    connectOrCreate?: bookCreateOrConnectWithoutReviewInput
    connect?: bookWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type bookUpdateOneRequiredWithoutReviewNestedInput = {
    create?: XOR<bookCreateWithoutReviewInput, bookUncheckedCreateWithoutReviewInput>
    connectOrCreate?: bookCreateOrConnectWithoutReviewInput
    upsert?: bookUpsertWithoutReviewInput
    connect?: bookWhereUniqueInput
    update?: XOR<XOR<bookUpdateToOneWithWhereWithoutReviewInput, bookUpdateWithoutReviewInput>, bookUncheckedUpdateWithoutReviewInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type personCreateWithoutAuthorInput = {
    fullname: string
    phone: string
    email: string
    address: string
    createdat?: Date | string
    updatedat?: Date | string
    member?: memberCreateNestedManyWithoutPersonInput
    staff?: staffCreateNestedManyWithoutPersonInput
  }

  export type personUncheckedCreateWithoutAuthorInput = {
    person_id?: number
    fullname: string
    phone: string
    email: string
    address: string
    createdat?: Date | string
    updatedat?: Date | string
    member?: memberUncheckedCreateNestedManyWithoutPersonInput
    staff?: staffUncheckedCreateNestedManyWithoutPersonInput
  }

  export type personCreateOrConnectWithoutAuthorInput = {
    where: personWhereUniqueInput
    create: XOR<personCreateWithoutAuthorInput, personUncheckedCreateWithoutAuthorInput>
  }

  export type bookauthorCreateWithoutAuthorInput = {
    createdat?: Date | string
    updatedat?: Date | string
    book: bookCreateNestedOneWithoutBookauthorInput
  }

  export type bookauthorUncheckedCreateWithoutAuthorInput = {
    bookauthor_id?: number
    book_id: number
    createdat?: Date | string
    updatedat?: Date | string
  }

  export type bookauthorCreateOrConnectWithoutAuthorInput = {
    where: bookauthorWhereUniqueInput
    create: XOR<bookauthorCreateWithoutAuthorInput, bookauthorUncheckedCreateWithoutAuthorInput>
  }

  export type bookauthorCreateManyAuthorInputEnvelope = {
    data: bookauthorCreateManyAuthorInput | bookauthorCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type personUpsertWithoutAuthorInput = {
    update: XOR<personUpdateWithoutAuthorInput, personUncheckedUpdateWithoutAuthorInput>
    create: XOR<personCreateWithoutAuthorInput, personUncheckedCreateWithoutAuthorInput>
    where?: personWhereInput
  }

  export type personUpdateToOneWithWhereWithoutAuthorInput = {
    where?: personWhereInput
    data: XOR<personUpdateWithoutAuthorInput, personUncheckedUpdateWithoutAuthorInput>
  }

  export type personUpdateWithoutAuthorInput = {
    fullname?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdat?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedat?: DateTimeFieldUpdateOperationsInput | Date | string
    member?: memberUpdateManyWithoutPersonNestedInput
    staff?: staffUpdateManyWithoutPersonNestedInput
  }

  export type personUncheckedUpdateWithoutAuthorInput = {
    person_id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdat?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedat?: DateTimeFieldUpdateOperationsInput | Date | string
    member?: memberUncheckedUpdateManyWithoutPersonNestedInput
    staff?: staffUncheckedUpdateManyWithoutPersonNestedInput
  }

  export type bookauthorUpsertWithWhereUniqueWithoutAuthorInput = {
    where: bookauthorWhereUniqueInput
    update: XOR<bookauthorUpdateWithoutAuthorInput, bookauthorUncheckedUpdateWithoutAuthorInput>
    create: XOR<bookauthorCreateWithoutAuthorInput, bookauthorUncheckedCreateWithoutAuthorInput>
  }

  export type bookauthorUpdateWithWhereUniqueWithoutAuthorInput = {
    where: bookauthorWhereUniqueInput
    data: XOR<bookauthorUpdateWithoutAuthorInput, bookauthorUncheckedUpdateWithoutAuthorInput>
  }

  export type bookauthorUpdateManyWithWhereWithoutAuthorInput = {
    where: bookauthorScalarWhereInput
    data: XOR<bookauthorUpdateManyMutationInput, bookauthorUncheckedUpdateManyWithoutAuthorInput>
  }

  export type bookauthorScalarWhereInput = {
    AND?: bookauthorScalarWhereInput | bookauthorScalarWhereInput[]
    OR?: bookauthorScalarWhereInput[]
    NOT?: bookauthorScalarWhereInput | bookauthorScalarWhereInput[]
    bookauthor_id?: IntFilter<"bookauthor"> | number
    book_id?: IntFilter<"bookauthor"> | number
    author_id?: IntFilter<"bookauthor"> | number
    createdat?: DateTimeFilter<"bookauthor"> | Date | string
    updatedat?: DateTimeFilter<"bookauthor"> | Date | string
  }

  export type bookauthorCreateWithoutBookInput = {
    createdat?: Date | string
    updatedat?: Date | string
    author: authorCreateNestedOneWithoutBookauthorInput
  }

  export type bookauthorUncheckedCreateWithoutBookInput = {
    bookauthor_id?: number
    author_id: number
    createdat?: Date | string
    updatedat?: Date | string
  }

  export type bookauthorCreateOrConnectWithoutBookInput = {
    where: bookauthorWhereUniqueInput
    create: XOR<bookauthorCreateWithoutBookInput, bookauthorUncheckedCreateWithoutBookInput>
  }

  export type bookauthorCreateManyBookInputEnvelope = {
    data: bookauthorCreateManyBookInput | bookauthorCreateManyBookInput[]
    skipDuplicates?: boolean
  }

  export type bookgenreCreateWithoutBookInput = {
    createdat?: Date | string
    updatedat?: Date | string
    genre: genreCreateNestedOneWithoutBookgenreInput
  }

  export type bookgenreUncheckedCreateWithoutBookInput = {
    bookgenre_id?: number
    genre_id: number
    createdat?: Date | string
    updatedat?: Date | string
  }

  export type bookgenreCreateOrConnectWithoutBookInput = {
    where: bookgenreWhereUniqueInput
    create: XOR<bookgenreCreateWithoutBookInput, bookgenreUncheckedCreateWithoutBookInput>
  }

  export type bookgenreCreateManyBookInputEnvelope = {
    data: bookgenreCreateManyBookInput | bookgenreCreateManyBookInput[]
    skipDuplicates?: boolean
  }

  export type bookpublisherCreateWithoutBookInput = {
    dayofarrivaltolibrary: Date | string
    createdat?: Date | string
    updatedat?: Date | string
    publication: publicationCreateNestedOneWithoutBookpublisherInput
  }

  export type bookpublisherUncheckedCreateWithoutBookInput = {
    bookpublisher_id?: number
    publisher_id: number
    dayofarrivaltolibrary: Date | string
    createdat?: Date | string
    updatedat?: Date | string
  }

  export type bookpublisherCreateOrConnectWithoutBookInput = {
    where: bookpublisherWhereUniqueInput
    create: XOR<bookpublisherCreateWithoutBookInput, bookpublisherUncheckedCreateWithoutBookInput>
  }

  export type bookpublisherCreateManyBookInputEnvelope = {
    data: bookpublisherCreateManyBookInput | bookpublisherCreateManyBookInput[]
    skipDuplicates?: boolean
  }

  export type loanCreateWithoutBookInput = {
    loandate?: Date | string
    duedate: Date | string
    returndate?: Date | string | null
    fine?: fineCreateNestedManyWithoutLoanInput
    member: memberCreateNestedOneWithoutLoanInput
    staff: staffCreateNestedOneWithoutLoanInput
  }

  export type loanUncheckedCreateWithoutBookInput = {
    loan_id?: number
    member_id: number
    staff_id: number
    loandate?: Date | string
    duedate: Date | string
    returndate?: Date | string | null
    fine?: fineUncheckedCreateNestedManyWithoutLoanInput
  }

  export type loanCreateOrConnectWithoutBookInput = {
    where: loanWhereUniqueInput
    create: XOR<loanCreateWithoutBookInput, loanUncheckedCreateWithoutBookInput>
  }

  export type loanCreateManyBookInputEnvelope = {
    data: loanCreateManyBookInput | loanCreateManyBookInput[]
    skipDuplicates?: boolean
  }

  export type ReviewCreateWithoutBookInput = {
    rating: number
    comment?: string | null
  }

  export type ReviewUncheckedCreateWithoutBookInput = {
    id?: number
    rating: number
    comment?: string | null
  }

  export type ReviewCreateOrConnectWithoutBookInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutBookInput, ReviewUncheckedCreateWithoutBookInput>
  }

  export type ReviewCreateManyBookInputEnvelope = {
    data: ReviewCreateManyBookInput | ReviewCreateManyBookInput[]
    skipDuplicates?: boolean
  }

  export type bookauthorUpsertWithWhereUniqueWithoutBookInput = {
    where: bookauthorWhereUniqueInput
    update: XOR<bookauthorUpdateWithoutBookInput, bookauthorUncheckedUpdateWithoutBookInput>
    create: XOR<bookauthorCreateWithoutBookInput, bookauthorUncheckedCreateWithoutBookInput>
  }

  export type bookauthorUpdateWithWhereUniqueWithoutBookInput = {
    where: bookauthorWhereUniqueInput
    data: XOR<bookauthorUpdateWithoutBookInput, bookauthorUncheckedUpdateWithoutBookInput>
  }

  export type bookauthorUpdateManyWithWhereWithoutBookInput = {
    where: bookauthorScalarWhereInput
    data: XOR<bookauthorUpdateManyMutationInput, bookauthorUncheckedUpdateManyWithoutBookInput>
  }

  export type bookgenreUpsertWithWhereUniqueWithoutBookInput = {
    where: bookgenreWhereUniqueInput
    update: XOR<bookgenreUpdateWithoutBookInput, bookgenreUncheckedUpdateWithoutBookInput>
    create: XOR<bookgenreCreateWithoutBookInput, bookgenreUncheckedCreateWithoutBookInput>
  }

  export type bookgenreUpdateWithWhereUniqueWithoutBookInput = {
    where: bookgenreWhereUniqueInput
    data: XOR<bookgenreUpdateWithoutBookInput, bookgenreUncheckedUpdateWithoutBookInput>
  }

  export type bookgenreUpdateManyWithWhereWithoutBookInput = {
    where: bookgenreScalarWhereInput
    data: XOR<bookgenreUpdateManyMutationInput, bookgenreUncheckedUpdateManyWithoutBookInput>
  }

  export type bookgenreScalarWhereInput = {
    AND?: bookgenreScalarWhereInput | bookgenreScalarWhereInput[]
    OR?: bookgenreScalarWhereInput[]
    NOT?: bookgenreScalarWhereInput | bookgenreScalarWhereInput[]
    bookgenre_id?: IntFilter<"bookgenre"> | number
    book_id?: IntFilter<"bookgenre"> | number
    genre_id?: IntFilter<"bookgenre"> | number
    createdat?: DateTimeFilter<"bookgenre"> | Date | string
    updatedat?: DateTimeFilter<"bookgenre"> | Date | string
  }

  export type bookpublisherUpsertWithWhereUniqueWithoutBookInput = {
    where: bookpublisherWhereUniqueInput
    update: XOR<bookpublisherUpdateWithoutBookInput, bookpublisherUncheckedUpdateWithoutBookInput>
    create: XOR<bookpublisherCreateWithoutBookInput, bookpublisherUncheckedCreateWithoutBookInput>
  }

  export type bookpublisherUpdateWithWhereUniqueWithoutBookInput = {
    where: bookpublisherWhereUniqueInput
    data: XOR<bookpublisherUpdateWithoutBookInput, bookpublisherUncheckedUpdateWithoutBookInput>
  }

  export type bookpublisherUpdateManyWithWhereWithoutBookInput = {
    where: bookpublisherScalarWhereInput
    data: XOR<bookpublisherUpdateManyMutationInput, bookpublisherUncheckedUpdateManyWithoutBookInput>
  }

  export type bookpublisherScalarWhereInput = {
    AND?: bookpublisherScalarWhereInput | bookpublisherScalarWhereInput[]
    OR?: bookpublisherScalarWhereInput[]
    NOT?: bookpublisherScalarWhereInput | bookpublisherScalarWhereInput[]
    bookpublisher_id?: IntFilter<"bookpublisher"> | number
    book_id?: IntFilter<"bookpublisher"> | number
    publisher_id?: IntFilter<"bookpublisher"> | number
    dayofarrivaltolibrary?: DateTimeFilter<"bookpublisher"> | Date | string
    createdat?: DateTimeFilter<"bookpublisher"> | Date | string
    updatedat?: DateTimeFilter<"bookpublisher"> | Date | string
  }

  export type loanUpsertWithWhereUniqueWithoutBookInput = {
    where: loanWhereUniqueInput
    update: XOR<loanUpdateWithoutBookInput, loanUncheckedUpdateWithoutBookInput>
    create: XOR<loanCreateWithoutBookInput, loanUncheckedCreateWithoutBookInput>
  }

  export type loanUpdateWithWhereUniqueWithoutBookInput = {
    where: loanWhereUniqueInput
    data: XOR<loanUpdateWithoutBookInput, loanUncheckedUpdateWithoutBookInput>
  }

  export type loanUpdateManyWithWhereWithoutBookInput = {
    where: loanScalarWhereInput
    data: XOR<loanUpdateManyMutationInput, loanUncheckedUpdateManyWithoutBookInput>
  }

  export type loanScalarWhereInput = {
    AND?: loanScalarWhereInput | loanScalarWhereInput[]
    OR?: loanScalarWhereInput[]
    NOT?: loanScalarWhereInput | loanScalarWhereInput[]
    loan_id?: IntFilter<"loan"> | number
    book_id?: IntFilter<"loan"> | number
    member_id?: IntFilter<"loan"> | number
    staff_id?: IntFilter<"loan"> | number
    loandate?: DateTimeFilter<"loan"> | Date | string
    duedate?: DateTimeFilter<"loan"> | Date | string
    returndate?: DateTimeNullableFilter<"loan"> | Date | string | null
  }

  export type ReviewUpsertWithWhereUniqueWithoutBookInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutBookInput, ReviewUncheckedUpdateWithoutBookInput>
    create: XOR<ReviewCreateWithoutBookInput, ReviewUncheckedCreateWithoutBookInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutBookInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutBookInput, ReviewUncheckedUpdateWithoutBookInput>
  }

  export type ReviewUpdateManyWithWhereWithoutBookInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutBookInput>
  }

  export type ReviewScalarWhereInput = {
    AND?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    OR?: ReviewScalarWhereInput[]
    NOT?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    id?: IntFilter<"Review"> | number
    rating?: IntFilter<"Review"> | number
    comment?: StringNullableFilter<"Review"> | string | null
    book_id?: IntFilter<"Review"> | number
  }

  export type loanCreateWithoutFineInput = {
    loandate?: Date | string
    duedate: Date | string
    returndate?: Date | string | null
    book: bookCreateNestedOneWithoutLoanInput
    member: memberCreateNestedOneWithoutLoanInput
    staff: staffCreateNestedOneWithoutLoanInput
  }

  export type loanUncheckedCreateWithoutFineInput = {
    loan_id?: number
    book_id: number
    member_id: number
    staff_id: number
    loandate?: Date | string
    duedate: Date | string
    returndate?: Date | string | null
  }

  export type loanCreateOrConnectWithoutFineInput = {
    where: loanWhereUniqueInput
    create: XOR<loanCreateWithoutFineInput, loanUncheckedCreateWithoutFineInput>
  }

  export type memberCreateWithoutFineInput = {
    membershipdate?: Date | string
    createdat?: Date | string | null
    updatedat?: Date | string | null
    loan?: loanCreateNestedManyWithoutMemberInput
    person: personCreateNestedOneWithoutMemberInput
  }

  export type memberUncheckedCreateWithoutFineInput = {
    member_id?: number
    membershipdate?: Date | string
    createdat?: Date | string | null
    updatedat?: Date | string | null
    person_id: number
    loan?: loanUncheckedCreateNestedManyWithoutMemberInput
  }

  export type memberCreateOrConnectWithoutFineInput = {
    where: memberWhereUniqueInput
    create: XOR<memberCreateWithoutFineInput, memberUncheckedCreateWithoutFineInput>
  }

  export type loanUpsertWithoutFineInput = {
    update: XOR<loanUpdateWithoutFineInput, loanUncheckedUpdateWithoutFineInput>
    create: XOR<loanCreateWithoutFineInput, loanUncheckedCreateWithoutFineInput>
    where?: loanWhereInput
  }

  export type loanUpdateToOneWithWhereWithoutFineInput = {
    where?: loanWhereInput
    data: XOR<loanUpdateWithoutFineInput, loanUncheckedUpdateWithoutFineInput>
  }

  export type loanUpdateWithoutFineInput = {
    loandate?: DateTimeFieldUpdateOperationsInput | Date | string
    duedate?: DateTimeFieldUpdateOperationsInput | Date | string
    returndate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    book?: bookUpdateOneRequiredWithoutLoanNestedInput
    member?: memberUpdateOneRequiredWithoutLoanNestedInput
    staff?: staffUpdateOneRequiredWithoutLoanNestedInput
  }

  export type loanUncheckedUpdateWithoutFineInput = {
    loan_id?: IntFieldUpdateOperationsInput | number
    book_id?: IntFieldUpdateOperationsInput | number
    member_id?: IntFieldUpdateOperationsInput | number
    staff_id?: IntFieldUpdateOperationsInput | number
    loandate?: DateTimeFieldUpdateOperationsInput | Date | string
    duedate?: DateTimeFieldUpdateOperationsInput | Date | string
    returndate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type memberUpsertWithoutFineInput = {
    update: XOR<memberUpdateWithoutFineInput, memberUncheckedUpdateWithoutFineInput>
    create: XOR<memberCreateWithoutFineInput, memberUncheckedCreateWithoutFineInput>
    where?: memberWhereInput
  }

  export type memberUpdateToOneWithWhereWithoutFineInput = {
    where?: memberWhereInput
    data: XOR<memberUpdateWithoutFineInput, memberUncheckedUpdateWithoutFineInput>
  }

  export type memberUpdateWithoutFineInput = {
    membershipdate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    loan?: loanUpdateManyWithoutMemberNestedInput
    person?: personUpdateOneRequiredWithoutMemberNestedInput
  }

  export type memberUncheckedUpdateWithoutFineInput = {
    member_id?: IntFieldUpdateOperationsInput | number
    membershipdate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    person_id?: IntFieldUpdateOperationsInput | number
    loan?: loanUncheckedUpdateManyWithoutMemberNestedInput
  }

  export type bookgenreCreateWithoutGenreInput = {
    createdat?: Date | string
    updatedat?: Date | string
    book: bookCreateNestedOneWithoutBookgenreInput
  }

  export type bookgenreUncheckedCreateWithoutGenreInput = {
    bookgenre_id?: number
    book_id: number
    createdat?: Date | string
    updatedat?: Date | string
  }

  export type bookgenreCreateOrConnectWithoutGenreInput = {
    where: bookgenreWhereUniqueInput
    create: XOR<bookgenreCreateWithoutGenreInput, bookgenreUncheckedCreateWithoutGenreInput>
  }

  export type bookgenreCreateManyGenreInputEnvelope = {
    data: bookgenreCreateManyGenreInput | bookgenreCreateManyGenreInput[]
    skipDuplicates?: boolean
  }

  export type bookgenreUpsertWithWhereUniqueWithoutGenreInput = {
    where: bookgenreWhereUniqueInput
    update: XOR<bookgenreUpdateWithoutGenreInput, bookgenreUncheckedUpdateWithoutGenreInput>
    create: XOR<bookgenreCreateWithoutGenreInput, bookgenreUncheckedCreateWithoutGenreInput>
  }

  export type bookgenreUpdateWithWhereUniqueWithoutGenreInput = {
    where: bookgenreWhereUniqueInput
    data: XOR<bookgenreUpdateWithoutGenreInput, bookgenreUncheckedUpdateWithoutGenreInput>
  }

  export type bookgenreUpdateManyWithWhereWithoutGenreInput = {
    where: bookgenreScalarWhereInput
    data: XOR<bookgenreUpdateManyMutationInput, bookgenreUncheckedUpdateManyWithoutGenreInput>
  }

  export type fineCreateWithoutLoanInput = {
    date?: Date | string
    amount: Decimal | DecimalJsLike | number | string
    createdat?: Date | string | null
    updatedat?: Date | string | null
    member: memberCreateNestedOneWithoutFineInput
  }

  export type fineUncheckedCreateWithoutLoanInput = {
    fine_id?: number
    date?: Date | string
    amount: Decimal | DecimalJsLike | number | string
    member_id: number
    createdat?: Date | string | null
    updatedat?: Date | string | null
  }

  export type fineCreateOrConnectWithoutLoanInput = {
    where: fineWhereUniqueInput
    create: XOR<fineCreateWithoutLoanInput, fineUncheckedCreateWithoutLoanInput>
  }

  export type fineCreateManyLoanInputEnvelope = {
    data: fineCreateManyLoanInput | fineCreateManyLoanInput[]
    skipDuplicates?: boolean
  }

  export type bookCreateWithoutLoanInput = {
    title: string
    amountofpages: number
    cost: Decimal | DecimalJsLike | number | string
    publisheryear: number
    publication: string
    copiesavailable?: number
    createdat?: Date | string | null
    updatedat?: Date | string | null
    inStock?: boolean
    bookauthor?: bookauthorCreateNestedManyWithoutBookInput
    bookgenre?: bookgenreCreateNestedManyWithoutBookInput
    bookpublisher?: bookpublisherCreateNestedManyWithoutBookInput
    Review?: ReviewCreateNestedManyWithoutBookInput
  }

  export type bookUncheckedCreateWithoutLoanInput = {
    book_id?: number
    title: string
    amountofpages: number
    cost: Decimal | DecimalJsLike | number | string
    publisheryear: number
    publication: string
    copiesavailable?: number
    createdat?: Date | string | null
    updatedat?: Date | string | null
    inStock?: boolean
    bookauthor?: bookauthorUncheckedCreateNestedManyWithoutBookInput
    bookgenre?: bookgenreUncheckedCreateNestedManyWithoutBookInput
    bookpublisher?: bookpublisherUncheckedCreateNestedManyWithoutBookInput
    Review?: ReviewUncheckedCreateNestedManyWithoutBookInput
  }

  export type bookCreateOrConnectWithoutLoanInput = {
    where: bookWhereUniqueInput
    create: XOR<bookCreateWithoutLoanInput, bookUncheckedCreateWithoutLoanInput>
  }

  export type memberCreateWithoutLoanInput = {
    membershipdate?: Date | string
    createdat?: Date | string | null
    updatedat?: Date | string | null
    fine?: fineCreateNestedManyWithoutMemberInput
    person: personCreateNestedOneWithoutMemberInput
  }

  export type memberUncheckedCreateWithoutLoanInput = {
    member_id?: number
    membershipdate?: Date | string
    createdat?: Date | string | null
    updatedat?: Date | string | null
    person_id: number
    fine?: fineUncheckedCreateNestedManyWithoutMemberInput
  }

  export type memberCreateOrConnectWithoutLoanInput = {
    where: memberWhereUniqueInput
    create: XOR<memberCreateWithoutLoanInput, memberUncheckedCreateWithoutLoanInput>
  }

  export type staffCreateWithoutLoanInput = {
    position: string
    education: string
    createdat?: Date | string | null
    updatedat?: Date | string | null
    person: personCreateNestedOneWithoutStaffInput
  }

  export type staffUncheckedCreateWithoutLoanInput = {
    staff_id?: number
    position: string
    education: string
    createdat?: Date | string | null
    updatedat?: Date | string | null
    person_id: number
  }

  export type staffCreateOrConnectWithoutLoanInput = {
    where: staffWhereUniqueInput
    create: XOR<staffCreateWithoutLoanInput, staffUncheckedCreateWithoutLoanInput>
  }

  export type fineUpsertWithWhereUniqueWithoutLoanInput = {
    where: fineWhereUniqueInput
    update: XOR<fineUpdateWithoutLoanInput, fineUncheckedUpdateWithoutLoanInput>
    create: XOR<fineCreateWithoutLoanInput, fineUncheckedCreateWithoutLoanInput>
  }

  export type fineUpdateWithWhereUniqueWithoutLoanInput = {
    where: fineWhereUniqueInput
    data: XOR<fineUpdateWithoutLoanInput, fineUncheckedUpdateWithoutLoanInput>
  }

  export type fineUpdateManyWithWhereWithoutLoanInput = {
    where: fineScalarWhereInput
    data: XOR<fineUpdateManyMutationInput, fineUncheckedUpdateManyWithoutLoanInput>
  }

  export type fineScalarWhereInput = {
    AND?: fineScalarWhereInput | fineScalarWhereInput[]
    OR?: fineScalarWhereInput[]
    NOT?: fineScalarWhereInput | fineScalarWhereInput[]
    fine_id?: IntFilter<"fine"> | number
    date?: DateTimeFilter<"fine"> | Date | string
    amount?: DecimalFilter<"fine"> | Decimal | DecimalJsLike | number | string
    member_id?: IntFilter<"fine"> | number
    loan_id?: IntFilter<"fine"> | number
    createdat?: DateTimeNullableFilter<"fine"> | Date | string | null
    updatedat?: DateTimeNullableFilter<"fine"> | Date | string | null
  }

  export type bookUpsertWithoutLoanInput = {
    update: XOR<bookUpdateWithoutLoanInput, bookUncheckedUpdateWithoutLoanInput>
    create: XOR<bookCreateWithoutLoanInput, bookUncheckedCreateWithoutLoanInput>
    where?: bookWhereInput
  }

  export type bookUpdateToOneWithWhereWithoutLoanInput = {
    where?: bookWhereInput
    data: XOR<bookUpdateWithoutLoanInput, bookUncheckedUpdateWithoutLoanInput>
  }

  export type bookUpdateWithoutLoanInput = {
    title?: StringFieldUpdateOperationsInput | string
    amountofpages?: IntFieldUpdateOperationsInput | number
    cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    publisheryear?: IntFieldUpdateOperationsInput | number
    publication?: StringFieldUpdateOperationsInput | string
    copiesavailable?: IntFieldUpdateOperationsInput | number
    createdat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inStock?: BoolFieldUpdateOperationsInput | boolean
    bookauthor?: bookauthorUpdateManyWithoutBookNestedInput
    bookgenre?: bookgenreUpdateManyWithoutBookNestedInput
    bookpublisher?: bookpublisherUpdateManyWithoutBookNestedInput
    Review?: ReviewUpdateManyWithoutBookNestedInput
  }

  export type bookUncheckedUpdateWithoutLoanInput = {
    book_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    amountofpages?: IntFieldUpdateOperationsInput | number
    cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    publisheryear?: IntFieldUpdateOperationsInput | number
    publication?: StringFieldUpdateOperationsInput | string
    copiesavailable?: IntFieldUpdateOperationsInput | number
    createdat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inStock?: BoolFieldUpdateOperationsInput | boolean
    bookauthor?: bookauthorUncheckedUpdateManyWithoutBookNestedInput
    bookgenre?: bookgenreUncheckedUpdateManyWithoutBookNestedInput
    bookpublisher?: bookpublisherUncheckedUpdateManyWithoutBookNestedInput
    Review?: ReviewUncheckedUpdateManyWithoutBookNestedInput
  }

  export type memberUpsertWithoutLoanInput = {
    update: XOR<memberUpdateWithoutLoanInput, memberUncheckedUpdateWithoutLoanInput>
    create: XOR<memberCreateWithoutLoanInput, memberUncheckedCreateWithoutLoanInput>
    where?: memberWhereInput
  }

  export type memberUpdateToOneWithWhereWithoutLoanInput = {
    where?: memberWhereInput
    data: XOR<memberUpdateWithoutLoanInput, memberUncheckedUpdateWithoutLoanInput>
  }

  export type memberUpdateWithoutLoanInput = {
    membershipdate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fine?: fineUpdateManyWithoutMemberNestedInput
    person?: personUpdateOneRequiredWithoutMemberNestedInput
  }

  export type memberUncheckedUpdateWithoutLoanInput = {
    member_id?: IntFieldUpdateOperationsInput | number
    membershipdate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    person_id?: IntFieldUpdateOperationsInput | number
    fine?: fineUncheckedUpdateManyWithoutMemberNestedInput
  }

  export type staffUpsertWithoutLoanInput = {
    update: XOR<staffUpdateWithoutLoanInput, staffUncheckedUpdateWithoutLoanInput>
    create: XOR<staffCreateWithoutLoanInput, staffUncheckedCreateWithoutLoanInput>
    where?: staffWhereInput
  }

  export type staffUpdateToOneWithWhereWithoutLoanInput = {
    where?: staffWhereInput
    data: XOR<staffUpdateWithoutLoanInput, staffUncheckedUpdateWithoutLoanInput>
  }

  export type staffUpdateWithoutLoanInput = {
    position?: StringFieldUpdateOperationsInput | string
    education?: StringFieldUpdateOperationsInput | string
    createdat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    person?: personUpdateOneRequiredWithoutStaffNestedInput
  }

  export type staffUncheckedUpdateWithoutLoanInput = {
    staff_id?: IntFieldUpdateOperationsInput | number
    position?: StringFieldUpdateOperationsInput | string
    education?: StringFieldUpdateOperationsInput | string
    createdat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    person_id?: IntFieldUpdateOperationsInput | number
  }

  export type fineCreateWithoutMemberInput = {
    date?: Date | string
    amount: Decimal | DecimalJsLike | number | string
    createdat?: Date | string | null
    updatedat?: Date | string | null
    loan: loanCreateNestedOneWithoutFineInput
  }

  export type fineUncheckedCreateWithoutMemberInput = {
    fine_id?: number
    date?: Date | string
    amount: Decimal | DecimalJsLike | number | string
    loan_id: number
    createdat?: Date | string | null
    updatedat?: Date | string | null
  }

  export type fineCreateOrConnectWithoutMemberInput = {
    where: fineWhereUniqueInput
    create: XOR<fineCreateWithoutMemberInput, fineUncheckedCreateWithoutMemberInput>
  }

  export type fineCreateManyMemberInputEnvelope = {
    data: fineCreateManyMemberInput | fineCreateManyMemberInput[]
    skipDuplicates?: boolean
  }

  export type loanCreateWithoutMemberInput = {
    loandate?: Date | string
    duedate: Date | string
    returndate?: Date | string | null
    fine?: fineCreateNestedManyWithoutLoanInput
    book: bookCreateNestedOneWithoutLoanInput
    staff: staffCreateNestedOneWithoutLoanInput
  }

  export type loanUncheckedCreateWithoutMemberInput = {
    loan_id?: number
    book_id: number
    staff_id: number
    loandate?: Date | string
    duedate: Date | string
    returndate?: Date | string | null
    fine?: fineUncheckedCreateNestedManyWithoutLoanInput
  }

  export type loanCreateOrConnectWithoutMemberInput = {
    where: loanWhereUniqueInput
    create: XOR<loanCreateWithoutMemberInput, loanUncheckedCreateWithoutMemberInput>
  }

  export type loanCreateManyMemberInputEnvelope = {
    data: loanCreateManyMemberInput | loanCreateManyMemberInput[]
    skipDuplicates?: boolean
  }

  export type personCreateWithoutMemberInput = {
    fullname: string
    phone: string
    email: string
    address: string
    createdat?: Date | string
    updatedat?: Date | string
    author?: authorCreateNestedManyWithoutPersonInput
    staff?: staffCreateNestedManyWithoutPersonInput
  }

  export type personUncheckedCreateWithoutMemberInput = {
    person_id?: number
    fullname: string
    phone: string
    email: string
    address: string
    createdat?: Date | string
    updatedat?: Date | string
    author?: authorUncheckedCreateNestedManyWithoutPersonInput
    staff?: staffUncheckedCreateNestedManyWithoutPersonInput
  }

  export type personCreateOrConnectWithoutMemberInput = {
    where: personWhereUniqueInput
    create: XOR<personCreateWithoutMemberInput, personUncheckedCreateWithoutMemberInput>
  }

  export type fineUpsertWithWhereUniqueWithoutMemberInput = {
    where: fineWhereUniqueInput
    update: XOR<fineUpdateWithoutMemberInput, fineUncheckedUpdateWithoutMemberInput>
    create: XOR<fineCreateWithoutMemberInput, fineUncheckedCreateWithoutMemberInput>
  }

  export type fineUpdateWithWhereUniqueWithoutMemberInput = {
    where: fineWhereUniqueInput
    data: XOR<fineUpdateWithoutMemberInput, fineUncheckedUpdateWithoutMemberInput>
  }

  export type fineUpdateManyWithWhereWithoutMemberInput = {
    where: fineScalarWhereInput
    data: XOR<fineUpdateManyMutationInput, fineUncheckedUpdateManyWithoutMemberInput>
  }

  export type loanUpsertWithWhereUniqueWithoutMemberInput = {
    where: loanWhereUniqueInput
    update: XOR<loanUpdateWithoutMemberInput, loanUncheckedUpdateWithoutMemberInput>
    create: XOR<loanCreateWithoutMemberInput, loanUncheckedCreateWithoutMemberInput>
  }

  export type loanUpdateWithWhereUniqueWithoutMemberInput = {
    where: loanWhereUniqueInput
    data: XOR<loanUpdateWithoutMemberInput, loanUncheckedUpdateWithoutMemberInput>
  }

  export type loanUpdateManyWithWhereWithoutMemberInput = {
    where: loanScalarWhereInput
    data: XOR<loanUpdateManyMutationInput, loanUncheckedUpdateManyWithoutMemberInput>
  }

  export type personUpsertWithoutMemberInput = {
    update: XOR<personUpdateWithoutMemberInput, personUncheckedUpdateWithoutMemberInput>
    create: XOR<personCreateWithoutMemberInput, personUncheckedCreateWithoutMemberInput>
    where?: personWhereInput
  }

  export type personUpdateToOneWithWhereWithoutMemberInput = {
    where?: personWhereInput
    data: XOR<personUpdateWithoutMemberInput, personUncheckedUpdateWithoutMemberInput>
  }

  export type personUpdateWithoutMemberInput = {
    fullname?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdat?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedat?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: authorUpdateManyWithoutPersonNestedInput
    staff?: staffUpdateManyWithoutPersonNestedInput
  }

  export type personUncheckedUpdateWithoutMemberInput = {
    person_id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdat?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedat?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: authorUncheckedUpdateManyWithoutPersonNestedInput
    staff?: staffUncheckedUpdateManyWithoutPersonNestedInput
  }

  export type loanCreateWithoutStaffInput = {
    loandate?: Date | string
    duedate: Date | string
    returndate?: Date | string | null
    fine?: fineCreateNestedManyWithoutLoanInput
    book: bookCreateNestedOneWithoutLoanInput
    member: memberCreateNestedOneWithoutLoanInput
  }

  export type loanUncheckedCreateWithoutStaffInput = {
    loan_id?: number
    book_id: number
    member_id: number
    loandate?: Date | string
    duedate: Date | string
    returndate?: Date | string | null
    fine?: fineUncheckedCreateNestedManyWithoutLoanInput
  }

  export type loanCreateOrConnectWithoutStaffInput = {
    where: loanWhereUniqueInput
    create: XOR<loanCreateWithoutStaffInput, loanUncheckedCreateWithoutStaffInput>
  }

  export type loanCreateManyStaffInputEnvelope = {
    data: loanCreateManyStaffInput | loanCreateManyStaffInput[]
    skipDuplicates?: boolean
  }

  export type personCreateWithoutStaffInput = {
    fullname: string
    phone: string
    email: string
    address: string
    createdat?: Date | string
    updatedat?: Date | string
    author?: authorCreateNestedManyWithoutPersonInput
    member?: memberCreateNestedManyWithoutPersonInput
  }

  export type personUncheckedCreateWithoutStaffInput = {
    person_id?: number
    fullname: string
    phone: string
    email: string
    address: string
    createdat?: Date | string
    updatedat?: Date | string
    author?: authorUncheckedCreateNestedManyWithoutPersonInput
    member?: memberUncheckedCreateNestedManyWithoutPersonInput
  }

  export type personCreateOrConnectWithoutStaffInput = {
    where: personWhereUniqueInput
    create: XOR<personCreateWithoutStaffInput, personUncheckedCreateWithoutStaffInput>
  }

  export type loanUpsertWithWhereUniqueWithoutStaffInput = {
    where: loanWhereUniqueInput
    update: XOR<loanUpdateWithoutStaffInput, loanUncheckedUpdateWithoutStaffInput>
    create: XOR<loanCreateWithoutStaffInput, loanUncheckedCreateWithoutStaffInput>
  }

  export type loanUpdateWithWhereUniqueWithoutStaffInput = {
    where: loanWhereUniqueInput
    data: XOR<loanUpdateWithoutStaffInput, loanUncheckedUpdateWithoutStaffInput>
  }

  export type loanUpdateManyWithWhereWithoutStaffInput = {
    where: loanScalarWhereInput
    data: XOR<loanUpdateManyMutationInput, loanUncheckedUpdateManyWithoutStaffInput>
  }

  export type personUpsertWithoutStaffInput = {
    update: XOR<personUpdateWithoutStaffInput, personUncheckedUpdateWithoutStaffInput>
    create: XOR<personCreateWithoutStaffInput, personUncheckedCreateWithoutStaffInput>
    where?: personWhereInput
  }

  export type personUpdateToOneWithWhereWithoutStaffInput = {
    where?: personWhereInput
    data: XOR<personUpdateWithoutStaffInput, personUncheckedUpdateWithoutStaffInput>
  }

  export type personUpdateWithoutStaffInput = {
    fullname?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdat?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedat?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: authorUpdateManyWithoutPersonNestedInput
    member?: memberUpdateManyWithoutPersonNestedInput
  }

  export type personUncheckedUpdateWithoutStaffInput = {
    person_id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdat?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedat?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: authorUncheckedUpdateManyWithoutPersonNestedInput
    member?: memberUncheckedUpdateManyWithoutPersonNestedInput
  }

  export type authorCreateWithoutBookauthorInput = {
    firstname: string
    secondname: string
    dateofbirth: Date | string
    dateofdeath?: Date | string | null
    createdat?: Date | string | null
    updatedat?: Date | string | null
    person?: personCreateNestedOneWithoutAuthorInput
  }

  export type authorUncheckedCreateWithoutBookauthorInput = {
    author_id?: number
    firstname: string
    secondname: string
    dateofbirth: Date | string
    dateofdeath?: Date | string | null
    createdat?: Date | string | null
    updatedat?: Date | string | null
    person_id?: number | null
  }

  export type authorCreateOrConnectWithoutBookauthorInput = {
    where: authorWhereUniqueInput
    create: XOR<authorCreateWithoutBookauthorInput, authorUncheckedCreateWithoutBookauthorInput>
  }

  export type bookCreateWithoutBookauthorInput = {
    title: string
    amountofpages: number
    cost: Decimal | DecimalJsLike | number | string
    publisheryear: number
    publication: string
    copiesavailable?: number
    createdat?: Date | string | null
    updatedat?: Date | string | null
    inStock?: boolean
    bookgenre?: bookgenreCreateNestedManyWithoutBookInput
    bookpublisher?: bookpublisherCreateNestedManyWithoutBookInput
    loan?: loanCreateNestedManyWithoutBookInput
    Review?: ReviewCreateNestedManyWithoutBookInput
  }

  export type bookUncheckedCreateWithoutBookauthorInput = {
    book_id?: number
    title: string
    amountofpages: number
    cost: Decimal | DecimalJsLike | number | string
    publisheryear: number
    publication: string
    copiesavailable?: number
    createdat?: Date | string | null
    updatedat?: Date | string | null
    inStock?: boolean
    bookgenre?: bookgenreUncheckedCreateNestedManyWithoutBookInput
    bookpublisher?: bookpublisherUncheckedCreateNestedManyWithoutBookInput
    loan?: loanUncheckedCreateNestedManyWithoutBookInput
    Review?: ReviewUncheckedCreateNestedManyWithoutBookInput
  }

  export type bookCreateOrConnectWithoutBookauthorInput = {
    where: bookWhereUniqueInput
    create: XOR<bookCreateWithoutBookauthorInput, bookUncheckedCreateWithoutBookauthorInput>
  }

  export type authorUpsertWithoutBookauthorInput = {
    update: XOR<authorUpdateWithoutBookauthorInput, authorUncheckedUpdateWithoutBookauthorInput>
    create: XOR<authorCreateWithoutBookauthorInput, authorUncheckedCreateWithoutBookauthorInput>
    where?: authorWhereInput
  }

  export type authorUpdateToOneWithWhereWithoutBookauthorInput = {
    where?: authorWhereInput
    data: XOR<authorUpdateWithoutBookauthorInput, authorUncheckedUpdateWithoutBookauthorInput>
  }

  export type authorUpdateWithoutBookauthorInput = {
    firstname?: StringFieldUpdateOperationsInput | string
    secondname?: StringFieldUpdateOperationsInput | string
    dateofbirth?: DateTimeFieldUpdateOperationsInput | Date | string
    dateofdeath?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    person?: personUpdateOneWithoutAuthorNestedInput
  }

  export type authorUncheckedUpdateWithoutBookauthorInput = {
    author_id?: IntFieldUpdateOperationsInput | number
    firstname?: StringFieldUpdateOperationsInput | string
    secondname?: StringFieldUpdateOperationsInput | string
    dateofbirth?: DateTimeFieldUpdateOperationsInput | Date | string
    dateofdeath?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    person_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type bookUpsertWithoutBookauthorInput = {
    update: XOR<bookUpdateWithoutBookauthorInput, bookUncheckedUpdateWithoutBookauthorInput>
    create: XOR<bookCreateWithoutBookauthorInput, bookUncheckedCreateWithoutBookauthorInput>
    where?: bookWhereInput
  }

  export type bookUpdateToOneWithWhereWithoutBookauthorInput = {
    where?: bookWhereInput
    data: XOR<bookUpdateWithoutBookauthorInput, bookUncheckedUpdateWithoutBookauthorInput>
  }

  export type bookUpdateWithoutBookauthorInput = {
    title?: StringFieldUpdateOperationsInput | string
    amountofpages?: IntFieldUpdateOperationsInput | number
    cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    publisheryear?: IntFieldUpdateOperationsInput | number
    publication?: StringFieldUpdateOperationsInput | string
    copiesavailable?: IntFieldUpdateOperationsInput | number
    createdat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inStock?: BoolFieldUpdateOperationsInput | boolean
    bookgenre?: bookgenreUpdateManyWithoutBookNestedInput
    bookpublisher?: bookpublisherUpdateManyWithoutBookNestedInput
    loan?: loanUpdateManyWithoutBookNestedInput
    Review?: ReviewUpdateManyWithoutBookNestedInput
  }

  export type bookUncheckedUpdateWithoutBookauthorInput = {
    book_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    amountofpages?: IntFieldUpdateOperationsInput | number
    cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    publisheryear?: IntFieldUpdateOperationsInput | number
    publication?: StringFieldUpdateOperationsInput | string
    copiesavailable?: IntFieldUpdateOperationsInput | number
    createdat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inStock?: BoolFieldUpdateOperationsInput | boolean
    bookgenre?: bookgenreUncheckedUpdateManyWithoutBookNestedInput
    bookpublisher?: bookpublisherUncheckedUpdateManyWithoutBookNestedInput
    loan?: loanUncheckedUpdateManyWithoutBookNestedInput
    Review?: ReviewUncheckedUpdateManyWithoutBookNestedInput
  }

  export type bookCreateWithoutBookgenreInput = {
    title: string
    amountofpages: number
    cost: Decimal | DecimalJsLike | number | string
    publisheryear: number
    publication: string
    copiesavailable?: number
    createdat?: Date | string | null
    updatedat?: Date | string | null
    inStock?: boolean
    bookauthor?: bookauthorCreateNestedManyWithoutBookInput
    bookpublisher?: bookpublisherCreateNestedManyWithoutBookInput
    loan?: loanCreateNestedManyWithoutBookInput
    Review?: ReviewCreateNestedManyWithoutBookInput
  }

  export type bookUncheckedCreateWithoutBookgenreInput = {
    book_id?: number
    title: string
    amountofpages: number
    cost: Decimal | DecimalJsLike | number | string
    publisheryear: number
    publication: string
    copiesavailable?: number
    createdat?: Date | string | null
    updatedat?: Date | string | null
    inStock?: boolean
    bookauthor?: bookauthorUncheckedCreateNestedManyWithoutBookInput
    bookpublisher?: bookpublisherUncheckedCreateNestedManyWithoutBookInput
    loan?: loanUncheckedCreateNestedManyWithoutBookInput
    Review?: ReviewUncheckedCreateNestedManyWithoutBookInput
  }

  export type bookCreateOrConnectWithoutBookgenreInput = {
    where: bookWhereUniqueInput
    create: XOR<bookCreateWithoutBookgenreInput, bookUncheckedCreateWithoutBookgenreInput>
  }

  export type genreCreateWithoutBookgenreInput = {
    title: string
    createdat?: Date | string | null
    updatedat?: Date | string | null
  }

  export type genreUncheckedCreateWithoutBookgenreInput = {
    genre_id?: number
    title: string
    createdat?: Date | string | null
    updatedat?: Date | string | null
  }

  export type genreCreateOrConnectWithoutBookgenreInput = {
    where: genreWhereUniqueInput
    create: XOR<genreCreateWithoutBookgenreInput, genreUncheckedCreateWithoutBookgenreInput>
  }

  export type bookUpsertWithoutBookgenreInput = {
    update: XOR<bookUpdateWithoutBookgenreInput, bookUncheckedUpdateWithoutBookgenreInput>
    create: XOR<bookCreateWithoutBookgenreInput, bookUncheckedCreateWithoutBookgenreInput>
    where?: bookWhereInput
  }

  export type bookUpdateToOneWithWhereWithoutBookgenreInput = {
    where?: bookWhereInput
    data: XOR<bookUpdateWithoutBookgenreInput, bookUncheckedUpdateWithoutBookgenreInput>
  }

  export type bookUpdateWithoutBookgenreInput = {
    title?: StringFieldUpdateOperationsInput | string
    amountofpages?: IntFieldUpdateOperationsInput | number
    cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    publisheryear?: IntFieldUpdateOperationsInput | number
    publication?: StringFieldUpdateOperationsInput | string
    copiesavailable?: IntFieldUpdateOperationsInput | number
    createdat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inStock?: BoolFieldUpdateOperationsInput | boolean
    bookauthor?: bookauthorUpdateManyWithoutBookNestedInput
    bookpublisher?: bookpublisherUpdateManyWithoutBookNestedInput
    loan?: loanUpdateManyWithoutBookNestedInput
    Review?: ReviewUpdateManyWithoutBookNestedInput
  }

  export type bookUncheckedUpdateWithoutBookgenreInput = {
    book_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    amountofpages?: IntFieldUpdateOperationsInput | number
    cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    publisheryear?: IntFieldUpdateOperationsInput | number
    publication?: StringFieldUpdateOperationsInput | string
    copiesavailable?: IntFieldUpdateOperationsInput | number
    createdat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inStock?: BoolFieldUpdateOperationsInput | boolean
    bookauthor?: bookauthorUncheckedUpdateManyWithoutBookNestedInput
    bookpublisher?: bookpublisherUncheckedUpdateManyWithoutBookNestedInput
    loan?: loanUncheckedUpdateManyWithoutBookNestedInput
    Review?: ReviewUncheckedUpdateManyWithoutBookNestedInput
  }

  export type genreUpsertWithoutBookgenreInput = {
    update: XOR<genreUpdateWithoutBookgenreInput, genreUncheckedUpdateWithoutBookgenreInput>
    create: XOR<genreCreateWithoutBookgenreInput, genreUncheckedCreateWithoutBookgenreInput>
    where?: genreWhereInput
  }

  export type genreUpdateToOneWithWhereWithoutBookgenreInput = {
    where?: genreWhereInput
    data: XOR<genreUpdateWithoutBookgenreInput, genreUncheckedUpdateWithoutBookgenreInput>
  }

  export type genreUpdateWithoutBookgenreInput = {
    title?: StringFieldUpdateOperationsInput | string
    createdat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type genreUncheckedUpdateWithoutBookgenreInput = {
    genre_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    createdat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type bookCreateWithoutBookpublisherInput = {
    title: string
    amountofpages: number
    cost: Decimal | DecimalJsLike | number | string
    publisheryear: number
    publication: string
    copiesavailable?: number
    createdat?: Date | string | null
    updatedat?: Date | string | null
    inStock?: boolean
    bookauthor?: bookauthorCreateNestedManyWithoutBookInput
    bookgenre?: bookgenreCreateNestedManyWithoutBookInput
    loan?: loanCreateNestedManyWithoutBookInput
    Review?: ReviewCreateNestedManyWithoutBookInput
  }

  export type bookUncheckedCreateWithoutBookpublisherInput = {
    book_id?: number
    title: string
    amountofpages: number
    cost: Decimal | DecimalJsLike | number | string
    publisheryear: number
    publication: string
    copiesavailable?: number
    createdat?: Date | string | null
    updatedat?: Date | string | null
    inStock?: boolean
    bookauthor?: bookauthorUncheckedCreateNestedManyWithoutBookInput
    bookgenre?: bookgenreUncheckedCreateNestedManyWithoutBookInput
    loan?: loanUncheckedCreateNestedManyWithoutBookInput
    Review?: ReviewUncheckedCreateNestedManyWithoutBookInput
  }

  export type bookCreateOrConnectWithoutBookpublisherInput = {
    where: bookWhereUniqueInput
    create: XOR<bookCreateWithoutBookpublisherInput, bookUncheckedCreateWithoutBookpublisherInput>
  }

  export type publicationCreateWithoutBookpublisherInput = {
    title: string
    dateofestablishment: Date | string
    createdat?: Date | string
    updatedat?: Date | string
  }

  export type publicationUncheckedCreateWithoutBookpublisherInput = {
    publication_id?: number
    title: string
    dateofestablishment: Date | string
    createdat?: Date | string
    updatedat?: Date | string
  }

  export type publicationCreateOrConnectWithoutBookpublisherInput = {
    where: publicationWhereUniqueInput
    create: XOR<publicationCreateWithoutBookpublisherInput, publicationUncheckedCreateWithoutBookpublisherInput>
  }

  export type bookUpsertWithoutBookpublisherInput = {
    update: XOR<bookUpdateWithoutBookpublisherInput, bookUncheckedUpdateWithoutBookpublisherInput>
    create: XOR<bookCreateWithoutBookpublisherInput, bookUncheckedCreateWithoutBookpublisherInput>
    where?: bookWhereInput
  }

  export type bookUpdateToOneWithWhereWithoutBookpublisherInput = {
    where?: bookWhereInput
    data: XOR<bookUpdateWithoutBookpublisherInput, bookUncheckedUpdateWithoutBookpublisherInput>
  }

  export type bookUpdateWithoutBookpublisherInput = {
    title?: StringFieldUpdateOperationsInput | string
    amountofpages?: IntFieldUpdateOperationsInput | number
    cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    publisheryear?: IntFieldUpdateOperationsInput | number
    publication?: StringFieldUpdateOperationsInput | string
    copiesavailable?: IntFieldUpdateOperationsInput | number
    createdat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inStock?: BoolFieldUpdateOperationsInput | boolean
    bookauthor?: bookauthorUpdateManyWithoutBookNestedInput
    bookgenre?: bookgenreUpdateManyWithoutBookNestedInput
    loan?: loanUpdateManyWithoutBookNestedInput
    Review?: ReviewUpdateManyWithoutBookNestedInput
  }

  export type bookUncheckedUpdateWithoutBookpublisherInput = {
    book_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    amountofpages?: IntFieldUpdateOperationsInput | number
    cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    publisheryear?: IntFieldUpdateOperationsInput | number
    publication?: StringFieldUpdateOperationsInput | string
    copiesavailable?: IntFieldUpdateOperationsInput | number
    createdat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inStock?: BoolFieldUpdateOperationsInput | boolean
    bookauthor?: bookauthorUncheckedUpdateManyWithoutBookNestedInput
    bookgenre?: bookgenreUncheckedUpdateManyWithoutBookNestedInput
    loan?: loanUncheckedUpdateManyWithoutBookNestedInput
    Review?: ReviewUncheckedUpdateManyWithoutBookNestedInput
  }

  export type publicationUpsertWithoutBookpublisherInput = {
    update: XOR<publicationUpdateWithoutBookpublisherInput, publicationUncheckedUpdateWithoutBookpublisherInput>
    create: XOR<publicationCreateWithoutBookpublisherInput, publicationUncheckedCreateWithoutBookpublisherInput>
    where?: publicationWhereInput
  }

  export type publicationUpdateToOneWithWhereWithoutBookpublisherInput = {
    where?: publicationWhereInput
    data: XOR<publicationUpdateWithoutBookpublisherInput, publicationUncheckedUpdateWithoutBookpublisherInput>
  }

  export type publicationUpdateWithoutBookpublisherInput = {
    title?: StringFieldUpdateOperationsInput | string
    dateofestablishment?: DateTimeFieldUpdateOperationsInput | Date | string
    createdat?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedat?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type publicationUncheckedUpdateWithoutBookpublisherInput = {
    publication_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    dateofestablishment?: DateTimeFieldUpdateOperationsInput | Date | string
    createdat?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedat?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type authorCreateWithoutPersonInput = {
    firstname: string
    secondname: string
    dateofbirth: Date | string
    dateofdeath?: Date | string | null
    createdat?: Date | string | null
    updatedat?: Date | string | null
    bookauthor?: bookauthorCreateNestedManyWithoutAuthorInput
  }

  export type authorUncheckedCreateWithoutPersonInput = {
    author_id?: number
    firstname: string
    secondname: string
    dateofbirth: Date | string
    dateofdeath?: Date | string | null
    createdat?: Date | string | null
    updatedat?: Date | string | null
    bookauthor?: bookauthorUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type authorCreateOrConnectWithoutPersonInput = {
    where: authorWhereUniqueInput
    create: XOR<authorCreateWithoutPersonInput, authorUncheckedCreateWithoutPersonInput>
  }

  export type authorCreateManyPersonInputEnvelope = {
    data: authorCreateManyPersonInput | authorCreateManyPersonInput[]
    skipDuplicates?: boolean
  }

  export type memberCreateWithoutPersonInput = {
    membershipdate?: Date | string
    createdat?: Date | string | null
    updatedat?: Date | string | null
    fine?: fineCreateNestedManyWithoutMemberInput
    loan?: loanCreateNestedManyWithoutMemberInput
  }

  export type memberUncheckedCreateWithoutPersonInput = {
    member_id?: number
    membershipdate?: Date | string
    createdat?: Date | string | null
    updatedat?: Date | string | null
    fine?: fineUncheckedCreateNestedManyWithoutMemberInput
    loan?: loanUncheckedCreateNestedManyWithoutMemberInput
  }

  export type memberCreateOrConnectWithoutPersonInput = {
    where: memberWhereUniqueInput
    create: XOR<memberCreateWithoutPersonInput, memberUncheckedCreateWithoutPersonInput>
  }

  export type memberCreateManyPersonInputEnvelope = {
    data: memberCreateManyPersonInput | memberCreateManyPersonInput[]
    skipDuplicates?: boolean
  }

  export type staffCreateWithoutPersonInput = {
    position: string
    education: string
    createdat?: Date | string | null
    updatedat?: Date | string | null
    loan?: loanCreateNestedManyWithoutStaffInput
  }

  export type staffUncheckedCreateWithoutPersonInput = {
    staff_id?: number
    position: string
    education: string
    createdat?: Date | string | null
    updatedat?: Date | string | null
    loan?: loanUncheckedCreateNestedManyWithoutStaffInput
  }

  export type staffCreateOrConnectWithoutPersonInput = {
    where: staffWhereUniqueInput
    create: XOR<staffCreateWithoutPersonInput, staffUncheckedCreateWithoutPersonInput>
  }

  export type staffCreateManyPersonInputEnvelope = {
    data: staffCreateManyPersonInput | staffCreateManyPersonInput[]
    skipDuplicates?: boolean
  }

  export type authorUpsertWithWhereUniqueWithoutPersonInput = {
    where: authorWhereUniqueInput
    update: XOR<authorUpdateWithoutPersonInput, authorUncheckedUpdateWithoutPersonInput>
    create: XOR<authorCreateWithoutPersonInput, authorUncheckedCreateWithoutPersonInput>
  }

  export type authorUpdateWithWhereUniqueWithoutPersonInput = {
    where: authorWhereUniqueInput
    data: XOR<authorUpdateWithoutPersonInput, authorUncheckedUpdateWithoutPersonInput>
  }

  export type authorUpdateManyWithWhereWithoutPersonInput = {
    where: authorScalarWhereInput
    data: XOR<authorUpdateManyMutationInput, authorUncheckedUpdateManyWithoutPersonInput>
  }

  export type authorScalarWhereInput = {
    AND?: authorScalarWhereInput | authorScalarWhereInput[]
    OR?: authorScalarWhereInput[]
    NOT?: authorScalarWhereInput | authorScalarWhereInput[]
    author_id?: IntFilter<"author"> | number
    firstname?: StringFilter<"author"> | string
    secondname?: StringFilter<"author"> | string
    dateofbirth?: DateTimeFilter<"author"> | Date | string
    dateofdeath?: DateTimeNullableFilter<"author"> | Date | string | null
    createdat?: DateTimeNullableFilter<"author"> | Date | string | null
    updatedat?: DateTimeNullableFilter<"author"> | Date | string | null
    person_id?: IntNullableFilter<"author"> | number | null
  }

  export type memberUpsertWithWhereUniqueWithoutPersonInput = {
    where: memberWhereUniqueInput
    update: XOR<memberUpdateWithoutPersonInput, memberUncheckedUpdateWithoutPersonInput>
    create: XOR<memberCreateWithoutPersonInput, memberUncheckedCreateWithoutPersonInput>
  }

  export type memberUpdateWithWhereUniqueWithoutPersonInput = {
    where: memberWhereUniqueInput
    data: XOR<memberUpdateWithoutPersonInput, memberUncheckedUpdateWithoutPersonInput>
  }

  export type memberUpdateManyWithWhereWithoutPersonInput = {
    where: memberScalarWhereInput
    data: XOR<memberUpdateManyMutationInput, memberUncheckedUpdateManyWithoutPersonInput>
  }

  export type memberScalarWhereInput = {
    AND?: memberScalarWhereInput | memberScalarWhereInput[]
    OR?: memberScalarWhereInput[]
    NOT?: memberScalarWhereInput | memberScalarWhereInput[]
    member_id?: IntFilter<"member"> | number
    membershipdate?: DateTimeFilter<"member"> | Date | string
    createdat?: DateTimeNullableFilter<"member"> | Date | string | null
    updatedat?: DateTimeNullableFilter<"member"> | Date | string | null
    person_id?: IntFilter<"member"> | number
  }

  export type staffUpsertWithWhereUniqueWithoutPersonInput = {
    where: staffWhereUniqueInput
    update: XOR<staffUpdateWithoutPersonInput, staffUncheckedUpdateWithoutPersonInput>
    create: XOR<staffCreateWithoutPersonInput, staffUncheckedCreateWithoutPersonInput>
  }

  export type staffUpdateWithWhereUniqueWithoutPersonInput = {
    where: staffWhereUniqueInput
    data: XOR<staffUpdateWithoutPersonInput, staffUncheckedUpdateWithoutPersonInput>
  }

  export type staffUpdateManyWithWhereWithoutPersonInput = {
    where: staffScalarWhereInput
    data: XOR<staffUpdateManyMutationInput, staffUncheckedUpdateManyWithoutPersonInput>
  }

  export type staffScalarWhereInput = {
    AND?: staffScalarWhereInput | staffScalarWhereInput[]
    OR?: staffScalarWhereInput[]
    NOT?: staffScalarWhereInput | staffScalarWhereInput[]
    staff_id?: IntFilter<"staff"> | number
    position?: StringFilter<"staff"> | string
    education?: StringFilter<"staff"> | string
    createdat?: DateTimeNullableFilter<"staff"> | Date | string | null
    updatedat?: DateTimeNullableFilter<"staff"> | Date | string | null
    person_id?: IntFilter<"staff"> | number
  }

  export type bookpublisherCreateWithoutPublicationInput = {
    dayofarrivaltolibrary: Date | string
    createdat?: Date | string
    updatedat?: Date | string
    book: bookCreateNestedOneWithoutBookpublisherInput
  }

  export type bookpublisherUncheckedCreateWithoutPublicationInput = {
    bookpublisher_id?: number
    book_id: number
    dayofarrivaltolibrary: Date | string
    createdat?: Date | string
    updatedat?: Date | string
  }

  export type bookpublisherCreateOrConnectWithoutPublicationInput = {
    where: bookpublisherWhereUniqueInput
    create: XOR<bookpublisherCreateWithoutPublicationInput, bookpublisherUncheckedCreateWithoutPublicationInput>
  }

  export type bookpublisherCreateManyPublicationInputEnvelope = {
    data: bookpublisherCreateManyPublicationInput | bookpublisherCreateManyPublicationInput[]
    skipDuplicates?: boolean
  }

  export type bookpublisherUpsertWithWhereUniqueWithoutPublicationInput = {
    where: bookpublisherWhereUniqueInput
    update: XOR<bookpublisherUpdateWithoutPublicationInput, bookpublisherUncheckedUpdateWithoutPublicationInput>
    create: XOR<bookpublisherCreateWithoutPublicationInput, bookpublisherUncheckedCreateWithoutPublicationInput>
  }

  export type bookpublisherUpdateWithWhereUniqueWithoutPublicationInput = {
    where: bookpublisherWhereUniqueInput
    data: XOR<bookpublisherUpdateWithoutPublicationInput, bookpublisherUncheckedUpdateWithoutPublicationInput>
  }

  export type bookpublisherUpdateManyWithWhereWithoutPublicationInput = {
    where: bookpublisherScalarWhereInput
    data: XOR<bookpublisherUpdateManyMutationInput, bookpublisherUncheckedUpdateManyWithoutPublicationInput>
  }

  export type bookCreateWithoutReviewInput = {
    title: string
    amountofpages: number
    cost: Decimal | DecimalJsLike | number | string
    publisheryear: number
    publication: string
    copiesavailable?: number
    createdat?: Date | string | null
    updatedat?: Date | string | null
    inStock?: boolean
    bookauthor?: bookauthorCreateNestedManyWithoutBookInput
    bookgenre?: bookgenreCreateNestedManyWithoutBookInput
    bookpublisher?: bookpublisherCreateNestedManyWithoutBookInput
    loan?: loanCreateNestedManyWithoutBookInput
  }

  export type bookUncheckedCreateWithoutReviewInput = {
    book_id?: number
    title: string
    amountofpages: number
    cost: Decimal | DecimalJsLike | number | string
    publisheryear: number
    publication: string
    copiesavailable?: number
    createdat?: Date | string | null
    updatedat?: Date | string | null
    inStock?: boolean
    bookauthor?: bookauthorUncheckedCreateNestedManyWithoutBookInput
    bookgenre?: bookgenreUncheckedCreateNestedManyWithoutBookInput
    bookpublisher?: bookpublisherUncheckedCreateNestedManyWithoutBookInput
    loan?: loanUncheckedCreateNestedManyWithoutBookInput
  }

  export type bookCreateOrConnectWithoutReviewInput = {
    where: bookWhereUniqueInput
    create: XOR<bookCreateWithoutReviewInput, bookUncheckedCreateWithoutReviewInput>
  }

  export type bookUpsertWithoutReviewInput = {
    update: XOR<bookUpdateWithoutReviewInput, bookUncheckedUpdateWithoutReviewInput>
    create: XOR<bookCreateWithoutReviewInput, bookUncheckedCreateWithoutReviewInput>
    where?: bookWhereInput
  }

  export type bookUpdateToOneWithWhereWithoutReviewInput = {
    where?: bookWhereInput
    data: XOR<bookUpdateWithoutReviewInput, bookUncheckedUpdateWithoutReviewInput>
  }

  export type bookUpdateWithoutReviewInput = {
    title?: StringFieldUpdateOperationsInput | string
    amountofpages?: IntFieldUpdateOperationsInput | number
    cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    publisheryear?: IntFieldUpdateOperationsInput | number
    publication?: StringFieldUpdateOperationsInput | string
    copiesavailable?: IntFieldUpdateOperationsInput | number
    createdat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inStock?: BoolFieldUpdateOperationsInput | boolean
    bookauthor?: bookauthorUpdateManyWithoutBookNestedInput
    bookgenre?: bookgenreUpdateManyWithoutBookNestedInput
    bookpublisher?: bookpublisherUpdateManyWithoutBookNestedInput
    loan?: loanUpdateManyWithoutBookNestedInput
  }

  export type bookUncheckedUpdateWithoutReviewInput = {
    book_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    amountofpages?: IntFieldUpdateOperationsInput | number
    cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    publisheryear?: IntFieldUpdateOperationsInput | number
    publication?: StringFieldUpdateOperationsInput | string
    copiesavailable?: IntFieldUpdateOperationsInput | number
    createdat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inStock?: BoolFieldUpdateOperationsInput | boolean
    bookauthor?: bookauthorUncheckedUpdateManyWithoutBookNestedInput
    bookgenre?: bookgenreUncheckedUpdateManyWithoutBookNestedInput
    bookpublisher?: bookpublisherUncheckedUpdateManyWithoutBookNestedInput
    loan?: loanUncheckedUpdateManyWithoutBookNestedInput
  }

  export type bookauthorCreateManyAuthorInput = {
    bookauthor_id?: number
    book_id: number
    createdat?: Date | string
    updatedat?: Date | string
  }

  export type bookauthorUpdateWithoutAuthorInput = {
    createdat?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedat?: DateTimeFieldUpdateOperationsInput | Date | string
    book?: bookUpdateOneRequiredWithoutBookauthorNestedInput
  }

  export type bookauthorUncheckedUpdateWithoutAuthorInput = {
    bookauthor_id?: IntFieldUpdateOperationsInput | number
    book_id?: IntFieldUpdateOperationsInput | number
    createdat?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedat?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type bookauthorUncheckedUpdateManyWithoutAuthorInput = {
    bookauthor_id?: IntFieldUpdateOperationsInput | number
    book_id?: IntFieldUpdateOperationsInput | number
    createdat?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedat?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type bookauthorCreateManyBookInput = {
    bookauthor_id?: number
    author_id: number
    createdat?: Date | string
    updatedat?: Date | string
  }

  export type bookgenreCreateManyBookInput = {
    bookgenre_id?: number
    genre_id: number
    createdat?: Date | string
    updatedat?: Date | string
  }

  export type bookpublisherCreateManyBookInput = {
    bookpublisher_id?: number
    publisher_id: number
    dayofarrivaltolibrary: Date | string
    createdat?: Date | string
    updatedat?: Date | string
  }

  export type loanCreateManyBookInput = {
    loan_id?: number
    member_id: number
    staff_id: number
    loandate?: Date | string
    duedate: Date | string
    returndate?: Date | string | null
  }

  export type ReviewCreateManyBookInput = {
    id?: number
    rating: number
    comment?: string | null
  }

  export type bookauthorUpdateWithoutBookInput = {
    createdat?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedat?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: authorUpdateOneRequiredWithoutBookauthorNestedInput
  }

  export type bookauthorUncheckedUpdateWithoutBookInput = {
    bookauthor_id?: IntFieldUpdateOperationsInput | number
    author_id?: IntFieldUpdateOperationsInput | number
    createdat?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedat?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type bookauthorUncheckedUpdateManyWithoutBookInput = {
    bookauthor_id?: IntFieldUpdateOperationsInput | number
    author_id?: IntFieldUpdateOperationsInput | number
    createdat?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedat?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type bookgenreUpdateWithoutBookInput = {
    createdat?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedat?: DateTimeFieldUpdateOperationsInput | Date | string
    genre?: genreUpdateOneRequiredWithoutBookgenreNestedInput
  }

  export type bookgenreUncheckedUpdateWithoutBookInput = {
    bookgenre_id?: IntFieldUpdateOperationsInput | number
    genre_id?: IntFieldUpdateOperationsInput | number
    createdat?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedat?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type bookgenreUncheckedUpdateManyWithoutBookInput = {
    bookgenre_id?: IntFieldUpdateOperationsInput | number
    genre_id?: IntFieldUpdateOperationsInput | number
    createdat?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedat?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type bookpublisherUpdateWithoutBookInput = {
    dayofarrivaltolibrary?: DateTimeFieldUpdateOperationsInput | Date | string
    createdat?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedat?: DateTimeFieldUpdateOperationsInput | Date | string
    publication?: publicationUpdateOneRequiredWithoutBookpublisherNestedInput
  }

  export type bookpublisherUncheckedUpdateWithoutBookInput = {
    bookpublisher_id?: IntFieldUpdateOperationsInput | number
    publisher_id?: IntFieldUpdateOperationsInput | number
    dayofarrivaltolibrary?: DateTimeFieldUpdateOperationsInput | Date | string
    createdat?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedat?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type bookpublisherUncheckedUpdateManyWithoutBookInput = {
    bookpublisher_id?: IntFieldUpdateOperationsInput | number
    publisher_id?: IntFieldUpdateOperationsInput | number
    dayofarrivaltolibrary?: DateTimeFieldUpdateOperationsInput | Date | string
    createdat?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedat?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type loanUpdateWithoutBookInput = {
    loandate?: DateTimeFieldUpdateOperationsInput | Date | string
    duedate?: DateTimeFieldUpdateOperationsInput | Date | string
    returndate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fine?: fineUpdateManyWithoutLoanNestedInput
    member?: memberUpdateOneRequiredWithoutLoanNestedInput
    staff?: staffUpdateOneRequiredWithoutLoanNestedInput
  }

  export type loanUncheckedUpdateWithoutBookInput = {
    loan_id?: IntFieldUpdateOperationsInput | number
    member_id?: IntFieldUpdateOperationsInput | number
    staff_id?: IntFieldUpdateOperationsInput | number
    loandate?: DateTimeFieldUpdateOperationsInput | Date | string
    duedate?: DateTimeFieldUpdateOperationsInput | Date | string
    returndate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fine?: fineUncheckedUpdateManyWithoutLoanNestedInput
  }

  export type loanUncheckedUpdateManyWithoutBookInput = {
    loan_id?: IntFieldUpdateOperationsInput | number
    member_id?: IntFieldUpdateOperationsInput | number
    staff_id?: IntFieldUpdateOperationsInput | number
    loandate?: DateTimeFieldUpdateOperationsInput | Date | string
    duedate?: DateTimeFieldUpdateOperationsInput | Date | string
    returndate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReviewUpdateWithoutBookInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReviewUncheckedUpdateWithoutBookInput = {
    id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReviewUncheckedUpdateManyWithoutBookInput = {
    id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type bookgenreCreateManyGenreInput = {
    bookgenre_id?: number
    book_id: number
    createdat?: Date | string
    updatedat?: Date | string
  }

  export type bookgenreUpdateWithoutGenreInput = {
    createdat?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedat?: DateTimeFieldUpdateOperationsInput | Date | string
    book?: bookUpdateOneRequiredWithoutBookgenreNestedInput
  }

  export type bookgenreUncheckedUpdateWithoutGenreInput = {
    bookgenre_id?: IntFieldUpdateOperationsInput | number
    book_id?: IntFieldUpdateOperationsInput | number
    createdat?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedat?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type bookgenreUncheckedUpdateManyWithoutGenreInput = {
    bookgenre_id?: IntFieldUpdateOperationsInput | number
    book_id?: IntFieldUpdateOperationsInput | number
    createdat?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedat?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type fineCreateManyLoanInput = {
    fine_id?: number
    date?: Date | string
    amount: Decimal | DecimalJsLike | number | string
    member_id: number
    createdat?: Date | string | null
    updatedat?: Date | string | null
  }

  export type fineUpdateWithoutLoanInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    member?: memberUpdateOneRequiredWithoutFineNestedInput
  }

  export type fineUncheckedUpdateWithoutLoanInput = {
    fine_id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    member_id?: IntFieldUpdateOperationsInput | number
    createdat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type fineUncheckedUpdateManyWithoutLoanInput = {
    fine_id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    member_id?: IntFieldUpdateOperationsInput | number
    createdat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type fineCreateManyMemberInput = {
    fine_id?: number
    date?: Date | string
    amount: Decimal | DecimalJsLike | number | string
    loan_id: number
    createdat?: Date | string | null
    updatedat?: Date | string | null
  }

  export type loanCreateManyMemberInput = {
    loan_id?: number
    book_id: number
    staff_id: number
    loandate?: Date | string
    duedate: Date | string
    returndate?: Date | string | null
  }

  export type fineUpdateWithoutMemberInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    loan?: loanUpdateOneRequiredWithoutFineNestedInput
  }

  export type fineUncheckedUpdateWithoutMemberInput = {
    fine_id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    loan_id?: IntFieldUpdateOperationsInput | number
    createdat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type fineUncheckedUpdateManyWithoutMemberInput = {
    fine_id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    loan_id?: IntFieldUpdateOperationsInput | number
    createdat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type loanUpdateWithoutMemberInput = {
    loandate?: DateTimeFieldUpdateOperationsInput | Date | string
    duedate?: DateTimeFieldUpdateOperationsInput | Date | string
    returndate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fine?: fineUpdateManyWithoutLoanNestedInput
    book?: bookUpdateOneRequiredWithoutLoanNestedInput
    staff?: staffUpdateOneRequiredWithoutLoanNestedInput
  }

  export type loanUncheckedUpdateWithoutMemberInput = {
    loan_id?: IntFieldUpdateOperationsInput | number
    book_id?: IntFieldUpdateOperationsInput | number
    staff_id?: IntFieldUpdateOperationsInput | number
    loandate?: DateTimeFieldUpdateOperationsInput | Date | string
    duedate?: DateTimeFieldUpdateOperationsInput | Date | string
    returndate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fine?: fineUncheckedUpdateManyWithoutLoanNestedInput
  }

  export type loanUncheckedUpdateManyWithoutMemberInput = {
    loan_id?: IntFieldUpdateOperationsInput | number
    book_id?: IntFieldUpdateOperationsInput | number
    staff_id?: IntFieldUpdateOperationsInput | number
    loandate?: DateTimeFieldUpdateOperationsInput | Date | string
    duedate?: DateTimeFieldUpdateOperationsInput | Date | string
    returndate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type loanCreateManyStaffInput = {
    loan_id?: number
    book_id: number
    member_id: number
    loandate?: Date | string
    duedate: Date | string
    returndate?: Date | string | null
  }

  export type loanUpdateWithoutStaffInput = {
    loandate?: DateTimeFieldUpdateOperationsInput | Date | string
    duedate?: DateTimeFieldUpdateOperationsInput | Date | string
    returndate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fine?: fineUpdateManyWithoutLoanNestedInput
    book?: bookUpdateOneRequiredWithoutLoanNestedInput
    member?: memberUpdateOneRequiredWithoutLoanNestedInput
  }

  export type loanUncheckedUpdateWithoutStaffInput = {
    loan_id?: IntFieldUpdateOperationsInput | number
    book_id?: IntFieldUpdateOperationsInput | number
    member_id?: IntFieldUpdateOperationsInput | number
    loandate?: DateTimeFieldUpdateOperationsInput | Date | string
    duedate?: DateTimeFieldUpdateOperationsInput | Date | string
    returndate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fine?: fineUncheckedUpdateManyWithoutLoanNestedInput
  }

  export type loanUncheckedUpdateManyWithoutStaffInput = {
    loan_id?: IntFieldUpdateOperationsInput | number
    book_id?: IntFieldUpdateOperationsInput | number
    member_id?: IntFieldUpdateOperationsInput | number
    loandate?: DateTimeFieldUpdateOperationsInput | Date | string
    duedate?: DateTimeFieldUpdateOperationsInput | Date | string
    returndate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type authorCreateManyPersonInput = {
    author_id?: number
    firstname: string
    secondname: string
    dateofbirth: Date | string
    dateofdeath?: Date | string | null
    createdat?: Date | string | null
    updatedat?: Date | string | null
  }

  export type memberCreateManyPersonInput = {
    member_id?: number
    membershipdate?: Date | string
    createdat?: Date | string | null
    updatedat?: Date | string | null
  }

  export type staffCreateManyPersonInput = {
    staff_id?: number
    position: string
    education: string
    createdat?: Date | string | null
    updatedat?: Date | string | null
  }

  export type authorUpdateWithoutPersonInput = {
    firstname?: StringFieldUpdateOperationsInput | string
    secondname?: StringFieldUpdateOperationsInput | string
    dateofbirth?: DateTimeFieldUpdateOperationsInput | Date | string
    dateofdeath?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bookauthor?: bookauthorUpdateManyWithoutAuthorNestedInput
  }

  export type authorUncheckedUpdateWithoutPersonInput = {
    author_id?: IntFieldUpdateOperationsInput | number
    firstname?: StringFieldUpdateOperationsInput | string
    secondname?: StringFieldUpdateOperationsInput | string
    dateofbirth?: DateTimeFieldUpdateOperationsInput | Date | string
    dateofdeath?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bookauthor?: bookauthorUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type authorUncheckedUpdateManyWithoutPersonInput = {
    author_id?: IntFieldUpdateOperationsInput | number
    firstname?: StringFieldUpdateOperationsInput | string
    secondname?: StringFieldUpdateOperationsInput | string
    dateofbirth?: DateTimeFieldUpdateOperationsInput | Date | string
    dateofdeath?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type memberUpdateWithoutPersonInput = {
    membershipdate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fine?: fineUpdateManyWithoutMemberNestedInput
    loan?: loanUpdateManyWithoutMemberNestedInput
  }

  export type memberUncheckedUpdateWithoutPersonInput = {
    member_id?: IntFieldUpdateOperationsInput | number
    membershipdate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fine?: fineUncheckedUpdateManyWithoutMemberNestedInput
    loan?: loanUncheckedUpdateManyWithoutMemberNestedInput
  }

  export type memberUncheckedUpdateManyWithoutPersonInput = {
    member_id?: IntFieldUpdateOperationsInput | number
    membershipdate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type staffUpdateWithoutPersonInput = {
    position?: StringFieldUpdateOperationsInput | string
    education?: StringFieldUpdateOperationsInput | string
    createdat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    loan?: loanUpdateManyWithoutStaffNestedInput
  }

  export type staffUncheckedUpdateWithoutPersonInput = {
    staff_id?: IntFieldUpdateOperationsInput | number
    position?: StringFieldUpdateOperationsInput | string
    education?: StringFieldUpdateOperationsInput | string
    createdat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    loan?: loanUncheckedUpdateManyWithoutStaffNestedInput
  }

  export type staffUncheckedUpdateManyWithoutPersonInput = {
    staff_id?: IntFieldUpdateOperationsInput | number
    position?: StringFieldUpdateOperationsInput | string
    education?: StringFieldUpdateOperationsInput | string
    createdat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type bookpublisherCreateManyPublicationInput = {
    bookpublisher_id?: number
    book_id: number
    dayofarrivaltolibrary: Date | string
    createdat?: Date | string
    updatedat?: Date | string
  }

  export type bookpublisherUpdateWithoutPublicationInput = {
    dayofarrivaltolibrary?: DateTimeFieldUpdateOperationsInput | Date | string
    createdat?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedat?: DateTimeFieldUpdateOperationsInput | Date | string
    book?: bookUpdateOneRequiredWithoutBookpublisherNestedInput
  }

  export type bookpublisherUncheckedUpdateWithoutPublicationInput = {
    bookpublisher_id?: IntFieldUpdateOperationsInput | number
    book_id?: IntFieldUpdateOperationsInput | number
    dayofarrivaltolibrary?: DateTimeFieldUpdateOperationsInput | Date | string
    createdat?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedat?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type bookpublisherUncheckedUpdateManyWithoutPublicationInput = {
    bookpublisher_id?: IntFieldUpdateOperationsInput | number
    book_id?: IntFieldUpdateOperationsInput | number
    dayofarrivaltolibrary?: DateTimeFieldUpdateOperationsInput | Date | string
    createdat?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedat?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}