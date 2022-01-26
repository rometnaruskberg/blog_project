import { 
    Entity, 
    PrimaryGeneratedColumn, 
    Column, 
    CreateDateColumn, 
    UpdateDateColumn, 
    BaseEntity,
    OneToMany
} from 'typeorm';
import Post from './Post';


@Entity()
export default class User extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @Column('varchar', { length: 150 })
    firstName: string;
    @Column('varchar', { length: 150, nullable: true })
    middleName: string;
    @Column('varchar', { length: 150 })
    lastName: string;
    @Column('varchar')
    mobile: string;
    @Column('varchar', { length: 320, unique: true })
    email: string;
    @Column({ default: () => 'CURRENT_TIMESTAMP' })
    lastLogin: Date;
    @Column('tinytext', { nullable: true })
    intro: string;
    @Column('text', { nullable: true })
    profile: string;
    @CreateDateColumn()
    createdAt: Date;
    @UpdateDateColumn()
    updatedAt: Date;

    @OneToMany(() => Post, (post) => post.author)
    posts: Post[];
//     Eager loating lisab teise tabeli andmed juurde alati p'ringuga
//     @OneToMany(() => Post, (post) => post.author, { eager: true})
//     posts: Post[];

//     Lazy loading lisab teisest tabelist andmed, kui seda on vaja
//     (nt salvestamise User.manager.save(post))
//     @OneToMany(() => Post, (post) => post.author)
//     posts: Promise<Post[]>;
};
